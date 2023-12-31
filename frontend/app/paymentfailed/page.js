import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const pages = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Payment Failed!</div>
          <div className="text-base mt-5">
            For any product related query, drop an email to:
          </div>
          <div className="underline">sneakerboxfl@kicks.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default pages;
