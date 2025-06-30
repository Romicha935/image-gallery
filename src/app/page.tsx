import { Gallery } from '@/components/gallery/Gallery'
import { Header } from '@/components/nav/Header'
import Navbar from '@/components/nav/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <main className='flex  justify-center items-center min-h-screen bg-sky-200'>
    <div className='w-full max-x-screen-2xl mx-auto p-20 bg-slate-100 rounded-2xl shadow-lg'>
      <Navbar/>
   <Header/>
   <Gallery/>
    </div>
    </main>
  )
}

export default HomePage