// import { bannerImg } from '@/lib/images';
import Image from 'next/image';

type CrouselProps = {
  img: string;
  altImg: string;
};

export default function CustomCrouselCard({ img, altImg }: CrouselProps) {
  return (
    <>
      <div className="relative">
        <Image
          className="object-cover absolute top-0 left-0 w-full h-[100vh]"
          src={''}
          alt={altImg}
          width={1600}
          height={900}
        />
        {/* <div className="relative text-[#000] z-10 flex justify-center h-[100vh] 2xl items-center">{title}</div> */}
      </div>
    </>
  );
}
