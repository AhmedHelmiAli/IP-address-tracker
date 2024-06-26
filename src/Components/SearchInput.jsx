import axios from "axios";
import { useState, useContext, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { DataContext } from "../contexts/DataContext";

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const { setIsloading, setError, setUserData } = useContext(DataContext);
  const prevSearchInput = useRef(null);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  const handleClick = async () => {
    if (searchInput === prevSearchInput.current) return;
    try {
      setError(false);
      setIsloading(true);
      const response = await axios.get(`https://ipapi.co/${searchInput}/json/`);
      if (response.data.error) {
        throw new Error(response.data.reason);
      }
      setUserData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
      prevSearchInput.current = searchInput;
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="flex justify-center mb-6 text-sm ">
      <input
        className="w-2/3 sm:text-lg px-1 py-2 mx-0.5 rounded-l-lg md:w-1/2 text-slate-400"
        type="text"
        placeholder="Search for any ip address or domain"
        value={searchInput}
        onChange={handleChange}
      />
      <button
        className="px-2 py-3 bg-black rounded-r-lg "
        onClick={handleClick}
      >
        <IoIosArrowForward className="text-white sm:text-xl" />
      </button>
    </div>
  );
}

export default SearchInput;
