"use client";
import FlatBtn from '@/app/components/buttons/FlatBtn'
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react'
import { BiMoon } from 'react-icons/bi';
import { CgOrganisation } from 'react-icons/cg';
import { MdDashboard } from 'react-icons/md';

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='w-full h-full'>
    <div className='w-full h-[50px] mb-3 shadow-md'>
        <Navbar/>
    </div>
    <div className='w-full h-full'>
        {props.children}
    </div>    
    </div>
  )
}


const Navbar=()=>{
    const navigate=useRouter();
    const [active,setActive]=useState(0);
    const navbar=[{title:"Dashboard",prefix:<MdDashboard/>,link:"/super/dashboard"},{title:"Organisation",prefix:<CgOrganisation/>,link:"/super/dashboard/organisation"},]
   const handleNavigate=(link:string,index:number)=>{

         navigate.push(link);
         setActive(index);
   }
    return (
        <div className='w-full h-full bg-white py-3'>
            <div className='w-full h-full flex justify-start items-center gap-3 px-3'>
                <button className='rounded-full bg-black text-white p-1'>
                    <BiMoon/>
                </button>
                {
                    navbar.map((item,index)=>(  

                        <FlatBtn prefix={item.prefix} key={`flat_${index}`} onClick={()=>handleNavigate(item.link,index)} className={`text-xs font-bold ring-1 ${index!==active? "ring-black":"bg-black text-white"} hover:bg-black hover:text-white`} >{item.title}</FlatBtn>
                    ))
                }
            </div>
        </div>
    )
}

export default layout