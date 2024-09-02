import Image from "next/image";
import React from "react";
import Logo from "@/assets/svg/logo.svg";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MontserratFont } from "@/assets/font";
import Button from "@/components/buttton";

const navLinks = [
  { text: "Features", href: "#", hasChildren: true },
  { text: "Solutions", href: "#", hasChildren: true },
  { text: "Case Study", href: "#", hasChildren: false },
  { text: "Resources", href: "#", hasChildren: true },
  { text: "Pricing", href: "#", hasChildren: false },
];
const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between gap-4 py-3 md:py-6 px-4 sm:px-8 md:px-14 lg:px-20 text-sm">
        <Image
          src={Logo}
          alt="logo"
          className="max-w-28 sm:max-w-32 md:max-w-36"
        />

        <div className="gap-8 justify-center items-center hidden lg:flex text-[#141414] font-normal">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-2"
              style={MontserratFont.style}
            >
              {item.text}
              {item.hasChildren && <ChevronDownIcon className="size-4" />}
            </Link>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <Link href={"#"} className="text-[#141414] font-normal">
            Sign in
          </Link>
          <Button text="Start for free" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
