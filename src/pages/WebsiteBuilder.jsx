import React from 'react'
import { BreadCrumbs, MainBuilder, WebsiteBuilderTitle } from '../components'
import { content } from '../contents/Content'

const WebsiteBuilder = () => {
  const { websiteBuilder } = content;

  return (
    <div>
      <WebsiteBuilderTitle />
      <BreadCrumbs />
      {
        websiteBuilder.map((item, index) => (
          <MainBuilder
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
            highlights={item.highlights}
            dealsImage={item?.deals?.img}
            dealsName={item?.deals?.name}
            ratingsName={item.ratingsName}
            ratings={item.ratings}
          />
        ))
      }

    </div>
  )
}

export default WebsiteBuilder