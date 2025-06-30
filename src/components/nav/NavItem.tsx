import Link from 'next/link'
import { FC } from 'react';


type TProps = {label:string; url:string};
const NavItem : FC<TProps> = ({url,label}) => {
    
  return (
    <div>
         <Link href={url} className="inline-block p-2 text-lg text-slate-800 hover:text-white hover:bg-slate-800 tracking-wider uppercase relative group z-20 after:content-[''] after:absolute after:left-0 after:bottom-1 after:bg-slate-800 after:w-full after:h-px group-hover:after:h-9 after:-z-20 transition-all duration-150 active:translate-y-0.5">Photo</Link>
    </div>
  )
}

export default NavItem
