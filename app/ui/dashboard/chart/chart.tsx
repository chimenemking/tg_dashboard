'use client'
import React from 'react'
import { Bar, BarChart, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name:"Mon",
    visit: 2000,
    click: 1200,
  },
  {
    name:"Tue",
    visit: 4000,
    click: 1800,
  },
  {
    name:"Wed",
    visit: 1500,
    click: 1000,
  },
  {
    name:"Thu",
    visit: 5000,
    click: 3000,
  },  
  {
    name:"Fri",
    visit: 3000,
    click: 3900,
  },
]

type Props = {}

const Chart = (props: Props) => {
  return (
    <>
    <div className='text-lg'>Chart Showing weekly Activity</div>
   
     
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left:20,
          bottom: 5,
        }}>

          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip/>
          <Legend/>
          <Bar dataKey="visit" type='monotone' fill='#487eb0'/>
          <Bar dataKey="click" type='monotone' fill='#8884d8'/>
        </BarChart>
      </ResponsiveContainer>
     
    </>
  )
}

export default Chart