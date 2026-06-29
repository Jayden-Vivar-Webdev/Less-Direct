"use client";

import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit";

function ensureScript(onReady: () => void) {
  if (typeof window === "undefined") return;

  if (window.turnstile) {
    onReady();
    return;
  }

  // Register the global onload callback Cloudflare invokes once ready.
  const previous = window.onloadTurnstileCallback;
  window.onloadTurnstileCallback = () => {
    previous?.();
    onReady();
  };

  if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}

type TurnstileProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
};

export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const render = useCallback(() => {
    if (!containerRef.current || !window.turnstile || !siteKey) return;
    if (widgetIdRef.current !== null) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "auto",
      size: "flexible",
      callback: (token: string) => onVerify(token),
      "expired-callback": () => onExpire?.(),
      "error-callback": () => onExpire?.(),
    });
  }, [onExpire, onVerify, siteKey]);

  useEffect(() => {
    if (!siteKey) return;
    ensureScript(render);

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [render, siteKey]);

  if (!siteKey) {
    return null;
  }

  return <div ref={containerRef} className="min-h-[65px]" />;
}
