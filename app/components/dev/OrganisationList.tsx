import Image from 'next/image'
import React from 'react'
import image from "@/public/images/avatar-demo.jpg"
import { BiLinkExternal } from 'react-icons/bi'

type Props = {}

const OrganisationList = (props: Props) => {
    const orgList=[
        {
            name:"Safe Hospital",
            logo:"",
            website:"",
            new:false,
            popular:true,
            rating:4.5,
        },
        {
            name:"Safe Hospital",
            logo:"",
            website:"",
            new:false,
            popular:true,
            rating:4.5,
        },
    ]
  return (
    <div className='w-full h-full flex gap-2'>
       {orgList.map((org,index)=>( <div key={`organisation_${index}`} className="outer-box bg-white rounded-md shadow-md flex justify-center items-center">
            <div className='inner-box relative w-auto h-auto m-3 p-3 bg-white ring-1 ring-gray-400 rounded-md'>
               <div className='flex justify-start items-center gap-2'>
                    <Image src={image} alt='org-logo' width={100} height={100} className='ring-2 ring-sky-500 rounded-full' />
                    <div>
                        <div className='text-3xl'>{org.name}</div>
                        <div className='flex justify-start items-center gap-1 text-xs'> <div>www.pathlab.com</div> <BiLinkExternal/> </div>
                        <div>sohana road, gurgaon,haryana 1800201</div>
                    </div>
                </div> 
                <span className='tag font-medium rounded-tr-md absolute top-[1px] right-[1px] bg-green-300 text-green-500 p-1 text-xs'>
                    Popular
                </span>
            </div>
        </div>))}
    </div>
  )
}

export default OrganisationList