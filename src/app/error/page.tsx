"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: {
  error: Error
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-semibold mb-5">Oops! Something went wrong.</h1>
      <button type="button" onClick={reset}>Try again</button>
    </div>
  );
}