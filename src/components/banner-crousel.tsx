import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomBannerCard from "./custom-banner-card";

export default function BannerCrousel() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="relative h-[70vh]">
            <CustomBannerCard
              title={"Coast2coastfurnishings"}
              description={"Home to Furniture, Mattress's & Home Decor "}
              img={"/images/slide.webp"}
              altImg="FirstBannerimage"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
