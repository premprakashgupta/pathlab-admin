import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full h-full bg-gray-800 text-white flex flex-col">
    <div className='h-[20%] flex flex-col bg-red-500 items-center justify-center'>
      <div>logo</div>
      <div>org name</div>
      <div>status</div>
    </div>
    <h2 className="text-2xl font-bold p-4">Super Admin</h2>
    <nav className="flex-grow">
        <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Organizations</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Branches</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
        </ul>
    </nav>
    <div className="p-4 border-t border-gray-700">Logout</div>
</aside>
  )
}

export default Sidebar