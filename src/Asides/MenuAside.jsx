import { CART_ASIDE_INDEX } from "@/consts";
import { showMenuAsideState } from "@/recoil";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
const MenuDrawer = () => {
  const [showMenuDrawer, setShowMenuDrawer] =
    useRecoilState(showMenuAsideState);
  useEffect(() => {
    return () => setShowMenuDrawer(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className={`w-full fixed transition-all duration-500 top-0 h-full bg-black opacity-40 ${
          showMenuDrawer ? "right-0" : "-right-full"
        }`}
        onClick={() => setShowMenuDrawer(false)}
        style={{ zIndex: CART_ASIDE_INDEX }}
      ></div>
      <div
        className={`bg-drawerBg transition-all duration-500 min-h-screen fixed top-0 ${
          showMenuDrawer ? "left-0" : "-left-full"
        }`}
        style={{ zIndex: CART_ASIDE_INDEX }}
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
          <ul className="pt-10 p-4 w-80 flex-col flex gap-5 [&>li]:text-xl">
            <li>
              <Link
                onClick={() => setShowMenuDrawer(false)}
                href={"/"}
                className="hover:pl-2 duration-200 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenuDrawer(false)}
                href={"/Offers"}
                className="hover:pl-2 duration-200 transition-all"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenuDrawer(false)}
                href={"/FAQ"}
                className="hover:pl-2 duration-200 transition-all"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenuDrawer(false)}
                href={"/Contact"}
                className="hover:pl-2 duration-200 transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
