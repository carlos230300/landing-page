"use client";
import { useEffect, useState } from "react";

export function useUTM() {
  const [params, setParams] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utms = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
      ];

      utms.forEach((k) => {
        const v = urlParams.get(k);
        if (v) localStorage.setItem(k, v);
      });

      const qs = utms
        .map((k) => `${k}=${localStorage.getItem(k) || ""}`)
        .join("&");

      setParams(qs);
    }
  }, []);

  return params;
}
