import { useState } from "react";
import { createBooking } from "../services/mockApi";

export function useCreateBooking() {
  const [isPending, setIsPending] = useState(false);

  async function mutate(values, options = {}) {
    setIsPending(true);
    try {
      const result = await createBooking(values);
      options.onSuccess?.(result);
      return result;
    } catch (error) {
      options.onError?.(error);
      throw error;
    } finally {
      setIsPending(false);
    }
  }

  return { mutate, isPending };
}
