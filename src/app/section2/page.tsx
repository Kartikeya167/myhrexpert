import React from 'react';

const BrighterFinancialFuture = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/blurimg.png")' }} />
      <div className="w-1/2 bg-[#000080] py-10 px-12 text-white font-normal">
        <h2 className="text-3xl font-bold mb-6">The right advice for a brighter financial future</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <span className="text-3xl mr-3">&#8608;</span>
            <div>
              <h3 className="text-2xl font-bold mb-1">Advisory services</h3>
              <p>Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-3xl mr-3">&#8608;</span>
            <div>
              <h3 className="text-2xl font-bold mb-1">Financing</h3>
              <p>Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-3xl mr-3">&#8608;</span>
            <div>
              <h3 className="text-2xl font-bold mb-1">Capital</h3>
              <p>Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nisi orci non malesuada lobortis id neque. Sed lorem u...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrighterFinancialFuture;