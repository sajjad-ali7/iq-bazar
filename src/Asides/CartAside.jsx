import { AiOutlineClose } from "react-icons/ai";
import emptyBag from "../../public/emptyBag.json";
import Lottie from "lottie-react-web";
import { FiShoppingBag } from "react-icons/fi";
import { CART_DRAWER_INDEX } from "@/consts";
import { useContext, useEffect, useState } from "react";
import { App_Context } from "@/pages/_app";

const CartDrawer = () => {
  const { showCart, setShowCart } = useContext(App_Context);

  useEffect(() => {
    return () => setShowCart(false);
  }, []);

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
        className={`bg-drawerBg transition-all h-screen overflow-y-scroll duration-500 min-h-screen fixed top-0 ${
          showCart ? "right-0" : "-right-full"
        } `}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content">
          <CartButton showCart={showCart} setShowCart={setShowCart} />
          <div className="pt-5 p-2 w-80 ">
            <div className="flex items-center justify-between border-b pb-5 mb-1">
              <p className="flex items-center justify-between gap-1 text-fontColor text-lg">
                <FiShoppingBag />
                <span>0 Item</span>
              </p>
              <button
                className="block ml-auto mr-4 scale-150"
                onClick={() => setShowCart(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className=" relative max-w-full">
              {/* <Lottie
                options={{
                  animationData: showCart && emptyBag,
                }}
              /> */}
              <div>
                <div className="h-[75vh] overflow-auto">
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  <CartItem />
                  {/* <h1 className=" mt-28 text-center text-2xl">
                    No Product Found
                  </h1> */}
                </div>
              </div>
              <div className="overflow-hidden mt-2 text-center rounded-3xl w-full flex items-center justify-between">
                <p className="px-3">checkout</p>
                <p className="py-3 px-5 rounded-3xl text-bgColor bg-fontColor">
                  $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

const CartButton = ({ showCart, setShowCart }) => {
  return (
    <div
      className={`fixed transition-all duration-500 top-2/4 max-md:hidden ${
        !showCart ? "right-0" : "-right-full"
      } p-3 -translate-y-2/4 rounded-l-md bg-fontColor cursor-pointer `}
      onClick={() => setShowCart(true)}
    >
      <p className="flex items-center justify-between gap-1 text-bgColor">
        <FiShoppingBag />
        <span>0 Item</span>
      </p>

      <p className="py-1 px-3 bg-white rounded-md mt-2">$100.5</p>
    </div>
  );
};

const CartItem = () => {
  const [counter, setCounter] = useState(1);
  if (counter === 0) return null;
  return (
    <>
      <div
        className={`flex py-2 w-full mb-2 px-1 rounded-md items-center gap-4`}
      >
        <div className="flex  flex-col bg-gray-200 p-1 rounded-md items-center justify-center">
          <button
            className="text-2xl"
            onClick={() => setCounter((prev) => ++prev)}
          >
            +
          </button>
          <span className="text-xl -mb-1">{counter}</span>
          <button
            className="text-2xl"
            onClick={() => setCounter((prev) => --prev)}
          >
            -
          </button>
        </div>
        <div className="flex flex-grow gap-3 items-center">
          <div>
            <img
              src="/8off.webp"
              alt="product-img"
              className="rounded-md"
              width={80}
              height={80}
            />
          </div>
          <div className="flex-grow h-16 flex flex-col justify-between">
            <p>product name</p>
            <div className="flex justify-between items-center ">
              <p>${22 * counter}</p>
              <button
                onClick={() => setCounter(0)}
                className="block ml-auto mr-3 scale-150"
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
