import React from 'react';
import rentalsData from '../../data/LandingPageData/RentalData';
import SeeAllButton from '../../utils/Button/seeAllButton';
import HomeImageCard from '../../utils/Card/homeImageCard';

const BestInRental = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold px-4 ">Best in Rentals</h2>
      <SeeAllButton link="/all-rentals">See All</SeeAllButton>

      <div className="flex flex-wrap ">
        {rentalsData.map((rental) => (
          <HomeImageCard key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  );
}

export default BestInRental;
