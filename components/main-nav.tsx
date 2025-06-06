"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/erp", label: "ERP" },
    { href: "/ai", label: "人工智能" },
  ]

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-secondary/80",
            pathname === item.href || pathname?.startsWith(item.href + "/")
              ? "text-primary bg-primary/10 shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.label}
          {(pathname === item.href || pathname?.startsWith(item.href + "/")) && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
          )}
        </Link>
      ))}
    </nav>
  )
} 