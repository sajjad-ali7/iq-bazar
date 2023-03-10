import { NAVIGATION_INDEX } from "@/consts";
import { getAutoComplete } from "@/service";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getAutoComplete(val).then((data) =>
        setData(data?.data?.suggestionGroups[0]?.suggestions)
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [val]);

  return (
    <form className="w-3/4 relative mx-auto">
      <input
        className="input  rounded-lg text-black w-full"
        placeholder="Search Here ..."
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />

      <Prediction val={val} data={data || []} />
    </form>
  );
};

export default SearchBar;

const Prediction = ({ data }) => {
  if (data?.length > 0)
    return (
      <div
        style={{ zIndex: NAVIGATION_INDEX }}
        className="text-black bg-gray-100 absolute top-full left-0  w-full transition duration-1000 pt-1 rounded-md"
      >
        {data?.slice(0, 4).map((e) => (
          <div
            key={e.numberOfResults}
            className=" text-left capitalize transition duration-200 cursor-pointer px-3 py-2 hover:bg-gray-200 rounded-md"
          >
            {e.searchTerm}
          </div>
        ))}
      </div>
    );
  else return null;
};
