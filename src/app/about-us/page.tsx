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
            Coast 2 Coast furniture is a supplier who serving the fine furniture
            market with a good design collection that caters to a variety of
            tastes and architectural styles of modern time.we provide
            International designs rich in culture and some of the most
            exceptional interior living spaces a home has to offer.we provide
            the Design which is perfect in modern world with good look and feel.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">Good Design and Fine Construction</h3>
          <p>
            We provide the good design and constrution of the product which is
            making used by very high quilty of woods. we Paying particular
            attention to attractiveness of appearance of product, best quality
            of raw materials and durability of construction of the product.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">A Relationship to be Valued</h3>
          <p>
            Living Rooms,Bedroom,dining and Occasional tables set furniture –
            Coast 2 Coast FURNITURE is your answer for one-of-a-kind designs in
            a variety of materials. Our designers works vigilantly to keep pace
            and stay current with fresh styles and trendy pieces. We help you
            portray exclusivity and architectural richness in your showroom all
            year round.
          </p>
        </div>
        <div className="py-2">
          <h3 className="py-2 font-bold">Dependable Service</h3>
          <p>
            For Coast 2 Coast furniture&apos;s retail partner, we offer
            extensive inventory selection and quick turnaround. At any given
            time, we carries 90% of its full stock on hand. This enables us to
            deliver high quantities – on demand, any time. Impress each new
            customer with a showroom that has the grace, appeal and beauty that
            can only come from timeless products with exceptional craftsmanship
          </p>
        </div>
      </div>
    </>
  );
}
