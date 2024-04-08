import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Home Page</h1>

      <Link href="/posts">
        <Button aria-label="button">This is button</Button>
      </Link>
    </main>
  );
}
