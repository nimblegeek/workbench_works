import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <section className="py-24 md:py-32 border-b">
          <div className="max-w-2xl">
            <h1 className="text-4xl/tight md:text-5xl/tight font-light mb-6">
              Preserving the legacy of craftsmanship through stories and shared wisdom.
            </h1>
            <p className="text-lg text-muted-foreground">
              A digital archive documenting artisans and their craft.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 py-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-wide text-muted-foreground mb-6">Featured Stories</h2>
              <div className="space-y-1">
                <h3 className="text-2xl font-light">Stories of Artisans</h3>
                <p className="text-muted-foreground">
                  Personal narratives from craftsmen sharing their journey, techniques, and expertise.
                </p>
              </div>
              <Link href="/stories">
                <Button variant="link" className="mt-4 p-0">
                  Browse stories →
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-xs uppercase tracking-wide text-muted-foreground mb-6">Collection</h2>
              <div className="space-y-1">
                <h3 className="text-2xl font-light">Premium Workbenches</h3>
                <p className="text-muted-foreground">
                  Curated selection of artisan-crafted workbenches.
                </p>
              </div>
              <Link href="/workbenches">
                <Button variant="link" className="mt-4 p-0">
                  View collection →
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}