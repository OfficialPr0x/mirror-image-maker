const categories = ["All Products", "Chairs", "Sofas", "Tables", "Beds"];

const CategoryFilter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-8 px-4 animate-fadeIn">
      {categories.map((category) => (
        <button
          key={category}
          className="px-6 py-2 rounded-full border border-sage-200 hover:border-sage-400 bg-white hover:bg-sage-50 text-gray-600 hover:text-sage-600 transition-all duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;