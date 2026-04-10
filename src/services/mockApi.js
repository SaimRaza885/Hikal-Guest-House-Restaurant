import { rooms } from "../data/rooms";
import { reviews } from "../data/reviews";
import { gallery } from "../data/gallery";
import { facilities } from "../data/facilities";
import { attractions } from "../data/attractions";

const state = {
  bookings: [],
  messages: []
};

// const delay = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));
const makeId = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export async function fetchRooms() {
  return [...rooms];
}

export async function fetchRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug) || null;
}

export async function fetchReviews() {

  return [...reviews];
}

export async function fetchGallery() {
  return [...gallery];
}

export async function fetchFacilities() {
  return [...facilities];
}

export async function fetchAttractions() {

  return [...attractions];
}

