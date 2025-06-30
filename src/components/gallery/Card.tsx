import { IImage } from '@/type/index.d';
import Image from 'next/image'
import React from 'react'
import { LuSave } from "react-icons/lu";



export const Card = () => {
    const img: IImage = {
        id:"0",
        name:"Image 1",
        url:"https://i.ibb.co/zHjLBMy3/26f6bbe0444c45f027ec3607764b394b.jpg",
        category:"photo",
        likes:100,
        shares:30,
    }
  return (
    <figure className='w-fit relative group overflow-hidden rounded:'>
     <Image 
     alt={img.name}
     src={img.url} width={400}
      height={400} 
      className='w-full h-auto max-w-md group-hover:scale-105 transition-all duration-200'/>

     <figcaption className='absolute bottom-0 left-0 w-full p-3 bg-slate-700 text-white flex justify-between items-center gap-2 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200'>
       
        <div className='space-y-2'>
            <p className='text-lg font-semibold'>Image 1</p>
            <p className='text-sm'> {img.likes} likes| {img.shares} sheare</p>
        </div>
    <LuSave className='text-xl'/>
     </figcaption>
    </figure>
  )
}
