"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  Settings,
  CheckCircle2,
  BarChart,
  Receipt,
  Landmark,
  Briefcase,
  Factory,
  PiggyBank
} from "lucide-react"

export default function FinancePage() {
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
              ERP 财务模块
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ERP财务模块是企业资源规划系统的“中枢神经”，集成业务数据，实现业务流、信息流、资金流三流合一，
              实时反映企业经营状况，支撑财务核算、分析、预测与决策。
            </p>
          </div>
        </div>
      </section>

      {/* 财务模块的核心定位 */}
      <section className="py-16" id="core-positioning">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">财务模块的核心定位</h2>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h3 className="text-xl font-semibold mb-4">ERP中的“中枢神经”</h3>
              <p className="mb-6 text-muted-foreground">
                财务模块通过集成业务数据（销售、采购、生产等），实现业务流、信息流、资金流三流合一，
                实时反映企业经营状况，支撑财务核算、分析、预测与决策。
              </p>

              <h4 className="text-lg font-medium mb-3">覆盖范围：</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">核心功能</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">总账管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">应收应付</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">资产管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">成本核算</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">预算控制</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">财务报表</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">扩展功能</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">税务管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">资金管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">合并报表（适用于集团企业）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 财务模块的核心功能解析 */}
      <section className="py-16 bg-secondary/10" id="core-functions">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Settings className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">财务模块的核心功能解析</h2>
            </div>

            {/* 总账管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <BarChart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">总账管理（GL, General Ledger）</h3>
              </div>
              
              <p className="mb-4 text-muted-foreground">
                总账管理是财务模块的核心，负责记录所有财务交易，生成会计凭证，形成总分类账。
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">关键能力：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">支持多会计准则（如IFRS、GAAP）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">自动生成试算平衡表、科目余额表</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">期末自动结转损益</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">应用示例：</h4>
                <p className="text-muted-foreground">销售订单确认后，自动生成收入凭证并更新总账。</p>
              </div>
            </div>

            {/* 应收应付管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Receipt className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">应收应付管理（AR/AP）</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3">应收账款（AR）：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">客户账款跟踪</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">信用控制</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">收款核销</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">自动化流程：</span>
                      发货→开票→收款→应收账款核销
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">应付账款（AP）：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">供应商对账</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">发票校验</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">付款计划</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">自动化流程：</span>
                      采购收货→发票匹配→付款审批→应付账款核销
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 资产管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">资产管理（FA, Fixed Assets）</h3>
              </div>
              
              <p className="mb-4 text-muted-foreground">
                资产管理模块负责跟踪企业固定资产的全生命周期，包括采购、折旧计算、维护和处置等环节。
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">主要功能：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">资产采购与登记</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">多种折旧方法（直线法、双倍余额递减法等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">资产转移与调拨</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">资产报废与处置</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">集成价值：</h4>
                <p className="text-muted-foreground">资产采购与应付模块联动，折旧数据自动同步至总账，实现资产全生命周期的自动化管理。</p>
              </div>
            </div>

            {/* 成本管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">成本管理（Cost Accounting）</h3>
              </div>
              
              <p className="mb-4 text-muted-foreground">
                成本管理模块负责企业各类成本的归集、分配与核算，为产品定价、利润分析提供数据支持。
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">核心场景：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">生产成本归集（材料、人工、制造费用）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">按订单/项目核算成本</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">成本差异分析（标准成本 vs 实际成本）</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">应用示例：</h4>
                <p className="text-muted-foreground">生产工单完成后，自动计算产品单位成本并生成凭证，支持多维度成本分析。</p>
              </div>
            </div>

            {/* 预算与资金管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <PiggyBank className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">预算与资金管理</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3">预算控制：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">部门/项目预算设置</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">预算执行监控</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">超支自动预警</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">应用场景：</span>
                      采购申请时自动检查预算余额，超预算时触发审批流程。
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">资金计划：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">现金流预测</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">资金头寸管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">银行账户管理</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">价值体现：</span>
                      基于应收应付数据预测现金流，优化资金使用效率。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">集成优势：</h4>
                <p className="text-muted-foreground">预算与业务流程紧密结合，实现事前控制、事中监控、事后分析的全过程管理，避免超支风险。</p>
              </div>
            </div>

            {/* 移动端导航 */}
            <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
              <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
                <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
                  <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
                    <a href="#intro">简介</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
                    <a href="#core-positioning">核心定位</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" asChild>
                    <a href="#core-functions">核心功能</a>
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
                    <a href="#core-positioning">核心定位</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full" asChild>
                    <a href="#core-functions">核心功能</a>
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
          </div>
        </div>
      </section>
    </>
  )
} 