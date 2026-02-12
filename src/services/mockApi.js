import { rooms } from "../data/rooms";
import { reviews } from "../data/reviews";
import { galleryImages } from "../data/gallery";
import { facilities } from "../data/facilities";
import { attractions } from "../data/attractions";

const state = {
  bookings: [],
  messages: []
};

const delay = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));
const makeId = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export async function fetchRooms() {
  await delay();
  return [...rooms];
}

export async function fetchRoomBySlug(slug) {
  await delay(350);
  return rooms.find((room) => room.slug === slug) || null;
}

export async function fetchReviews() {
  await delay();
  return [...reviews];
}

export async function fetchGallery() {
  await delay();
  return [...galleryImages];
}

export async function fetchFacilities() {
  await delay();
  return [...facilities];
}

export async function fetchAttractions() {
  await delay();
  return [...attractions];
}

export async function createBooking(payload) {
  await delay(700);
  const booking = { id: makeId("booking"), ...payload, createdAt: new Date().toISOString() };
  state.bookings.push(booking);
  return booking;
}

export async function createMessage(payload) {
  await delay(700);
  const message = { id: makeId("message"), ...payload, createdAt: new Date().toISOString() };
  state.messages.push(message);
  return message;
}