import { SEARCH_BAR_INDEX } from "@/consts";
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
        className="input  rounded-lg border-white w-full"
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
      <div className="bg-black absolute top-full left-0 z-50 w-full transition duration-1000 pt-3 rounded-lg">
        {data?.slice(0, 4).map((e) => (
          <div
            style={{ zIndex: SEARCH_BAR_INDEX }}
            key={e.numberOfResults}
            className="bg-black text-left px-3 hover:bg-gray-300 hover:text-black transition duration-200 cursor-pointer py-2 border-b"
          >
            {e.searchTerm}
          </div>
        ))}
      </div>
    );
  else return null;
};
