import Link from "next/link"
import { Github } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AutopediX. 保留所有权利。
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-center space-x-2 md:justify-end">
              <p className="text-center text-sm font-medium md:text-right">
                @Turinhub
              </p>
              <Link
                href="https://github.com/turinhub"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 