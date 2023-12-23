import React from 'react';
import HeroData from '../../data/LandingPageData/HeroData';

function Hero() {
  return (
    <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {HeroData.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/12 mr-10 p-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={item.image} alt={`Image ${index}`} className="w-full h-full object-cover" />
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
