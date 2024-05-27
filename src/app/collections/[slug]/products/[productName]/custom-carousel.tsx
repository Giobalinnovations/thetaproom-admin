"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs'; 
import Image from 'next/image';

const CustomCarousel = ({images}: {images: any}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <main>
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.length > 0 ? images.map((img : any, index : number) => 
        <SwiperSlide key={index}><div className='relative overflow-hidden   h-[350px] w-[800px]'><Image  loading='lazy' className='object-cover w-full h-full' width={700} height={400}  src={img ?? ''} alt={`images ${index}`} /></div></SwiperSlide>) : null}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
      >
        {images.length > 0 ? images.map((img : any, index : number) => 
        <SwiperSlide key={index}><div className='flex my-2 relative overflow-hidden h-[50px] sm:h-[80px] sm:w-[180px]'><Image  loading='lazy' className='object-cover w-full h-full' fill  src={img ?? ''} alt={`images ${index}`} /></div></SwiperSlide>) : null}
      </Swiper>
    </main>
  );
};

export default CustomCarousel;
