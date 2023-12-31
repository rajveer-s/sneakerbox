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

            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  $380.00
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>
            {/* button starts */}
            <button
              className="w-full py-4 rounded-full bg-black text-white 
            text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Checkout
            </button>
            {/* button ends */}
          </div>
          {/* cart summary ends */}
        </div>
        {/* cart content ends*/}

        {/* empty screen */}

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            alt="empty cart"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            It looks like you have not added anything to your cart.
            <br />
            Check out some of our fire stocks
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium
          transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default cart;
