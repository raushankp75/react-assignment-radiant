import React from 'react'
import Button from './Button';
import { Ticksign } from '../assets';
import Star from './Star';

const ResponsiveMainBuilder = ({ image, name, title, description, discount, highlight1, highlight2, highlight3, highlightText1, highlightText2, highlightText3, like1, like2, like3, stars, ratings, ratingsName }) => {
  return (
    <div className='rounded-[12px] flex md:flex-row flex-col justify-between md:gap-12 gap-2 md:px-8 px-5 my-5 shadow-md bg-[#FFFFFF]'>
      {/* Left */}
      <div className='flex flex-col justify-center items-center gap-3 md:w-fit w-full py-3'>
        <img src={image} alt={image} />
        <p className='text-[13px]'>{name}</p>
      </div>

      {/* Middle */}
      <div className='flex flex-col gap-4 py-3'>
        <h1 className='md:text-[16px] text-[13px] font-[700] text-[#4B5665]'>{title} - <span className='font-normal text-[#4B5665]'>{description}</span></h1>

        <p className='text-[#074786] text-[13px] bg-[#F2F4F7] w-fit p-1 rounded-[4px] leading-3'>{discount}</p>

        <div className='flex flex-col gap-2'>
          <h1 className='md:text-[16px] text-[13px] font-[700] text-[#2C384A]'>Main highlights</h1>
          <div className='flex flex-col gap-2 bg-[#FFF4ED] rounded-[12px] px-3 py-3 ml-5'>
            <div className='flex items-center gap-2'>
              <span className='text-[#1B88F4] bg-[#FFFFFF] rounded-[4px] px-2 py-1'>{highlight1}</span>
              <p className='md:text-[15px] text-[13px] font-[400] text-[#4B5665]'>{highlightText1}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-[#1B88F4] bg-[#FFFFFF] rounded-[4px] px-2 py-1'>{highlight2}</span>
              <p className='md:text-[15px] text-[13px] font-[400] text-[#4B5665]'>{highlightText2}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-[#1B88F4] bg-[#FFFFFF] rounded-[4px] px-2 py-1'>{highlight3}</span>
              <p className='md:text-[15px] text-[13px] font-[400] text-[#4B5665]'>{highlightText3}</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='md:text-[16px] text-[13px] font-[700] text-[#2C384A]'>Why we love it</h1>
          <div className='flex flex-col'>
            <div className='flex gap-2'>
              <img src={Ticksign} alt={Ticksign} className='w-fit' />
              <p className='md:text-[15px] text-[13px] font-[400] leading-[24px] text-[#4B5665]'>{like1}</p>
            </div>
            <div className='flex gap-2'>
              <img src={Ticksign} alt={Ticksign} className='w-fit' />
              <p className='md:text-[15px] text-[13px] font-[400] leading-[24px] text-[#4B5665]'>{like2}</p>
            </div>
            <div className='flex gap-2'>
              <img src={Ticksign} alt={Ticksign} className='w-fit' />
              <p className='md:text-[15px] text-[13px] font-[400] leading-[24px] text-[#4B5665]'>{like3}</p>
            </div>
          </div>
        </div>

        <select className='bg-transparent p-2 border-none outline-none text-[#1B88F4] md:text-[16px] text-[13px] w-fit'>
          <option value='showmore'>Show more</option>
          <option value='showmore'>Show more</option>
          <option value='showmore'>Show more</option>
          <option value='showmore'>Show more</option>
        </select>
      </div>

      {/* Right */}
      <div className='flex flex-col md:justify-between items-center gap-5'>
        <div className='bg-[#F3F9FF] rounded-br-xl rounded-bl-xl w-[135px] h-[118px] flex flex-col justify-center items-center'>
          <h1 className='text-[32px] font-[400] leading-[48px] text-[#074786]'>{ratings}</h1>
          <p className='text-[14px] font-[400] leading-[20px] text-[#074786]'>{ratingsName}</p>
          <Star stars={stars} />
        </div>

        <Button>View</Button>
      </div>
    </div>
  )
}

export default ResponsiveMainBuilder