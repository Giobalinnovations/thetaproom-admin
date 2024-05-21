import About from '@/components/about';
import Title from '@/components/title';
import Accordian from '@/components/accordian';
import CustomtestimonialCrousel from '@/components/custom-testimonial-crousel';
import Map from '@/components/map';
import CategorySection from '@/components/home/category-section';
import CustomCrousel from '@/components/custom-crousel';
import BannerCrousel from '@/components/banner-crousel';

export default function Home() {
  return (
    <>
      <div className="flex  justify-center  ">
        <CustomCrousel />
      </div>

      <div>
        <About />
      </div>

      <Title title="SHOP BY CATEGORY" />
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CategorySection />
      </div>
      <div>
        <Accordian />
      </div>

      <div>
        <BannerCrousel />
      </div>
      <h2 className="text-black text-center pt-16 font-bold text-3xl">
        Review
        {/*  */}
      </h2>
      <div className="container  flex justify-center">
        <CustomtestimonialCrousel />
      </div>
      {/* Map Section */}
      <Map />
    </>
  );
}
