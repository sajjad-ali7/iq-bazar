import { useEffect, useState } from "react";

const SearchBar = () => {
  const [val, setVal] = useState("");

  useEffect(() => setVal(""), []);

  return (
    <form className="w-3/4 overflow-hidden border-black border rounded relative mx-auto bg-bgColor">
      <input
        className="input focus:outline-0 rounded-lg bg-bgColor placeholder:text-fontColor text-xl  w-10/12"
        placeholder="Search Here ..."
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <button className="text-lg tracking-widest w-2/12 h-full text-bgColor py-4 rounded-sm bg-fontColor">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
