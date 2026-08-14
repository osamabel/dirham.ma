"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/config";

type Status = "idle" | "submitting" | "success" | "error";

export function OfferForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        },
      );

      if (!response.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="animate-fade-in border-t border-line pt-8">
        <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
          Offer received.
        </p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          Thanks — I&apos;ll get back to you at the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-ink underline underline-offset-4 transition hover:text-signal"
        >
          Send another offer
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-5" noValidate>
      <input type="hidden" name="_subject" value={`Offer for ${site.domain}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full border-0 border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-stone focus:border-signal"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full border-0 border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-stone focus:border-signal"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Your offer (USD)
        </span>
        <input
          required
          name="offer"
          type="text"
          inputMode="decimal"
          className="w-full border-0 border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-stone focus:border-signal"
          placeholder="e.g. 2,000"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full resize-y border-0 border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition placeholder:text-stone focus:border-signal"
          placeholder="Tell me about your project or timeline (optional)"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-signal-deep">
          Something went wrong. Email me directly at{" "}
          <a
            href={`mailto:${site.email}?subject=Offer%20for%20${site.domain}`}
            className="underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center bg-ink px-8 text-sm font-semibold tracking-wide text-chalk transition hover:bg-signal disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Submit offer"}
      </button>
    </form>
  );
}
