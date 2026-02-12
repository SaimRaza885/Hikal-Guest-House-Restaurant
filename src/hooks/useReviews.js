import { useEffect, useState } from "react";
import { fetchReviews } from "../services/mockApi";

export function useReviews() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchReviews().then((items) => {
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
