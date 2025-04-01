"use client";

import { useState, useEffect } from "react";
import {
  Users,
  MessageSquare,
  Target,
  TrendingUp,
  Blocks,
  UserCheck,
  FileText,
  BarChart,
  Building2,
  Store,
  CheckCircle2,
  Brain,
  ClipboardCheck,
  Network,
  Globe,
  Factory,
  Rocket,
  ChevronUp
} from "lucide-react";

export default function CrmPage() {
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
              ERP 客户关系管理模块
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              客户关系管理(CRM)是企业ERP系统的重要组成部分，通过整合客户数据、销售流程和服务管理，
              帮助企业建立长期稳定的客户关系，提升客户满意度和忠诚度，实现业务增长。
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
              {/* 客户全景视图 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">客户全景视图</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  360度全方位展示客户信息，整合交互历史，深入洞察客户需求，为精准营销和服务提供支持。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">客户画像与分析</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">基础信息与交易历史</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">行为偏好与需求分析</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">价值评估与分级管理</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">互动记录与追踪</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">全渠道沟通记录</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">服务工单跟踪</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">满意度评价反馈</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">客户生命周期管理流程</h4>
                  <div className="bg-secondary/5 p-6 rounded-lg">
                    <div className="min-w-[600px]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">获客</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">转化</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">成交</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">服务</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">维系</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">复购</div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex-1 text-center">市场营销</div>
                        <div className="flex-1 text-center">销售线索</div>
                        <div className="flex-1 text-center">商机管理</div>
                        <div className="flex-1 text-center">客户服务</div>
                        <div className="flex-1 text-center">关系维护</div>
                        <div className="flex-1 text-center">二次销售</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                AutoPedix-CRM模块整合了四大核心功能板块，从客户获取到关系维护，
                全面覆盖客户生命周期各环节，助力企业构建完善的客户关系管理体系。
              </p>
            </div>

            <div className="space-y-16">
              {/* 销售线索管理 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Target className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Target className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">销售线索管理</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      全面的销售线索管理系统，支持多渠道线索获取、智能评分和分配，提高销售转化效率。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">智能线索获取</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多渠道线索采集</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">线索质量评分</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">自动分类标签</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <ClipboardCheck className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">线索转化跟进</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">智能分配规则</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">跟进任务提醒</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">转化率分析</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 商机管理 */}
              <div>
                <div className="lg:flex gap-8 items-center flex-row-reverse">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <BarChart className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <BarChart className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">商机管理</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      系统化的商机管理流程，支持销售阶段跟踪、赢率预测和团队协作，提升成单效率。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">商机跟踪</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">销售阶段管理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">竞争对手分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">赢率预测</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">团队协作</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">角色权限管理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">任务分配与提醒</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">团队绩效分析</span>
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
                通过典型业务场景，直观展示CRM模块如何解决实际客户关系管理问题，
                提升企业营销效率与客户服务水平。
              </p>
            </div>

            <div className="space-y-12">
              {/* 场景一：全渠道营销与客户获取 */}
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">场景一：全渠道营销与客户获取</h3>
                  </div>
                  <p className="text-muted-foreground">
                    适用于多渠道营销场景，通过整合线上线下各触点数据，实现精准营销，
                    提高获客效率和质量。
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-4">业务流程：</h4>
                    <div className="bg-secondary/5 p-6 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-medium text-center mb-1">营销活动管理</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">活动策划</div>
                              <div className="h-px w-6 bg-muted-foreground"></div>
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">渠道投放</div>
                              <div className="h-px w-6 bg-muted-foreground"></div>
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">效果追踪</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center my-1">
                          <div className="h-8 w-1 bg-muted-foreground"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-center mb-1">线索管理</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">线索收集</div>
                              <div className="h-px w-6 bg-muted-foreground"></div>
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">智能评分</div>
                              <div className="h-px w-6 bg-muted-foreground"></div>
                              <div className="p-2 bg-primary/10 rounded-md text-xs text-center w-28">分配跟进</div>
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
                          <span className="text-muted-foreground">多渠道活动管理与追踪</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground">智能线索评分与分配</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground">营销效果分析与优化</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h5 className="font-medium mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span>价值收益</span>
                      </h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground">提高营销活动转化率</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground">降低获客成本</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-muted-foreground">优化营销资源配置</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 场景二：客户服务与关系维护 */}
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Store className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">场景二：客户服务与关系维护</h3>
                  </div>
                  <p className="text-muted-foreground">
                    适用于需要提供持续客户服务的企业，通过智能化服务工具和主动关怀机制，
                    提升客户满意度和忠诚度。
                  </p>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-4">解决方案：</h4>
                    <div className="bg-secondary/5 p-6 rounded-lg mb-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <MessageSquare className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">智能客服系统</h5>
                          <p className="text-xs text-muted-foreground">
                            AI客服 + 人工坐席协同服务模式
                          </p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <UserCheck className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">客户关怀计划</h5>
                          <p className="text-xs text-muted-foreground">
                            定制化关怀方案，提升客户体验
                          </p>
                        </div>
                        <div className="bg-card p-4 rounded-lg text-center border">
                          <div className="flex justify-center mb-3">
                            <FileText className="h-8 w-8 text-primary opacity-70" />
                          </div>
                          <h5 className="text-sm font-medium mb-2">满意度管理</h5>
                          <p className="text-xs text-muted-foreground">
                            全方位客户满意度评估与改进
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                ERP客户关系管理模块为企业带来全方位的价值提升，从客户获取到关系维护，
                从服务效率到客户满意度，全面增强企业的市场竞争力。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">营销效能提升</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">精准营销转化率提升30%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">获客成本降低20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">营销活动ROI提升25%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">客户体验优化</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">客户满意度提升40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">服务响应时间缩短50%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">客户投诉率降低35%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">业务增长</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">客户复购率提升45%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">客户终身价值增长35%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">新客户推荐率提升30%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  );
} 