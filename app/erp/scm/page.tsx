"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  Network,
  Globe,
  Workflow,
  CheckCircle2,
  BarChart,
  LineChart,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
  Gauge,
  Blocks,
  Users,
  Package,
  MapPin,
  Map as MapIcon,
  BarChart4,
  Handshake,
  UserCheck,
  FileText,
  BarChart3,
  Truck,
  Navigation as Locate,
  Brain,
  Gavel,
  ClipboardCheck,
  Calculator,
  ScanBarcode,
  TrendingDown,
  Warehouse,
  Factory,
  Building2,
  Rocket,
  Store,
  DatabaseZap,
  BadgeCheck,
  TrendingUp,
  Clock,
  BadgePercent,
  Lightbulb,
  Eye,
  Shield,
  Activity,
  Info
} from "lucide-react"

export default function ScmPage() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // 考虑固定导航的高度
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24" id="intro">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              ERP 供应链管理模块
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              供应链管理(SCM)是企业ERP系统的核心业务模块，整合从供应商到客户的端到端流程，
              优化物料流、信息流和资金流，提升企业运营效率，降低成本，增强市场响应速度和竞争力。
            </p>
          </div>
        </div>
      </section>

      {/* 模块总览 */}
      <section className="py-16" id="overview">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Network className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">模块总览</h2>
            </div>

            <div className="space-y-8">
              {/* 供应链全景视图 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">供应链全景视图</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  全面展示企业供应链网络结构，实现全局可视化管理，让决策者洞悉整体供应链运作情况。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">网络结构与协同关系</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">供应商-生产-分销-客户全链路图谱</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">上下游协同关系动态展示</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">关键节点交互依赖分析</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">全球化布局与风险管理</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">全球供应链热力图分析</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">风险热点识别与预警</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">实时数据集成与动态更新</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">应用价值：</h4>
                  <p className="text-muted-foreground">通过供应链可视化，企业管理者能够快速识别潜在风险点，做出更高效的资源调配决策，并针对性优化供应网络结构。</p>
                </div>
              </div>

              {/* 端到端流程可视化图表 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">端到端流程可视化图表</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  清晰展示从需求预测到客户交付的全链路业务流程，标注关键节点与部门协作界面，实现全流程透明化管理。
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-3">核心流程展示</h4>
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">需求预测</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">采购执行</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">库存管理</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">生产协同</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">物流配送</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">客户交付</div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex-1 text-center">销售/市场</div>
                        <div className="flex-1 text-center">采购</div>
                        <div className="flex-1 text-center">仓储</div>
                        <div className="flex-1 text-center">生产</div>
                        <div className="flex-1 text-center">物流</div>
                        <div className="flex-1 text-center">销售/客服</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">跨部门协作节点</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">采购-仓储：物料入库交接</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">仓储-生产：物料齐套检查</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">生产-物流：成品入库与配送计划</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">流程诊断与优化</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">瓶颈节点自动识别</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">耗时分析与优化建议</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">流程变更影响评估</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 关键绩效指标看板 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">关键绩效指标看板（KPI Dashboard）</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  集成展示供应链核心运营指标，实时监控绩效表现，支持多维度分析与异常预警，为管理决策提供数据支撑。
                </p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">核心指标体系：</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-semibold text-primary">94.8%</div>
                      <div className="text-sm text-muted-foreground">订单满足率</div>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-semibold text-primary">12.5</div>
                      <div className="text-sm text-muted-foreground">库存周转率</div>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-semibold text-primary">96.2%</div>
                      <div className="text-sm text-muted-foreground">准时交付率</div>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-semibold text-primary">8.3%</div>
                      <div className="text-sm text-muted-foreground">供应链成本占比</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">数据可视化工具</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">热力图：不同区域/产品线绩效对比</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">趋势图：指标历史走势与预测</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">对标分析：行业标杆与内部最佳实践比对</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">异常预警与分析</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">智能阈值设定与预警提醒</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">根因自动分析与推荐措施</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground">异常事件跟踪与闭环管理</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">定制化仪表盘：</h4>
                  <p className="text-muted-foreground">根据不同角色（高管、部门经理、专员）定制显示内容和权限，确保各层级获取最相关的KPI信息。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 核心功能分区 */}
      <section className="py-16 bg-secondary/10" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Blocks className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">核心功能分区</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AutoPedix-SCM模块整合了四大核心功能板块，从供应商管理到物流配送，
                全面覆盖供应链各环节，助力企业构建高效、敏捷的供应链体系。
              </p>
            </div>

            <div className="space-y-16">
              {/* 供应商关系管理 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">供应商关系管理（SRM）</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      构建战略性供应商合作关系，实现资源整合与协同创新，提升供应链韧性与竞争力。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <UserCheck className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">供应商全生命周期管理</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">引入与资质评估流程</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">绩效评价与分级管理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">发展计划与退出机制</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">合同与协议管理</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">标准合同模板库</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">合同履行跟踪与预警</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">付款条件与结算管理</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">供应商绩效分析</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多维度KPI评估体系</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">实时监控与反馈机制</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">改进计划追踪管理</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Handshake className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">战略协作与发展</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">供应商创新合作平台</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">联合研发与技术交流</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">供应商赋能与培养计划</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 智能采购系统 */}
              <div>
                <div className="lg:flex gap-8 items-center flex-row-reverse">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <ShoppingCart className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <ShoppingCart className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">智能采购系统</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      基于数据驱动的智能采购流程，优化采购决策与执行效率，实现成本控制与供应保障的平衡。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">需求预测与计划</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">AI算法需求预测模型</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">季节性与市场趋势分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">需求聚合与资源规划</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Gavel className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">询价、招标与谈判</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">电子招投标平台</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">报价比对与分析工具</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">谈判策略与条件优化</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <ClipboardCheck className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">订单管理与跟踪</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">智能订单生成与拆分</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">订单状态实时跟踪</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">交期管理与预警机制</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">成本分析与控制</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">TCO(总拥有成本)分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">成本趋势监控与预测</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">成本节约机会识别</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 全链路库存管理 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Package className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Package className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">全链路库存管理</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      实现从原材料到成品的全链路库存可视化与优化，平衡库存水平与服务水平，提高资金使用效率。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">库存策略与参数优化</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">ABC分类与策略差异化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">安全库存动态调整</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">经济订货量(EOQ)计算</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Warehouse className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">仓储布局与管理</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">3D仓库布局优化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">货位分配与动态调整</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">批次管理与先进先出</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <ScanBarcode className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">库内作业与追溯</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">移动端收发货管理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">条码/RFID集成应用</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">全程物料追溯系统</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">库存优化与盘点</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">呆滞库存分析与处置</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">周期盘点与差异分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">库存账实协调自动化</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 物流协同网络 */}
              <div>
                <div className="lg:flex gap-8 items-center flex-row-reverse">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Truck className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Truck className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">物流协同网络</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      打造高效智能的物流配送体系，实现运输、配送、装卸等环节的全程可视与优化，提升客户满意度。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">运输规划与执行</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">智能路径规划算法</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">车辆调度与装载优化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多式联运协同管理</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <MapIcon className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">配送中心与网络设计</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">配送网络布局优化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">中转站选址与容量规划</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">区域服务能力分析</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Locate className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">物流可视化与追踪</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">GPS实时位置追踪</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">物流状态实时更新</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">异常事件监控与处理</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart4 className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">物流绩效与优化</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">物流成本分析与控制</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">配送时效与准时率分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">配送满意度评价与优化</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 业务场景演示 */}
      <section className="py-16" id="scenarios">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Factory className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">业务场景演示</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                通过典型业务场景，直观展示SCM模块如何解决实际供应链管理问题，
                提升企业运营效率与决策水平。
              </p>
            </div>

            <div className="space-y-12">
              {/* 场景一：集中采购与供应商协同 */}
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">场景一：集中采购与供应商协同</h3>
                  </div>
                  <p className="text-muted-foreground">
                    适用于多工厂/多事业部制造企业，通过集中采购管理提升议价能力，
                    降低采购成本，同时保障各单位物料需求。
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">业务挑战：</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">各事业部独立采购导致议价能力低</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">供应商管理分散，资源浪费</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">缺乏统一的需求聚合与计划</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">采购执行缺乏可视化与透明度</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">解决方案：</h4>
                    <div className="relative">
                      {/* 流程图 */}
                      <div className="bg-secondary/5 p-6 rounded-lg mb-6">
                        <div className="overflow-x-auto">
                          <div className="min-w-[700px]">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="text-sm font-medium text-center mb-1">需求管理</div>
                                <div className="flex items-center">
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">需求收集</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">需求审核</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">需求聚合</div>
                                </div>
                              </div>
                              <div className="h-8 w-1 bg-muted-foreground mx-3"></div>
                              <div>
                                <div className="text-sm font-medium text-center mb-1">集中采购</div>
                                <div className="flex items-center">
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">供应商询价</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">比价与协商</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">合同签订</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center my-1">
                              <div className="h-8 w-1 bg-muted-foreground"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-center mb-1">交付管理</div>
                                <div className="flex items-center">
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">物流配送</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">库存分配</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">需求满足</div>
                                </div>
                              </div>
                              <div className="h-8 w-1 bg-muted-foreground mx-3"></div>
                              <div>
                                <div className="text-sm font-medium text-center mb-1">订单执行</div>
                                <div className="flex items-center">
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">订单拆分</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">订单追踪</div>
                                  <div className="h-px w-6 bg-muted-foreground"></div>
                                  <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">收货验收</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="font-medium mb-3 flex items-center gap-2">
                            <Rocket className="h-4 w-4 text-primary" />
                            <span>核心功能亮点</span>
                          </h5>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">智能需求聚合与预测分析</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">集中采购管控与协同平台</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">供应商门户与互动机制</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="font-medium mb-3 flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-primary" />
                            <span>业务价值</span>
                          </h5>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <TrendingDown className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">采购成本平均降低15-20%</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <BarChart className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">供应商数量精简30%，管理效率提升</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 text-primary">
                                <Gauge className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">采购周期缩短40%，响应速度提升</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 场景二：智能库存与配送管理 */}
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Store className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">场景二：智能库存与配送管理</h3>
                  </div>
                  <p className="text-muted-foreground">
                    适用于多仓储点、多销售渠道的零售/分销企业，通过智能库存与配送优化，
                    提高库存周转率与配送效率，同时保障服务水平。
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">业务挑战：</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">库存不平衡，部分过剩、部分短缺</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">库存与销售预测脱节</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">配送路径规划效率低</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-1 text-destructive">
                              <AlertTriangle className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">物流成本高且透明度不足</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-4">解决方案：</h4>
                    <div className="bg-secondary/5 p-6 rounded-lg mb-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <DatabaseZap className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">智能需求预测</h5>
                          <p className="text-xs text-muted-foreground">
                            基于AI的销售预测与库存优化，动态调整安全库存
                          </p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <Package className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">多仓协同管理</h5>
                          <p className="text-xs text-muted-foreground">
                            跨仓库存可视化与调拨优化，最大化整体库存效率
                          </p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <Truck className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">智能配送网络</h5>
                          <p className="text-xs text-muted-foreground">
                            智能路径规划与动态调度，优化配送效率与成本
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="font-medium mb-3 flex items-center gap-2">
                          <Rocket className="h-4 w-4 text-primary" />
                          <span>执行亮点</span>
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">库存分级管理与自动补货</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">配送中心智能选址与网络优化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">实时追踪与异常处理机制</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="font-medium mb-3 flex items-center gap-2">
                          <BarChart4 className="h-4 w-4 text-primary" />
                          <span>绩效成果</span>
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <TrendingDown className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">库存水平降低25%，资金占用减少</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <BarChart className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">配送成本降低18%，时效提升30%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <Gauge className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">订单满足率提升至98.5%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 价值呈现区 */}
      <section className="py-16 bg-secondary/10" id="values">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">价值呈现</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ERP供应链管理模块为企业带来全方位的价值增长，从成本控制到敏捷响应，
                从协同效率到战略优势，全面提升企业核心竞争力。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="aspect-square flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">成本优化</h3>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-primary flex items-end justify-center">
                        <span>18</span>
                        <span className="text-2xl ml-1">%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">平均成本降低</p>
                    </div>
                    <div className="space-y-2 text-left mt-6">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">采购成本</span>
                          <span className="text-sm font-medium">-15%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">库存成本</span>
                          <span className="text-sm font-medium">-25%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">物流成本</span>
                          <span className="text-sm font-medium">-12%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="aspect-square flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">效率提升</h3>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-primary flex items-end justify-center">
                        <span>3</span>
                        <span className="text-2xl ml-1">倍</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">管理效率提升</p>
                    </div>
                    <div className="space-y-2 text-left mt-6">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">采购周期</span>
                          <span className="text-sm font-medium">缩短60%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">库存周转</span>
                          <span className="text-sm font-medium">提升40%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">数据处理</span>
                          <span className="text-sm font-medium">提升95%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="aspect-square flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                      <BadgePercent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">服务提升</h3>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-primary flex items-end justify-center">
                        <span>99.2</span>
                        <span className="text-2xl ml-1">%</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">订单满足率</p>
                    </div>
                    <div className="space-y-2 text-left mt-6">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">准时交付率</span>
                          <span className="text-sm font-medium">97.5%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "97%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">订单跟踪覆盖</span>
                          <span className="text-sm font-medium">100%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">客户满意度</span>
                          <span className="text-sm font-medium">93%</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "93%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="aspect-square flex flex-col justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">战略增值</h3>
                    <div className="space-y-6 text-left mt-8">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Eye className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">全局可视化决策</h4>
                          <p className="text-sm text-muted-foreground">跨部门、跨区域的供应链数据整合与可视化，支持高层战略决策</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">供应链韧性提升</h4>
                          <p className="text-sm text-muted-foreground">风险预警与快速响应机制，增强供应链抵御外部冲击的能力</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Activity className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">业务模式创新</h4>
                          <p className="text-sm text-muted-foreground">供应链数字化转型，支持企业开拓新市场、新业务与新模式</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 投资回报分析 */}
            <div className="mt-12 bg-card rounded-lg p-8 shadow-sm border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>投资回报分析 (ROI)</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-muted-foreground font-medium">投资类别</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">实施成本</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">年化收益</th>
                      <th className="text-right p-3 text-muted-foreground font-medium">回收期</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">基础版实施</td>
                      <td className="p-3 text-right">￥50-100万</td>
                      <td className="p-3 text-right">￥120-240万</td>
                      <td className="p-3 text-right">6-10个月</td>
                    </tr>
                    <tr>
                      <td className="p-3">标准版实施</td>
                      <td className="p-3 text-right">￥100-200万</td>
                      <td className="p-3 text-right">￥250-500万</td>
                      <td className="p-3 text-right">5-8个月</td>
                    </tr>
                    <tr>
                      <td className="p-3">高级版实施</td>
                      <td className="p-3 text-right">￥200-400万</td>
                      <td className="p-3 text-right">￥600-1200万</td>
                      <td className="p-3 text-right">4-6个月</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-primary" />
                  <span>价值说明：</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  上述数据基于行业平均水平，实际投资回报将根据企业规模、行业特性、实施范围和业务复杂度有所差异。
                  通常中大型企业在完整实施供应链管理模块后，可实现15-25%的供应链成本优化，以及30-50%的业务流程效率提升。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 移动端导航 */}
      <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("intro")}>
              简介
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("overview")}>
              模块总览
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("features")}>
              核心功能
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("scenarios")}>
              应用场景
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("values")}>
              价值呈现
            </Button>
          </div>
        </div>
      </nav>

      {/* 桌面端导航 */}
      <nav className="hidden md:flex sticky bottom-8 justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("intro")}>
              简介
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("overview")}>
              模块总览
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("features")}>
              核心功能
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("scenarios")}>
              应用场景
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("values")}>
              价值呈现
            </Button>
          </div>
        </div>
      </nav>

      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="回到顶部"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
} 