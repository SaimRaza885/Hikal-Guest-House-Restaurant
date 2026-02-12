import { Link } from "wouter";
import { SearchX } from "lucide-react";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "404",
    description: "The page you requested could not be found."
  });

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
          <SearchX className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
        <p className="mt-3 text-sm text-gray-600">The page you are trying to access does not exist or may have been moved.</p>
        <Link href="/" className="mt-6 inline-block rounded-lg bg-primary px-5 py-2 text-white transition-colors hover:bg-primary/90">Go Home</Link>
      </div>
    </div>
  );
}