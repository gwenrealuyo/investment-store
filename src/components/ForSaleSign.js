import React from "react";

const ForSaleSign = ({ property }) => {
  return (
    <div className="absolute left-[1150px] top-[700px]">
      <div className="flex relative bg-white opacity-[0.66] w-[339px] left-[8px]">
        <img
          src="/svg/home.svg"
          alt="home"
          width={14}
          height={15}
          className="ml-2"
        />
        <div className="text-[23px] text-center flex-1">Public Auction</div>
      </div>
      <div className="absolute right-[-8px] bg-[#052dea] w-[380px] h-[8px] z-2"></div>
      <div className="absolute left-0 top-[-1px] bg-[#052dea] w-[8px] h-[369px] z-2"></div>
      <div className="relative top-[15px] left-[20px] w-[328px] bg-white opacity-[0.86] p-[20px] rounded-[17.66px] border-[4.42px] border-[#052dea] text-center">
        <div className="font-light text-[21px] tracking-[2.33px]">
          Market Value ${property.marketValue.toLocaleString()}
        </div>
        <div className="mt-[20px] text-[15px] text-[#171518] font-extralight">
          <span className="text-[22px]">{property.name}</span>
          <br></br>
          {property.address}
        </div>
        <div className="text-[14.4px] text-center tracking-[1.6px] font-extralight mt-4">
          Reserve Bid: ${property.reserveBid.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ForSaleSign;
