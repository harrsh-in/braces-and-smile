import clsx from "clsx";
import Image from "next/image";

export default function Packages() {
  return (
    <section className="grid place-content-center xl:grid-cols-3 xl:max-w-screen-lg xl:px-0 md:max-w-screen-md mt-20 xl:mt-32 gap-10 max-md:landscape:mt-60 md:grid-cols-2 md:container">
      <Card
        image={{
          src: "/family-smiling.jpg",
          alt: "mother and baby daughter smiling",
          className: "rounded-l-lg",
        }}
        heading="For Family"
      >
        <p>
          Our yearly plan starts at <b>₹7999/-</b> only
        </p>
        <p>
          Don’t forget to collect free gifts worth <b>₹1500/-</b>
        </p>
      </Card>
      <Image
        src="/girl-smiling.jpg"
        alt="girl showing teeth after whitening"
        width={320}
        height={240}
        className="hidden md:max-xl:block rounded-lg w-full h-full object-cover"
      />
      <Card
        image={{
          src: "/teeth-whitening.jpg",
          alt: "dentist whitening the teeth",
          className: "max-xl:rounded-r-lg xl:rounded-l-lg",
        }}
        heading="For Individuals"
        className="max-xl:flex-row-reverse"
      >
        <p>
          Teeth whitening start at <b>₹999/-</b> only
        </p>
        <p>
          Get flat <b>10%</b> discount on your next visit
        </p>
      </Card>
      <Card
        image={{
          src: "/teeth-checking.jpg",
          alt: "dentist implants invisible braces",
          className: "max-xl:rounded-l-lg xl:rounded-r-lg",
        }}
        heading="For Individuals"
        className="xl:flex-row-reverse"
      >
        <p>
          Invisible Braces starts at <b>₹3499/-</b> only
        </p>
        <p>
          Get flat <b>10%</b> discount on other services
        </p>
      </Card>
    </section>
  );
}

function Card({ image, heading, children, className = "" }) {
  return (
    <div
      className={clsx(
        "w-80 h-60 border flex border-black/20 rounded-lg",
        className
      )}
    >
      <Image
        src={image.src}
        width={160}
        height={240}
        alt={image.alt}
        className={clsx("shrink-0 object-cover object-center", image.className)}
      />
      <div className="grow p-4 space-y-4">
        <h2 className="font-bold font-display">{heading}</h2>
        {children}
      </div>
    </div>
  );
}
