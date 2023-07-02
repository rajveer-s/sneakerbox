"use client";

import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] ">
      <Carousel
        infiniteLoop
        thumbWidth={60}
        showStatus={false}
        showIndicators={false}
        className="productCarousel"
      >
        <img src="/p1.png" alt="product img" />
        <img src="/p2.png" alt="product img" />
        <img src="/p3.png" alt="product img" />
        <img src="/p4.png" alt="product img" />
        <img src="/p5.png" alt="product img" />
        <img src="/p6.png" alt="product img" />
        <img src="/p7.png" alt="product img" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
