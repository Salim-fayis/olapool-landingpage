import React from 'react'
import Hero from '../components/homePage/Hero'
import BestInRental from '../components/homePage/bestInRental'
import CameraUnits from '../components/homePage/cameraUnits'
import RentalLocation from '../components/homePage/rentalLocation'
import RentalVehicle from '../components/homePage/rentalVehicle'
import Carousel from '../utils/Carousel/carousel'
const  Landing =() => {
  return (
    <div >
       <Carousel />
        <Hero />
        <BestInRental />
        <CameraUnits />
        <RentalLocation />
        <RentalVehicle />
    </div>
  )
}

export default Landing