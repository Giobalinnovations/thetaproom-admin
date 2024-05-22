import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/Bed-Banner.webp"
          width={1900}
          height={500}
          alt="Banner Image"
        />
      </div>
      <div className=" flex flex-col justify-center container bg-white py-16">
        <div className=" flex flex-col py-4 text-left ">
          <h2 className="text-black font-bold text-2xl">About Us</h2>
        </div>
        {/* Description */}
        <div className="py-2">
          <h3 className="py-2 font-bold">Good Furniture Supplier</h3>
          <p>
            Coast 2 Coast Furniture is a supplier serving the fine furniture
            market with a well-designed collection that caters to a variety of
            tastes and architectural styles of modern times. We provide
            international designs rich in culture, creating some of the most
            exceptional interior living spaces a home can offer. Our designs are
            perfect for the modern world, offering both a good look and feel.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">Good Design and Fine Construction</h3>
          <p>
            We provide well-designed and constructed products made from the
            highest quality woods. We pay particular attention to the
            attractiveness of the product&apos;s appearance, the best quality raw
            materials, and the durability of the product&apos;s construction.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">A Relationship to be Valued</h3>
          <p>
            Living rooms, bedrooms, dining, and occasional table sets - Coast 2
            Coast Furniture is your answer for one-of-a-kind designs in a
            variety of materials. Our designers work vigilantly to stay current
            with fresh styles and trendy pieces. We help you portray exclusivity
            and architectural richness in your showroom all year round.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">Dependable Service</h3>
          <p>
            For Coast 2 Coast Furniture&apos;s retail partners, we offer an extensive
            inventory selection and quick turnaround. At any given time, we
            carry 90% of our full stock on hand. This enables us to deliver high
            quantities on demand, anytime. Impress each new customer with a
            showroom that has the grace, appeal, and beauty that can only come
            from timeless products with exceptional craftsmanship.
          </p>
        </div>
      </div>
    </>
  );
}
