import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 md:pt-10 mt-32">
      <div className="container">
        <div className="md:flex md:justify-between md:gap-x-10">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <Image src="/logo.svg" alt="site logo" width={40} height={40} />
                <p className="text-white leading-none">
                  Braces & Smile <br /> Orthodontics
                </p>
              </div>
              <Socials className="" />
            </div>
            <p className="mt-6 max-w-screen-sm mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              et expedita facilis modi nostrum temporibus, dignissimos, fuga
              ducimus quas, voluptate sit eaque assumenda veniam facere
              blanditiis laborum necessitatibus consequatur itaque!
            </p>
          </div>
          <Image
            src="/map.jpg"
            alt="map"
            width={1920}
            height={1280}
            className="w-full rounded-lg h-auto max-md:mt-6 max-w-screen-sm md:max-w-80 mx-auto"
          />
        </div>
        <small className="mt-6 md:mt-10 text-center block text-sm">
          2020 - Present &copy; Braces & Smile Orthodontics
        </small>
      </div>
    </footer>
  );
}

const Socials = ({ className }) => {
  return (
    <div className={clsx("flex items-center gap-x-4", className)}>
      <Link href="#">
        <Image
          src="/instagram.svg"
          width={24}
          height={24}
          alt="instagram"
          className="invert"
        />
      </Link>
      <Link href="#">
        <Image
          src="/x.svg"
          width={24}
          height={24}
          alt="x formarly twitter"
          className="invert"
        />
      </Link>
      <Link href="#">
        <Image
          src="/linkedin.svg"
          width={24}
          height={24}
          alt="linkedin"
          className="invert"
        />
      </Link>
    </div>
  );
};
