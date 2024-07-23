import React from "react";


const Deed = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100  items-center p-6">
      <div className="w-full flex justify-between mb-4">
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Previous</button>
        <div className="flex space-x-2">
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
        </div>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Proceed</button>
      </div>

      <div className="flex w-full">
        {/* Column 1: Deed Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md mr-2">
          <h2 className="text-2xl font-semibold">1. Deed</h2>
          <p className="text-red-500 mb-2">Upload at least 1 document *</p>
          <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Sale Deed *</label>
              <div className="bg-red-100 border border-red-400 text-red-700 px-2 rounded-full">
                Document Unavailable
              </div>
            </div>
            <div className=" bg-gray-200 px-2 py-3">
            <input 
              type="text"
              placeholder="Why is the document unavailable? Type here..."
              className="mt-2 w-full px-4 py-2 border border-gray-400 rounded-md"
            />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Title Deed *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Builder Buyer Agreement *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <button className="mt-72 ml-96 w-auto bg-gray-300 text-gray-500 py-4 px-24 rounded abled ">Submit</button>
        </div>

        {/* Column 2: Building Approval Plan Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md ml-2">
          <h2 className="text-2xl font-semibold">2. Building Approval Plan</h2>
          <p className="text-black font-medium mb-4">(Standalone building or under-construction projects)</p>
          <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Property PID *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">City Survey Sketch *</label>
            <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Updated Tax Receipt *</label>
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded-full ">
                Document Unavailable
              </div>
            </div>
            <input
              type="text"
              placeholder="Why is the document unavailable? Type here..."
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Property Drawings *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Foundation Certificate and Demand Drafts *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>

          <button className="mt-16 ml-96 w-auto bg-black text-white py-4 px-24 rounded  ">Submit</button>
        </div>
      </div>
    </div>
  )
};

export default Deed
