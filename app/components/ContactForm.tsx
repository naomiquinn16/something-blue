"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!FORMSPREE_ENDPOINT) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-6 text-amber-800">
        <p className="font-medium">Form setup required</p>
        <p className="mt-2 text-sm">
          Add <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> to your{" "}
          <code className="rounded bg-amber-100 px-1">.env.local</code>. Create a free form at{" "}
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
            formspree.io
          </a>{" "}
          and set the recipient to naomiquinn16@gmail.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-stone-700">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Jane & John"
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="hello@example.com"
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <label htmlFor="wedding-date" className="mb-2 block text-sm font-medium text-stone-700">
          Wedding date <span className="text-stone-400">(optional)</span>
        </label>
        <input
          type="text"
          id="wedding-date"
          name="wedding_date"
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Summer 2025"
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-stone-700">
          Tell us about your vision
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-400 transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="We'd love to hear about your wedding, your style, and what you're dreaming of..."
          disabled={status === "submitting"}
        />
      </div>
      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-4 text-green-800">
          Thank you! Your message has been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-4 text-red-800">
          Something went wrong. Please try again or email us directly at naomiquinn16@gmail.com.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-[var(--accent)] px-6 py-4 font-medium text-white transition-colors hover:bg-[#7a6349] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
