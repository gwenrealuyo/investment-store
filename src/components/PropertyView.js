import React from "react";
import Sprite from "./Sprite";

const PropertyView = () => {
  return (
    <div className="w-full flex flex-col relative z-10">
      {/* Header Section */}
      <header
        className="w-full h-[240px] flex items-center px-[20px] shadow-md justify-evenly z-20 relative"
        style={{ background: "#FFFFFFD9" }}
      >
        {/* Property Details */}
        <div className="flex flex-col items-center">
          <img
            src="/svg/list-view.svg"
            alt="list-view"
            width={64}
            height={94}
          />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <div className="text-[18px] text-gray-600">Own</div>
          <div className="font-light text-[46px]">14 Flood St.</div>
          <div className="text-[18px] text-gray-600 pb-2">
            New Orleans, LA 70122
          </div>
          <Sprite name="house" width={65} height={24} className="icon" />
        </div>

        <div className="flex flex-col items-center">
          <img src="/svg/map-pin.svg" alt="map-pin" width={64} height={94} />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <div className="text-[18px] text-gray-600">To</div>
          <div className="font-light text-[46px]">Start</div>
          <div className="text-[18px] text-gray-600 pb-2">Place Deposit</div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svg/wishlist.svg" alt="wishlist" width={51} height={94} />
        </div>
        <div className="flex flex-col items-center leading-tight">
          <div className="text-[18px] text-gray-600">Market Value</div>
          <div className="font-light text-[46px]">$5,000</div>
          <div className="text-[18px] text-gray-600 pb-2">Place Deposit</div>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svg/sort.svg" alt="sort" width={85} height={100} />
        </div>
      </header>
      <div
        className="h-[60px] w-full flex flex-row font-medium justify-between"
        style={{ background: "#FFFFFF80" }}
      >
        <div className="bg-white flex flex-row items-center gap-20 px-4">
          <div className="flex flex-col">
            Outbid <span style={{ color: "#E91C1C" }}>12</span>
          </div>
          <div className="flex flex-col">
            Active <span style={{ color: "#8F8F8F" }}>24</span>
          </div>
          <div className="flex flex-col">
            Winning <span style={{ color: "#00EB3E" }}>12</span>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-80">
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="/svg/green-arrow.svg"
                alt="green-arrow"
                width={14}
                height={13}
                className="mr-1"
              />
              14 Flood St.
            </div>
            <div className="flex ml-3">
              <span className="mr-8" style={{ color: "#00EB3E" }}>
                +$100
              </span>
              <span className=" font-light">$5,000</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="/svg/red-arrow.svg"
                alt="red-arrow"
                width={14}
                height={13}
                className="mr-1"
              />
              24 Washington Ave.
            </div>
            <div className="flex ml-3">
              <span className="mr-8" style={{ color: "#E91C1C" }}>
                -$100
              </span>{" "}
              <span className="font-light">$5,200</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="/svg/gray-arrow.svg"
                alt="gray-arrow"
                width={9}
                height={13}
                className="mr-1"
              />
              289 Hempstead St.
            </div>
            <div className="flex ml-3">
              <span className="mr-8">$</span>{" "}
              <span className="font-light">$5,000</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="/svg/green-arrow.svg"
                alt="green-arrow"
                width={14}
                height={13}
                className="mr-1"
              />
              57 West Ave G.
            </div>
            <div className="flex ml-3">
              <span className="mr-8" style={{ color: "#00EB3E" }}>
                $
              </span>{" "}
              <span className="font-light">$5,200</span>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row items-center gap-20 px-4">
          <div className="flex flex-col">
            Winning <span style={{ color: "#00EB3E" }}>$100,000</span>
          </div>
          <div className="flex flex-col">
            Active <span style={{ color: "#8F8F8F" }}>$100,000</span>
          </div>
          <div className="flex flex-col">
            Outbid <span style={{ color: "#E91C1C" }}>$100,000</span>
          </div>
        </div>
      </div>

      {/* Overlays */}
      {/* Main Property Info */}
      <div
        className="absolute left-[1150px] top-[500px] bg-white p-[20px] rounded-lg shadow-lg border border-gray-300 text-center"
        style={{ width: "300px" }}
      >
        <div className="text-[18px] font-bold">Public Auction</div>
        <div className="text-[14px] text-gray-500">
          14 Flood St., New Orleans, LA 70122
        </div>
        <div className="mt-[20px] text-[24px] font-bold">
          Market Value: $40,000
        </div>
        <div className="text-[16px] text-gray-600">Reserve Bid: $5,000</div>
      </div>

      {/* Neighbor Marker */}
      <div
        className="absolute left-[1050px] top-[750px] text-[18px] font-medium"
        style={{ color: "#6AC1FF" }}
      >
        Neighbor?
      </div>
    </div>
  );
};

export default PropertyView;
