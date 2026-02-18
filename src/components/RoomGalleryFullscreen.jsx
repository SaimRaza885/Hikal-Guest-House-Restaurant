import { X } from "lucide-react";

/* =========================================================
   RoomGalleryFullscreen.jsx
   Fullscreen overlay for active gallery image
   Props:
     image     — { src, category } object (required)
     onClose   — fn() called on close button click (required)
========================================================= */
export default function RoomGalleryFullscreen({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4">
      {/* close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
      >
        <X className="h-5 w-5" />
      </button>

      {/* fullscreen image */}
      <img
        src={image.src}
        alt={image.category}
        className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
      />
    </div>
  );
}
