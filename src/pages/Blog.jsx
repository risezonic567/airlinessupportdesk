import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { blogPosts, categories } from "../data/blog";
import BlogCard from "../components/BlogCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { SearchX } from "lucide-react";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") || "All";
  const urlQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState(urlQuery);

  useEffect(() => {
    setSelectedCategory(urlCategory);
    setSearchQuery(urlQuery);
  }, [urlCategory, urlQuery]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (!query.trim()) {
      params.delete("search");
    } else {
      params.set("search", query);
    }
    setSearchParams(params);
  };

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Articles
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Filter by topic or search keywords to find exact content tailored to your tech journey.
          </p>
        </div>

        {/* Search */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchChange} />

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 my-8 shadow-sm">
            <SearchX className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No articles found</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find anything matching your search query or category filter. Try clearing your search parameters.
            </p>
            <button
              onClick={() => {
                handleCategorySelect("All");
                handleSearchChange("");
              }}
              className="px-4 py-2 bg-indigo-600 text-white text-md font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}