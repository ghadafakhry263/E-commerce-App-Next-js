import { Button } from '@/components/ui/button';
import { ArrowBigDownDash, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:mt-[200px] mb-7">
      {/* النص */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-primary font-bold text-5xl mb-4">
          Enjoy Our Delicious Pizza
        </h1>
        <p className="text-black font-light text-2xl mb-5">
          Discover a variety of flavors at VILLAGE, perfect for every occasion.
        </p>
         {/* buttons */}
    
       <Button> Show Menu <ArrowBigRight></ArrowBigRight> </Button>
   
      </div>

      {/* الصورة */}
      <div className="mt-8 md:mt-0">
        <Image
          src="/e3a398bd-c73b-417d-a725-7b9db3274724_removalai_preview.png"
          width={320}
          height={300}
          alt="Delicious Pizza"
        />
      </div>
     
    </div>
  );
};

export default Hero;
