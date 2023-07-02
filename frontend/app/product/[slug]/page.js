import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left Column Start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Left Column Ends */}

          {/* Right Column */}
          <div className="flex-[1] py-3">
            {/* Product Title  */}
            <div className="text-[34px] font-semibold">Jordan Retro 6</div>
            {/* Product Title End*/}

            {/* Subtitle start */}
            <div className="text-lg font-semibold mb-5">
              men&apos;s Golf Shoes
            </div>
            {/* Subtitle end */}

            {/* Product Price start */}
            <div className="text-lg font-semibold">$380.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20 ">{`(Also includes all applicable duties)`}</div>
            {/* Product size chart start*/}
            <div className="mb-10">
              {/* heading start  */}
              <div className="flex justify-between items-center mb-2">
                <div className="text-md font-semibold">Select size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading start ends*/}

              {/* size starts */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 6.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 7.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  US 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  US 12
                </div>
              </div>
              {/* size ends */}

              {/* size error message start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* size error message end */}
            </div>
            {/* Product size chart ends*/}

            {/* add to cart button start*/}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* add to cart button ends*/}

            {/* WishList button start*/}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex justify-center items-center gap-2 hover:opacity-75 mb-10">
              Add to Wishlist
            </button>
            {/* WishList button ends*/}

            {/* product details start */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Be cool. Stay cool. The AJ6 "Cool Grey" lets your style take
                flight with a colorway rooted to Jordan Brand DNA. MJ wore 'em
                when he claimed his first championship and you'll be wearing 'em
                for—well, whatever you want. Laden with sleek features like
                dynamic design lines and an iced outsole, these sneakers bring
                speed and class to any 'fit. After all, they were famously
                inspired by Jordan's wait for it COOL sports car. So lace up,
                and let your kicks do the rest.
              </div>
            </div>
            {/* product details ends */}
          </div>
          {/* Right Column Ends */}
        </div>

        {/* related Products start*/}
        <div>
          <RelatedProducts />
        </div>

        {/* related Products ends*/}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
