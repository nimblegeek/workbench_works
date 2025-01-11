import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/">
          <span className="text-lg font-semibold">Craftsmanship</span>
        </Link>
        <div className="flex gap-8">
          <Link href="/stories">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">Stories</span>
          </Link>
          <Link href="/workbenches">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">Workbenches</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}