
import Link from 'next/link';
import React from 'react'

type Props = {
  item: {
    path: string;
    icon: React.ReactElement;
    title: string;
  };
}

const menuLink: React.FC<Props> = ({ item }) => {
  return (
    <Link href={item.path} className='flex p-6 items-center hover:bg-white gap-3 m-1 border-r-4  hover:border-r-slate-900 transition delay-150 duration-600 ease-in-out'>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default menuLink

