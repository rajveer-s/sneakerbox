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

        {/* size selector */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">US 6</option>
                <option value="2">US 6.5</option>
                <option value="3">US 7</option>
                <option value="4">US 7.5</option>
                <option value="5">US 8</option>
                <option value="6">US 8.5</option>
                <option value="7">US 9</option>
                <option value="8">US 9.5</option>
                <option value="9">US 10</option>
                <option value="10">US 11</option>
                <option value="11">US 12</option>
              </select>
            </div>

            {/* quantity selector  */}
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
