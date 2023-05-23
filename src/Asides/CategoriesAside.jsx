import Categories from "@/components/Categories";
import { CART_ASIDE_INDEX } from "@/consts";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
const CategoriesAside = ({ onCategorySelect }) => {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsAsideMenuOpen(true)}
        className="rounded-md flex items-center gap-2 text-white bg-fontColor py-2 px-7 "
      >
        <VscSettings fontSize={25} /> <span className="text-lg">Filter</span>
      </button>
      <div
        onClick={() => setIsAsideMenuOpen(false)}
        className={`w-full fixed transition-all duration-500 ${
          isAsideMenuOpen ? "right-0" : "-right-full"
        } top-0 min-h-screen bg-black opacity-40`}
        style={{ zIndex: CART_ASIDE_INDEX }}
      ></div>
      <div
        className={`bg-drawerBg w-full md:w-[350px] overflow-hidden transition-all h-screen  overflow-y-scroll duration-500 min-h-screen fixed top-0 ${
          isAsideMenuOpen ? "left-0" : "-left-full"
        } `}
        style={{ zIndex: CART_ASIDE_INDEX }}
      >
        <div className="drawer-content pt-10 ">
          <div className="flex items-center gap-2 justify-between px-5">
            <h1 className="text-3xl flex items-center gap-2 ">
              <span className="font-bold">IQ</span>
              <span>Bazar</span>
            </h1>
          </div>
          <hr className="my-5" />
          <div className="px-2">
            <Categories
              setIsAsideMenuOpen={() => setIsAsideMenuOpen(false)}
              onCategorySelect={onCategorySelect}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesAside;
