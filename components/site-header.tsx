import Link from "next/link"

import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">AutopediX</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <MainNav />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 