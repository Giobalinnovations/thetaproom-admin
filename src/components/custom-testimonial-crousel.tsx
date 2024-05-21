import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomTestimonialCrouselCard from "./custom-testimonial-crousel-card";

export default function CustomtestimonialCrousel() {
  return (
    <>
      <Carousel className="w-full sm:w-2/3">
        <CarouselContent>
          <CarouselItem className="relative h-[50vh]">
            <CustomTestimonialCrouselCard
              testimonial={
                "This was my first time ordering from Furnberry online. Great selection of furniture and accessories. The bedroom set I ordered was exactly what I wanted. Customer service was awesome. They answered my questions about pricing and products very quickly."
              }
              name={"Malia R."}
              position={"Etobicoke, ON"}
            />
          </CarouselItem>
          <CarouselItem className="relative h-[50vh]">
            <CustomTestimonialCrouselCard
              testimonial={"We renovated our entire home and purchased ALL of our furniture, including our mattresses. So far, very pleased with the one on one service they provided and the pieces are absolutely awesome."}
              name={"Andy W."}
              position={"Scarborough, ON"}
            />
          </CarouselItem>
          <CarouselItem className="relative h-[50vh]">
            <CustomTestimonialCrouselCard
              testimonial={"We had surprise guests come over to our place and we needed beds and mattresses on a budget and within a very short time frame. Furnberry went out of their way to make sure we were taken care of. We got everything within budget and delivered to us within 24 hours. So happy with how things went! Would definitely use them again!"}
              name={"Sazia A."}
              position={"Ajax, ON"}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
