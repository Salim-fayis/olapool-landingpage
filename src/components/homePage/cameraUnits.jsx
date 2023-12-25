import React from 'react'
import ImageCard from '../../utils/Card/homeImageCard2'
import cameraData from '../../data/LandingPageData/CameraData'
import SeeAllButton from '../../utils/Button/seeAllButton';

const CameraUnits = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-4">Camera and light unit</h2>
      <SeeAllButton link="/cameraeqip">See All</SeeAllButton>
      <div className="flex flex-wrap">
        {cameraData.map((image) => (
          <ImageCard key={image.id} {...image} />
        ))}
      </div>
    </div>
  )
}

export default CameraUnits