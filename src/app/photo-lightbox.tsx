"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

type PhotoLightboxProps = Readonly<{
  src: string;
  alt: string;
  children: ReactNode;
}>;

export default function PhotoLightbox({ src, alt, children }: PhotoLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="photo-open"
        type="button"
        aria-label={`Vis større bilde: ${alt}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        {children}
      </button>
      <dialog className="photo-viewer" ref={dialogRef}>
        <button
          className="photo-viewer-close"
          type="button"
          aria-label="Lukk bilde"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <Image src={src} alt={alt} fill sizes="96vw" className="photo-viewer-image" />
      </dialog>
    </>
  );
}
