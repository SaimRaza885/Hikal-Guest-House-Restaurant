import { useEffect } from "react";

export function useSeo({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} | Hikal Guest House`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [title, description]);
}