'use client';
import Image from 'next/image';
import CustomCarousel from './custom-carousel';

type ProductDescriptionProps = {
  img: string;
  producttitle: string;
  discountedprice?: number;
  price?: number;
  content: any;
  images: any;
};

export default function ProductDescription({
  img,
  producttitle,
  discountedprice,
  price,
  content,
  images,
}: ProductDescriptionProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-8 py-16 container  mx-w-full [&_h1]:text-red-500">
        <div className="  sm:w-2/3">
          <CustomCarousel images={images} />
        </div>
        <div className="sm:w-1/3 flex flex-col gap-4">
          <div className="font-bold text-xl capitalize">{producttitle}</div>
          {/* <div className="text-[#dc5454] text-lg font-bold">
            $ {price}
            <span className={` text-[#6E757C] line-through font-normal`}>
              {discountedprice ? discountedprice : ''}{' '}
            </span>
          </div> */}
          {content ? (
            <>
              <h3 className="font-semibold text-lg [&_li]:pl-2 text-[22px] py-2">
                Product Description{' '}
              </h3>
              <div className="font-bold text-lg flex gap-2 flex-col [&_li]:text-base [&_li]:font-normal [&_li]:pl-2 [&_p]:text-base [&_p]:font-normal [&_h1]:mb-2">
                <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
