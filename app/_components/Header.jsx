import React from 'react'
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='shadow-md flex justify-between items-center p-4'>
        <div className='flex gap-8 items-center'>
        <Link href="/"><Image src={"/pizza.png"}  width={80} height={100}/></Link>
<div className=' hidden items-center gap-2 border rounded-full p-2 md:flex '>
   <Search />
    <input type='text' placeholder='search ' className='' /> 
   </div>
    </div>
    <div className='flex gap-4 items-center'>
     <div className='flex gap-5  text-primary'>
       <Link href="/" className=' hover:text-orange-500'>Home </Link>
      <Link href="/Menue"  className=' hover:text-orange-500'>Menue </Link>
      <Link href="/About" className=' hover:text-orange-500'>About  </Link>
     </div>
        <h2 className='flex gap-3'><ShoppingBag />0</h2>
        <Button>Login </Button>
      
    </div>
   
     </div>
  ) 
}

export default Header