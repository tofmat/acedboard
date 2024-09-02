import Button from "@/components/buttton";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import React from "react";
import { MontserratFont } from "@/assets/font";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Facebook from "@/assets/svg/facebook";
import Twitter from "@/assets/svg/twitter";
import Youtube from "@/assets/svg/youtube";
import Linkedin from "@/assets/svg/linkedin";
import BgFooter from "@/assets/svg/colorBackBottom.svg";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { title: "Project Management", href: "#" },
      { title: "Automation", href: "#" },
      { title: "Integration", href: "#" },
      { title: "Security", href: "#" },
      { title: "Proconomics", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { title: "List", href: "#" },
      { title: "Board", href: "#" },
      { title: "Workload", href: "#" },
      { title: "Calendar", href: "#" },
      { title: "Teams", href: "#" },
      { title: "Files", href: "#" },
    ],
  },
  {
    title: "company",
    links: [
      { title: "About us", href: "#" },
      { title: "Brand", href: "#" },
      { title: "Blogs", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Events", href: "#" },
      { title: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Guides", href: "#" },
      { title: "FAQs", href: "#" },
      { title: "Video Library", href: "#" },
      { title: "24/7 Support", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Community", href: "#" },
    ],
  },
];

const socialLinks = [Facebook, Youtube, Linkedin, Twitter];
const Footer = () => {
  return (
    <div className="mt-12 md:mt-24 bg-custom-gradient pt-0.5 relative">
      <div className="w-full bg-white py-3 md:py-6 px-4 sm:px-8 md:px-14 lg:px-20">
        <div className="flex justify-between gap-4 text-sm relative z-30">
          <Image
            src={Logo}
            alt="logo"
            className="max-w-28 sm:max-w-32 md:max-w-36"
          />

          <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center">
            <Link href={"#"} className="text-[#141414] font-normal text-xl">
              Ready to get started?
            </Link>
            <Button text="Start for free" />
          </div>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24 relative z-30">
          <div className="w-full lg:w-[25%]">
            <p
              className="text-2xl md:text-3xl font-light"
              style={MontserratFont.style}
            >
              Subscribe to our newsletter
            </p>
            <div className="flex mt-4 md:mt-6 items-end w-full bg-white">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full text-sm px-2 py-1 text-gray-700 border-b-2 border-gray-200 focus:outline-none"
              />
              <button
                className={`py-3 md:py-3.5 px-4 md:px-5 rounded-t-xl text-sm bg-custom-gradient font-normal text-white`}
                style={MontserratFont.style}
              >
                <span>
                  <ChevronRightIcon color="#fff" className="size-4" />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 justify-between">
              {footerLinks.map((link, idx) => (
                <div key={idx}>
                  <p className="bg-clip-text text-transparent bg-text-gradient text-lg capitalize">
                    {link.title}
                  </p>

                  <div className="mt-3 flex flex-col gap-3">
                    {" "}
                    {link.links.map((item, idx) => (
                      <Link href={item.href} key={idx}>
                        <p className="pt-3 cursor-pointer capitalize font-light">
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row mt-10 md:mt-16 lg:mt-20 mb-10 justify-between items-center relative z-30">
          <div className="flex flex-col md:flex-row  gap-4 md:gap-8 font-light items-center">
            <p>All Rights Reserved © acedboard 2024</p>
            <div className="flex items-center gap-4 font-light">
              <Link href={"#"}>Terms of Use </Link> |{" "}
              <Link href={"#"}>Privacy Policy</Link>
            </div>
          </div>
          <div className="flex gap-6 font-light items-center [&_*]:size-6">
            <Facebook />
            <Youtube />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </div>

      <Image
        src={BgFooter}
        alt="footer-back"
        className="absolute top-0 h-full z-10"
      />
    </div>
  );
};

export default Footer;
