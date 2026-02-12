import { useState } from "react";
import { createMessage } from "../services/mockApi";

export function useSendMessage() {
  const [isPending, setIsPending] = useState(false);

  async function mutate(values, options = {}) {
    setIsPending(true);
    try {
      const result = await createMessage(values);
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
