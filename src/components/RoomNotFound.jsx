import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

/* =========================================================
   RoomNotFound.jsx
   Shown when a room slug doesn't match any room
   Props:
     className — extra wrapper classes (optional)
========================================================= */
export default function RoomNotFound({ className = "" }) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Navigation />
      <div className="container-custom pt-36 pb-20 text-center">
        <h1 className="text-3xl font-bold text-foreground">Room not found</h1>
        <p className="mt-3 text-muted-foreground">
          This room does not exist or may have been removed.
        </p>
        <Link
          href="/rooms"
          className="mt-6 inline-flex items-center rounded-xl bg-primary px-5 py-3 text-white transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Rooms
        </Link>
      </div>
      <Footer />
    </div>
  );
}
