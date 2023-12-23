import React from 'react'
import ImageCard from '../../utils/Card/ImageCard'
import vehicleRentalData from '../../data/LandingPageData/RentVehicle';
import SeeAllButton from '../../utils/Button/SeeAllButton';

function RentalVehicle() {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold ">Best in Rentals</h2>
    <SeeAllButton link="/all-rentals">See All</SeeAllButton>
  <div className="flex flex-wrap">
  {vehicleRentalData.map((image) => (
    <ImageCard key={image.id} {...image} />
  ))}
</div>
</div>
  )
}

export default RentalVehicle