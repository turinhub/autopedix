"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  BarChart4,
  History,
  Layers,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  DollarSign,
  Database,
  Users,
  ShoppingCart,
  FileCheck,
  Settings,
  ArrowRightLeft,
  LineChart,
  CheckCircle2,
  Building2,
  Workflow
} from "lucide-react"

export default function BusinessFinancePage() {
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
              业财一体化
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              业财一体化是通过 ERP 系统实现业务流程与财务流程的深度整合，确保业务数据与财务数据实时同步、自动流转，
              消除信息壁垒，实现企业运营的高效协同。
            </p>
          </div>
        </div>
      </section>

      {/* 定义与对比 */}
      <section className="py-16" id="definition">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ArrowRightLeft className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">定义与对比</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-destructive">传统模式</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">业务与财务分离</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">手工录入数据</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">效率低、易出错</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-primary">业财一体化</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">业务动作触发财务核算</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">数据自动生成</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">实时可追溯</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值 */}
      <section className="py-16 bg-secondary/10" id="value">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">核心价值</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">效率提升</h3>
                </div>
                <p className="text-muted-foreground">减少人工对账、重复录入，如销售订单自动生成应收款凭证。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">数据一致性</h3>
                </div>
                <p className="text-muted-foreground">统一业务与财务数据口径，避免"财务账"与"业务账"差异。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">风险控制</h3>
                </div>
                <p className="text-muted-foreground">实时监控业务合规性，如预算超支预警、成本异常分析。</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md hover:border-foreground/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <BarChart4 className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">决策支持</h3>
                </div>
                <p className="text-muted-foreground">通过财务数据反哺业务优化，如分析销售毛利指导定价策略。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实现路径 */}
      <section className="py-16" id="implementation">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Workflow className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">实现路径</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">步骤1：业务流程标准化</h3>
                <p className="text-muted-foreground mb-4">
                  梳理采购、销售、生产等核心业务流程，明确与财务核算的关联节点。
                </p>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">示例：采购订单审批后 → 自动生成应付账款凭证</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">步骤2：系统集成与规则配置</h3>
                <p className="text-muted-foreground mb-4">在 ERP 中预设业务-财务映射规则：</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 业务单据类型 → 对应会计科目</li>
                  <li>• 成本分摊逻辑</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">步骤3：数据流自动化</h3>
                <p className="text-muted-foreground">
                  业务动作触发财务凭证生成，实现"单证合一"。
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">步骤4：分析与管理闭环</h3>
                <p className="text-muted-foreground">
                  通过财务报表反向追溯业务动因，驱动优化。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-16 bg-secondary/10" id="scenarios">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">应用场景</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">场景1：销售到收款（Order to Cash）</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">流程：</p>
                    <p className="text-muted-foreground">销售订单 → 发货 → 开票 → 收款 → 财务入账</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">业财联动：</p>
                    <p className="text-muted-foreground">发货时自动生成应收账款，收款后自动核销</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">场景2：采购到付款（Procure to Pay）</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">流程：</p>
                    <p className="text-muted-foreground">采购申请 → 订单 → 收货 → 发票校验 → 付款</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">业财联动：</p>
                    <p className="text-muted-foreground">收货时生成暂估应付，发票校验后自动生成正式应付账款</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">场景3：成本核算</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">流程：</p>
                    <p className="text-muted-foreground">生产工单 → 物料消耗 → 人工费用 → 制造费用分摊 → 产品成本计算</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">业财联动：</p>
                    <p className="text-muted-foreground">生产数据实时同步至财务模块，自动计算成本并生成凭证</p>
                  </div>
                </div>
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
              <h2 className="text-3xl font-bold">实施挑战与对策</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">跨部门协作困难</h3>
                <p className="font-medium text-destructive mb-2">挑战：</p>
                <p className="text-muted-foreground mb-4">部门间沟通不畅，职责界定不清</p>
                <p className="font-medium text-primary mb-2">对策：</p>
                <p className="text-muted-foreground">成立业财联合项目组，明确业务与财务的权责边界</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">系统规则配置复杂</h3>
                <p className="font-medium text-destructive mb-2">挑战：</p>
                <p className="text-muted-foreground mb-4">规则繁多，配置难度大</p>
                <p className="font-medium text-primary mb-2">对策：</p>
                <p className="text-muted-foreground">分阶段验证规则，利用沙盒环境测试</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">历史数据迁移问题</h3>
                <p className="font-medium text-destructive mb-2">挑战：</p>
                <p className="text-muted-foreground mb-4">数据格式不统一，冗余数据多</p>
                <p className="font-medium text-primary mb-2">对策：</p>
                <p className="text-muted-foreground">清理冗余数据，统一编码规则</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">员工抵触变革</h3>
                <p className="font-medium text-destructive mb-2">挑战：</p>
                <p className="text-muted-foreground mb-4">习惯原有工作方式，抗拒变化</p>
                <p className="font-medium text-primary mb-2">对策：</p>
                <p className="text-muted-foreground">开展业财一体化培训，强调长期收益</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-16 bg-secondary/10" id="cases">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <FileCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">成功案例</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">某制造企业</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-destructive mb-2">问题：</p>
                    <p className="text-muted-foreground">财务月度结算耗时15天，成本核算误差率高</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">方案：</p>
                    <p className="text-muted-foreground">ERP实施业财一体化，生产工单与成本中心联动</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">成果：</p>
                    <p className="text-muted-foreground">财务结算周期缩短至3天，成本核算准确率提升至98%</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">某零售企业</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-destructive mb-2">问题：</p>
                    <p className="text-muted-foreground">门店销售数据与财务收入账差异频繁</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">方案：</p>
                    <p className="text-muted-foreground">统一POS系统与ERP财务模块，实时同步销售数据</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-2">成果：</p>
                    <p className="text-muted-foreground">差异率从5%降至0.2%，库存周转效率提升20%</p>
                  </div>
                </div>
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">关键成功要素</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>高层支持与跨部门协同</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>流程标准化先行，系统配置随后</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>持续优化与员工赋能</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">企业自查清单</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>是否所有业务动作均能触发财务数据更新？</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <p>财务能否通过系统直接追溯业务源头？</p>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-6">
                  <p className="text-xl font-medium text-primary">
                    业财一体化，让每一笔业务都"自动生财"
                  </p>
                </div>
              </div>
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
              <a href="#value">价值</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
              <a href="#implementation">实现</a>
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
              <a href="#value">价值</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#implementation">实现</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#scenarios">场景</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#challenges">挑战</a>
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <a href="#cases">案例</a>
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