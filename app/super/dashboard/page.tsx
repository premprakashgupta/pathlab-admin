"use client";
import React, { useState } from "react";
import RoundedBtn from "@/app/components/buttons/RoundedBtn";
import { CiCalendarDate } from "react-icons/ci";
import { VscCloudDownload } from "react-icons/vsc";
import { GoChevronDown } from "react-icons/go";
import HomeCard from "@/app/components/cards/HomeCard";
import { homePageData } from "@/app/constants/home-data";
import { BiInfoCircle } from "react-icons/bi";
import FlatBtn from "@/app/components/buttons/FlatBtn";
import { BsPerson } from "react-icons/bs";
import ProfileList from "@/app/components/lists/ProfileList";
import Pagination from "@/app/components/pagination/Pagination";    

type Props = {};

const page = (props: Props) => {
  const [data, setData] = useState([1, 2, 3, 4]);
  const [currentPage, setcurrentPage] = useState(1);
  return (
    <div className="w-full">
      <div className="w-full bg-white shadow-lg rounded-lg p-3 flex justify-between items-center mb-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold  ">Dashbaord</h2>
          <p className="text-sm text-gray-400">
            Access the key of summary metrics and patient care status
          </p>
        </div>
        <div className="flex gap-3 items-center mx-2">
          <RoundedBtn
            onClick={() => console.log("days click")}
            prefix={<CiCalendarDate size={17} className="text-gray-400" />}
            suffix={<GoChevronDown size={17} className="text-gray-400" />}
            className="bg-white text-black text-sm"
          >
            Days
          </RoundedBtn>
          <RoundedBtn
            onClick={() => console.log("export click")}
            prefix={<VscCloudDownload size={17} className="text-black" />}
            suffix={<GoChevronDown size={17} className="text-black" />}
            className="bg-blue-500 text-black text-sm font-medium"
          >
            Export
          </RoundedBtn>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap w-1/2 p-3 justify-between gap-2">
          {homePageData.firstPart.map((item) => (
            <div key={item.id} className="w-[48%]">
              <HomeCard data={item} />
            </div>
          ))}
        </div>
        <div className="w-1/2 p-3">
          <div className="w-full">
            <HomeCard
              key={homePageData.secondPart.id}
              data={homePageData.secondPart}
            />
          </div>
          <div className="flex gap-3 mt-3">
            <div className='bg-white p-3 rounded-md shadow-md w-1/2'>
              <div className='flex justify-between items-center p-2 gap-1'>
                <div className='flex items-center gap-2'>
                  <div className='text-sm'>{"doctor"}</div>
                  <BiInfoCircle size={17} className='text-gray-400' />
                </div>
                <FlatBtn onClick={() => console.log("Card click")} className='bg-transparent text-xs border border-black'  >See Details</FlatBtn>
              </div>

              <div className='flex gap-2 items-center justify-start mt-4'>
                <BsPerson size={17} className='text-gray-400 border border-gray-400 rounded-sm p-[2px]' />
                <div className='text-5xl font-bold'>{"04"}</div>
                <div className='bg-green-300 text-green-600 font-bold text-sm p-1 rounded-sm'>+{"23"}</div>
              </div>
              <div className='mt-4 flex flex-col justify-center items-center gap-2'>
                <div className='w-full h-[360px] overflow-y-auto '>
                  {
                    Array.from({ length: 50 }).map((_, index) => (<ProfileList />))
                  }
                  
                </div>

              </div>
            </div>
            <div className='bg-white p-3 rounded-md shadow-md w-1/2'>
              <div className='flex justify-between items-center p-2 gap-1'>
                <div className='flex items-center gap-2'>
                  <div className='text-sm'>{"registration"}</div>
                  <BiInfoCircle size={17} className='text-gray-400' />
                </div>
                <FlatBtn onClick={() => console.log("Card click")} className='bg-transparent text-xs border border-black'  >See Details</FlatBtn>
              </div>

              <div className='flex gap-2 items-center justify-start mt-4'>
                <BsPerson size={17} className='text-gray-400 border border-gray-400 rounded-sm p-[2px]' />
                <div className='text-5xl font-bold'>{"100"}</div>
                <div className='bg-green-300 text-green-600 font-bold text-xs p-1 rounded-sm'>{"New"}</div>
              </div>
              <div className='mt-4 flex flex-col justify-center items-center gap-2'>
                <div className='w-full h-[360px] overflow-y-auto'>

                {
                    Array.from({ length: 50 }).map((_, index) => (<ProfileList />))
                  }
              
                </div>
                  <Pagination currentPage={currentPage}  onPageChange={setcurrentPage} totalCount={50} perPageCount={5} />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-h-[500px]">
      <HomeCard
            key={homePageData.thirdPart.id}
            data={homePageData.thirdPart}
          />
      </div>
    </div>
  );
};

export default page;
