import React from "react";
import Sprite from "./Sprite";

const TopNav = ({ property }) => {
  return (
    <header
      className="w-full h-[240px] flex items-center px-[20px] shadow-md justify-evenly z-20 relative"
      style={{ background: "#FFFFFFD9" }}
    >
      {/* Property Details */}
      <div className="flex flex-col items-center">
        <img src="/svg/list-view.svg" alt="list-view" width={64} height={94} />
      </div>
      <div className="flex flex-col items-center leading-tight">
        <div className="text-[18px] text-gray-600">Own</div>
        <div className="font-light text-[46px]">{property.name}</div>
        <div className="text-[18px] text-gray-600 pb-2">{property.address}</div>
        <Sprite name="house" width={65} height={24} className="icon" />
      </div>

      {/* To Section */}
      <div className="flex flex-col items-center">
        <img src="/svg/map-pin.svg" alt="map-pin" width={64} height={94} />
      </div>
      <div className="flex flex-col items-center leading-tight">
        <div className="text-[18px] text-gray-600">To</div>
        <div className="font-light text-[46px]">Start</div>
        <div className="text-[18px] text-gray-600 pb-2">Place Deposit</div>
      </div>

      {/* Market Value Section */}
      <div className="flex flex-col items-center">
        <img src="/svg/wishlist.svg" alt="wishlist" width={51} height={94} />
      </div>
      <div className="flex flex-col items-center leading-tight">
        <div className="text-[18px] text-gray-600">Market Value</div>
        <div className="font-light text-[46px]">${property.marketValue}</div>
        <div className="text-[18px] text-gray-600 pb-2">Place Deposit</div>
      </div>

      {/* Sort Icon Section */}
      <div className="flex flex-col items-center">
        <img src="/svg/sort.svg" alt="sort" width={85} height={100} />
      </div>
    </header>
  );
};

export default TopNav;
