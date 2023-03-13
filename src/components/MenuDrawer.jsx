import { CART_DRAWER_INDEX } from "@/consts";
import { App_Context } from "@/pages/_app";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
const MenuDrawer = () => {
  const { setShowMenuDrawer, showMenuDrawer } = useContext(App_Context);

  useEffect(() => {
    return () => setShowMenuDrawer(false);
  }, []);
  return (
    <>
      <div
        className={`w-full fixed transition-all duration-500 top-0 h-full bg-black opacity-40 ${
          showMenuDrawer ? "right-0" : "-right-full"
        }`}
        onClick={() => setShowMenuDrawer(false)}
        style={{ zIndex: CART_DRAWER_INDEX }}
      ></div>
      <div
        className={`bg-white transition-all duration-500 min-h-screen fixed top-0 ${
          showMenuDrawer ? "left-0" : "-left-full"
        }`}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content">
          <div className="flex justify-between items-center p-5">
            <div>
              <h1 className="text-3xl">
                <Link href={"/"}>
                  <span className="font-bold">IQ</span> Bazar
                </Link>
              </h1>
            </div>
            <button
              className="block scale-150"
              onClick={() => setShowMenuDrawer(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <hr />
          <ul className="pt-10 p-4 w-80 flex-col flex gap-5 [&>li]:transition-all [&>li]:duration-200 [&>li]:hover:pl-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/Offers"}>Offers</Link>
            <Link href={"/FAQ"}>FAQ</Link>
            <Link href={"/Contact"}>Contact</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
