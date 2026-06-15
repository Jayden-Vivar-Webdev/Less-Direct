import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img className="size-full object-cover" src="/icon.png" alt="" />
    </div>
  );
}
