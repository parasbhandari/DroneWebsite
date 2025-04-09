import React from 'react';

const InquiryForm = () => {
  return (
    <div className="wrapper pt-10 md:pt-20 px-4 md:px-6 lg:px-8 pb-10 md:pb-20 max-w-4xl mx-auto">
      <form className="space-y-4 md:space-y-6">
        {/* Form Row Template - Repeating for each field */}
        {[
          ['First Name', 'text', 'Enter Your First Name'],
          ['Last Name', 'text', 'Enter Your Last Name'],
          ['Phone', 'tel', 'Enter Your Phone Number'],
          ['Email', 'email', 'Enter Your Email'],
          ['Address 1', 'text', 'Enter Your Address'],
          ['Address 2', 'text', 'Enter Your Address'],
          ['City', 'text', 'Enter Your City'],
          ['Postal Code', 'text', 'Enter Your Postal Code'],
        ].map(([label, type, placeholder], index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm transition-all hover:shadow-md"
          >
            <label className="min-w-[160px] text-sm sm:text-base md:text-lg font-medium text-gray-700">
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              className="w-full flex-1 px-4 py-2 text-sm sm:text-base md:text-lg font-medium bg-gray-50 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
        ))}

        {/* Submit Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
          <button 
            type="submit"
            className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#0F334C] hover:bg-blue-700 rounded-lg transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;