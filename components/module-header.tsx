import Link from "next/link"

import { Breadcrumb } from "@/components/breadcrumb"
import { ThemeToggle } from "@/components/theme-toggle"

export function ModuleHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">AutopediX</span>
          </Link>
          <Breadcrumb />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 