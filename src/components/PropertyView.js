import React from "react";
import TopNav from "./TopNav";
import NavTicker from "./NavTicker";
import ForSaleSign from "./ForSaleSign";

const PropertyView = () => {
  // Property data
  const property = {
    name: "14 Flood St.",
    address: "New Orleans, LA 70122",
    marketValue: 40000, // Updated for auction info
    reserveBid: 5000, // Updated for auction info
  };

  // Bid data
  const bids = {
    outbid: 12,
    active: 24,
    winning: 12,
    properties: [
      {
        name: "14 Flood St.",
        arrowSrc: "/svg/green-arrow.svg",
        arrowAlt: "green-arrow",
        arrowColor: "#00EB3E",
        change: "+$100",
        price: "$5,000",
      },
      {
        name: "24 Washington Ave.",
        arrowSrc: "/svg/red-arrow.svg",
        arrowAlt: "red-arrow",
        arrowColor: "#E91C1C",
        change: "-$100",
        price: "$5,200",
      },
      {
        name: "289 Hempstead St.",
        arrowSrc: "/svg/gray-arrow.svg",
        arrowAlt: "gray-arrow",
        arrowColor: "#8F8F8F",
        change: "$",
        price: "$5,000",
      },
      {
        name: "57 West Ave G.",
        arrowSrc: "/svg/green-arrow.svg",
        arrowAlt: "green-arrow",
        arrowColor: "#00EB3E",
        change: "$",
        price: "$5,200",
      },
    ],
    bottom: {
      winning: 100000,
      active: 100000,
      outbid: 100000,
    },
  };

  return (
    <div className="w-full flex flex-col relative z-10">
      {/* Top Navigation (Header) */}
      <TopNav property={property} />

      {/* Ticker Section */}
      <NavTicker bids={bids} />

      {/* For Sale Sign */}
      <ForSaleSign property={property} />

      {/* Neighbor Marker */}
      <div
        className="absolute left-[450px] top-[820px] text-[18px] font-medium"
        style={{ color: "#6AC1FF" }}
      >
        Neighbor?
      </div>
      <div className="absolute overflow-hidden w-[2560px] h-[1440px]">
        <div class="absolute top-[618px] left-[-208.4px] w-[248.56px] h-[248.72px] rounded-full bg-white border-gray-400 border-[12px]"></div>
        <div class="absolute top-[618px] right-[-207.49px] w-[248.56px] h-[248.56px] rounded-full bg-white border-gray-400 border-[12px]"></div>
      </div>
    </div>
  );
};

export default PropertyView;
