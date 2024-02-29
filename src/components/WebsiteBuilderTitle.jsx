import React from 'react'
import { content } from '../contents/Content'

const WebsiteBuilderTitle = () => {

    const { heading } = content;

    return (
        <div className='flex flex-col gap-3'>
            {/* Heading */}
            <h1 className='md:text-[48px] text-[27px] font-[400] text-[#2C384A]'>Best Website builders in the US</h1>

            {/* Sub Heading1 */}
            <div className='w-full overflow-x-scroll scrollbar-none'>
                <hr />
                <div className='flex justify-between md:text-[13px] text-[10px]'>
                    <div className='flex md:gap-8 gap-4'>
                        <div className='flex md:gap-2 gap-1 items-center text-[#4B5665]'>
                            <img src={heading.lastUpdated.image} alt={heading.lastUpdated.image} />
                            <p>Last Updated - </p>
                            <p>{heading.lastUpdated.name}</p>
                        </div>

                        <div className='flex md:gap-2 gap-1 items-center text-[#4B5665]'>
                            <img src={heading.disclosure.image} alt={heading.disclosure.image} />
                            <p>{heading.disclosure.name}</p>
                        </div>
                    </div>

                    <select className='bg-transparent p-2 border-none outline-none text-[#727D87] md:text-[13px] text-[10px]'>
                        {
                            heading.relevant.map((rel, index) => (
                                <option key={index} value={rel.value}>{rel.name}</option>
                            ))
                        }
                    </select>
                </div>
                <hr />
            </div>

            {/* Sub Heading2 */}
            <ul className='flex md:gap-20 gap-3 md:p-3 p-1 w-full overflow-x-scroll scrollbar-none'>
                {
                    heading.subHeading.map((item) => (
                        <a href={item.links} key={item.name}><li className='list-none md:text-[14px] text-[12px] text-[#4B5665] flex-nowrap'>{item.name}</li></a>
                    ))
                }
            </ul>
        </div>
    )
}

export default WebsiteBuilderTitle