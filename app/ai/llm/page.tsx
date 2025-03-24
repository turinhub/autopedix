"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  Brain,
  Server,
  Code,
  MessageSquare,
  Globe,
  Book,
  Database,
  Users,
  FileText,
  PenTool,
  Search,
  BarChart,
  CheckCircle2,
  Bot,
  Zap,
  Workflow,
  Info
} from "lucide-react";

export default function LlmPage() {
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
              大语言模型技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              大语言模型(LLM)是人工智能领域的革命性技术，通过海量文本数据训练，习得人类语言的复杂模式和知识，
              实现高级自然语言理解与生成能力，为各行业带来全新的智能交互体验和解决方案。
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
                <Brain className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="space-y-8">
              {/* LLM基础架构 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Server className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">大语言模型基础架构</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  大语言模型以Transformer架构为核心，通过自注意力机制和多头注意力等创新技术，
                  实现对语言序列的高效处理与理解，构建起强大的文本生成与理解能力。
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">核心技术组件</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">Transformer架构与自注意力机制</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">词元(Token)嵌入与位置编码</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">多层神经网络与激活函数</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">规模与参数量</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">从数亿到数千亿参数的模型规模</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">大规模计算集群与分布式训练</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">训练数据量级与知识广度</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">关键特性：</h4>
                  <p className="text-muted-foreground">大语言模型通过海量文本训练获得了强大的语言理解能力，具备上下文感知、知识存储、推理能力和指令跟随等特性，使其能够应对各种复杂的自然语言处理任务。</p>
                </div>
              </div>

              {/* 模型训练与优化流程 */}
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">模型训练与优化流程</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  LLM从预训练到部署应用的过程中，经历多阶段训练与优化，确保模型具备泛化能力的同时，能够更好地满足特定任务与安全需求。
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-3">训练流程全景</h4>
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">数据收集与清洗</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">预训练（基础模型）</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">指令微调(SFT)</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">RLHF优化</div>
                        <div className="w-8 h-px bg-muted-foreground flex-shrink-0"></div>
                        <div className="p-2 bg-primary/10 rounded-md text-sm font-medium text-center flex-1">安全对齐与部署</div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <div className="flex-1 text-center">数据工程</div>
                        <div className="flex-1 text-center">自监督学习</div>
                        <div className="flex-1 text-center">有监督微调</div>
                        <div className="flex-1 text-center">人类反馈强化学习</div>
                        <div className="flex-1 text-center">安全与部署</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">预训练与微调阶段</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">海量文本数据自监督学习</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">指令数据集与人类偏好收集</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">特定领域知识增强训练</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">安全对齐与优化</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">有害内容过滤与偏见消除</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">模型行为约束与价值观对齐</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 text-primary">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-muted-foreground">模型蒸馏与部署优化</span>
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
              大语言模型凭借其强大的语言理解与生成能力，正在各行各业创造创新应用与价值
            </p>

            <div className="space-y-16">
              {/* 自然语言交互 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <MessageSquare className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">智能对话与交互</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      大语言模型实现了近乎自然的人机对话体验，理解上下文与隐含意图，为用户提供连贯、相关且有帮助的回应。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">智能助手应用</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多轮对话与意图理解</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">个性化响应与建议</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">情感识别与共情能力</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">客户服务创新</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">24/7智能客服系统</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">复杂问题解析与处理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">人机协作服务模式</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 内容创作与处理 */}
              <div>
                <div className="lg:flex gap-8 items-center flex-row-reverse">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <PenTool className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <PenTool className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">内容创作与增强</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      大语言模型成为内容创作的强力助手，能够生成多样文本内容，辅助人类创作，提升内容生产效率与质量。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">智能内容生成</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">文章、报告与创意写作</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多语言内容翻译与本地化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">风格多样化与语调调整</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">代码与技术内容</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">编程辅助与代码生成</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">技术文档与API说明</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">代码解释与调试建议</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 知识管理与检索 */}
              <div>
                <div className="lg:flex gap-8 items-center">
                  <div className="lg:w-2/5 mb-8 lg:mb-0">
                    <div className="bg-card rounded-lg p-6 shadow-sm border h-full">
                      <div className="aspect-video bg-primary/5 rounded-md mb-4 flex items-center justify-center">
                        <Search className="h-16 w-16 text-primary opacity-80" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-3/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Database className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-semibold">知识管理与智能检索</h3>
                    </div>
                    <p className="mb-6 text-muted-foreground">
                      大语言模型革新了知识管理与信息检索方式，通过语义理解与知识融合，提供更精准的信息组织与获取服务。
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Search className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">语义搜索与信息提取</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">基于意图的搜索理解</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">复杂问题精准解答</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">多源数据整合与总结</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card rounded-lg p-4 shadow-sm border">
                        <div className="flex items-center gap-2 mb-2">
                          <Book className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">企业知识库增强</h4>
                        </div>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">智能知识整理与组织</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">专业领域知识辅助</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1 text-primary">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <span className="text-muted-foreground">自动文档分析与知识提取</span>
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
              大语言模型正在各行业场景中创造价值，以下是几个典型的企业应用案例
            </p>

            <div className="space-y-8">
              <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                <div className="bg-primary/5 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">案例一：客户服务智能化转型</h3>
                  </div>
                  <p className="text-muted-foreground">
                    某大型金融服务机构应用LLM技术重塑客户服务体验，构建智能客服系统，
                    提升服务效率与质量，降低运营成本。
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">应用场景与挑战</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">01</span>
                          </div>
                          <div>
                            <span className="font-medium">复杂咨询处理：</span>
                            <span className="text-muted-foreground">客户咨询内容繁杂，专业性强，传统规则型客服系统难以应对</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">02</span>
                          </div>
                          <div>
                            <span className="font-medium">服务一致性：</span>
                            <span className="text-muted-foreground">确保全渠道服务质量一致，避免人工服务水平参差不齐</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">03</span>
                          </div>
                          <div>
                            <span className="font-medium">高峰期应对：</span>
                            <span className="text-muted-foreground">服务需求高峰期客服资源紧张，客户等待时间长</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">LLM实施方案</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Bot className="h-4 w-4 text-primary" />
                            <span>智能客服助手</span>
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>基于企业知识库的金融LLM模型微调</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>多轮对话理解与场景识别能力</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>实时业务系统数据查询与对接</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>人机协作服务模式</span>
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>AI自动回复与人工协助相结合</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>智能分流与问题优先级排序</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 text-primary">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>人工客服辅助推荐与知识提示</span>
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
                          <div className="text-2xl font-bold text-primary">85%</div>
                          <div className="text-xs text-muted-foreground">常见问题自动解决率</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">60%</div>
                          <div className="text-xs text-muted-foreground">客服人力成本节约</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">3.5倍</div>
                          <div className="text-xs text-muted-foreground">客服处理效率提升</div>
                        </div>
                        <div className="bg-card p-3 rounded-lg border text-center">
                          <div className="text-2xl font-bold text-primary">92%</div>
                          <div className="text-xs text-muted-foreground">客户满意度评分</div>
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
                      <FileText className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">案例二：内容创作与管理平台</h3>
                  </div>
                  <p className="text-muted-foreground">
                    某大型媒体与出版集团构建基于LLM的内容创作与管理平台，
                    提升内容生产效率，打造创意内容创作新模式。
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <PenTool className="h-4 w-4 text-primary" />
                          <span>智能内容助手</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>创意写作与内容拓展</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>风格多样化与调整</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>编辑校对与质量提升</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-primary" />
                          <span>内容分发优化</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>多语言内容本地化</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>跨平台内容适配</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>SEO智能优化</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Search className="h-4 w-4 text-primary" />
                          <span>内容智能管理</span>
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>内容自动分类与标签</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>智能内容检索系统</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="mt-1.5 text-primary">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>内容资产价值分析</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        <span>业务影响与价值</span>
                      </h4>
                      <ul className="space-y-2 mt-2">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">01</span>
                          </div>
                          <div>
                            <span className="font-medium">内容创作效率：</span>
                            <span className="text-muted-foreground">内容生产速度提高200%，编辑时间节约40%</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">02</span>
                          </div>
                          <div>
                            <span className="font-medium">内容覆盖广度：</span>
                            <span className="text-muted-foreground">多语言市场覆盖从5个扩展到23个，无需额外增加团队</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">03</span>
                          </div>
                          <div>
                            <span className="font-medium">内容质量与一致性：</span>
                            <span className="text-muted-foreground">内容质量评分提升35%，品牌声音一致性显著增强</span>
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
                大语言模型的企业应用应循序渐进，从特定场景试点开始，逐步扩展到更多业务场景。
                有效的实施需要技术团队与业务部门紧密协作，确保模型安全与合规，并持续优化模型以适应企业特定需求。
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
