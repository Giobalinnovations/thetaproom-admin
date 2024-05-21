import Image from "next/image";

type CrouselProps = {
  testimonial: string;
  name: string;
  position: string;
};

export default function CustomTestimonialCrouselCard({
  testimonial,
  name,
  position,
}: CrouselProps) {
  return (
    <>
      <div className="relative h-[50vh] flex flex-col justify-center gap-4">
        <div className="relative text-[#000]  flex text-center justify-center  2xl items-center">
          {testimonial}
        </div>
        <div className="relative text-[#000] font-bold flex justify-center  2xl items-center">
          {name}
        </div>
        <div className="relative text-[#000]  flex justify-center  2xl items-center">
          {position}
        </div>
      </div>
    </>
  );
}
