import { Loader2 } from "lucide-react";

export function PageLoader({ label = "Loading" }) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">{label}...</p>
    </div>
  );
}