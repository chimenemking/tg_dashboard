import React from 'react'
import { MdArrowDownward, MdArrowUpward, MdShieldMoon } from 'react-icons/md'

type Props = {}

const Card = (props: Props) => {
  return (
    <>
    <div className=' p-3 shadow-xl shadow-gray-300 bg-gray-200 hover:bg-white hover:cursor-pointer hover:transition delay-150 duration-300 ease-in-out border-l-4 hover:border-l-slate-900 rounded-sm'>
      <div className='flex gap-2'>
      <MdShieldMoon size={24}/>
      <div className='flex flex-col gap-2'>
        <span>10.234</span>
        <span>Total Users</span>
        <span className='text-xs font-semibold'>
          <div className='flex'>
          <MdArrowUpward size={14} color='green'/>
          <MdArrowDownward size={14} color='red'/>
          </div>
          <span className='text-xs text-lime-600 font-semibold mr-1'>12%</span>more than previous week
        </span>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Card