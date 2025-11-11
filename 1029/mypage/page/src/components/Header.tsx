import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">KSTYLE</h1>
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                MEN
              </a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                WOMEN
              </a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                BRAND
              </a>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
                SALE
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-secondary px-4 py-2 w-80">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="검색" 
                className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
