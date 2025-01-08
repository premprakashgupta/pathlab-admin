import { SuperAdminSidebarData } from '@/app/helpers/interfaces'
import React from 'react'

type Props = {
  data:SuperAdminSidebarData[]
}

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full h-full bg-light-primary-50 dark:bg-dark-primary-200 text-light-text dark:text-dark-primary-600 flex flex-col">
    <div className='h-[20%] flex flex-col bg-red-500 items-center justify-center'>
      <div>logo</div>
      <div>org name</div>
      <div>status</div>
    </div>
    <h2 className="text-2xl font-bold p-4">Super Admin</h2>
    <nav className="flex-grow">
        <ul>
          {
            props.data.map((item,index)=>(

              <li className="p-4 hover:bg-light-primary-100 dark:hover:bg-dark-primary-300 cursor-pointer" key={`sidebar_${index}`} >{item.title}</li>
            ))
          }
             </ul>
    </nav>
    <div className="p-4 border-t border-gray-700">Logout</div>
</aside>
  )
}

export default Sidebar