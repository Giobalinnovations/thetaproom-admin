import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CollectionCard from "../../collectionscard";

export default function RelatedItem() {
  return (
    <div>
      <Carousel  orientation="horizontal">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3" key={index}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <CollectionCard
                      img="/images/KINGARTHUR.jpg"
                      altimg="Banner Image"
                      producttitle="KINGARTHUR BED LINEN STYLE FABRIC WITH ADJUSTABLE HEADBOARD - LIGHT GREY"
                      discountedprice={249}
                      price={499}
                      slug=""
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="default" className="left-16"  />
        <CarouselNext variant="default"  className="right-16"/>
      </Carousel>
    </div>
  );
}
