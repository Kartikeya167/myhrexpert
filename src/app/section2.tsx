import React from "react";

const BrighterFinancialFuture = () => {
  return (
    <div className="flex flex-col md:flex-row mt-[-63px]">
      {/* Left Image Section */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: 'url("/blurimg.png")' }}
      />

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 bg-[#000080] py-10 px-6 md:px-12 text-white font-normal">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          The right advice for a brighter financial future
        </h2>
        <div className="space-y-6">
          {/* Advisory Services */}
          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Advisory services</h3>
              <p className="text-sm md:text-base">
                Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...
              </p>
            </div>
          </div>
          {/* Financing */}
          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Financing</h3>
              <p className="text-sm md:text-base">
                Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...
              </p>
            </div>
          </div>
          {/* Capital */}
          <div className="flex flex-col md:flex-row items-start">
            <span className="text-3xl mr-0 md:mr-3 mb-2 md:mb-0">&#8608;</span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Capital</h3>
              <p className="text-sm md:text-base">
                Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrighterFinancialFuture;
