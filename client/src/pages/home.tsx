import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="max-w-[640px] space-y-4">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
            Stories of Craft & Dedication
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover inspiring stories of artisans and find the perfect workbench for your craft.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/stories">
              <Button size="lg">Explore Stories</Button>
            </Link>
            <Link href="/workbenches">
              <Button size="lg" variant="outline">Browse Workbenches</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="border-t bg-muted/40">
        <div className="container py-24 space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium">Craftsmanship Stories</h2>
              <p className="text-muted-foreground">
                Read inspiring stories of artisans worldwide who dedicate their lives to preserving and advancing their craft.
              </p>
              <Link href="/stories">
                <Button variant="outline">Read Stories</Button>
              </Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1722411927625-0e478acf502b"
              alt="Craftsman at work"
              className="aspect-[4/3] object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-2">
              <h2 className="text-3xl font-medium">Premium Workbenches</h2>
              <p className="text-muted-foreground">
                Find meticulously crafted workbenches that provide the perfect foundation for your creative work.
              </p>
              <Link href="/workbenches">
                <Button variant="outline">View Collection</Button>
              </Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1557176312-4c3befef1556"
              alt="Workbench"
              className="aspect-[4/3] object-cover rounded-lg md:order-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
}