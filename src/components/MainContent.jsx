import { Spinner } from "@/pages/Contact";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdFace2 } from "react-icons/md";
import { RiEyeCloseFill } from "react-icons/ri";
import { GiLipstick } from "react-icons/gi";
import { FaGem } from "react-icons/fa";
import Skeleton from "./Skeleton";
import Product from "./Product";

const MainContent = ({
  currentPage,
  setCurrentPage,
  products,
  onLoadMoreClick,
  loader,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  //makes array with length (20) filled with <Skeleton /> Component
  const skeletonArr = Array.from({ length: 20 }, () => <Skeleton />);

  useEffect(() => {
    if (isInView) {
      onLoadMoreClick();
    }
  }, [isInView]);

  return (
    <div className="flex gap-2 max-xl:flex-col p-4">
      <div className="w-1/4 p-2">
        <Categories />
      </div>
      <div className="flex-grow">
        <div className=" products-auto-cols">
          {products.length > 0
            ? products?.map((product) => <Product {...product} />)
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

const Categories = () => {
  const [openList, setOpenList] = useState("");

  const handleClick = (event) => {
    if (+event.target.dataset.index === openList) return setOpenList("");
    setOpenList(+event.target.dataset.index);
  };
  return (
    <div>
      <ul className="[&>li]:py-1 font-semibold text-lg">
        <li data-index={0} onClick={(e) => handleClick(e)}>
          {/* <MdFace2 className="inline-block mx-1" /> */}
          Face
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 0
                ? "text-fontColor h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li>Blusher</li>
            <li>Foundation</li>
            <li>Face Powder</li>
          </ul>
        </li>
        <li data-index={1} onClick={(e) => handleClick(e)}>
          {/* <RiEyeCloseFill className="inline-block mx-1" />  */}
          Eyes
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 1
                ? "text-fontColor h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li>Eye Shadow</li>
            <li>Glitter</li>
            <li>Mascara</li>
          </ul>
        </li>
        <li data-index={2} onClick={(e) => handleClick(e)}>
          {/* <GiLipstick className="inline-block mx-1" />  */}
          Lips
          <ul
            className={`[&>li]:py-1 transition-all duration-500 ${
              openList === 2
                ? "text-fontColor h-24 opacity-100"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li>Lip Gloss</li>
            <li>Lip Stick</li>
            <li>Lip Kit</li>
          </ul>
        </li>
        {/* <FaGem className="inline-block mx-1" />  */}
        <li>Accessories</li>
        <li>Shaving Needs</li>
        <li>Oral Care</li>
        <li className="flex items-center gap-2">
          {/* <img src="/svgexport-15.svg" alt="" /> */}
          Facial Care
        </li>
        <li>Deodorant</li>
        <li>Bath & Oil</li>
      </ul>
    </div>
  );
};
