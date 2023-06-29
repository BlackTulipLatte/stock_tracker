import React, { useState, useContext } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResult";
import ThemeContext from "../context/ThemeContext";
import { searchStock, searchQuote } from "../util/API";
import { searchSymbols } from "../util/API";

const Search = ({ stockCallback, quoteCallback }) => {
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState([]);
  const [bestMatches, setBestMatches] = useState([]);

  const { darkMode } = useContext(ThemeContext);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async (stock) => {
    const results = await searchStock(stock.toUpperCase().trim());
    setBestMatches(results);
    stockCallback(results);
    console.log(results);
  };

  const updateQuote = async (stock) => {
    const results = await searchQuote(stock.toUpperCase().trim());
    setQuote(results);
    quoteCallback(results);
    console.log(results);
  };

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode
          ? "bg-neutral-900 border-neutral-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text "
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? "bg-neutral-900" : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          // differs from onKeypress as show in video
          if (event.key === "Enter") {
            updateBestMatches(input);
            updateQuote(input);
          }
        }}
      />

      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-neutral-500" />
        </button>
      )}
      <button
        onClick={(event) => {
          if (event.button === 0) {
            // Check if left mouse button was clicked
            updateBestMatches(input);
            updateQuote(input);
          }
        }}
        className="h-8 w-8 bg-yellow-500 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-yellow-400"
      >
        <SearchIcon className="h-4 w-4 fill-neutral-100" />
      </button>

      {/*{input && bestMatches.length > 0 ? <SearchResults results={bestMatches} /> : null}*/}
    </div>
  );
};

export default Search;
