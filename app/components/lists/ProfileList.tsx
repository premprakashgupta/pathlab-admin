import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/avatar-demo.jpg"
import { BiLinkExternal } from 'react-icons/bi'
type Props = {}

const ProfileList = (props: Props) => {
  return (
    <div className='w-full h-14 border-b-[1px] border-gray-400 p-2 flex justify-start items-center gap-2'>
        <div className='flex justify-center items-center basis-1/6 rounded-full'>
        <Image src={Avatar} alt='profile' className='rounded-full' width={50} height={50} /> 
        </div>
        <div className='basis-4/6'>
            <div className="title">premprakash</div>
            <div className="subtitle text-gray-400 text-xs">software developer</div>
        </div>
        <BiLinkExternal className='cursor-pointer'/>
    </div>
  )
}

export default ProfileList