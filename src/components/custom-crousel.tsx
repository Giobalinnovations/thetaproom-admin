import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CustomCrouselCard from './custom-crousel-card';

export default function CustomCrousel() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="relative h-[100vh]">
            <CustomCrouselCard
              // title={"First Banner"}
              img="/images/banner/banner1.webp"
              altImg="FirstBannerimage"
            />
          </CarouselItem>
          <CarouselItem className="relative h-[100vh]">
            <CustomCrouselCard
              // title={"Second Banner"}
              img="/images/banner/banner1.webp"
              altImg="second Bannerimage"
            />
          </CarouselItem>
          <CarouselItem className="relative h-[100vh]">
            <CustomCrouselCard
              // title={"Third Banner"}
              img="/images/banner/banner1.webp"
              altImg="thirdBannerimage"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
