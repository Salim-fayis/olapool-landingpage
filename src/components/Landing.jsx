import React from 'react'
import Hero from '../pages/Hero/Hero'
import BestInRental from '../pages/LandingPage/BestInRental'
import CameraUnits from '../pages/LandingPage/CameraUnits'
import RentalLocation from '../pages/LandingPage/RentalLocation'
import RentalVehicle from '../pages/LandingPage/RentalVehicle'

function Landing() {
  return (
    <div >
        <Hero />
        <BestInRental />
        <CameraUnits />
        <RentalLocation />
        <RentalVehicle />
    </div>
  )
}

export default Landing