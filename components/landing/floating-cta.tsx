import { PhoneCall } from "lucide-react";

export function FloatingCta() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60] bottom-12 sm:bottom-7 sm:right-7">
      <a
        href="tel:+61424696960"
        aria-label="Call Less Direct"
        title="Call Less Direct"
        className="group pointer-events-auto relative flex size-15 items-center justify-center rounded-full border border-primary/45 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.98),hsl(var(--primary)/0.74)_55%,hsl(var(--primary)/0.45))] text-primary-foreground shadow-[0_10px_34px_hsl(var(--primary)/0.58),0_0_0_1px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.68),0_0_0_1px_hsl(var(--primary)/0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
      >
        <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full border border-primary/35 opacity-80 blur-[1px]" />
        <span className="pointer-events-none absolute inset-1 -z-20 animate-ping rounded-full bg-primary/35 [animation-duration:2.6s]" />
        <PhoneCall
          className="size-6 text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.75)] transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
