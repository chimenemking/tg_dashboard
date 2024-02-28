'use client'
import React from 'react'
import { MdAnalytics, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdSpaceDashboard, MdWork } from "react-icons/md";
import { Chart21, Money, MoneyRecive, Setting2 } from "iconsax-react";
import MenuLink from './menulink/menuLink';
import Avatar from 'react-avatar';
import { Button } from '@/components/ui/button';


const menuItems =[
  {
    title: "Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdSpaceDashboard/>
      },
    
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSpaceDashboard/>
      },
    
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdSpaceDashboard/>
      },
    
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdSpaceDashboard/>
      },

    ],
  
  },
  {
    title:"Analytics",
    list:[
      {
        title:"Revenue",
        path:"/dashboard/revenue",
        icon:<MdWork/>
      },
      {
        title:"Reports",
        path:"/dashboard/reports",
        icon:<MdAnalytics/>
      },
      {
        title:"Teams",
        path:"/dashboard/teams",
        icon:<MdPeople/>
      },
    ],
  },
  {
    title:"Users",
    list:[
      {
        title:"Settings",
        path:"/dashboard/settings",
        icon:<MdOutlineSettings/>
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<MdHelpCenter/>
      },
    ],
  },

]
  
type Props = {}

const Sidebar: React.FC<Props> = () => {
  return (
    <>
    <div className='top-40 sticky'>
      <div className='flex items-center gap-5 m-4'>
        <Avatar name='wim matiks' round size='50'/>
        <div className='flex flex-col'>
          <span className=' font-semibold'>Wim matiks</span>
          <span className='text-sm'> Administrator</span>
        </div>
      </div>
      <ul className='list-none'>
      {
        menuItems.map((monk) =>(
        <li key={monk.title}>
          <span className='m-4'>{monk.title}</span>
          {monk.list.map((item)=>(
            <MenuLink item={item} key={item.title}/>
          ))}
        </li>
        
        ))
      }
      </ul>
      
      <Button className='text-gray-200 m-4 bg-rose-800'>
       <span className='flex items-center gap-2'>
        <MdLogout/>
        Log out
        </span>
        </Button>
    </div>
        
      {/* <Testbar/> */}
    </>
  )
}

export default Sidebar



//  const Testbar = () => {
//   return (
//     <div className="max-w-2xl mx-auto">
//       <aside className="">
//         <div className="flex flex-col w-64 h-screen border-r-2">
//           <div className="overflow-y-auto overflow-x-hidden flex-grow py-5 px-5">
//             <ul className="flex flex-col py-4">
//               <li className="">
//                 <a
//                   href=""
//                   className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 border-transparent"
//                 >
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <Chart21 size="22" color="#292D32" />
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate text-gray-400 active:text-[#8758F2]">
//                     Dashboard
//                   </span>
//                 </a>
//               </li>
//               <li className="">
//                 <a
//                   href=""
//                   className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 border-transparent"
//                 >
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <MoneyRecive size="22" color="#292D32" />
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate text-gray-400 active:text-[#8758F2]">
//                     Salary
//                   </span>
//                 </a>
//               </li>
//               <li className="">
//                 <a
//                   href=""
//                   className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 border-transparent"
//                 >
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <Money size="22" color="#292D32" />
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate text-gray-400 active:text-[#8758F2]">
//                     Salary advance
//                   </span>
//                 </a>
//               </li>
//               <li className="">
//                 <a
//                   href=""
//                   className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 border-transparent"
//                 >
//                   <span className="inline-flex justify-center items-center ml-4">
//                     <Setting2 size="22" color="#292D32" />
//                   </span>
//                   <span className="ml-2 text-sm tracking-wide truncate text-gray-400 active:text-[#8758F2]">
//                     Settings
//                   </span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </div>
//   )
// }
