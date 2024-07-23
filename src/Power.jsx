import React from 'react';

const Power= () => {
  return (
    <div className="w-full min-h-screen bg-gray-100  items-center p-6">
      <div className="w-full flex justify-between mb-8">
        <button className="text-blue-500">Previous</button>
        <div className="flex space-x-2">
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1.5 bg-black"></div>
          <div className="w-6 h-1 bg-gray-500"></div>
        </div>
        <button className="text-blue-500">Proceed</button>
      </div>
      <div className="flex w-full">
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md mr-2">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">7. Power of Attorney</h2>
        <p className="text-sm mb-4">(If applicable)</p>
        <div className="border-t-2 border-black mt-2 opacity-55 py-5"></div>
        <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium"> Power of Attorney *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
        <div className=" bg-gray-200 mt-4 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          <button className="mt-96 ml-96 w-auto bg-black text-white py-4 px-24">Submit</button>
      </div>
</div>
      <div>
        </div>
         {/* column */}
      <div className="w-1/2 bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">8. NOC (No objection certificate)</h2>
        <div className="border-t-2 border-black mt-10 opacity-55 py-4"></div>
        <div className="flex items-center justify-between mb-1">
              <label className="text-m font-medium"> Urban non-ceiling no-objection certificate *</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
        <div className=" bg-gray-200 mt-4 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
</div>
<div className="mb-4">
            <div className="flex items-center py-4 justify-between">
              <label className="text-m font-medium"> Other Utilities NOCs</label>
              <div className="bg-green-100 border border-green-400 text-green-700 px-2 rounded-full">Document Available</div>
            </div>
            <div className=" bg-gray-200 px-4 py-4">
            <label className="block w-[50%] mx-auto text-white bg-black py-2 text-center cursor-pointer">
              Choose files (max 5MB)
              <input type="file" className="hidden"/>
            </label>
          </div>
          </div>
          
            <div className="flex items-center py-4 justify-between">
            <h2 className="text-m font-medium">
                 If any loan is taken from the bank,
              <h3>then Loan Clearance Letter or NOC from the bank,</h3>
               <h4>stating“All debts settled.” </h4> 
              </h2>
              <div className="bg-red-100 border border-red-400 text-red-700 px-2 rounded-full">
                Document Unavailable
              </div>
            </div>
        <textarea placeholder="Why is the document unavailable? Type here..." className="mt-2 w-full p-2 border rounded-md" rows="3"></textarea>
        <button className="mt-44 ml-96 w-auto bg-black text-white py-4 px-24">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Power;
