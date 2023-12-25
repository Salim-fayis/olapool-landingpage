import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CiFilter } from 'react-icons/ci';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


const ToggelButton = ({ onToggle }) => {
    const [isToggleOpen, setToggleOpen] = useState(false);

    const handleToggle = () => {
        setToggleOpen(!isToggleOpen);
        onToggle(!isToggleOpen);
    }

    return (
        <div className="flex items-center ml-[30px] w-[95%] bg-gray-100 cursor-pointer rounded lg:h-[3%] mb-5" onClick={handleToggle}>
            <div className="mr-2 pl-3">
                <CiFilter />
            </div>
            <div className="font-semibold">Sort</div>
            <div className="ml-auto mr-5">
                {isToggleOpen ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}
            </div>
        </div>
    )
}

export default ToggelButton