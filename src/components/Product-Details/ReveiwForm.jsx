import React from "react";

function ReviewForm() {
  return (
    <div className="p-6 md:p-10 flex flex-col gap-4 md:gap-6 bg-white shadow-md rounded-lg">
      <h2 className="font-semibold text-xl">Send Your Review</h2>
      
      <input
        type="text"
        placeholder="Name *"
        className="p-3 border border-gray-400 rounded-md w-full max-w-lg"
        required
      />
      
      <input
        type="email"
        placeholder="Email *"
        className="p-3 border border-gray-400 rounded-md w-full max-w-lg"
        required
      />
      
      <textarea
        placeholder="Address *"
        className="p-3 border border-gray-400 rounded-md w-full max-w-lg"
        rows="4"
        required
      />
      
      <button className="p-3 bg-[#0F334C] text-white w-full max-w-xs rounded-md">
        Send Review
      </button>
    </div>
  );
}

export default ReviewForm;
