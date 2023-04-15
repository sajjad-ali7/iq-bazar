import Categories from "@/components/Categories";
import { CART_DRAWER_INDEX } from "@/consts";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
const CategoriesModal = ({ onCategorySelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-md flex items-center gap-2 text-white bg-fontColor py-2 px-7 "
      >
        <VscSettings fontSize={25} /> <span className="text-lg">Filter</span>
      </button>
      <div
        onClick={() => setIsModalOpen(false)}
        className={`w-full fixed transition-all duration-500 ${
          isModalOpen ? "right-0" : "-right-full"
        } top-0 min-h-screen bg-black opacity-40`}
        style={{ zIndex: CART_DRAWER_INDEX }}
      ></div>
      <div
        className={`bg-drawerBg w-11/12 md:w-[350px] overflow-hidden transition-all h-screen  overflow-y-scroll duration-500 min-h-screen fixed top-0 ${
          isModalOpen ? "left-0" : "-left-full"
        } `}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content pt-10 ">
          <div className="flex items-center gap-2 justify-between px-5">
            <h1 className="text-3xl flex items-center gap-2 ">
              <span className="font-bold">IQ</span>
              <span>Bazar</span>
            </h1>
            <button
              onClick={() => setShowProductModal(false)}
              className="block text-xl"
            >
              <GrClose />
            </button>
          </div>
          <hr className="my-5" />
          <div className="px-2">
            <Categories onCategorySelect={onCategorySelect} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesModal;
