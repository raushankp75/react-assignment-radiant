import React from 'react'
import ExclusiveDeals from './ExclusiveDeals'
import ItemsContainer from './ItemsContainer'

const Footer = () => {
  return (
    <footer>
      <ExclusiveDeals />

      <div className='bg-[#212731]'>
        <ItemsContainer />
      </div>
    </footer>
  )
}

export default Footer