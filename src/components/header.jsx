import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-12 md:h-14 shrink-0 z-50 w-full sticky top-0 bg-black shadow">
      <div className="flex items-center justify-between container h-full">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="site logo" width={40} height={40} />
          <p className="text-white leading-none">
            Braces & Smile <br /> Orthodontics
          </p>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.4149274,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-x-2"
        >
          <Image
            src="/location.svg"
            alt="clinic location"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </header>
  );
}
