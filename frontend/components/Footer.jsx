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

          {/* Normal Menu  */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* Menu  */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Get Help
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* Menu End*/}

            {/* Menu  */}
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About SneakerBoxFL
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                News
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                Sustainability
              </div>
            </div>
            {/* Menu End*/}
          </div>
          {/* Normal Menu  Ends*/}
        </div>
        {/* Left Side of the footer Ends*/}

        {/* Right Side of the footer*/}
        {/* Right Side of the footer Ends*/}
      </Wrapper>
    </footer>
  );
};

export default Footer;
