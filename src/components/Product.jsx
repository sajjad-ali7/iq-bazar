/* eslint-disable @next/next/no-img-element */

import ProductModal from "@/modal/ProductModal";
import { useState } from "react";

const Product = ({ key, ...props }) => {
  const { name, price, image: { original } = "" } = props;
  const [showProductModal, setShowProductModal] = useState(false);

  if (!props) return;

  return (
    <>
      <div
        onClick={() => setShowProductModal(true)}
        key={key}
        className=" cursor-pointer overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-2 bg-white"
      >
        <div className="overflow-hidden ">
          <img
            src={original}
            alt="product"
            className="w-full object-cover max-h-[305px] min-h-[304px]"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2 px-3 pb-3">
          <p
            title={name}
            className="text-md font-semibold text-ellipsis truncate"
          >
            {name}
          </p>
          <h1 className="text-xl">${price}</h1>

          <button className="product-btn w-full bg-stone-200 h-8 mt-2">
            <p className="flex-grow btn-text py-[4px]">Add</p>
            <p className=" rounded-md btn-counter w-1/4 py-[4px] bg-stone-300 ">
              +
            </p>
          </button>
        </div>
      </div>

      <ProductModal
        data={props}
        setShowProductModal={setShowProductModal}
        showProductModal={showProductModal}
      />
    </>
  );
};

export default Product;

{
  /* {isInLocal ? (
          <button className="product-btn bg-stone-200 h-8 w-full mt-2">
          <p className="btn-counter w-1/4" onClick={() => decrement(id)}>
          -
          </p>
          <p className="grow btn-text">{isInLocal.amount}</p>
          <p className="btn-counter w-1/4" onClick={() => increment(id)}>
          +
          </p>
          </button>
        ) : ( */
}
