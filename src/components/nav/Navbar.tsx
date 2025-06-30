import Link from 'next/link'
import NavItem from './NavItem'


const Navbar = () => {
  return (
   <nav className='flex justify-end w-full mb-20 pb-8 border-2 border-slate-200 items-end gap-4'>
         {/*logo */}
         <Link href="/" className='text-5xl px-4 py-2 mr-auto text-slate-700 font-black font-sans uppercase tracking-widest visited:text-slate-700 border-4 border-slate-800 shadow-lg active:-translate-y-0.5 transition-all duration-150 rounded'>Gallery</Link>

       {navItems.map((item,i)=> (
        <NavItem key={i} {...item}/>
       ))}
         
    </nav>
  )
}

export default Navbar

const navItems = [
  {
    label:"photo",
    url:'/?category=photo'
  },
  {
    label:"Vector",
    url:'/?category=victor'
  }
]