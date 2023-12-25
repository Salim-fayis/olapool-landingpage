import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../assets/NavabrImages/img_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import locations from '../../data/LocationData/LocationData';

const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="lg:fixed lg:w-full top-0 z-50 bg-white px-4 flex justify-between items-center">

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>


        <Link to="/" className="pl-4">
          <img src={myImage} alt="Logo" className="w-20 h-12 " />
        </Link>

        {/* Search Bar */}
        <div className="lg:flex items-center space-x">
          <div className="relative">
            <input
              type="text"
              placeholder="Find camera, lens and more ..."
              className="p-2 border border-light-green rounded-l-md focus:outline-none h-8 w-full md:w-[600px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none bg-green-500 text-white rounded-r-md">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div className="hidden lg:flex ml-10">
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="p-2"
            >
              <option value="" disabled>
                Location
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-[50px]">
          <div className="flex items-center border border-green rounded-md">
            <Link to="/login" className="text-black px-4 py-2">
              Log in
            </Link>
          </div>
          <div className="flex items-center border border-green rounded-md">
            <Link to="/signup" className="text-black px-4 py-2">
              Sign up
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/store" className="bg-green-500 text-white p-2 rounded-md">
              Create Store
            </Link>
          </div>
        </div>



      </nav>
      {/* Mobile Menu */}
      <div className={`lg:hidden  ${isMobileMenuOpen ? 'block' : 'hidden'} w-[100%]  mb-2 bg-black  me-[500px] nav`}>
        <div className="flex flex-col items-center justify-center   "> {/* Adjusted width and padding */}
          {/* Include mobile menu links here */}
          <Link to="/login" className="text-white  my-2 p-2 rounded-md border border-green">
            Log in
          </Link>
          <Link to="/signup" className="text-white  my-2 p-2 rounded-md border border-green">
            Sign up
          </Link>
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="p-2 my-2 border border-green rounded-md"
            >
              <option value="" disabled>
                Location
              </option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <Link to="/store" className="bg-green-500 text-white p-2 my-2 rounded-md">
            Create Store
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
