import React from "react";


const Doc = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100  items-center p-6">
      <div className="w-full flex justify-between mb-4">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Previous</button>
        <div className="flex space-x-2">
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Proceed</button>
      </div>

      <div className="flex w-full">
        {/* Column 1 */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md mr-2">
          <h2 className="text-2xl font-semibold px-4">5. Conversion & Land Use Certificate</h2>
          <div className="border-t-2 border-black mt-8 opacity-55 py-8"></div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium"> Conversation Certificate * *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files
              <input type="file" className="hidden"/>
            </label>
          </div>
        </div>
          <div className="mb-4">
            <div className="flex items-center py-4 justify-between">
              <label className="text-sm font-medium">Land Use Certificate *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>
          <button className="mt-60 ml-96 w-auto bg-black text-white py-4 px-24">Submit</button>
        </div>
        {/* Column 2*/}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md ml-2">
          <h2 className="text-2xl font-semibold"> 6.Encumbrance Certificate</h2>
          <p className="opacity-75 text-black"> (If applicable) </p>
          <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
          <div className="mb-96">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium"> Encumbrance Certificate * *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <button className="mt-16 ml-96 w-auto bg-black text-white py-4 px-24">Submit</button>
        </div>
      </div>
    </div>
  )
};

export default Doc
