import Image from "next/image";

export default function Services() {
  return (
    <section className="mt-32 max-w-screen-sm lg:max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold font-display text-center">
        Our Dental Services
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 container xl:px-0 mt-12 sm:gap-10">
        <Card
          src="/children-dentistry.jpg"
          alt="small girl dental checkup"
          title="Children Dentistry"
        />
        <Card
          src="/full-mouth-reconstruction.jpg"
          alt="girl having full mouth reconstruction treatment"
          title="Full Mouth Reconstruction"
        />
        <Card
          src="/crown-and-bridges.jpg"
          alt="girl having crown and bridges treatment"
          title="Crowns & Bridges"
        />
        <Card
          src="/painless-root-canal.jpg"
          alt="girl having painless root canal treatment"
          title="Painless Root Canal"
        />
        <Card src="/denture.jpg" alt="dummy teeth sturcture" title="Denture" />
        <Card
          src="/dental-implants.jpg"
          alt="man having dental implants treatment"
          title="Dental Implants"
        />
        <Card
          src="/invisible-aligners.jpg"
          alt="girl fitting invisible aligners"
          title="Invisible Aligners"
        />
        <Card
          src="/braces.jpg"
          alt="girl having braces installation"
          title="Braces"
        />
        <Card
          src="/veneers.jpg"
          alt="veneers and componeers treatment on dummy teeth structure"
          title="Veneers & Componeers"
        />
        <Card
          src="/girl-smiling.jpg"
          alt="girl showing white teeths after whitening treatment"
          title="Teeth Whitening"
        />
      </div>
    </section>
  );
}

const Card = ({ src, alt, title }) => {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={90}
        className="w-full aspect-video h-auto rounded-lg object-cover"
      />
      <p className="text-center mt-1 font-display font-medium text-lg">
        {title}
      </p>
    </div>
  );
};
