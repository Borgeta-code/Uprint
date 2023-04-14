import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Image from "next/image";
import logo from "../public/logoUprint.svg";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 h-20 z-50 bg-[#000000e0] w-screen">
        <nav className="relative w-full flex justify-center items-center p-4">
          <Image src={logo} alt="logo" className="w-[100px]" />
          <div className="absolute right-2">
            {/* <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              rounded={true}
              color="#ffffff"
            /> */}
          </div>
        </nav>
      </header>
    </>
  );
}
