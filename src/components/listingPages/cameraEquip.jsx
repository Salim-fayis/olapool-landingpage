import React, { useState } from 'react'
import Listing1 from '../../data/listPageData/listingImageData1'
import ListingImageCard from '../../utils/Card/listingImageCard'
import Sort from './sideDiv/sort'
import ToggelButton from '../../utils/Button/toggelButton'
import { sortingOptions } from '../../data/listPageData/toggleData/sorting'

const CameraEquip = () => {
    const [sortBy, setSortBy] = useState('');
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleSort = (sortByOption) => {
        setSortBy(sortByOption);
    };
    return (
        <div >
            <div className=' sort  w-[69%]  mb-5 flex flex-col items-end'>
                <div className=''>
                    <ToggelButton onToggle={(isOpen) => setIsToggleOpen(isOpen)} />
                    <Sort options={sortingOptions} onSort={handleSort} isToggleOpen={isToggleOpen} />
                </div>
            </div>


            <div className="flex flex-wrap lg:ml-[40px] w-[97%] sort-card mt-9">

                {Listing1.map((rental) => (
                    <ListingImageCard key={rental.id} rental={rental} />
                ))}
                {Listing1.map((rental) => (
                    <ListingImageCard key={rental.id} rental={rental} />




                ))}
                {Listing1.map((rental) => (
                    <ListingImageCard key={rental.id} rental={rental} />
                ))}
            </div>
        </div>
    )
}

export default CameraEquip