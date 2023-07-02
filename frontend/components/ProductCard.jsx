import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/product/1">
      <Image
        className="w-full"
        src="/product-1.webp"
        alt="product"
        width={1000}
        height={1000}
      />
    </Link>
  );
};

export default ProductCard;
