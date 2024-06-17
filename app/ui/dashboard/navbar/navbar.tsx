'use client'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

type Props = {}

const Navbar = (props: Props) => {
  const pathname = usePathname()
  return (
    <>
    <div className='flex justify-between items-center bg-gray-200 h-10 rounded-md'>
     
     <h3 className='ml-3 capitalize'>{pathname.split('/').pop()}</h3>
     
      <div className='flex space-x-5 items-center mr-3'>
      <div className='flex items-center border border-slate-300 rounded-full space-x-1'>
      <MdSearch  className='m-1'/>
      <input type='text' placeholder='search...' className=' items-center outline-none bg-gray-200 px-1 rounded-r-full'/>
      </div>
      <span className='hover:cursor-pointer'><MdOutlineChat size ={20}/></span>
     <span className='hover:cursor-pointer'> <MdNotifications size ={20}/></span>
      <span className='hover:cursor-pointer'><MdPublic size ={20}/></span>
      </div>
    </div>
    </>
  )
}

export default Navbar