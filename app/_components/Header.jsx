"use client";
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag, ShoppingCartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSelector } from "react-redux";
const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
  return (
  <div className="shadow-md flex justify-around items-center p-4 sticky top-0 z-50 h-20 bg-white">

        <div className='flex gap-8 items-center'>
        <Link href="/"><Image src={"/logo-pizza.svg"} className='rounded-full'  width={70} height={90}/></Link>
<div className=' hidden items-center gap-2 border rounded-full p-2 md:flex '>
   <Search />
    <input type='text' placeholder='search ' className='' /> 
   </div>
    </div>
    <div className='flex gap-4 items-center'>
     <div className='flex gap-5  text-primary  px-5'>
       <Link href="/" className=' hover:text-orange-500 text-xl'>Home </Link>
    
      <Link href="/About" className=' hover:text-orange-500 text-xl'>About  </Link>
      <Link href="/cart" className="relative">
          <ShoppingCartIcon /> 
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
          
            {cartItems.length}
          </span>
        )}
      </Link>
     </div>
        <h2 className='flex gap-3'>0</h2>
        <Button>Login </Button>
      
    </div>
   
     </div>
  ) 
}

export default Header