import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative hero h-[calc(100vh-48px)] md:h-[calc(100vh-56px)] w-full">
      <Image
        src="/couple-smiling.jpg"
        width={1886}
        height={2508}
        className="w-auto h-full xl:-translate-y-14 max-md:landscape:w-full max-md:landscape:h-[inherit] xl:h-[calc(100vh-56px+56px)] max-md:landscape:object-top md:w-full md:object-top object-cover"
      />
      <div className="absolute xl:top-auto xl:bottom-0 xl:translate-y-0 xl:py-6 md:max-xl:landscape:top-2/3 md:py-10 py-5 max-md:landscape:static inset-x-0 top-1/2 max-md:landscape:top-full md:-translate-y-1/2 max-md:portrait:-translate-y-1/2 text-white flex flex-col items-center bg-black/65 backdrop-blur">
        <p className="font-display font-medium text-3xl text-center">
          Your Journey to a <br /> Perfect Smile
        </p>
        <span className="leading-none mt-2">Trusted by 10000+ patients</span>
        <Link
          href="#"
          className="mt-5 bg-white text-black rounded px-4 py-1.5 text-xl"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
