'use client'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
    <div className='flex justify-between items-center bg-gray-200 h-10 rounded-md'>
     
     <h3 className='ml-3'> Dashboard Header</h3>
      <div className='flex items-center space-x-1'>
      <MdSearch/>
      <input type='text' placeholder='search...' className=' items-center outline-none bg-gray-300 rounded-sm px-1'/>
      </div>
     
      <div className='flex space-x-5 items-center mr-3'>
      <span className='hover:cursor-pointer'><MdOutlineChat size ={20}/></span>
     <span className='hover:cursor-pointer'> <MdNotifications size ={20}/></span>
      <span className='hover:cursor-pointer'><MdPublic size ={20}/></span>
      </div>
    </div>
    </>
  )
}

export default Navbar