import { useEffect, useState } from "react";
import { fetchRoomBySlug, fetchRooms } from "../services/mockApi";

export function useRooms() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchRooms().then((items) => {
      if (!mounted) return;
      setData(items);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return { data, isLoading };
}

export function useRoom(slug) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    fetchRoomBySlug(slug).then((room) => {
      if (!mounted) return;
      setData(room);
      setIsLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [slug]);

  return { data, isLoading };
}