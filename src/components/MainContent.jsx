import { useState } from "react";
import Skeleton from "./Skeleton";

const MainContent = ({ products }) => {
  return (
    <div className="flex gap-2 max-xl:flex-col p-4">
      <div className="w-1/4 p-2">
        <Categories />
      </div>
      <div className="flex-grow products-auto-cols">
        {products ? (
          products?.map((product) => <Product {...product} />)
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default MainContent;

const Product = (props) => {
  const {
    name,
    price,
    id,
    image: { original },
  } = props;
  return (
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
        <h1 className="text-xl">${price}</h1>
        <p title={name} className="text-md font-semibold text-ellipsis	truncate">
          {name}
        </p>
        <button className="product-btn mt-2">
          <p className="flex-grow py-[4px]">Add</p>
          <p className=" rounded-md w-1/4 py-[4px] bg-stone-300 ">+</p>
        </button>
      </div>
    </div>
  );
};

const Categories = () => {
  const [openCollapse, setOpenCollapse] = useState(false);
  return (
    <div>
      <h1 onClick={() => setOpenCollapse((prev) => !prev)}>
        test headnig {">"}
      </h1>
      <ul
        className={`transition-all duration-300 ${
          openCollapse ? "" : "h-0 opacity-0"
        }`}
      >
        <li className={`h-9 bg-drawerBg`}>test1</li>
        <li className={`h-9 bg-drawerBg`}>test2</li>
        <li className={`h-9 bg-drawerBg`}>test3</li>
      </ul>
      <p>s</p>
    </div>
  );
};
