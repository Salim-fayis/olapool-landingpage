import React from 'react';
import rentalsData from '../../data/LandingPageData/RentalData';
import SeeAllButton from '../../utils/Button/SeeAllButton';

function BestInRental() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold ">Best in Rentals</h2>
      <SeeAllButton link="/all-rentals">See All</SeeAllButton>

      <div className="flex flex-wrap">
        {rentalsData.map((rental) => (
          <div key={rental.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 relative">
            <img
              src={rental.imageUrl}
              alt={`Rentals ${rental.id}`}
              className="w-full h-auto rounded"
            />
            <div className="p-2 text-black flex items-center">
              <img
                src={rental.smallImageUrl}
                alt={`Small Image ${rental.id}`}
                className="mr-2 h-5 w-5 rounded-full"
              />
              <p className="font-semibold">{rental.title}</p>
              <div className='bg-yellow-100 ml-2'>
                <span className="ml-2 ">Top Rated</span>
              </div>
            </div>
            <div className=''>
              <p className="ml-5 tracking-wide w-[200px] sm:w-auto underline">{rental.paraText}</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500 text-2xl">&#9733; {rental.rating} <label className='text-black'>5.0</label></div>
            </div>
            <div className="ml-2 font-extrabold mt-3">{rental.money}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestInRental;
