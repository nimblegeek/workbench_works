import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1641893823219-38b433f736c0')"
        }}
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Art of Craftsmanship
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore stories of passionate artisans and find the perfect workbench for your craft
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/stories">
              <Button size="lg" variant="default">
                Read Stories
              </Button>
            </Link>
            <Link href="/workbenches">
              <Button size="lg" variant="outline">
                View Workbenches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1722411927625-0e478acf502b"
              alt="Craftsman at work"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h2 className="text-3xl font-bold mb-4">Craftsmanship Stories</h2>
                <p className="mb-4">Discover inspiring stories of artisans worldwide</p>
                <Link href="/stories">
                  <Button variant="outline">Explore Stories</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1557176312-4c3befef1556"
              alt="Workbench"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h2 className="text-3xl font-bold mb-4">Premium Workbenches</h2>
                <p className="mb-4">Find the perfect workbench for your craft</p>
                <Link href="/workbenches">
                  <Button variant="outline">View Collection</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
