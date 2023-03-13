import { AiOutlineClose } from "react-icons/ai";
import emptyBag from "../../public/emptyBag.json";
import Lottie from "lottie-react-web";
import { FiShoppingBag } from "react-icons/fi";

const CartDrawer = ({ showCart, setShowCart }) => {
  return (
    <div
      className={`drawer drawer-end cursor-default min-h-screen fixed top-0 ${
        showCart ? "" : "left-full"
      }`}
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer-4">
          <CartButton setShowCart={setShowCart} showCart={showCart} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={() => setShowCart(false)}
        ></label>
        <div className="menu pt-10 p-4 w-80 bg-base-100 text-base-content">
          <button className="block ml-auto mr-4 scale-150">
            <AiOutlineClose />
          </button>
          <div className="mt-20" style={{ transform: "scale(1.7)" }}>
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
  );
};

export default CartDrawer;

const CartButton = () => {
  return (
    <div
      className={`fixed transition-all duration-500 top-2/4 ${
        !showCart ? "right-0" : "-right-full"
      } p-3 -translate-y-2/4 rounded-l-md bg-cyan-500 cursor-pointer`}
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
