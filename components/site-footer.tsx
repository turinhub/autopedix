import Link from "next/link"
import { Github, Heart, Sparkles, Brain, Building } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: "产品",
      links: [
        { name: "ERP系统", href: "/erp" },
        { name: "人工智能", href: "/ai" },
      ]
    },
    {
      title: "技术",
      links: [
        { name: "机器学习", href: "/ai/ml" },
        { name: "深度学习", href: "/ai/dl" },
        { name: "计算机视觉", href: "/ai/cv" },
        { name: "大语言模型", href: "/ai/llm" },
      ]
    }
  ]

  return (
    <footer className="relative border-t bg-gradient-to-br from-background via-background to-secondary/20">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto max-w-7xl px-4">
        {/* 主要内容区域 */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* 品牌信息 */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  AutopediX
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                由 AI 助力的在线知识讲解网站，专注于提供高质量、易于理解的技术知识内容。
                让知识传播变得更加高效和有趣。
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/turinhub"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/60 hover:bg-secondary transition-colors group"
                >
                  <Github className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">GitHub</span>
                </Link>
              </div>
            </div>

            {/* 导航链接 */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  {section.title === "产品" ? (
                    <Building className="w-4 h-4 text-primary" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-primary" />
                  )}
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 底部分割线和版权信息 */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} AutopediX. 保留所有权利。</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="https://github.com/turinhub"
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-medium">@Turinhub</span>
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 