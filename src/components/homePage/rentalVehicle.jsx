import React from 'react'
import ImageCard from '../../utils/Card/homeImageCard2'
import vehicleRentalData from '../../data/LandingPageData/RentVehicle';
import SeeAllButton from '../../utils/Button/seeAllButton';

const RentalVehicle = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-4">Rental Vehicle</h2>
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