import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="ghost" className="text-lg font-semibold">
                  Craftsmanship
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/stories">
                <Button variant="ghost">Stories</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/workbenches">
                <Button variant="ghost">Workbenches</Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
