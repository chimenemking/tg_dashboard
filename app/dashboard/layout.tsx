import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import Footer from '../ui/dashboard/footer/footer'

const layout = ({children,}:{children:React.ReactNode}) => {
  return (
    <div className='h-auto flex flex-wrap'>
        <div className=' w-64 bg-slate-200'>
        <Sidebar/>
        </div>
       <div className='flex-1 flex-grow-4 m-3 '>
       <Navbar />
       {children}
       <Footer/>
       </div>
    </div>
  )
}

export default layout