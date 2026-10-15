export type InquiryPayload = Readonly<Record<string, string>>;
export type InquiryResult = "accepted" | "activation-required";

// FormSubmit documents cross-origin JSON submissions for static websites:
// https://formsubmit.co/documentation#ajax-forms
export async function submitInquiry(
  endpoint: string,
  payload: InquiryPayload,
  transport: typeof fetch = fetch,
): Promise<InquiryResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const response = await transport(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      credentials: "omit",
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Submission was not accepted");

    const result: unknown = await response.json();
    if (!result || typeof result !== "object") throw new Error("Invalid submission response");
    const { success, message } = result as { success?: unknown; message?: unknown };
    if (typeof message === "string" && /activat|verify.*email|confirm.*email/i.test(message)) {
      return "activation-required";
    }
    if (success !== true && success !== "true") throw new Error("Submission was not confirmed");
    return "accepted";
  } finally {
    clearTimeout(timeout);
  }
}
