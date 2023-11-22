import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Infinite Beers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
    </main>
  );
}
