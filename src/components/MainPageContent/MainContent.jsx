/* eslint-disable @next/next/no-img-element */
import { Spinner } from "@/pages/Contact";
import Skeleton from "../Skeleton";
import Product from "../Product";
import Categories from "../Categories";
import CategoriesModal from "@/Asides/CategoriesModal";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { productSectionRefState } from "@/recoil";

const MainContent = ({
  currentPage,
  lastPage,
  products,
  onLoadMoreClick,
  loader,
  onCategorySelect,
}) => {
  const [, setSectionRef] = useRecoilState(productSectionRefState);
  const skeletonArr = Array.from({ length: 20 }, (e, i) => (
    <Skeleton key={i} />
  ));

  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef?.current) {
      setSectionRef(sectionRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionRef]);

  return (
    <div
      className={`flex relative gap-2 max-xl:flex-col p-4 `}
      ref={sectionRef}
    >
      <div className="max-xl:w-full w-1/6 p-2">
        <div className="max-xl:hidden">
          <Categories onCategorySelect={onCategorySelect} />
        </div>
        <div className="block xl:hidden">
          <CategoriesModal onCategorySelect={onCategorySelect} />
        </div>
      </div>
      <div className="flex-grow">
        {lastPage === 0 ? (
          <div className="flex flex-col w-full items-center gap-10 py-6">
            <Image
              width={500}
              height={500}
              src="/no_data.svg"
              className="w-1/2 md:w-1/3"
              alt="w-1/2 md:w-1/3"
            />
            <h1 className="text-3xl text-fontColor pb-10 md:pb-0">
              Sorry, No Product Found
            </h1>
          </div>
        ) : (
          <div className=" products-auto-cols max-md:pb-10">
            {products.length > 0
              ? products?.map((product, i) => <Product key={i} {...product} />)
              : loader && skeletonArr}

            {loader ? skeletonArr : null}
          </div>
        )}

        {currentPage !== lastPage && lastPage !== 0 && (
          <button
            onClick={onLoadMoreClick}
            className={`btn mx-auto block border-2 bg-fontColor text-white mt-8 transition-all duration-100 hover:bg-bgColor hover:text-fontColor ${
              loader ? "bg-fontColor hover:bg-fontColor" : ""
            }`}
          >
            {loader ? <Spinner /> : "Load More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
