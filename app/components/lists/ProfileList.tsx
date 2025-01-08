import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/avatar-demo.jpg"
type Props = {}

const ProfileList = (props: Props) => {
  return (
    <div className='w-full h-14 border-b-[1px] border-gray-400 py-2 flex justify-start items-center gap-2'>
        <div className='flex justify-center items-center basis-1/6 rounded-full'>
        <Image src={Avatar} alt='profile' width={50} height={50} /> 
        </div>
        <div className='basis-5/6'>
            <div className="title text-2xl">premprakash</div>
            <div className="subtitle text-gray-400">software developer</div>
        </div>
    </div>
  )
}

export default ProfileList