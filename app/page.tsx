import Content from "@/sections/content";
import Heading from "@/sections/heading";
import BgSide from "@/assets/svg/colorBackSide.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 sm:px-8 md:px-14 lg:px-20 relative z-20">
      <Heading />
      <Content />

      <Image
        src={BgSide}
        alt="side-back"
        className="absolute top-0 left-0 -z-10"
      />
    </main>
  );
}
