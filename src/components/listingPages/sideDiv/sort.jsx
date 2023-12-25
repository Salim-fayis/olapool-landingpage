import React, { useState } from 'react';

const Sort = ({ options, onSort, isToggleOpen }) => {
    const [sortBy, setSortBy] = useState('');
    const [distance, setDistance] = useState(50);

    const handleSort = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleDistanceChange = (e) => {
        setDistance(e.target.value);
    };

    return (
        <div>
            {isToggleOpen && (
                <><div className="text-black  font-extralight lg:ml-[10%] sm:w-full">
                    {options.map((option) => (
                        <button key={option.value} className="mb-2 flex flex-col" onClick={() => onSort(option.value)}>
                            {option.label}
                        </button>
                    ))}
                </div><div className="mb-2 mx-8 relative">
                        <div className="text-black font-extralight">Distance</div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={distance}
                            onChange={handleDistanceChange}
                            className="bg-green-500 text-green-500 h-4 mt-1 rounded-full lg:w-[70%]" />
                        <div className="text-xs absolute top-0 right-0 mt-1  lg:ml-[80px]">
                            {distance} km
                        </div>
                    </div><div className="mb-2 mx-8">
                        <h6 className="text-black font-light">Price</h6>
                        <div className='flex '>
                            <button
                                className={`mr-2 mb-2 border w-[150px] h-10 bottom-2${sortBy === 'priceLowToHigh' ? 'bg-green-500' : 'bg-gray-300'} hover:bg-green-600 px-3 py-1 rounded`}
                                onClick={() => handleSort('priceLowToHigh')}
                            >
                                high to low
                            </button>
                            <button
                                className={`border bottom-2 w-[150px] h-10 ${sortBy === 'priceHighToLow' ? 'bg-green-500' : 'bg-white'} hover:bg-green-600 px-3 py-1 rounded`}
                                onClick={() => handleSort('priceHighToLow')}
                            >
                                low to high
                            </button>
                        </div>

                    </div></>


            )}

        </div>
    );
};

export default Sort;
