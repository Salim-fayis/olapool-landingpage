import React, { useState } from 'react';

function ImageCard({ id, imageUrl, name, money, place }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-auto rounded" />

        <div className="absolute bottom-0 right-2">
          <button
            className={`text-white ${isFavorite ? 'fill-current' : 'fill-none'}`}
            onClick={toggleFavorite}
          >
            &#9829; 
          </button>
        </div>
      </div>

      <div className="mt-2">
        <p className="font-semibold">{name}</p>
        <p className="text-green-500 font-bold">{money}</p>
        <p className="text-gray-500">{place}</p>
      </div>
    </div>
  );
}

export default ImageCard;
