import { type ClassValue, clsx } from "clsx";
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Error from "@/components/fallbacks/Error";
import Loader from "@/components/fallbacks/Loader";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  // return clsx(inputs);
}

export function handleFallback(
  error: Error | null,
  loading: boolean,
): ReactNode {
  if (error) return <Error />;

  if (loading) return <Loader loading={loading} />;
}

export const handleApiError = (error: any, message?: string) => {
  console.error(`API Error - ${message}:`, error);
  if (error.response) {
    // Server returned a responnse not in the 200 range
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
  } else if (error.request) {
    console.error("Request data:", error.request);
  } else {
    // No response from server - 404
    console.error("Error message:", error.message);
  }
  throw error;
};
