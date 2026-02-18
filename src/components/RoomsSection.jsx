import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { RoomCard } from "./RoomCard";
import { SkeletonRoomCard } from "./SkeletonRoomCard";
import { StickySocial } from "./StickySocial";
import { Reveal } from "./Reveal";
import SectionHeader from "./SectionHeader";
 
export default function RoomsSection({
  rooms = [],
  isLoading = false,
  maxRooms = 3,
  viewAllHref = "/rooms#rooms",
  className = "",
}) {
  return (
    <section className={`bg-muted/20 py-28 ${className}`} id="rooms">
      <StickySocial />
      <div className="container-custom">

        <SectionHeader
          eyebrow="Rooms & Suites"
          title="Stay With a View"
          subtitle="Every room is designed to frame the mountains and deliver restful comfort."
        />

        {/* grid */}
        {isLoading ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: maxRooms }).map((_, i) => (
              <SkeletonRoomCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rooms.slice(0, maxRooms).map((room, idx) => (
              <Reveal key={room.id} delay={120 + idx * 120}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href={viewAllHref}
            className="font-ui inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary shadow-lg transition hover:scale-105"
          >
            View All Rooms
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
