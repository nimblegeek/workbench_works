import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/shared/navbar";
import Home from "@/pages/home";
import Stories from "@/pages/stories";
import Workbenches from "@/pages/workbenches";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/stories" component={Stories} />
          <Route path="/workbenches" component={Workbenches} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Craftsmanship Platform. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
