import Button from "@/components/buttton";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";

import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 md:mt-24 bg-custom-gradient pt-0.5">
      <div className="w-full bg-white">
        <div className="flex justify-between gap-4 py-3 md:py-6 px-4 sm:px-8 md:px-14 lg:px-20 text-sm">
          <Image
            src={Logo}
            alt="logo"
            className="max-w-28 sm:max-w-32 md:max-w-36"
          />

          <div className="flex gap-8 items-center">
            <Link href={"#"} className="text-[#141414] font-normal text-xl">
              Ready to get started?
            </Link>
            <Button text="Start for free" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
