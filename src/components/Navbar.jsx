import { NAVIGATION_INDEX } from "@/consts";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { SlBag } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
const Navbar = () => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  return (
    <>
      <nav className="p-6 flex relative max-md:justify-center justify-between items-center">
        <div>
          <h1 className="text-3xl">
            <Link href={"/"}>
              <span className="font-bold">IQ</span> Bazar
            </Link>
          </h1>
        </div>

        <ul className="flex gap-7 max-md:hidden text-lg">
          <li>
            <Link href={"/Offers"}>Offers</Link>
          </li>
          <li>
            <Link href={"/FAQ"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/Contact"}>{t("CONTACT")}</Link>
          </li>
        </ul>

        {/* On Small Devices */}
        <div
          className={`md:hidden absolute transition-all duration-1000 w-full ${
            isSearchbarOpen ? "mt-0" : "-mt-36"
          }`}
        >
          <SearchBar />
        </div>
      </nav>

      <div
        style={{ zIndex: NAVIGATION_INDEX }}
        className="md:hidden fixed bg-white flex w-full justify-between items-center [&>div]:text-xl [&>div]:cursor-pointer bottom-0 left-0 border-t py-3 px-5"
      >
        <div>
          <FaBars />
        </div>
        <div onClick={() => setIsSearchbarOpen((prev) => !prev)}>
          <BsSearch />
        </div>
        <div>
          <BiHomeSmile />
        </div>
        <div>
          <SlBag />
        </div>
      </div>
    </>
  );
};

export default Navbar;
