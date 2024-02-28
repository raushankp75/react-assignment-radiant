import React from 'react'
import Item from './Item'
import { Categories, Contact } from './footermenu'

const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:px-60 px-5 py-16'>
            <Item links={Categories} title='CATEGORIES' />
            <Item links={Contact} title='CONTACT' />

            <div className='my-auto'>
                <select className='text-[13px] bg-transparent text-[#D1D6DA] p-2 border-none outline-none'>
                    <option value="india">India</option>
                    <option value="unitedstates" selected>United States</option>
                    <option value="china">China</option>
                    <option value="srilanka">Sri Lanka</option>
                </select>
            </div>
        </div>
    )
}

export default ItemsContainer