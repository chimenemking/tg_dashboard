import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

type Props = {}

const Rightbar = (props: Props) => {
  return (
    <>
    <div className=''>
      <div className='bg-gray-100 p-3 rounded-md'>
        <div className=''>
          <Image src="" alt=''/>
        </div>
        <div className='flex flex-col gap-5'>
        <span className='text-blue-500 text-sm'>Available Now</span>
      <h3 className='text-sm'>
        How to use the latest version of admin Dash
      </h3>
      <span className=' text-sm text-[#666666]'>Only takes a few minutes to figure it out</span>
      <p className='text-sm text-[#666666]'>
        This is basically all you need to get started with the latest technology.
        See more below
      </p>
      <Button className='text-sm text-gray-100 w-2/5 justify-between hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500'>
        <MdPlayCircleFilled/>
        Watch
        </Button>
        </div> 
      </div>

      <div className='bg-gray-100 mt-2 p-3 rounded-md'>
        <div className='flex flex-col gap-5'>
        <span className='text-blue-500 text-sm'>Coming soon, stay tuned!</span>
      <h3 className='text-sm'>
        How to use the latest version of admin Dash
      </h3>
      <span className='text-sm text-[#666666]'>Only takes a few minutes to figure it out</span>
      <p className='text-sm text-[#666666]'>
        This is basically all you need to get started with the latest technology.
        See more below
      </p>
      <Button className='text-sm text-gray-100 w-2/5 justify-between hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500'>
        <MdReadMore/>
        Learn
        </Button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Rightbar