import React, { useState } from 'react';

function Verfication () {
  const [country1, setCountry1] = useState('');

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'India',
    'Germany',
    'France',
    'China',
    'Japan',
    'South Korea'
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100  items-center p-6">
    <div className="w-full flex justify-between mb-4">
      <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Previous</button>
      <div className="flex space-x-2">
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
        </div>
      <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Proceed</button>
    </div>

    <div className="flex w-full">
    
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md mr-2">
        <h2 className="text-2xl font-semibold">3.Information on pending/past litigation <span className='opacity-45'> (if applicable) </span></h2>
                    <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
                    <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium mt-10"> Encumbrance Certificate </label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center  cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
        </div>
        <button className="mt-96 ml-96 mb-48 bg-black text-white py-4 px-24 ">Submit</button>
        </div>

        { /* second */ }
        
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md ml-2">
          <h2 className="text-2xl font-semibold"> 4. Verification of Identity of Seller</h2>
          <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
          <div className="mb-4">
            <label className="block text-black"> 1. Residence Status</label>
            <input type="text" className="mt-4 mb-6 border-b-black w-full px-6 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block  text-black"> 2. Nationality</label>
            <select
              className="mt-2 w-full px-2 py-2 mb-8 border border-b-gray-950 rounded-md"
              value={country1}
              onChange={(e) => setCountry1(e.target.value)}
            >
              <option value="">Choose the country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium"> 3. Encumbrance Certificate </label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          <button className="mt-56 ml-96 bg-black text-white py-4 px-24 ">Submit</button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Verfication;
