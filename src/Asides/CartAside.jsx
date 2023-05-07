/* eslint-disable @next/next/no-img-element */
import { AiOutlineClose } from "react-icons/ai";
import emptyBag from "../../public/emptyBag.json";
import Lottie from "lottie-react-web";
import { FiShoppingBag } from "react-icons/fi";
import { CART_DRAWER_INDEX, CART_ITEMS } from "@/consts";
import { useEffect, useState } from "react";
import { cartItemsState, showCartState } from "@/recoil";
import { useRecoilState } from "recoil";
import Image from "next/image";
import {
  addItems,
  calcTotalPrice,
  priceFormatter,
  removeItems,
} from "@/helpers";
import { useRouter } from "next/router";
import { FaTrash } from "react-icons/fa";
const CartDrawer = () => {
  const [showCart, setShowCart] = useRecoilState(showCartState);
  const [cartItems] = useRecoilState(cartItemsState);
  const [html, setHtml] = useState(null);

  useEffect(() => {
    if (document) setHtml(document.getElementsByTagName("html")[0]);
    return () => setShowCart(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (showCart && html) {
    html.classList.add("overflow-hidden");
  } else if (html) {
    html.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div
        className={`w-full fixed transition-all duration-500 ${
          showCart ? "left-0" : "-left-full"
        } top-0 min-h-screen bg-black opacity-40`}
        onClick={() => setShowCart(false)}
        style={{ zIndex: CART_DRAWER_INDEX }}
      ></div>
      <div
        className={`bg-drawerBg w-11/12 md:w-[500px] transition-all h-screen  overflow-y-scroll duration-500 min-h-screen fixed top-0 ${
          showCart ? "right-0" : "-right-full"
        } `}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content ">
          <CartButton
            cartItems={cartItems}
            showCart={showCart}
            setShowCart={setShowCart}
          />
          <CartBody showCart={showCart} setShowCart={setShowCart} />
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

const CartButton = ({ cartItems, showCart, setShowCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calcTotalPrice(cartItems));
  }, [cartItems]);
  return (
    <div
      className={`fixed transition-all duration-500 top-2/4 max-md:hidden ${
        !showCart ? "right-0" : "-right-full"
      } p-3 -translate-y-2/4 rounded-l-md bg-fontColor cursor-pointer `}
      onClick={() => setShowCart(true)}
    >
      <p className="flex items-center justify-between gap-1 text-bgColor">
        <FiShoppingBag />
        <span>{cartItems?.length || 0} Item</span>
      </p>

      <p className="py-1 text-center px-3 bg-white rounded-md mt-2">
        {priceFormatter(total)}
      </p>
    </div>
  );
};

const CartBody = ({ showCart, setShowCart }) => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [total, setTotal] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    setTotal(calcTotalPrice(cartItems));
  }, [cartItems]);

  return (
    showCart && (
      <div className="pt-5 p-2">
        <div className="flex items-center justify-between border-b pb-5 mb-1">
          <p className="flex items-center justify-between gap-1 text-fontColor text-lg">
            <FiShoppingBag />
            <span>{cartItems.length} Item</span>
          </p>
          <button
            className="block ml-auto mr-4 scale-150"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className=" relative max-w-screen">
          <div className="min-h-[80vh]">
            {cartItems.length === 0 ? (
              <>
                <Lottie
                  options={{
                    animationData: showCart && emptyBag,
                  }}
                />
                <h1 className="text-2xl font-bold text-center -mt-3">
                  No products found
                </h1>
              </>
            ) : (
              <>
                {cartItems.map((el) => (
                  <CartItem data={el} key={el.id} setCartItems={setCartItems} />
                ))}
              </>
            )}
          </div>

          <div
            className=" sticky bottom-0 left-0 py-2 cursor-pointer"
            onClick={() => push("checkout")}
          >
            <div className="bg-fontColor overflow-hidden p-2 text-center rounded-3xl w-full flex items-center justify-between">
              <p className="px-3 text-bgColor">Checkout</p>
              <p className="py-2 px-3  rounded-3xl text-fontColor bg-bgColor">
                {priceFormatter(total)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const CartItem = ({ data, setCartItems }) => {
  const { name, price, quantity, image: { original } = "" } = data;

  if (data.amount === 0) return null;
  return (
    <>
      <div
        className={`flex py-2 w-full mb-2 px-1 rounded-md items-center gap-4`}
      >
        <div className="flex flex-col min-w-[30px] max-w-[30px] bg-gray-200 p-1 rounded-2xl items-center justify-center text-2xl">
          <button
            onClick={() => {
              if (data.amount !== quantity)
                setCartItems(addItems(CART_ITEMS, data, data.amount + 1));
            }}
          >
            +
          </button>
          <span className="text-xl -mb-1">{data.amount}</span>
          <button
            onClick={() =>
              setCartItems(removeItems(CART_ITEMS, data, data.amount - 1))
            }
          >
            -
          </button>
        </div>
        <div className="flex flex-grow gap-3 items-center ">
          <Image
            src={original}
            width={100}
            height={100}
            className="rounded-md overflow-hidden w-16 h-16"
            alt="product-img"
          />
          <div className="flex-grow h-[70px]  flex flex-col justify-between">
            <p className="font-bold text-lg">{name}</p>
            <div className="flex justify-between items-center font-semibold text-lg">
              <p>{priceFormatter(price)}</p>
              <div className="flex items-center justify-center gap-4">
                <p>{priceFormatter(price * data.amount)}</p>
                <button
                  onClick={() => setCartItems(removeItems(CART_ITEMS, data, 0))}
                  className="transition-all duration-300 rounded-full p-[3px] block bg-stone-200 text-fontColor hover:text-red-600 ml-auto mr-3 "
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
