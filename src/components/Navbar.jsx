import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, BookOpen } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSearch(false);
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const activeClass = "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1";
  const inactiveClass = "text-gray-600 hover:text-indigo-600 font-medium transition-colors pb-1";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900 tracking-tight">
            <div className="p-2 bg-indigo-600 text-white rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <span>Airlines Support Desk<span className="text-indigo-600">.</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {showSearch ? (
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-9 pr-8 py-1.5 text-sm bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                  autoFocus
                />
                <Search className="w-4 h-4 text-gray-500 absolute left-3" />
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="absolute right-2 text-gray-500 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative mt-2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
          </form>

          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-50"
                  }`
                }
                end={link.path === "/"}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}