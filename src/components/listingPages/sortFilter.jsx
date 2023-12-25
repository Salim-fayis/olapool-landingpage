import React, { useState } from 'react';
import CameraEquip from '../listingPages/cameraEquip';
import Sort from './sideDiv/sort';
import { GrSort } from 'react-icons/gr';
import ToggelButton from '../../utils/Button/toggelButton'; // Corrected import statement
import { sortingOptions } from '../../data/listPageData/toggleData/sorting';

const SortFilter = () => {
  const [sortBy, SetSortBy] = useState('');
  const [categoryBy, SetcategoryBy] = useState('');
  const [modelBy, SetModelBy] = useState('');
  const [colorBy, SetColorBy] = useState('');
  const [typeBy, setTypeBy] = useState('');
  const [isSortToggleOpen, setIsSortToggleOpen] = useState(false);
  const [isCategoryToggleOpen, setIsCategoryToggleOpen] = useState(false);
  const [isModelToggleOpen, setIsModelToggleOpen] = useState(false);
  const [isColorToggleOpen, setIsColorToggleOpen] = useState(false);
  const [isTypeToggleOpen, setIsTypeToggleOpen] = useState(false);

  const handleSort = (sortByOption) => {
    SetSortBy(sortByOption);
  };
  const handleCategory = (sortByOption) => {
    SetcategoryBy(sortByOption);
  };
  const handleModel = (sortByOption) => {
    SetModelBy(sortByOption);
  };
  const handleColor = (sortByOption) => {
    SetColorBy(sortByOption);
  };
  const handleType = (sortByOption) => {
    setTypeBy(sortByOption);
  };




  return (
    <div className="flex flex-col sm:flex-row">


      <div className="w-full sm:w-1/4 pr-4">


        <div className="flex items-center mb-2 px-4 ">
          <div className="mr-2"><GrSort /></div>
          <h4 className="text-xl">Filter&Sort</h4>
        </div>

        <div>

          <ToggelButton onToggle={(isOpen) => setIsSortToggleOpen(isOpen)} />
          <Sort options={sortingOptions} onSort={handleSort} isToggleOpen={isSortToggleOpen} />
        </div>
        <div>

          <ToggelButton onToggle={(isOpen) => setIsCategoryToggleOpen(isOpen)} />
          <Sort options={sortingOptions} onSort={handleCategory} isToggleOpen={isCategoryToggleOpen} />
        </div>
        <div>

          <ToggelButton onToggle={(isOpen) => setIsModelToggleOpen(isOpen)} />
          <Sort options={sortingOptions} onSort={handleModel} isToggleOpen={isModelToggleOpen} />
        </div>
        <div>

          <ToggelButton onToggle={(isOpen) => setIsColorToggleOpen(isOpen)} />
          <Sort options={sortingOptions} onSort={handleColor} isToggleOpen={isColorToggleOpen} />
        </div>

        <div>

          <ToggelButton onToggle={(isOpen) => setIsTypeToggleOpen(isOpen)} />
          <Sort options={sortingOptions} onSort={handleType} isToggleOpen={isTypeToggleOpen} />
        </div>
      </div>



      <div className="hidden sm:block border-2 border-gray-300  ml-10 pt-[250px]" />


      <CameraEquip className="w-full sm:w-3/4" />
    </div>
  );
};

export default SortFilter;
