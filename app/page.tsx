import { Brain, Database, Sparkles } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FeatureCard } from "@/components/feature-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-accent">
      <SiteHeader />
      <main className="flex-1">
        {/* 英雄区域 */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AutopediX
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  由 AI 助力的在线知识讲解网站。所有讲解页面均由 AI 生成，用于代替传统的 PPT 式讲解。
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="#applications"
                >
                  开始探索
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 特性区域 */}
        <section id="applications" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <Sparkles className="mr-1 inline-block h-4 w-4" />
                  AI 驱动的知识讲解
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  探索我们的知识板块
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AutopediX 提供多个知识板块，涵盖 ERP 系统和人工智能等领域，帮助您快速了解和掌握相关知识。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <FeatureCard
                title="ERP"
                description="企业资源规划系统的全面介绍，包括发展历史和核心功能。"
                icon={<Database className="h-5 w-5" />}
                href="/erp"
              />
              <FeatureCard
                title="人工智能"
                description="探索人工智能的基础知识、应用场景和未来发展趋势。"
                icon={<Brain className="h-5 w-5" />}
                href="/ai"
              />
            </div>
          </div>
        </section>

        {/* 关于我们 */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  关于 AutopediX
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AutopediX 是一个由 AI 驱动的知识讲解平台，旨在提供高质量、易于理解的知识内容。
                  我们的目标是通过 AI 技术，让知识传播变得更加高效和有趣。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
