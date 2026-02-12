import { createContext, useContext, useMemo, useState } from "react";
import { X } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = useMemo(() => {
    const toast = ({ title, description, variant = "default" }) => {
      const id = `toast-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      setToasts((prev) => [{ id, title, description, variant }, ...prev].slice(0, 3));
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, 3500);
    };

    const dismiss = (id) => setToasts((prev) => prev.filter((item) => item.id !== id));

    return { toast, dismiss };
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-[100] space-y-3">
        {toasts.map((item) => (
          <div
            key={item.id}
            className={`min-w-[280px] max-w-sm rounded-xl border p-4 shadow-xl ${
              item.variant === "destructive"
                ? "border-red-200 bg-red-50 text-red-900"
                : "border-border bg-white text-foreground"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">{item.title}</p>
                {item.description ? <p className="mt-1 text-sm opacity-80">{item.description}</p> : null}
              </div>
              <button onClick={() => value.dismiss(item.id)} className="opacity-60 transition-opacity hover:opacity-100" type="button">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
