'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Avatar from 'react-avatar'

type Props = {}

const SingleUserPage = (props: Props) => {
  return (
    <div className='flex gap-5 py-4'>
        <div className=' bg-gray-300 p-4 rounded-sm'>
            <div className='w-full h-[300px] overflow-hidden'>
                <Avatar color='grey'name='' src='' size='300' />
            </div>
            Bruce Willis
        </div>
        <div className='flex-3 flex-grow p-5 '>
            <form action="" className='flex flex-col gap-1'>
            <label> Username</label>
            <input className={"input-style1"} type='text' name="username" placeholder='Bruce Willis' />
            <label> Email</label>
            <input className={"input-style1"} type='text' name="email" placeholder='Dox@gmail.com' />
            <label> Password</label>
            <input className={"input-style1"} type='text' name="password" placeholder='678hu' />
            <label> Phone</label>
            <input className={"input-style1"} type='text' name="phone" placeholder='+45132' />
            <label> Address</label>
            <input className={"input-style1"} type='text' name="address" placeholder='New Brunswick' />
            <label> Is Admin?</label>
            <select className={"input-style1"} name='isAdmin' id='isAdmin'>
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
            </select>
            <div className='py-3'>
            <Button className="w-full text-sm  text-gray-100 hover:cursor-pointer  ease-in-out duration-700 hover:bg-blue-500">Update</Button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage