import CardItem from "@/components/CardItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* cart heading start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Shopping Cart
          </div>
        </div>
        {/* cart heading ends */}

        {/* cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart items start */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
          {/* cart items ends*/}

          {/* cart summary start */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
          </div>
          {/* cart summary ends */}
        
        </div>
        {/* cart content ends*/}
      </Wrapper>
    </div>
  );
};

export default cart;
