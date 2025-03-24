"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  Camera,
  Eye,
  Scan,
  Tag,
  Map,
  Workflow,
  Car,
  ShoppingBag,
  Factory,
  BarChart,
  Zap,
  Globe,
  Database,
  Network,
  Gauge,
  Box,
  Users,
  CheckCircle2,
  Info
} from "lucide-react";

export default function CvPage() {
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
              计算机视觉技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              计算机视觉(CV)是人工智能的核心领域，使机器能够“看见”并理解视觉世界，
              通过图像识别、目标检测、场景理解等技术，将视觉信息转化为数字洞察，赋能各行业智能化转型。
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
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="space-y-8">
              {/* CV基础技术架构 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Camera className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">计算机视觉基础架构</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  计算机视觉系统通过多层级的视觉数据处理流程，实现从原始图像数据的获取，到特征提取、分析理解，最终转化为可操作的决策信息。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">数据处理与特征提取</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">图像预处理与增强技术</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">特征提取与表示方法</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">边缘检测与图像分割</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">深度学习视觉架构</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">卷积神经网络(CNN)与变体</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">视觉Transformer架构</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">多模态视觉语言模型</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">技术演进路线：</h4>
                  <p className="text-muted-foreground">计算机视觉技术从早期的手工设计特征与规则到当代的端到端深度学习模型，再到最新的多模态融合架构，实现了从物体识别到场景理解，从静态图像处理到动态视频分析的全面能力提升。</p>
                </div>
              </div>

              {/* 核心技术能力图谱 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">核心技术能力图谱</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  现代计算机视觉系统构建于一系列紧密相关的核心技术能力之上，这些技术相互配合，共同支撑起复杂视觉应用的实现。
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-3">能力层级结构</h4>
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">图像处理</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">目标检测</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">图像分割</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">图像理解</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">视觉推理</div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex-1 text-center">基础处理</div>
                        <div className="flex-1 text-center">物体感知</div>
                        <div className="flex-1 text-center">像素级分析</div>
                        <div className="flex-1 text-center">语义理解</div>
                        <div className="flex-1 text-center">高级认知</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">感知识别技术</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">图像分类与目标检测</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">人脸识别与属性分析</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">目标跟踪与行为分析</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">理解与生成能力</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">场景理解与关系推理</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">图像生成与视觉编辑</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">视觉问答与多模态交互</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心应用场景 */}
      <section className="py-16 bg-secondary/10" id="applications">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">核心应用场景</h2>
            </div>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              计算机视觉技术已广泛应用于众多行业，通过数字化视觉能力重塑业务流程，创造全新价值
            </p>

            <div className="space-y-16">
              {/* 智能制造与质检 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Factory className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Factory className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">智能制造与质量检测</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      计算机视觉技术在制造业中实现自动化质量检测、生产监控与过程优化，大幅提升生产效率与产品质量。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Scan className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">缺陷检测与质量控制</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">微小表面缺陷自动识别</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">产品装配完整性检查</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">AI质检与统计分析系统</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Gauge className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">生产监控与优化</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">生产线实时监控与异常检测</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">工艺参数视觉监测与调优</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">设备状态监测与预测性维护</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 智慧零售 */}
              <div>
                <div className="lg:flex gap-8 items-center flex-row-reverse">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <ShoppingBag className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <ShoppingBag className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">智慧零售与消费体验</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      视觉技术在零售业中实现智能化客流分析、货架管理与无感支付，创造全新购物体验，提升运营效率。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">智能客流与行为分析</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">客流量统计与热力图分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">顾客驻留时间与关注点分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">人口统计与消费者画像</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Box className="h-5 w-5 text-primary"/>
                          <h4 className="font-medium">商品识别与视觉搜索</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">商品自动识别与结算</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">图像搜索与相似商品推荐</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">虚拟试衣与AR导购体验</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 自动驾驶与交通 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Car className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Car className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">自动驾驶与智慧交通</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      计算机视觉是自动驾驶技术的核心组成，支持环境感知、障碍物识别与路径规划，同时助力智慧交通基础设施建设。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Map className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">车载感知系统</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多传感器融合感知技术</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">实时物体检测与跟踪</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">道路场景理解与语义分割</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Network className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">智慧交通监控</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">交通流量分析与预测</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">违章行为自动识别</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">交通事件实时检测与响应</span>
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

      {/* 实施应用案例 */}
      <section className="py-16" id="cases">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">企业应用案例</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-10">
              计算机视觉技术正在各行业创造显著价值，以下典型案例展示了其在实际业务场景中的应用与成效
            </p>

            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Factory className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">案例一：半导体制造缺陷检测系统</h3>
                  </div>
                  <p className="text-muted-foreground">
                    某全球领先的半导体制造企业应用计算机视觉技术构建先进的芯片缺陷检测系统，
                    实现纳米级制造缺陷的精准识别与质量控制。
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">业务挑战</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">01</span>
                          </div>
                          <div>
                            <span className="font-medium">超高精度要求：</span>
                            <span className="text-muted-foreground">半导体制程缺陷尺寸不断缩小，低至纳米级别，传统视觉检测难以实现高准确率</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">02</span>
                          </div>
                          <div>
                            <span className="font-medium">处理速度需求：</span>
                            <span className="text-muted-foreground">生产线高速运转，需对每片晶圆上数十亿个特征点进行实时检测</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">03</span>
                          </div>
                          <div>
                            <span className="font-medium">缺陷类型多样：</span>
                            <span className="text-muted-foreground">需识别粒子、划痕、残留物等数十种不同类型的缺陷，并进行精确分类</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">CV技术解决方案</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Scan className="h-4 w-4 text-primary" />
                            <span>深度学习缺陷检测</span>
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>定制CNN架构与多尺度特征提取</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>弱监督学习与自动标注技术</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>芯片图像超分辨率增强处理</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Database className="h-4 w-4 text-primary" />
                            <span>系统架构与集成</span>
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>高性能GPU加速推理系统</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>实时数据流处理与分析平台</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>与MES系统无缝集成与闭环控制</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        <span>实施成效</span>
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">99.8%</div>
                          <div className="text-xs text-muted-foreground">缺陷检测准确率</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">5nm</div>
                          <div className="text-xs text-muted-foreground">可检测最小缺陷尺寸</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">60%</div>
                          <div className="text-xs text-muted-foreground">良率提升幅度</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">4.2亿</div>
                          <div className="text-xs text-muted-foreground">年度成本节约(美元)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">案例二：全渠道零售智能视觉平台</h3>
                  </div>
                  <p className="text-muted-foreground">
                    某国际连锁零售集团部署基于计算机视觉的全渠道智能分析平台，
                    实现线上线下一体化的消费者行为洞察与个性化服务。
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>客流与行为分析</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>匿名化人群统计与分析</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>热区分析与停留时间监测</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>顾客情绪与满意度分析</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Tag className="h-4 w-4 text-primary" />
                          <span>商品识别与管理</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>实时货架分析与缺货监测</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>视觉商品识别与无感结算</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>商品摆放合规性检查</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          <span>全渠道客户体验</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>AR虚拟试穿与导购助手</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>视觉搜索与线上推荐系统</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>个性化视觉营销内容生成</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        <span>业务提升与价值</span>
                      </h4>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">01</span>
                          </div>
                          <div>
                            <span className="font-medium">销售转化：</span>
                            <span className="text-muted-foreground">客户转化率提升28%，平均客单价增长15%</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">02</span>
                          </div>
                          <div>
                            <span className="font-medium">运营效率：</span>
                            <span className="text-muted-foreground">库存准确率提升至99.5%，缺货率降低42%</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">03</span>
                          </div>
                          <div>
                            <span className="font-medium">顾客满意度：</span>
                            <span className="text-muted-foreground">顾客满意度评分提升23个百分点，复购率增长32%</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-secondary/10 p-4 rounded-lg">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-primary" />
                <span>实施建议：</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                成功的计算机视觉应用项目应从业务需求出发，关注数据质量与标注体系建设，选择适当的技术架构，
                并通过迭代开发逐步扩展能力。持续的模型优化与业务闭环反馈是确保长期价值的关键。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 移动端导航 */}
      <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full text-xs whitespace-nowrap"
              onClick={() => scrollToSection("intro")}
            >
              简介
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full text-xs whitespace-nowrap"
              onClick={() => scrollToSection("overview")}
            >
              技术概览
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full text-xs whitespace-nowrap"
              onClick={() => scrollToSection("applications")}
            >
              应用场景
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full text-xs whitespace-nowrap"
              onClick={() => scrollToSection("cases")}
            >
              应用案例
            </Button>
          </div>
        </div>
      </nav>

      {/* 桌面端导航 */}
      <nav className="hidden md:flex sticky bottom-8 justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={() => scrollToSection("intro")}
            >
              简介
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={() => scrollToSection("overview")}
            >
              技术概览
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={() => scrollToSection("applications")}
            >
              应用场景
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full"
              onClick={() => scrollToSection("cases")}
            >
              应用案例
            </Button>
          </div>
        </div>
      </nav>

      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <div className="fixed right-5 bottom-5 z-50">
          <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full h-10 w-10 shadow-md">
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
} 