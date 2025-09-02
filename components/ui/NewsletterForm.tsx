"use client";

import React from "react";

type NewsletterFormProps = {
  action?: string;
};

export default function NewsletterForm({ action }: NewsletterFormProps) {
  const formAction = action || process.env.NEXT_PUBLIC_SENDER_FORM_ACTION || "";

  return (
    <form
      action={formAction}
      method="post"
      target="_blank"
      className="mx-auto flex w-full max-w-md items-center gap-3"
      onSubmit={(e) => {
        if (!formAction) {
          e.preventDefault();
          alert("Sender form action is not configured yet.");
        }
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="flex-1 rounded-md border px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="rounded-md bg-orange-600 px-4 py-2 font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Subscribe
      </button>
    </form>
  );
}

