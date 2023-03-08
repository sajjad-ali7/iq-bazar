import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  return (
    <nav className="p-6 flex relative max-md:justify-center justify-between items-center">
      <div>
        <h1 className="text-3xl">
          <span className="font-bold">IQ</span> Bazar
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
          <Link href={"/Contact"}>Contact</Link>
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
  );
};

export default Navbar;
