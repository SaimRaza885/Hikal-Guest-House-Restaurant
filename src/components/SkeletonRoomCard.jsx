export function SkeletonRoomCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-white shadow-lg">
      {/* Image skeleton */}
      <div className="relative h-64 overflow-hidden bg-muted animate-pulse" />

      {/* Content skeleton */}
      <div className="flex flex-grow flex-col gap-4 p-6">
        <div className="h-5 w-2/3 rounded-full bg-muted animate-pulse" />

        <div className="flex flex-wrap gap-4 border-y border-border py-3">
          <div className="h-4 w-24 rounded-full bg-muted animate-pulse" />
          <div className="h-4 w-20 rounded-full bg-muted animate-pulse" />
          <div className="h-4 w-28 rounded-full bg-muted animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-full rounded-full bg-muted animate-pulse" />
          <div className="h-3 w-11/12 rounded-full bg-muted animate-pulse" />
          <div className="h-3 w-4/5 rounded-full bg-muted animate-pulse" />
        </div>

        <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-10 rounded-xl bg-muted animate-pulse" />
          <div className="h-10 rounded-xl bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}

