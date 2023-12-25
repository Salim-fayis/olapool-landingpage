import React, { useState } from 'react'
import cameraAndEqupi from '../../data/listPageData/cameraAndEquipIcon'


const Icons = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <div className="bg-gray-100 w-full p-4 my-5">
            <h3 className="text-2xl  mb-4">Camera And Equipment</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2">
                {cameraAndEqupi.map((icon) => (
                    <div
                        key={icon.id}
                        className={`flex flex-col items-center p-4 cursor-pointer ${selectedIcon === icon ? 'bg-green-400' : 'bg-green-200'
                            }`}
                        onClick={() => handleIconClick(icon)}
                    >
                        <img
                            src={icon.imageUrl}
                            alt={icon.name}
                            className="w-20 h-12 mb-2 "
                        />
                        <span>{icon.name}</span>
                    </div>
                ))}
            </div>
            {/* <div className="mt-4">
      {selectedIcon && (
        <p className="text-green-500">
          Selected: {selectedIcon.name} (ID: {selectedIcon.id})
        </p>
      )}
    </div> */}
        </div>
    )
}

export default Icons