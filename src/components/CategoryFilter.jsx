export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none my-6">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-md sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              isActive
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}