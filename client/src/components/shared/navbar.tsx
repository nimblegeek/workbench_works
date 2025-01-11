import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container max-w-5xl mx-auto px-4 flex h-20 items-center justify-between">
        <Link href="/">
          <span className="text-lg tracking-tight">Workbench</span>
        </Link>
        <div className="flex gap-12">
          <Link href="/stories">
            <span className="text-sm uppercase tracking-wide hover:text-foreground/80 transition-colors">
              Stories
            </span>
          </Link>
          <Link href="/workbenches">
            <span className="text-sm uppercase tracking-wide hover:text-foreground/80 transition-colors">
              Shop
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
