import { Button } from '@/components/ui/button'
import React from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'

type Props = {}

const Search = ({placeholder}:any) => {
  return (
    <>
    <div className='flex justify-between'>
        <div className='flex border  items-center'>
        <MdSearch className='m-1'/>
        <input className=" outline-none" type='text' placeholder={placeholder}/>
        </div>
        
    </div>
    </>
  )
}

export default Search