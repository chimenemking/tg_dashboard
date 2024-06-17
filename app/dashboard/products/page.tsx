import { DataTable } from '@/app/payment/data-table'
import Search from '@/app/ui/dashboard/search/search'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { MdAdd } from 'react-icons/md'

type Props = {}

const Products = (props: Props) => {
  return (
    <>
    <div className='py-5'>
    <div className='flex justify-between py-2'>
    <Search placeholder="Looking for something?..."/>
    <Link href={'/dashboard/products/add'}>
    <Button className='text-sm text-gray-100  justify-between hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500'>
          <MdAdd size={18} />
         Add New
        </Button>
    </Link>
    </div>
    <DataTable columns={[]} data={[]}/>
    </div>
    </>
  )
}

export default Products