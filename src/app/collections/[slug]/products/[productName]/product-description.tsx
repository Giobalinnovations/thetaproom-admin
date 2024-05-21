import Image from 'next/image';

type ProductDescriptionProps = {
  img: string;
  producttitle: string;
  discountedprice: number;
  price: number;
  content: any;
};

export default function ProductDescription({
  img,
  producttitle,
  discountedprice,
  price,
  content,
}: ProductDescriptionProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-8 py-16 container  mx-w-full [&_h1]:text-red-500">
        <div className=" sm:h-8 sm:w-2/3">
          <Image
            className="object-cover"
            src={img ?? ''}
            alt="image"
            width={900}
            height={500}
          />
        </div>
        <div className="sm:w-1/3 flex flex-col gap-4">
          <div className="font-bold text-xl">{producttitle}</div>
          <div className="text-[#dc5454] text-lg font-bold">
            $ {price}{' '}
            <span className={` text-[#6E757C] line-through font-normal`}>
              {' '}
              ${discountedprice}{' '}
            </span>
          </div>
          <div className="font-Bold text-lg [&_li]:pl-2 text-[22px] py-2">Product Description </div>
          <div className="font-bold text-lg flex gap-2 flex-col [&_li]:text-base [&_li]:font-normal [&_li]:pl-2 [&_p]:text-base [&_h1]:mb-2">{content}</div>
        </div>
      </div>
    </>
  );
}
