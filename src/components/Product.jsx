/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { CART_ITEMS } from "@/consts";
import { addItems, removeItems, storage } from "@/helpers";
import ProductModal from "@/modal/ProductModal";
import { cartItemsState } from "@/recoil";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Product = ({ key, ...props }) => {
  const { name, price, unit, quantity, image: { original } = "" } = props;
  const [showProductModal, setShowProductModal] = useState(false);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [isInCart, setIsInCart] = useState(
    cartItems?.find((el) => el.id === props.id)
  );
  const [amount, setAmount] = useState(isInCart?.amount || 0);

  useEffect(() => {
    setIsInCart(cartItems?.find((el) => el.id === props.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  useEffect(() => {
    setAmount(isInCart?.amount || 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInCart]);
  if (!props) return;

  const decrement = (product) => {
    setAmount((prev) => prev - 1);
    setCartItems(removeItems(CART_ITEMS, product, amount - 1));
  };

  const increment = (product) => {
    if (amount !== quantity) {
      setAmount((prev) => prev + 1);
      const productWithAmount = { ...product, amount: amount + 1 };

      if (storage.get(CART_ITEMS)) {
        setCartItems(addItems(CART_ITEMS, product, amount + 1));
      } else {
        storage.set(CART_ITEMS, JSON.stringify([productWithAmount]));
        setCartItems([productWithAmount]);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => setShowProductModal(true)}
        key={key}
        className=" cursor-pointer overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-2 bg-white"
      >
        <div className="overflow-hidden">
          <Image
            height={500}
            width={500}
            className="w-full object-cover max-h-[305px] min-h-[304px]"
            src={original}
            alt="product"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2 px-3 pb-3">
          <p title={name} className="text-xl text-ellipsis truncate">
            {name}
          </p>
          <div className="flex items-center justify-between my-1">
            <h1 className="text-xl font-bold">${price}</h1>
            <h1 className="text-md font-light">{unit}</h1>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // toggleLocalStorage(props);
            }}
            className="product-btn w-full bg-stone-200 h-8 mt-2"
          >
            {amount ? (
              <>
                <p
                  className="btn-counter w-1/4"
                  onClick={() => decrement(props)}
                >
                  -
                </p>
                <p className="grow btn-text text-lg">{amount}</p>
                <p
                  className={`btn-counter w-1/4 ${
                    amount === quantity ? " cursor-not-allowed" : ""
                  }`}
                  onClick={() => increment(props)}
                >
                  +
                </p>
              </>
            ) : (
              <>
                <p
                  className="flex-grow btn-text py-[4px]"
                  onClick={() => increment(props)}
                >
                  Add
                </p>
                <p
                  className=" rounded-md btn-counter w-1/4 py-[4px] bg-stone-300 "
                  onClick={() => increment(props)}
                >
                  +
                </p>
              </>
            )}
          </button>

          <h1
            className={`transition-all text-center font-bold duration-300 mt-1 -mb-2 ${
              amount === quantity
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            Only {quantity} {quantity > 1 ? "Items" : "Item"} In Stock
          </h1>
        </div>
      </div>

      <ProductModal
        cartItems={cartItems}
        decrement={decrement}
        increment={increment}
        data={props}
        setShowProductModal={setShowProductModal}
        showProductModal={showProductModal}
      />
    </>
  );
};

export default Product;
