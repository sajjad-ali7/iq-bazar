import { productSectionRefState } from "@/recoil";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SearchBar = ({ onSearchClick }) => {
  const [inputValue, setInputVale] = useState("");
  const [productsSection] = useRecoilState(productSectionRefState);
  useEffect(() => setInputVale(""), []);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchClick(inputValue);
    productsSection.scrollIntoView();
  };

  return (
    <form
      onSubmit={onSubmit}
      className=" md:w-3/4 mt-2 overflow-hidden border-black border rounded relative mx-auto bg-bgColor"
    >
      <input
        className="input focus:outline-0 rounded-lg bg-bgColor placeholder:text-fontColor text-xl max-lg:w-9/12 w-10/12"
        placeholder="Search Here ..."
        onChange={(e) => setInputVale(e.target.value)}
        value={inputValue}
      />
      <button className="text-lg tracking-widest max-lg:w-3/12 w-2/12 h-full text-bgColor py-4 rounded-sm bg-fontColor">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
