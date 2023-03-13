import { AiOutlineClose } from "react-icons/ai";
import emptyBag from "../../public/emptyBag.json";
import Lottie from "lottie-react-web";
import { FiShoppingBag } from "react-icons/fi";
import { CART_DRAWER_INDEX } from "@/consts";
import { useContext, useEffect } from "react";
import { App_Context } from "@/pages/_app";

const CartDrawer = () => {
  const { showCart, setShowCart } = useContext(App_Context);
  useEffect(() => {
    return () => setShowCart(false);
  }, []);

  console.log(showCart);
  return (
    <>
      <div
        className={`w-full fixed transition-all duration-500 ${
          showCart ? "left-0" : "-left-full"
        } top-0 h-full bg-black opacity-40`}
        onClick={() => setShowCart(false)}
        style={{ zIndex: CART_DRAWER_INDEX }}
      ></div>
      <div
        className={`bg-white transition-all duration-500 min-h-screen fixed top-0 ${
          showCart ? "right-0" : "-right-full"
        } `}
        style={{ zIndex: CART_DRAWER_INDEX }}
      >
        <div className="drawer-content">
          <CartButton showCart={showCart} setShowCart={setShowCart} />
          <div className="pt-10 p-4 w-80 ">
            <button
              className="block ml-auto mr-4 scale-150"
              onClick={() => setShowCart(false)}
            >
              <AiOutlineClose />
            </button>
            <div className=" max-w-full">
              <Lottie
                options={{
                  animationData: showCart && emptyBag,
                }}
              />
            </div>
            <h1 className=" mt-28 text-center text-2xl">No Product Found</h1>
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
      } p-3 -translate-y-2/4 rounded-l-md bg-cyan-500 cursor-pointer `}
      onClick={() => setShowCart(true)}
    >
      <p className="flex items-center justify-between gap-1 text-white">
        <FiShoppingBag />
        <span>0 Item</span>
      </p>

      <p className="py-1 px-3 bg-white rounded-md mt-2">$100.5</p>
    </div>
  );
};
