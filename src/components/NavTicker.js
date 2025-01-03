import React from "react";

const NavTicker = ({ bids }) => {
  return (
    <div
      className="h-[60px] w-full flex flex-row font-medium justify-between"
      style={{ background: "#FFFFFF80" }}
    >
      {/* Status Ticker */}
      <div className="bg-white flex flex-row items-center gap-20 px-4">
        <div className="flex flex-col">
          Outbid <span style={{ color: "#E91C1C" }}>{bids.outbid}</span>
        </div>
        <div className="flex flex-col">
          Active <span style={{ color: "#8F8F8F" }}>{bids.active}</span>
        </div>
        <div className="flex flex-col">
          Winning <span style={{ color: "#00EB3E" }}>{bids.winning}</span>
        </div>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-4 items-center gap-80">
        {bids.properties.map((property, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex">
              <img
                src={property.arrowSrc}
                alt={property.arrowAlt}
                width={14}
                height={13}
                className="mr-1"
              />
              {property.name}
            </div>
            <div className="flex ml-3">
              <span className="mr-8" style={{ color: property.arrowColor }}>
                {property.change}
              </span>
              <span className="font-light">{property.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Status */}
      <div className="bg-white flex flex-row items-center gap-20 px-4">
        <div className="flex flex-col">
          Winning{" "}
          <span style={{ color: "#00EB3E" }}>${bids.bottom.winning}</span>
        </div>
        <div className="flex flex-col">
          Active <span style={{ color: "#8F8F8F" }}>${bids.bottom.active}</span>
        </div>
        <div className="flex flex-col">
          Outbid <span style={{ color: "#E91C1C" }}>${bids.bottom.outbid}</span>
        </div>
      </div>
    </div>
  );
};

export default NavTicker;
