import { ReactNode } from "react";
import Link from "next/link";
import { Brain, Sparkles } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AISidebar } from "@/components/ai-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumb } from "@/components/breadcrumb";

export default function AILayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AISidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
            <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="hover:bg-secondary/80 transition-colors" />
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Brain className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="w-2 h-2 text-accent-foreground" />
                    </div>
                  </div>
                  <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                    AutopediX
                  </span>
                </Link>
                <div className="hidden md:block">
                  <Breadcrumb />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
              </div>
            </div>
          </header>
          <main className="flex-1 bg-accent">
            {children}
          </main>
          <SiteFooter />
        </div>
      </div>
    </SidebarProvider>
  );
} 