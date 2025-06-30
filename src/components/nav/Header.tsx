import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-between items-center gap-2'>        <div className='w-full max-w-xl flex items-center  gap-3'>
            <input type="text" placeholder='search...' className='inline-block w-full py-2 bg-sl border-2 border-slate-400 focus:outline-none text-slate-500 rounded' />
            <button className='px-8 py-4 bg-slate-800 text-white text-base uppercase font-bold rounded-xl hover:bg-slate-700 active:translate-y-0.5'>Upload</button>
        </div>
    </div>
  )
}
