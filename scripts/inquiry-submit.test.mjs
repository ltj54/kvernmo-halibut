import assert from "node:assert/strict";
import test from "node:test";
import { contactDetails, inquiryEndpoint } from "../src/app/business-details.ts";
import { submitInquiry } from "../src/app/inquiry-submit.ts";

const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), { status });

for (const trip of ["Tur med skipper", "Leie uten mannskap"]) {
  test(`${trip}: sends to the same recipient and retains the visitor's reply address`, async () => {
    const payload = { name: "Test Åse & Co", email: "visitor@example.invalid", trip, message: "To døgn?\nMat & tur.", _replyto: "visitor@example.invalid" };
    const result = await submitInquiry(inquiryEndpoint, payload, async (url, options) => {
      assert.equal(url, `https://formsubmit.co/ajax/${contactDetails.email}`);
      assert.equal(options.method, "POST");
      assert.equal(options.credentials, "omit");
      assert.equal(options.headers.Accept, "application/json");
      assert.equal(options.headers["Content-Type"], "application/json");
      assert.deepEqual(JSON.parse(options.body), payload);
      assert.ok(options.signal instanceof AbortSignal);
      return jsonResponse({ success: "true", message: "The form was submitted successfully." });
    });
    assert.equal(result, "accepted");
  });
}

test("accepts a boolean success response", async () => {
  assert.equal(await submitInquiry(inquiryEndpoint, {}, async () => jsonResponse({ success: true })), "accepted");
});

test("an activation response is never reported as a completed submission", async () => {
  for (const success of [true, "true", false, "false"]) {
    const result = await submitInquiry(inquiryEndpoint, {}, async () => jsonResponse({ success, message: "This form needs Activation. We've sent you an email containing an 'Activate Form' link." }));
    assert.equal(result, "activation-required");
  }
});

test("a provider rejection is not treated as success", async () => {
  for (const success of [false, "false", undefined]) {
    await assert.rejects(submitInquiry(inquiryEndpoint, {}, async () => jsonResponse({ success })));
  }
});

test("HTTP failures, invalid responses and network errors are not treated as success", async () => {
  const failedTransports = [
    async () => jsonResponse({ success: true }, 429),
    async () => new Response('<html lang="en">Service unavailable</html>'),
    async () => jsonResponse(null),
    async () => { throw new TypeError("Network unavailable"); },
  ];
  for (const transport of failedTransports) {
    await assert.rejects(submitInquiry(inquiryEndpoint, {}, transport));
  }
});
