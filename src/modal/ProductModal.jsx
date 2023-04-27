/* eslint-disable @next/next/no-img-element */
import ModalSlider from "@/components/ModalSlider";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const ProductModal = ({
  increment,
  decrement,
  setShowProductModal,
  showProductModal,
  data,
  cartItems,
}) => {
  return (
    <Dialog
      open={showProductModal}
      onClose={() => setShowProductModal(false)}
      className="relative z-[120]"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto mb-20 w-10/12  rounded bg-white">
            <button
              onClick={() => setShowProductModal(false)}
              className="block ml-auto px-7 py-2 text-xl"
            >
              <GrClose className="mt-3" />
            </button>

            <Dialog.Description>
              <ProductModalContent
                decrement={decrement}
                increment={increment}
                data={data}
                cartItems={cartItems}
              />
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

const ProductModalContent = ({ cartItems, increment, decrement, data }) => {
  const [isInCart, setIsInCart] = useState(
    cartItems?.find((el) => el.id === data.id)
  );
  const { price, sale_price, name, description, quantity, categories } =
    isInCart || data;
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [amount, setAmount] = useState(isInCart?.amount || 0);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsInCart(cartItems?.find((el) => el.id === data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  useEffect(() => {
    setAmount(isInCart?.amount || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInCart]);

  return (
    <>
      <div className="p-5 max-md:flex-col flex gap-y-2 gap-x-10">
        <ModalSlider data={data} />
        <div className="w-full md:w-1/2 ">
          <div className="flex items-center gap-5 max-md:mt-4">
            <h1 className="text-3xl max-lg:text-2xl w-11/12 ">{name}</h1>

            <button
              onClick={() => setIsFav((prev) => !prev)}
              className="w-10 h-10 relative flex items-center justify-center rounded-full border-2 border-fontColor"
            >
              {
                <AiFillHeart
                  className={`transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 text-fontColor ${
                    isFav ? "opacity-100" : "opacity-0"
                  }`}
                  fontSize={25}
                />
              }
              {
                <AiOutlineHeart
                  className={`transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 text-fontColor ${
                    isFav ? "opacity-0" : "opacity-100"
                  }`}
                  fontSize={25}
                />
              }
            </button>
          </div>

          {data?.rating_count[0]?.rating && (
            <div className=" mt-4 justify-end flex items-center">
              <p className="flex items-center w-fit ml-auto justify-center px-2 gap-2 rounded-md bg-fontColor text-white">
                <span>{data.rating_count[0].rating}</span>{" "}
                <span>
                  <AiFillStar fontSize={17} />
                </span>
              </p>
            </div>
          )}
          <div className="my-4">
            <p className="text-secondFColor text-md ">
              {showMoreDesc || description.length <= 150
                ? description
                : `${description.slice(0, 100)}...`}
            </p>
            <br />
            {description.length > 150 ? (
              <button
                className="font-bold text-fontColor"
                onClick={() => setShowMoreDesc((prev) => !prev)}
              >
                {showMoreDesc ? "Less" : "Read More"}
              </button>
            ) : null}
          </div>
          <h3 className="flex items-center gap-4 font-semibold">
            <span className="text-3xl">${sale_price || price}</span>
            {sale_price && (
              <span className="line-through text-stone-400 text-lg">
                ${price}
              </span>
            )}
          </h3>

          <div className="flex items-center flex-wrap mt-10 gap-5">
            <button className="product-btn text-bgColor h-11 bg-fontColor max-lg:w-full w-3/5">
              {amount > 0 ? (
                <>
                  <p
                    className="btn-counter text-2xl w-1/4"
                    onClick={() => decrement(data)}
                  >
                    -
                  </p>
                  <p className="grow btn-text">{amount}</p>
                  <p
                    className="btn-counter text-2xl w-1/4"
                    onClick={() => increment(data)}
                  >
                    +
                  </p>
                </>
              ) : (
                <p className="grow btn-text" onClick={() => increment(data)}>
                  Add To Shopping Cart
                </p>
              )}
            </button>
            <p className="font-semibold max-lg:w-full text-center">
              {quantity} pieces available
            </p>
          </div>
          <div className="border-t flex items-center gap-4 border-t-black mt-8 border-opacity-30 pt-5">
            <h5 className="font-semibold">Categories</h5>
            <div className="flex items-center gap-3">
              {categories.map(({ name, id }) => (
                <p
                  key={id}
                  className="border cursor-default border-dashed font-semibold text-stone-600 border-stone-600 hover:border-fontColor hover:text-fontColor transition-all duration-300  py-1 px-2 rounded-md"
                >
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-10 py-4">
        <h4 className="text-2xl mb-3">Details</h4>
        <p className="pb-3">{description}</p>
      </div>
    </>
  );
};

export default ProductModal;
