import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px md:gap-0]">
        {/* Left Side of the footer  */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* Menu  */}
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a Store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Become a Partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Sign up for Newsletter
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Send us Feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Student Discount
            </div>
          </div>
          {/* Menu End*/}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
