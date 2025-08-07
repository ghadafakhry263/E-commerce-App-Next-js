
'use client';
import { Button } from '@/components/ui/button';
import { ArrowBigDownDash, ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="mt-[250px] flex flex-col md:flex-row items-center justify-between px-6 mb-7 
    ">
      {/* النص */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-primary font-bold text-5xl mb-4">
          Enjoy Our Delicious Pizza
        </h1>
        <p className="text-black font-light text-2xl mb-5">
          Discover a variety of flavors at VILLAGE, perfect for every occasion.
        </p>
        <Button> Show Menu <ArrowBigRight /></Button>
      </div>

      {/* الصورة */}
  <div className="relative mt-8 md:mt-0 w-[320px] h-[300px] mb-10">
      {/* الطبق */}
      <Image
        src="/home-board.png"
        width={320}
        height={300}
        alt="Plate"
        className="absolute top-0 left-0 z-0"
      />

      {/* البيتزا مع الحركة */}
      <motion.div
        initial={{ y: -100, rotate:-60 , opacity: 0 }}
        animate={{ y: 90, rotate:0 , opacity: 1 }}
        transition={{ duration: 3, ease: 'easeOut', delay: 0.5 }}
        className="absolute top-0 left-0 z-10"
      >
        <Image
          src="/home-pizza.png"
          width={320}
          height={300}
          alt="Pizza"
        />
      </motion.div>
     
    </div>
</div>



  );
};


export default Hero;

