import React from 'react'
import { BreadCrumbs, MainBuilder, RelatedDealsCard, ResponsiveMainBuilder, WebsiteBuilderTitle } from '../components'
import { content } from '../contents/Content'

const WebsiteBuilder = () => {
  const { websiteBuilder, responsiveWebsiteBuilder, relatedDeals } = content;

  return (
    <div>
      <WebsiteBuilderTitle />
      <BreadCrumbs />

      {
        websiteBuilder.map((item, index) => (
          <MainBuilder
            key={item.id}
            index={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
            highlights={item.highlights}
            dealsImage={item?.deals?.img}
            dealsName={item?.deals?.name}
            stars={item.stars}
            ratings={item.ratings}
            ratingsName={item.ratingsName}
          />
        ))
      }

      {
        responsiveWebsiteBuilder.map((item, index) => (
          <ResponsiveMainBuilder
            key={item.id}
            index={index}
            image={item.image}
            name={item.name}
            title={item.title}
            description={item.description}
            discount={item.discount}
            highlight1={item.highlightsNumber.highlight1}
            highlight2={item.highlightsNumber.highlight2}
            highlight3={item.highlightsNumber.highlight2}
            highlightText1={item.highlightText.highlightText1}
            highlightText2={item.highlightText.highlightText2}
            highlightText3={item.highlightText.highlightText3}
            like1={item.loveit.like1}
            like2={item.loveit.like2}
            like3={item.loveit.like3}
            stars={item.stars}
            ratings={item.ratings}
            ratingsName={item.ratingsName}
          />
        ))
      }

      <div className='py-8'>
        <h1 className='text-[#2C384A] text-[32px] leading-[44px] font-[400] pb-3'>Related deals you might like for</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          {
            relatedDeals.map((item) => (
              <RelatedDealsCard
                image={item.image}
                name={item.name}
                description={item.description}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                discount={item.discount}
                deals={item.deals}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WebsiteBuilder