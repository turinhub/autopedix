"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-8 text-sm font-medium">
      <Link
        href="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground font-semibold" : "text-foreground/60"
        )}
      >
        首页
      </Link>
      <Link
        href="/erp"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/erp") ? "text-foreground font-semibold" : "text-foreground/60"
        )}
      >
        ERP
      </Link>
      <Link
        href="/ai"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/ai") ? "text-foreground font-semibold" : "text-foreground/60"
        )}
      >
        人工智能
      </Link>
    </nav>
  )
} 