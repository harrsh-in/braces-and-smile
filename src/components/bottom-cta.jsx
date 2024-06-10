import Image from "next/image";
import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="mt-32 sm:grid sm:grid-cols-2 md:items-center md:max-w-screen-md mx-auto">
      <Image
        src="/teeth-pain.jpg"
        width={1920}
        height={1280}
        alt="woman having teeth pain"
        className="w-full h-auto max-w-96 rounded"
      />
      <div className="text-center max-md:mt-8 sm:px-4 flex flex-col items-center font-display">
        <p className="text-2xl font-medium">
          Dr. Hardik Rupapara <br /> <small>(M.D.S. Orthodontics)</small>
        </p>
        <Link
          href="tel:+911234567890"
          className="mt-3 bg-black text-white px-6 py-3 pt-3.5 rounded text-xl font-medium flex items-center gap-x-4"
        >
          <Image
            src="/call.svg"
            width={20}
            height={20}
            alt="call icon"
            className="invert"
          />
          <span>+91 1234567890</span>
        </Link>
      </div>
    </section>
  );
}
