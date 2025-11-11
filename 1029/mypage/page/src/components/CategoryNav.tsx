const categories = [
  "전체",
  "아우터",
  "상의",
  "하의",
  "신발",
  "가방",
  "액세서리",
  "스포츠",
];

const CategoryNav = () => {
  return (
    <div className="border-b border-border bg-background sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className="text-sm font-medium whitespace-nowrap hover:text-accent transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
