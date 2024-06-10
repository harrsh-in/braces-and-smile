import Image from "next/image";

export default function About() {
  return (
    <section className="mt-20 xl:mt-32">
      <div className="w-full overflow-hidden h-96 xl:h-[32rem] mac:h-[40rem] relative">
        <div className="flex bg-black/60 backdrop-blur-sm py-4 flex-col absolute top-0 left-0 right-0 text-center">
          <span className="text-white xl:text-xl">
            Welcome to Braces & Smile Orthodontics
          </span>
          <p className="text-3xl text-white font-bold font-display xl:text-4xl xl:mt-2">
            A Family Dental Clinic
          </p>
        </div>
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/smiling-family.jpg"
            width={1920}
            height={1280}
            className="object-cover object-center h-full"
          />
        </div>
      </div>
      <p className="mt-6 md:mt-10 container text-center max-w-screen-lg xl:px-0 text-lg">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg xl:px-0 gap-10 container max-w-screen-sm">
        <Card count={2000} title="Implants" />
        <Card count={500} title="Dentals" />
        <Card count={4000} title="Invisible Braces" />
        <Card count={1500} title="Dental Veneers" />
      </div>
    </section>
  );
}

function Card({ count, title }) {
  return (
    <div className="rounded-lg p-4 text-center border border-black/40 flex flex-col items-center">
      <p className="font-bold font-display text-3xl">{count}+</p>
      <span className="text-2xl">{title}</span>
    </div>
  );
}
