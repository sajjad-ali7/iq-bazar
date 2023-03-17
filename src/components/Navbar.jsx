import { NAVIGATION_INDEX } from "@/consts";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { SlBag } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import { App_Context } from "@/pages/_app";
const Navbar = () => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const { setShowCart, setShowMenuDrawer } = useContext(App_Context);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 84) {
        console.log(window.screenY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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
          <li className="font-semibold">
            <Link href={"/Offers"}>Offers</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/FAQ"}>FAQ</Link>
          </li>
          <li className="font-semibold">
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>

        {/* On Small Devices */}
        <div
          className={`md:hidden absolute transition-all duration-1000 w-full ${
            isSearchbarOpen ? "mt-0" : "-mt-40"
          }`}
        >
          <SearchBar />
        </div>
      </nav>

      <div
        style={{ zIndex: NAVIGATION_INDEX }}
        className="md:hidden fixed bg-white flex w-full justify-between items-center [&>div]:text-2xl [&>div]:cursor-pointer [&>div]:py-2 bottom-0 left-0 border-t py-3 px-5"
      >
        <div onClick={() => setShowMenuDrawer(true)}>
          <FaBars />
        </div>
        <div onClick={() => setIsSearchbarOpen((prev) => !prev)}>
          <BsSearch />
        </div>
        <div>
          <BiHomeSmile />
        </div>
        <div onClick={() => setShowCart(true)}>
          <SlBag />
        </div>
      </div>
    </>
  );
};

export default Navbar;
