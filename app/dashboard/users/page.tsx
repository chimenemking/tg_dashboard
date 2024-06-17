import { columns } from '@/app/payment/columns'
import { DataTable } from '@/app/payment/data-table'
import Search from '@/app/ui/dashboard/search/search'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { MdAdd } from 'react-icons/md'

type Props = {
  
}

const data = [
  {
    id: "728ed52f",
    name: "Peter John",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    date: "09-12-23"
  },
  {
      id: "728ed52f",
      name: "Paul Davies",
      amount: 200,
      status: "processing",
      email: "m@example.com",
      date: "08-12-23"
    },
    {
      id: "728ed52f",
      name: "Esther Fannings",
      amount: 300,
      status: "success",
      email: "m@example.com",
      date: "10-12-23"
    },
    {
      id: "728ed52f",
      name: "Ian Mcgregor",
      amount: 400,
      status: "failed",
      email: "m@example.com",
      date: "19-12-23"
    },
]

const UsersPage = ({}) => {
  return (
    <>
    <div className='py-5'>
      <div className='flex justify-between'>
      <Search placeholder="looking for a user?"/>
       <Link href={'/dashboard/users/add'}>
       <Button className='text-sm text-gray-100  justify-between hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500'>
          <MdAdd size={18} />
         Add New
        </Button>
       </Link>
      </div>
      <div className=" py-3">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
    </>
  )
} 

export default UsersPage