import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-6 flex max-md:justify-center justify-between items-center">
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
    </nav>
  );
};

export default Navbar;
