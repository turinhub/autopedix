"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import {
  BarChart4,
  History,
  Layers,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Database,
  Users,
  ShoppingCart,
  DollarSign,
  UserCheck
} from "lucide-react"

export default function ERPPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24" id="intro">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              ERP 系统
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              企业资源规划（Enterprise Resource Planning，ERP）是一种集成化的管理信息系统，
              它整合了企业内部的各种业务流程和信息流，如财务、人力资源、供应链、生产、销售等，
              使企业能够更有效地管理和利用资源。
            </p>
          </div>
        </div>
      </section>

      {/* 定义与核心目标 */}
      <section className="py-16" id="definition">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">定义与核心目标</h2>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h3 className="text-xl font-semibold mb-4">ERP是什么？</h3>
              <p className="mb-4 text-muted-foreground">
                <span className="font-medium">全称：</span>Enterprise Resource Planning（企业资源计划）
              </p>
              <p className="mb-6 text-muted-foreground">
                <span className="font-medium">定义：</span>集成企业核心业务流程的信息化管理平台，实现数据流、资金流、物流的统一管理。
              </p>

              <h4 className="text-lg font-medium mb-3">核心目标：</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span>优化资源配置</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span>打破部门信息孤岛</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-primary">
                    <BarChart4 className="h-5 w-5" />
                  </div>
                  <span>提升运营效率与决策质量</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-secondary/10" id="history">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <History className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">发展历程</h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 font-semibold">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary">1960s</span>
                  </div>
                  <div className="md:col-span-4 bg-card rounded-lg p-6 shadow-sm border relative">
                    <div className="absolute left-0 top-1/2 -translate-x-full hidden md:block">
                      <div className="w-4 h-0.5 bg-border"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:hidden -translate-x-8"></div>
                    <h3 className="text-xl font-semibold mb-2">MRP（物料需求计划）</h3>
                    <p className="text-muted-foreground">聚焦生产物料计划，解决“何时采购、生产多少”。</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 font-semibold">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary">1980s</span>
                  </div>
                  <div className="md:col-span-4 bg-card rounded-lg p-6 shadow-sm border relative">
                    <div className="absolute left-0 top-1/2 -translate-x-full hidden md:block">
                      <div className="w-4 h-0.5 bg-border"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:hidden -translate-x-8"></div>
                    <h3 className="text-xl font-semibold mb-2">MRP II（制造资源计划）</h3>
                    <p className="text-muted-foreground">扩展至生产、财务、销售等模块，实现闭环管理。</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 font-semibold">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary">1990s</span>
                  </div>
                  <div className="md:col-span-4 bg-card rounded-lg p-6 shadow-sm border relative">
                    <div className="absolute left-0 top-1/2 -translate-x-full hidden md:block">
                      <div className="w-4 h-0.5 bg-border"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:hidden -translate-x-8"></div>
                    <h3 className="text-xl font-semibold mb-2">ERP诞生</h3>
                    <p className="text-muted-foreground">整合供应链、人力资源、客户关系，覆盖全企业。</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 font-semibold">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary">2000s至今</span>
                  </div>
                  <div className="md:col-span-4 bg-card rounded-lg p-6 shadow-sm border relative">
                    <div className="absolute left-0 top-1/2 -translate-x-full hidden md:block">
                      <div className="w-4 h-0.5 bg-border"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:hidden -translate-x-8"></div>
                    <h3 className="text-xl font-semibold mb-2">云ERP与智能化</h3>
                    <p className="text-muted-foreground">云计算、AI、大数据驱动ERP向灵活、智能化发展。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 系统核心模块 */}
      <section className="py-16" id="modules">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Layers className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">系统核心模块</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/erp/finance" className="block">
                <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">财务管理</h3>
                  </div>
                  <p className="text-muted-foreground">应收/应付、成本核算、预算控制。</p>
                </div>
              </Link>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">供应链管理（SCM）</h3>
                </div>
                <p className="text-muted-foreground">采购、库存、物流一体化。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Database className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">生产管理</h3>
                </div>
                <p className="text-muted-foreground">生产计划、工序管理、质量控制。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">人力资源管理（HRM）</h3>
                </div>
                <p className="text-muted-foreground">招聘、考勤、绩效、薪酬。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all group md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">客户关系管理（CRM）</h3>
                </div>
                <p className="text-muted-foreground">销售线索、客户服务、数据分析。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 关键优势 */}
      <section className="py-16 bg-secondary/10" id="implementation">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">关键优势</h2>
            </div>

            <div className="space-y-4">
              <Link href="/erp/business-finance" className="block">
                <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                  <h3 className="text-xl font-semibold mb-2">业财一体化</h3>
                  <p className="text-muted-foreground">单一数据源，避免信息冲突。</p>
                </div>
              </Link>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">效率提升</h3>
                <p className="text-muted-foreground">自动化流程减少人工干预。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">实时决策</h3>
                <p className="text-muted-foreground">仪表盘与报表支持快速响应。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">合规与风控</h3>
                <p className="text-muted-foreground">标准化流程降低运营风险。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施挑战 */}
      <section className="py-16" id="challenges">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">实施挑战</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">高成本</h3>
                <p className="text-muted-foreground">软件授权、定制开发、培训费用。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">流程重构</h3>
                <p className="text-muted-foreground">需调整现有业务流程适配系统。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">变革阻力</h3>
                <p className="text-muted-foreground">员工适应新系统的抵触心理。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-2">数据迁移风险</h3>
                <p className="text-muted-foreground">历史数据清洗与整合难度大。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 未来趋势 */}
      <section className="py-16 bg-secondary/10" id="trends">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">未来趋势</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-semibold mb-2">云ERP普及</h3>
                <p className="text-muted-foreground">低成本、高扩展性，支持远程协作。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-semibold mb-2">AI集成</h3>
                <p className="text-muted-foreground">预测性分析、智能客服、自动化报告。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-semibold mb-2">行业垂直化</h3>
                <p className="text-muted-foreground">针对制造业、零售业等定制解决方案。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-semibold mb-2">移动化</h3>
                <p className="text-muted-foreground">APP支持随时随地访问与管理。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 总结 */}
      <section className="py-16" id="summary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <BarChart4 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">总结</h2>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>ERP是数字化转型的核心工具，助力企业实现资源高效协同。</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>选择ERP需平衡功能、成本与企业实际需求。</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p>持续迭代与员工培训是成功落地的关键。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 移动端导航 */}
      <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
              <a href="#intro">简介</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
              <a href="#definition">定义</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
              <a href="#history">历程</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
              <a href="#modules">模块</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* 桌面端导航 */}
      <nav className="hidden md:flex sticky bottom-8 justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#intro">简介</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#definition">定义</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#history">历程</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#modules">模块</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#implementation">实施</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#challenges">挑战</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#trends">趋势</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#summary">总结</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-20"
          aria-label="回到顶部"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
