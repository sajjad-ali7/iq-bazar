import { useEffect, useState } from "react";

const SearchBar = () => {
  const [val, setVal] = useState("");

  useEffect(() => setVal(""), []);

  return (
    <form className="w-3/4 border-black border rounded relative mx-auto">
      <input
        className="input focus:outline-0 rounded-lg text-black w-full"
        placeholder="Search Here ..."
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
    </form>
  );
};

export default SearchBar;
