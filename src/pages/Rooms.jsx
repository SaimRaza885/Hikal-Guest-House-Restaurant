import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
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
      <Navigation />
      <Banner
        image="https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&q=80&w=1600"
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
                  <RoomCard room={room} key={idx}/>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      {/* </Reveal> */}

      <Footer />
    </div>
  );
}