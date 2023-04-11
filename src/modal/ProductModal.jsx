/* eslint-disable @next/next/no-img-element */
import ModalSlider from "@/components/ModalSlider";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const ProductModal = ({ setShowProductModal, showProductModal, data }) => {
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
            <Dialog.Description>
              <ProductModalContent data={data} />
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

const ProductModalContent = ({ data }) => {
  const { price, sale_price, name, description, quantity, categories } = data;
  const [showMoreDesc, setShowMoreDesc] = useState(false);
  const [counter, setCounter] = useState(0);
  const increment = () =>
    setCounter((prev) => {
      if (quantity === prev) return prev;
      else {
        return ++prev;
      }
    });
  const decrement = () => setCounter((prev) => --prev);

  return (
    <>
      <div className="p-5 max-md:flex-col flex gap-y-2 gap-x-10">
        <ModalSlider data={data} />
        <div className="w-full md:w-1/2 ">
          <h1 className="text-3xl max-md:text-2xl">{name}</h1>
          <div className="my-4">
            <p className="text-secondFColor ">
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
            <span className="text-3xl">${sale_price}</span>
            <span className="line-through text-stone-400 text-lg">
              ${price}
            </span>
          </h3>

          <div className="flex items-center flex-wrap mt-10 gap-5">
            <button className="product-btn text-bgColor h-11 bg-fontColor max-lg:w-full w-3/5">
              {counter > 0 ? (
                <>
                  <p className="btn-counter w-1/4" onClick={() => decrement()}>
                    -
                  </p>
                  <p className="grow btn-text">{counter}</p>
                  <p className="btn-counter w-1/4" onClick={() => increment()}>
                    +
                  </p>
                </>
              ) : (
                <p className="grow btn-text" onClick={() => increment()}>
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
                  className="border cursor-pointer border-dashed font-semibold text-stone-600 border-stone-600 hover:border-fontColor hover:text-fontColor transition-all duration-300  py-1 px-2 rounded-md"
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
