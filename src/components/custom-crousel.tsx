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
              img={'/banner.webp'}
              altImg="FirstBannerimage"
            />
          </CarouselItem>
          <CarouselItem className="relative h-[100vh]">
            <CustomCrouselCard
              // title={"Second Banner"}
              img={'/banner.webp'}
              altImg="FirstBannerimage"
            />
          </CarouselItem>
          <CarouselItem className="relative h-[100vh]">
            <CustomCrouselCard
              // title={"Third Banner"}
              img={'/banner.webp'}
              altImg="FirstBannerimage"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
