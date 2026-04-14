import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] text-center py-20 text-white ">
      <div className="container mx-auto">
        {/* Footer Top part */}
        <div className="">
          <h1 className="text-[61px] "></h1>
          <p className="text-white/50 text-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social whole div */}
          <div className="mb-8">
            <h4 className="my-4 text-5">Social links</h4>

            {/* Icons */}
            <div className="flex justify-center gap-3">
              <div className="p-1 bg-white rounded-full cursor-pointer text-black">
                <RiInstagramFill />
              </div>

              <div className="p-1 bg-white rounded-full cursor-pointer text-black ">
                <BiLogoFacebook />
              </div>

              <div className="p-1 bg-white rounded-full cursor-pointer text-black">
                <RiTwitterXLine />
              </div>
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <hr className="text-white/20 py-5" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>

          <ul className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 cursor-pointer">
            <li>Privacy Policy</li>
            <li> Terms of Service </li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
