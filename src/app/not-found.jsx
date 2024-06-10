import Link from "next/link";

export const metadata = {
  title: "Page not found | Braces & Smile Orthodontics",
};

export default function () {
  return (
    <main className="grow container flex flex-col items-center justify-center">
      <h2 className="text-3xl">Page Not Found!</h2>
      <Link href="/" className="bg-black rounded mt-4 text-white">
        Go Home
      </Link>
    </main>
  );
}
