import { useState } from "react";
import { MapPin, Navigation, Loader2 } from "lucide-react";

export function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const locationData = {
    name: "Hikal Guest House & Restaurant",
    address: "Karakoram Highway (N-35), Jaffarabad Hunza Nagar Valley, Gilgit, 15400",
  };

  const searchQuery = encodeURIComponent("Hikal Guest House & Restaurant, Karakoram Highway, Jaffarabad Hunza Nagar Valley, Gilgit, 15400");
  const mapUrlWithSearch = `https://maps.google.com/maps?q=${searchQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleLoadMap = () => {
    setLoading(true);
    // Simulate loading time before showing map
    setTimeout(() => {
      setMapLoaded(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section className="relative w-full h-screen">
      {!mapLoaded ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-4">
          <div className="text-center mb-8 text-white max-w-2xl">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{locationData.name}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {locationData.address}
            </p>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-accent animate-spin" />
              <p className="text-white text-lg">Loading map...</p>
            </div>
          ) : (
            <button
              onClick={handleLoadMap}
              className="bg-primary/90 hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-2xl flex items-center gap-3 text-lg"
            >
              <Navigation className="w-6 h-6" />
              View on Map
            </button>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <iframe
            src={mapUrlWithSearch}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hikal Guest House & Restaurant Location - Hunza Valley"
            className="w-full h-full"
          />
        </div>
      )}
    </section>
  );
}