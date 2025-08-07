
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Bestseller from "./_components/Bestseller";
import Contact from "./_components/contact";
import Footer from "./_components/Footer";
import CartPage from "./cart/page";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center bg-orange-100 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <Hero></Hero>
    <Bestseller />
    </div>
   <Contact/>
    <Footer />
   
    </>
  


  );
}
