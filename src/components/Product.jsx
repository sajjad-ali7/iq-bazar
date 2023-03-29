/* eslint-disable @next/next/no-img-element */
import { CART_ITEMS } from "@/consts";
import { db } from "@/fireBase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const Product = (props) => {
  const { name, price, id, image: { original } = "" } = props;
  const [showProductModal, setShowProductModal] = useState();
  const addTolocalStorage = async (obj) => {};
  const viewProduct = (obj) => setShowProductModal((prev) => !prev);

  if (!props) return;

  return (
    <>
      <div
        key={id}
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
          {/* {isInLocal ? (
          <button className="product-btn mt-2">
          <p className="btn-counter w-1/4" onClick={() => decrement(id)}>
          -
          </p>
          <p className="grow btn-text">{isInLocal.amount}</p>
          <p className="btn-counter w-1/4" onClick={() => increment(id)}>
          +
          </p>
          </button>
        ) : ( */}
          <button
            className="product-btn mt-2"
            onClick={() => addTolocalStorage(props)}
          >
            <p className="flex-grow btn-text py-[4px]">Add</p>
            <p className=" rounded-md btn-counter w-1/4 py-[4px] bg-stone-300 ">
              +
            </p>
          </button>
          {/* )} */}
        </div>
      </div>

      {/* <div
        className="w-full h-full fixed left-0 top-0 bg-red-100 opacity-10"
        style={{ zIndex: 100220 }}
      >
        <div
          className="bg-red-900 absolute top-20 w-3/4"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            minHeight: "500px",
          }}
        >
          modal
        </div>
      </div> */}
    </>
  );
};

export default Product;

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
//   await updateDoc(docRef, {
//     items: arrayUnion(obj),
//   });
// } else {
//   setDoc(db, "cart-items", localStorage.getItem("userId"), {
//     items: arrayUnion(obj),
//   });
// }
