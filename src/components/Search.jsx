import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { callAPI } from "../utils/CallApi";

const Search = () => {
  const values = [
    "All",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal care ",
    "Books",
    "Boys' fashion",
    "Computers",
    "Deals",
    "Digital music",
    "Electronics",
    "Girls' fashion",
    "Health & household",
    "Home & kitchen",
    "Industrial & scientific",
    "Kindle store",
    "Luggage",
    "Men's fashion",
    "Movies & TV",
    "Music, CDs & vinyl",
    "Pet supplies",
    "Prime video",
    "Sowftware",
    "Sports & outdoor",
    "Tools & home improvement",
    "Toys & games",
    "Video games",
    "Women's fashion",
  ];

  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 overflow-hidden rounded searchbar border-stone-900 bg-amazon-yellow ">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black h-[100%] w-2/12 text-xs capitalize"
        >
          {values.map((item, index) => (
            <option className="capitalize" key={index}>{item}</option>
          ))}
        </select>
        <input
          className="flex grow items-center h-[100%]  text-black "
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSubmit} className="w-[45px] searchIcon">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
