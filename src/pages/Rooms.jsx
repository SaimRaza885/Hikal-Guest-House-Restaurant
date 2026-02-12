import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { RoomCard } from "../components/RoomCard";
import { Reveal } from "../components/Reveal";
import { useRooms } from "../hooks/useRooms";
import { useSeo } from "../hooks/useSeo";
import { PageLoader } from "../components/PageLoader";

export default function Rooms() {
  useSeo({
    title: "Rooms",
    description: "Explore room categories at Hikal Guest House with pricing, features, and direct booking options."
  });

  const { data: rooms, isLoading } = useRooms();

  return (
    <div id="rooms" className="min-h-screen bg-background">
      <Navigation />

      <Reveal delay={60}>
        <div className="bg-primary px-4 pb-16 pt-32 text-center text-white md:pb-24 md:pt-48">
          <div className="container-custom">
            <h1 className="mb-6 text-4xl font-bold !text-white md:text-6xl">Our Accommodations</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">Choose from our range of luxurious rooms, each offering stunning mountain views and modern comforts.</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="container-custom py-24">
          {isLoading ? <PageLoader label="Loading rooms" /> : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room, idx) => (
                <Reveal key={room.id} delay={80 + idx * 120}>
                  <RoomCard room={room} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}