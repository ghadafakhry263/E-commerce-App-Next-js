import React from 'react'
import Image from 'next/image'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='shadow-md flex justify-between items-center p-2'>
        <div className='flex gap-8 items-center'>
            <Image src={"/Logo.png"}  width={100} height={100}/>
<h2 className='flex gap-2 items-center border rounded-full bg-slate-200 p-2'> <LayoutGrid />Categories </h2>
<div className=' hidden items-center gap-2 border rounded-full p-2 md:flex '>
   <Search />
    <input type='text' placeholder='search ' className='' /> 
   </div>
    </div>
    <div className='flex gap-4 items-center'>
        <h2 className='flex gap-3'><ShoppingBag />0</h2>
        <Button>Login </Button>
    </div>
   
     </div>
  ) 
}

export default Header