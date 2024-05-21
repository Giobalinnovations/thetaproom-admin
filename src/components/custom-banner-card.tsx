import Image from 'next/image';
import CustomButton from './custombutton';
import { Button } from './ui/button';
// import { banner2 } from '@/lib/images';

type BannerProps = {
  title: string;
  description: string;
  img: string;
  altImg: string;
};

export default function CustomBannerCard({
  title,
  description,
  img,
  altImg,
}: BannerProps) {
  return (
    <>
      <div className="relative flex flex-col gap-4 justify-center items-center h-[70vh]">
        <Image
          className="object-cover absolute z-2 top-0 left-0 w-full h-full inset-0 bg-black opacity-80"
          // src={banner2}
          src={''}
          alt={altImg}
          width={1600}
          height={900}
        />
        <div className="absolute top-0 left-0 z-4 w-full h-full bg-black opacity-40"></div>

        <div className="relative text-[#fff] font-bold z-10 flex justify-center text-xl sm:text-3xl uppercase items-center">
          {title}
        </div>
        <div className="relative text-[#fff] z-10 flex justify-center text-base  sm:text-xl items-center">
          {description}
        </div>
        <Button variant={'secondary'} className="z-40">
          Shop Now
        </Button>
      </div>
    </>
  );
}
