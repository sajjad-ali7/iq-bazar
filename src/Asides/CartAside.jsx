/* eslint-disable @next/next/no-img-element */
import { AiOutlineClose } from "react-icons/ai";
import emptyBag from "../../public/emptyBag.json";
import Lottie from "lottie-react-web";
import { FiShoppingBag } from "react-icons/fi";
import { CART_DRAWER_INDEX } from "@/consts";
import { useEffect, useState } from "react";
import { showCartState } from "@/recoil";
import { useRecoilState } from "recoil";
const CartDrawer = () => {
  const [showCart, setShowCart] = useRecoilState(showCartState);

  useEffect(() => {
    return () => setShowCart(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className={`bg-drawerBg w-11/12 md:w-[500px] transition-all h-screen  overflow-y-scroll duration-500 min-h-screen fixed top-0 ${
          showCart ? "right-0" : "-right-full"
        } `}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content ">
          <CartButton showCart={showCart} setShowCart={setShowCart} />
          <div className="pt-5 p-2">
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
            <div className=" relative max-w-screen">
              {/* <Lottie
                options={{
                  animationData: showCart && emptyBag,
                }}
              /> */}
              <div className="min-h-[80vh]">
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
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
              <div className="bg-white sticky bottom-0 left-0 py-2">
                <div className="bg-fontColor overflow-hidden p-0 text-center rounded-3xl w-full flex items-center justify-between">
                  <p className="px-3 text-bgColor">checkout</p>
                  <p className="py-3 px-5 rounded-3xl text-fontColor bg-bgColor">
                    $100
                  </p>
                </div>
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
  const [amount, setAmount] = useState(1);
  if (amount === 0) return null;
  return (
    <>
      <div
        className={`flex py-2 w-full mb-2 px-1 rounded-md items-center gap-4`}
      >
        <div className="flex flex-col px-2 bg-gray-200 p-1 rounded-2xl items-center justify-center text-2xl">
          <button onClick={() => setAmount((prev) => ++prev)}>+</button>
          <span className="text-xl -mb-1">{amount}</span>
          <button onClick={() => setAmount((prev) => --prev)}>-</button>
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
          <div className="flex-grow h-[70px]  flex flex-col justify-between">
            <p className="font-bold text-lg">product name</p>
            <div className="flex justify-between items-center font-semibold text-lg">
              <p>$22</p>
              <div className="flex items-center justify-center gap-4">
                <p>${22 * amount}</p>
                <button
                  onClick={() => setAmount(0)}
                  className="transition-all duration-300 rounded-full p-[3px] block bg-stone-200 text-fontColor hover:text-red-600 ml-auto mr-3 "
                >
                  <AiOutlineClose />
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
