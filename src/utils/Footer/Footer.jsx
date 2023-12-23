import React from 'react';
import FooterImage1 from '../../assets/FooterImages/FooterImage1.jpg';
import Footers from '../../data/FooterData/Footers';

function Footer() {
  return (
    <>
      <div className="lg:flex items-center mx-4 lg:mx-[250px] bg-gray-200 pl-4 lg:w-[70%] rounded-lg space-x-4">
        {/* Left side content */}
        <div>
          <h3 className="text-3xl lg:ms-20 text-white font-bold">Olapool helpline</h3>
          <p className="text-white p-4 lg:ms-20">Provides support for all your service needs.</p>
          <button className="bg-green-500 lg:ms-20 text-white px-4 py-2 rounded-md">Get Call Back</button>
        </div>
        <div className="lg:pl-[300px] mt-4 lg:mt-0">
          <img src={FooterImage1} alt="Your Image" className="w-48 h-48 object-cover" />
        </div>
        {/* Right side (image) */}
      </div>

      <footer className="bg-gray-800 text-white p-8 mt-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Footers.map((section, index) => (
              <div key={index}>
                <h5 className="text-lg font-bold mb-4">{section.heading}</h5>
                <ul>
                  {section.subnames.map((subname, subindex) => (
                    <li key={subindex} className="text-sm mb-2">
                      {subname}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
