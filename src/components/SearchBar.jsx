import { useState } from "react";

const SearchBar = () => {
  const [val, setVal] = useState("");

  return (
    <div className="w-3/4 mx-auto">
      <input
        className="input rounded-lg w-full"
        placeholder="Search Here ..."
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />

      <Prediction val={val} data={data || []} />
    </div>
  );
};

export default SearchBar;

const Prediction = ({ data }) => {
  if (data?.length > 0)
    return (
      <div className="bg-black -mt-3 transition duration-1000 pt-3 rounded-lg">
        {data.map((e, i) => (
          <div
            key={i}
            className="bg-black text-left px-3 hover:bg-gray-300 hover:text-black transition duration-200 cursor-pointer py-2 border-b"
          >
            {e}
          </div>
        ))}
      </div>
    );
  else return null;
};
