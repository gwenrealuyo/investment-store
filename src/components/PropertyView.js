import React from 'react';
import Sprite from './Sprite';

const PropertyView = () => {
  return (
    <div className="w-full flex flex-col relative z-10">
      {/* Header Section */}
      <header
        className="w-full h-[240px] flex items-center px-[40px] shadow-md justify-between z-20 relative"
        style={{ background: '#FFFFFFD9' }}
      >
        {/* Property Details */}
        <div className="flex flex-col items-center">
          <div className="text-[18px] text-gray-600">Own</div>
          <div className="font-light text-[46px]">14 Flood St.</div>
          <div className="text-[18px] text-gray-600 pb-2">New Orleans, LA 70122</div>
          <Sprite name="house" width={65} height={24} className="icon" />
        </div>

        {/* Navigation and Market Info */}
        <div className="flex items-center space-x-[80px]">
          <div className="text-center">
            <div className="text-[14px] text-gray-500">Market Value</div>
            <div className="font-bold text-[24px]">$40,000</div>
          </div>
          <div className="text-center">
            <div className="text-[14px] text-gray-500">Reserve Price</div>
            <div className="font-bold text-[24px]">$5,000</div>
          </div>
        </div>
      </header>

      {/* Overlays */}
      {/* Main Property Info */}
      <div
        className="absolute left-[1150px] top-[500px] bg-white p-[20px] rounded-lg shadow-lg border border-gray-300 text-center"
        style={{ width: '300px' }}
      >
        <div className="text-[18px] font-bold">Public Auction</div>
        <div className="text-[14px] text-gray-500">14 Flood St., New Orleans, LA 70122</div>
        <div className="mt-[20px] text-[24px] font-bold">Market Value: $40,000</div>
        <div className="text-[16px] text-gray-600">Reserve Bid: $5,000</div>
      </div>

      {/* Neighbor Marker */}
      <div
        className="absolute left-[1050px] top-[750px] text-blue-500 text-[18px] font-medium"
      >
        Neighbor?
      </div>

      {/* Property Highlights */}
      <div
        className="absolute left-[850px] top-[100px] bg-white p-[12px] rounded-md shadow border border-gray-200"
        style={{ width: '220px' }}
      >
        <div className="text-[14px] font-semibold">24 Washington Ave.</div>
        <div className="text-red-500 font-bold text-[16px]">-$100</div>
      </div>

      <div
        className="absolute left-[1650px] top-[200px] bg-white p-[12px] rounded-md shadow border border-gray-200"
        style={{ width: '220px' }}
      >
        <div className="text-[14px] font-semibold">289 Hempstead St.</div>
        <div className="text-green-500 font-bold text-[16px]">$5,000</div>
      </div>

      <div
        className="absolute left-[1850px] top-[350px] bg-white p-[12px] rounded-md shadow border border-gray-200"
        style={{ width: '220px' }}
      >
        <div className="text-[14px] font-semibold">57 West Ave G.</div>
        <div className="text-green-500 font-bold text-[16px]">$5,200</div>
      </div>
    </div>
  );
};

export default PropertyView;
