import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import RoundedBtn from '../buttons/RoundedBtn'
import FlatBtn from '../buttons/FlatBtn'
import { BsPerson } from 'react-icons/bs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import LaodingGif from '@/public/images/loader.gif'

const CustomChart = dynamic(() => import('../charts/CustomChart'), {
  ssr: false,
  loading: () => <Image src={LaodingGif} width={20}height={20} alt='Loading Chart'/>,
});





type Props = {
  data:any
}

const HomeCard = (props: Props) => {
  
  return (
    <div className='bg-white p-3 rounded-md shadow-md w-full h-full'>
        <div className='flex w-full justify-between items-center p-2 gap-1'>
            <div className='flex items-center gap-2'>
                <div className='text-sm'>{props.data.title}</div>
                <BiInfoCircle size={17} className='text-gray-400'/>
            </div>
            <FlatBtn onClick={()=>console.log("Card click")} className='bg-transparent text-xs border border-black'  >See Details</FlatBtn>
        </div>

        <div className='flex w-full gap-2 items-center justify-start mt-4'>
            <BsPerson size={17} className='text-gray-400 border border-gray-400 rounded-sm p-[2px]' />
            <div className='text-5xl font-bold'>{props.data.totalCount}</div>
            <div className='bg-green-300 text-green-600 font-bold text-xs p-1 rounded-sm'>+{props.data.increament}</div>
        </div>
        <div className='mt-4 flex flex-col justify-center items-center gap-2'>
          <div className='w-full h-full'>

          <CustomChart data={props.data.chartData} />
          
          </div>
          <div className="w-full text-sm text-gray-400">Patient Comming increases by <strong>{props.data.increament}%</strong> in the last 7 days</div>
        </div>
    </div>
  )
}

export default HomeCard