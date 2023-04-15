/* eslint-disable @next/next/no-img-element */
import { Spinner } from "@/pages/Contact";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skeleton from "../Skeleton";
import Product from "../Product";
import Categories from "../Categories";
import CategoriesModal from "@/Asides/CategoriesModal";

const MainContent = ({
  currentPage,
  lastPage,
  products,
  onLoadMoreClick,
  loader,
  onCategorySelect,
}) => {
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
          <Categories onCategorySelect={onCategorySelect} />
        </div>
        <div className="block xl:hidden">
          <CategoriesModal onCategorySelect={onCategorySelect} />
        </div>
      </div>
      <div className="flex-grow">
        {products.length === 0 && !loader && (
          <div className="flex flex-col w-full items-center gap-10 py-6">
            <img
              src="/no_data.svg"
              alt="nothing found"
              className="w-1/2 md:w-1/3"
            />
            <h1 className="text-3xl text-fontColor pb-10 md:pb-0">
              Sorry, No Product Found
            </h1>
          </div>
        )}
        <div className=" products-auto-cols">
          {products.length > 0
            ? products?.map((product, i) => <Product key={i} {...product} />)
            : loader && skeletonArr}
        </div>

        {currentPage !== lastPage && (
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
