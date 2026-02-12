import { useEffect, useState } from "react";

const SUPPORTED_CURRENCIES = ["PKR", "USD", "EUR", "AED", "SAR"];
const STORAGE_KEY_RATES = "hikal-currency-rates-v2";
const STORAGE_KEY_SELECTED = "hikal-currency-selected-v1";
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

async function fetchRates() {
  // Use Fawaz Ahmed currency API with PKR as base, plus fallback
  const path = "pkr";
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${path}.json`
    );
    const data = await res.json();
    return data[path] || {};
  } catch (err) {
    const res = await fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${path}.json`
    );
    const data = await res.json();
    return data[path] || {};
  }
}

export function useCurrency() {
  const [currency, setCurrency] = useState(() => {
    if (typeof window === "undefined") return "PKR";
    return window.localStorage.getItem(STORAGE_KEY_SELECTED) || "PKR";
  });

  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY_RATES);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.timestamp && parsed.rates) {
          const age = Date.now() - parsed.timestamp;
          if (age < CACHE_TTL_MS) {
            setRates(parsed.rates);
            return;
          }
        }
      } catch {
        // ignore and refetch
      }
    }

    let cancelled = false;
    setIsLoading(true);
    fetchRates()
      .then((data) => {
        if (cancelled) return;
        setRates(data);
        window.localStorage.setItem(
          STORAGE_KEY_RATES,
          JSON.stringify({ timestamp: Date.now(), rates: data })
        );
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY_SELECTED, currency);
  }, [currency]);

  const convert = (amount) => {
    if (!amount || currency === "PKR") return amount;
    const rate = rates[currency];
    if (!rate) return amount;
    return amount * rate;
  };

  return {
    currency,
    setCurrency,
    convert,
    rates,
    isLoading,
    error,
    supportedCurrencies: SUPPORTED_CURRENCIES,
  };
}

