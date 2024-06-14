import Image from 'next/image';

export default function CollectionsBanner({ slug }: { slug: string }) {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/bed-banner.webp"
          width={1900}
          height={500}
          loading="lazy"
          alt="Banner Image"
          className="object-cover"
        />
      </div>
      <div className=" container py-12">
        <h1 className="font-normal uppercase text-2xl">
          CATEGORY: {slug ?? ''}
        </h1>
        <p>
          Beds You&apos;ll Love iT | Sleep in Style | Modern-Sleek-Contemporary
        </p>
      </div>
    </>
  );
}
