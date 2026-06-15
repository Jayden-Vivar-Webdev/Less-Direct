import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <img className="h-full w-auto object-contain" src="/icon.png" alt="Less Direct logo" />
    </div>
  );
}
