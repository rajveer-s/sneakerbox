import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

const CardItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" alt="product" />
      </div>
      {/* Image ends */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title*/}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan Retro 6 G
          </div>

          {/* Product subtitle*/}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men&apos;s Golf Shoes
          </div>

          {/* Product Price */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            $380.00
          </div>
        </div>
        {/* Product subtitle*/}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Golf Shoes
        </div>
      </div>
    </div>
  );
};

export default CardItem;
