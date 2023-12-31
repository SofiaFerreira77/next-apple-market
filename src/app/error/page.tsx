import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Error Page"
  };
}

export default function Error() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-semibold mb-5">Oops! Something went wrong.</h1>
      <Link href='/'>Try again</Link>
    </div>
  );
}