
import { RoomCard } from "../components/RoomCard";
import { SkeletonRoomCard } from "../components/SkeletonRoomCard";
import { Reveal } from "../components/Reveal";
import { useRooms } from "../hooks/useRooms";
import { useSeo } from "../hooks/useSeo";
import { PageLoader } from "../components/PageLoader";
import Banner from "../components/Banner";

export default function Rooms() {
  useSeo({
    title: "Rooms",
    description: "Explore room categories at Hikal Guest House with pricing, features, and direct booking options."
  });

  const { data: rooms, isLoading } = useRooms();

  return (

    <div id="rooms" className="min-h-screen bg-background">
      <Banner
        image="https://images.unsplash.com/photo-1702675301228-b3291c1060bc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Rooms"
        subtitle="Explore room categories at Hikal Guest House"
        rating={5}
        ratingPlatform="Gallery"
        ratingText="Gallery"
      />

      {/* <Reveal delay={120}> */}
      <div className="container-custom py-24">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonRoomCard key={`rooms-skel-${idx}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, idx) => (
              <Reveal key={room.id} delay={80 + idx * 120}>
                <RoomCard room={room} key={idx} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
      {/* </Reveal> */}

    </div>

  );
}