"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  className,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md hover:shadow-foreground/5 hover:border-foreground/20",
        className
      )}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            {icon}
          </div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-5 w-5" />
      </div>
    </Link>
  )
} 