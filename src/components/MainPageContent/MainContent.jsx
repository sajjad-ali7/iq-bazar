import { Spinner } from "@/pages/Contact";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skeleton from "../Skeleton";
import Product from "../Product";
import Categories from "../Categories";
import CategoriesModal from "@/Asides/CategoriesModal";

const MainContent = ({ currentPage, products, onLoadMoreClick, loader }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  //makes array with length (20) filled with <Skeleton /> Component
  const skeletonArr = Array.from({ length: 20 }, (e, i) => (
    <Skeleton key={i} />
  ));

  useEffect(() => {
    if (isInView) {
      onLoadMoreClick();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div className={`flex relative gap-2 max-xl:flex-col p-4 `}>
      <div className="max-xl:w-full w-1/6 p-2">
        <div className="max-xl:hidden">
          <Categories />
        </div>
        <div className="block xl:hidden">
          <CategoriesModal />
        </div>
      </div>
      <div className="flex-grow">
        <div className=" products-auto-cols">
          {products.length > 0
            ? products?.map((product, i) => <Product key={i} {...product} />)
            : skeletonArr}
        </div>

        {currentPage !== 3 && (
          <button
            ref={ref}
            className={`btn mx-auto block mt-8 transition-all duration-500 ${
              isInView && loader
                ? "bg-fontColor hover:bg-bgColor hover:text-fontColor"
                : ""
            }`}
          >
            {isInView ? <Spinner /> : null}
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
