import { title } from 'process';
import React from 'react'
import { MdAnalytics, MdHelpCenter, MdOutlineSettings, MdPeople, MdSpaceDashboard, MdWork } from "react-icons/md";

const menuItems =[
  {
    title: "Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdSpaceDashboard/>,
      },
    
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSpaceDashboard/>,
      },
    
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdSpaceDashboard/>,
      },
    
      {
        title:"transactions",
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
        icon:<MdOutlineSettings/>,
      },
      {
        title:"Help",
        path:"/dashboard/help",
        icon:<MdHelpCenter/>,
      },
    ],
  },

]
  
type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className=''>Sidebar</div>
  )
}

export default Sidebar