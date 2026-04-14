import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SearchResults from "./SearchResults";
import { Menu, Search, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="bg-white dark:bg-gray-900 
      border-b dark:border-gray-700 
      px-4 py-3 flex flex-wrap items-center justify-between gap-3"
    >
      {/* Logo */}
      <h1 className="font-bold text-lg">LearnDev</h1>

      {/* Right Section */}
      <div
        className="relative flex items-center gap-2 border px-3 py-2 rounded-md
      bg-gray-100 dark:bg-gray-800 w-full sm:w-auto"
      >
        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-blue-600 text-white 
          hover:bg-blue-700 
          transition"
        >
          <Menu size={18} />
        </button>

        {/* Search */}

        <Search size={16} />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Lesson..."
          className="w-full sm:w-64 px-3 py-2 rounded-md
          border dark:border-gray-600
          bg-white dark:bg-gray-800
          text-black dark:text-white bg-transparent text-sm outline-none"
        />

        <SearchResults query={query} setQuery={setQuery} />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-blue-600 text-white 
          hover:bg-blue-700 
          transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
