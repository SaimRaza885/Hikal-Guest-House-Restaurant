import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

import { PageLoader }         from "../components/PageLoader";
import { useRoom, useRooms }  from "../hooks/useRooms";
import { useSeo }             from "../hooks/useSeo";

import RoomGallery            from "../components/RoomGallery";
import RoomGalleryFullscreen  from "../components/RoomGalleryFullscreen";
import RoomQuickInfo          from "../components/RoomQuickInfo";
import DetailBlock            from "../components/DetailBlock";
import RoomAmenities          from "../components/RoomAmenities";
import RoomCapacity           from "../components/RoomCapacity";
import RoomIncluded           from "../components/RoomIncluded";
import RoomRules              from "../components/RoomRules";
import RoomReviews            from "../components/RoomReviews";
import RoomLocation           from "../components/RoomLocation";
import SimilarRooms           from "../components/SimilarRooms";
import RoomFaq                from "../components/RoomFaq";
import BookingSidebar         from "../components/BookingSidebar";
import RoomNotFound           from "../components/RoomNotFound";

import { rooms } from "../data/rooms";
const WHATSAPP_NUMBER = "923001234567";


export default function RoomDetailsPage({ params }) {
  const slug = params?.slug || "";
  const { data: room,     isLoading              } = useRoom(slug);
  const { data: allRooms, isLoading: roomsLoading } = useRooms();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenOpen,   setFullscreenOpen   ] = useState(false);

  const roomMeta = rooms[slug];

  /* gallery */
  const gallery = useMemo(() => {
    if (roomMeta?.gallery?.length) return roomMeta.gallery;
    return (room?.images || []).map((src, idx) => ({
      id: `${room?.id || "room"}-img-${idx + 1}`,
      src,
      category: idx === 0 ? "Bedroom" : idx === 1 ? "View" : "Seating Area",
    }));
  }, [room, roomMeta]);

  /* similar rooms */
  const similarRooms = useMemo(() => {
    if (!allRooms?.length || !room?.id) return [];
    return allRooms.filter((r) => r.id !== room.id).slice(0, 3);
  }, [allRooms, room]);

  useSeo({
    title:       room ? room.title : "Room Details",
    description: room ? room.description : "Explore room details and booking options at Hikal Guest House.",
  });

  /* loading */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
  
        <div className="container-custom pt-36">
          <PageLoader label="Loading room details" />
        </div>
      </div>
    );
  }

  /* not found */
  if (!room) return <RoomNotFound />;

  /* resolved data */
  const quickInfo  = roomMeta?.quick       || [`Sleeps up to ${room.capacity} guests`, room.bedType, room.size, "Mountain view", "Private bathroom"];
  const description= roomMeta?.description || room.description;
  const amenities  = roomMeta?.amenities   || { Comfort: room.features?.slice(0, 3) || [], Bathroom: ["Private bathroom", "Towels", "Shower"], Views: ["Mountain view"], Services: ["Room service", "Free WiFi"] };
  const capacity   = roomMeta?.capacity    || { maxGuests: room.capacity, beds: [room.bedType] };
  const included   = roomMeta?.included    || [{ id: "inc-a", text: "Breakfast available", extra: false }, { id: "inc-b", text: "Free parking", extra: false }, { id: "inc-c", text: "Free WiFi", extra: false }];
  const rules      = roomMeta?.rules       || ["Check-in: From 12:00 PM", "Check-out: Until 11:00 AM", "Non-smoking room"];
  const reviews    = roomMeta?.reviews     || [];
  const location   = roomMeta?.location    || ["Quiet room zone", "Close to terrace"];
  const faq        = roomMeta?.faq         || [];

  return (
    <div className="min-h-screen bg-background">
   
      <div className="container-custom pb-12 pt-32 md:pt-36">
        {/* back link */}
        <Link
          href="/rooms"
          className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all rooms
        </Link>

        <div className="space-y-8">
          {/* GALLERY */}
          <RoomGallery
            gallery={gallery}
            activeIndex={activeImageIndex}
            onSelect={setActiveImageIndex}
            onFullscreen={() => setFullscreenOpen(true)}
            roomTitle={room.title}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* MAIN CONTENT */}
            <div className="space-y-8 lg:col-span-2">
              <RoomQuickInfo title={room.title} quickInfo={quickInfo} />

              <DetailBlock title="Room Description">
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </DetailBlock>

              <RoomAmenities amenities={amenities} />
              <RoomCapacity maxGuests={capacity.maxGuests} beds={capacity.beds} />
              <RoomIncluded included={included} />
              <RoomRules rules={rules} />
              <RoomReviews reviews={reviews} />
              <RoomLocation location={location} />
              <SimilarRooms rooms={similarRooms} isLoading={roomsLoading} />
              <RoomFaq faq={faq} />
            </div>

            {/* SIDEBAR */}
            <BookingSidebar
              room={room}
              maxGuests={capacity.maxGuests}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          </div>
        </div>
      </div>

      {/* FULLSCREEN OVERLAY */}
      {fullscreenOpen && (
        <RoomGalleryFullscreen
          image={gallery[activeImageIndex]}
          onClose={() => setFullscreenOpen(false)}
        />
      )}

    </div>
  );
}