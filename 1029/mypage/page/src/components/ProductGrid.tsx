import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "베이직 코튼 티셔츠",
    brand: "ESSENTIAL",
    price: "29,000",
    image: product1,
  },
  {
    id: 2,
    name: "클래식 화이트 스니커즈",
    brand: "URBAN",
    price: "89,000",
    image: product2,
  },
  {
    id: 3,
    name: "슬림핏 데님 진",
    brand: "DENIM LAB",
    price: "79,000",
    image: product3,
  },
  {
    id: 4,
    name: "오버핏 후디",
    brand: "STREET",
    price: "59,000",
    image: product4,
  },
  {
    id: 5,
    name: "베이직 코튼 티셔츠",
    brand: "ESSENTIAL",
    price: "29,000",
    image: product1,
  },
  {
    id: 6,
    name: "클래식 화이트 스니커즈",
    brand: "URBAN",
    price: "89,000",
    image: product2,
  },
  {
    id: 7,
    name: "슬림핏 데님 진",
    brand: "DENIM LAB",
    price: "79,000",
    image: product3,
  },
  {
    id: 8,
    name: "오버핏 후디",
    brand: "STREET",
    price: "59,000",
    image: product4,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">신상품</h2>
          <select className="border border-border px-4 py-2 text-sm bg-background">
            <option>추천순</option>
            <option>최신순</option>
            <option>낮은 가격순</option>
            <option>높은 가격순</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] mb-3 overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{product.brand}</p>
                <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                <p className="text-sm font-bold">{product.price}원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
