/* eslint-disable @next/next/no-img-element */

const Product = ({ key, ...props }) => {
  const { name, price, image: { original } = "" } = props;

  if (!props) return;

  return (
    <>
      <div
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

          <button className="product-btn mt-2">
            <p className="flex-grow btn-text py-[4px]">Add</p>
            <p className=" rounded-md btn-counter w-1/4 py-[4px] bg-stone-300 ">
              +
            </p>
          </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Product;

{
  /* {isInLocal ? (
          <button className="product-btn mt-2">
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
