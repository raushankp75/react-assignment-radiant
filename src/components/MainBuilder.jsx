import React from 'react'
import Button from './Button';

const MainBuilder = ({ image, name, title, description, highlights, dealsImage, dealsName, ratingsName, ratings }) => {

    return (
        <div className='rounded-[12px] flex md:flex-row flex-col justify-between md:gap-14 gap-2 md:px-8 px-5 my-5 shadow-md bg-[#FFFFFF]'>
            {/* Left */}
            <div className='flex flex-col justify-center items-center gap-3 md:w-fit w-full py-3'>
                <img src={image} alt={image} />
                <p className='text-[13px]'>{name}</p>
            </div>

            {/* Middle */}
            <div className='flex flex-col gap-4 py-3'>
                <h1 className='md:text-[16px] text-[13px] font-[700] text-[#4B5665]'>{title} - <span className='font-normal text-[#4B5665]'>{description}</span></h1>
                <div className='flex flex-col gap-2'>
                    <h1 className='md:text-[16px] text-[13px] font-[700] text-[#2C384A]'>Main highlights</h1>
                    <p className='pl-8 md:text-[16px] text-[13px] font-[400] text-[#4B5665]'>{highlights}</p>
                </div>

                <select className='bg-transparent p-2 border-none outline-none text-[#1B88F4] md:text-[16px] text-[13px] w-fit'>
                    <option value='showmore'>Show more</option>
                </select>
            </div>

            {/* Right */}
            <div className='flex flex-col md:justify-between items-center gap-5'>
                <div className='bg-[#F3F9FF] rounded-br-xl rounded-bl-xl w-[135px] h-[118px] flex flex-col justify-center items-center'>
                    <h1 className='text-[32px] font-[400] leading-[48px]'>{ratings}</h1>
                    <p className='text-[14px] font-[400] leading-[20px]'>{ratingsName}</p>
                </div>

                <Button>View</Button>
            </div>
        </div>
    )
}

export default MainBuilder