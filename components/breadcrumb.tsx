"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { getBreadcrumbs } from "@/lib/routes"

export function Breadcrumb() {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname || "/")

  return (
    <nav className="flex items-center text-sm" aria-label="面包屑导航">
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1
          
          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              )}
              
              {isLast ? (
                <span className="font-medium text-foreground">{item.label}</span>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "hover:text-foreground transition-colors",
                    "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
} 