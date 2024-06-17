import DemoPage from '@/app/payment/page'
import React from 'react'

type Props = {}

const Transactions = (props: Props) => {
  return (
    <div className='bg-gray-100 rounded-sm'>
    <h1 className='text-lg m-2'>Latest Transactions</h1>
    <div><DemoPage/></div>
    </div>
  )
}

export default Transactions