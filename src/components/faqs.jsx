import Image from "next/image";

export default function FAQs() {
  return (
    <section className="mt-32 container max-w-screen-lg xl:px-0">
      <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      <div className="mt-12 md:flex md:gap-x-10">
        <div className="md:grow space-y-4">
          <Card title="Heading level 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere magni, aliquid esse et numquam veniam modi repudiandae enim
            ex ad voluptates laudantium aperiam tenetur voluptatem hic voluptate
            explicabo labore?
          </Card>
          <Card title="Heading level 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere magni, aliquid esse et numquam veniam modi repudiandae enim
            ex ad voluptates laudantium aperiam tenetur voluptatem hic voluptate
            explicabo labore?
          </Card>
          <Card title="Heading level 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere magni, aliquid esse et numquam veniam modi repudiandae enim
            ex ad voluptates laudantium aperiam tenetur voluptatem hic voluptate
            explicabo labore?
          </Card>
          <Card title="Heading level 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere magni, aliquid esse et numquam veniam modi repudiandae enim
            ex ad voluptates laudantium aperiam tenetur voluptatem hic voluptate
            explicabo labore?
          </Card>
          <Card title="Heading level 1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            facere magni, aliquid esse et numquam veniam modi repudiandae enim
            ex ad voluptates laudantium aperiam tenetur voluptatem hic voluptate
            explicabo labore?
          </Card>
        </div>
        <Image
          src="/teeth-checking.jpg"
          alt="dentist implants invisible braces"
          width={1920}
          height={2880}
          className="max-md:hidden shrink-0 h-72 w-80 object-cover object-bottom rounded-lg"
        />
      </div>
    </section>
  );
}

const Card = ({ title, children }) => {
  return (
    <details className="group border rounded-lg border-black/60 px-4 py-2">
      <summary className="flex items-center cursor-pointer justify-between gap-x-2">
        <span className="font-medium font-display">{title}</span>
        <Image
          src="/chevron.svg"
          width={24}
          height={24}
          className="group-open:rotate-180"
        />
      </summary>
      <p className="mt-4">{children}</p>
    </details>
  );
};
