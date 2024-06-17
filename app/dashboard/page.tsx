import React from 'react'
import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
  return (
  <>
      <div className='py-3 grid grid-flow-col gap-5 grid-cols-4 m-1'>
      <div className='gap-5 grid col-span-3'>
        <div className='grid col-span-4 grid-flow-col-dense gap-5 space-x-3'>
      <Card/>
      <Card/>
      <Card/>
      </div>
        <div className='grid grid-flow-row col-span-4 gap-3 min-h-screen'>
        <Transactions/>
        <Chart/>
        </div>
        </div>
      <div className='col-span-1  min-h-screen'>
        <Rightbar/>
      </div>
      </div>
  </>

  )
}

export default Dashboard

