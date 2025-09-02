"use client";

import { useEffect } from "react";

export default function SenderInit() {
  useEffect(() => {
    const accountId = process.env.NEXT_PUBLIC_SENDER_ACCOUNT_ID || "0f7b6a9bcf6561";
    const w = window as any;
    // If Sender script is loaded, re-initialize to render any forms added after load
    if (typeof w !== "undefined" && typeof w.sender === "function") {
      try {
        w.sender(accountId);
      } catch {
        // no-op
      }
    }
  }, []);

  return null;
}

