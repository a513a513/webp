import heroImage from "@/assets/hero-fashion.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-secondary">
      <img 
        src={heroImage} 
        alt="Fashion Hero" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              2024 S/S<br />
              NEW COLLECTION
            </h2>
            <p className="text-lg mb-8 text-white/90">
              최신 트렌드를 반영한 새로운 컬렉션
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8">
              컬렉션 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
