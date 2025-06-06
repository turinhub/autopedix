import Link from "next/link"
import { Brain, Sparkles } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
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
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
} 