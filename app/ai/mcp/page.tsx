"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { 
  ChevronUp, 
  Cpu, 
  Zap,
  TrendingUp,
  Shield,
  Target,
  Users,
  AlertTriangle,
  Sparkles,
  Globe,
  ArrowRight,
  CheckCircle,
  Database,
  Network,
  Settings,
  Search,
  Puzzle,
  Layers,
  Code,
  Server,
  Rocket,
  Link,
  Brain
} from "lucide-react";

export default function McpPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // 检测当前激活的部分
      const sections = ["overview", "architecture", "features", "applications", "cases", "challenges"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
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
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rotate-12"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative">
        {/* 页面标题区域 */}
        <header className="mb-16 text-center relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-3xl mb-6 shadow-lg">
            <Puzzle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            MCP 协议介绍
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            模型上下文协议（Model Context Protocol）是一个开放标准，用于连接AI模型与外部工具、数据源和服务，实现AI应用的扩展性和互操作性
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Network className="w-4 h-4 mr-2" />
              连接协议
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              开放标准
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              互操作性
            </Badge>
          </div>
        </header>

        {/* 协议概述 */}
        <section id="overview" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">协议概述</CardTitle>
                  <CardDescription className="text-base">MCP协议的定义与核心价值</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Puzzle className="w-6 h-6 text-primary" />
                      MCP是什么？
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <p className="font-medium text-primary">全称：</p>
                        <p className="text-lg">Model Context Protocol（模型上下文协议）</p>
                      </div>
                      <div className="p-4 bg-accent/50 rounded-lg">
                        <p className="font-medium text-primary mb-2">定义：</p>
                        <p className="text-lg leading-relaxed">
                          一个标准化的协议框架，用于AI模型与外部系统、工具和数据源的安全连接与通信，实现模型能力的动态扩展。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    核心价值
                  </h3>
                  <div className="grid gap-4">
                    {[
                      { icon: Link, text: "统一连接标准" },
                      { icon: Shield, text: "安全可控集成" },
                      { icon: Layers, text: "模块化扩展" },
                      { icon: Globe, text: "跨平台互操作" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 技术架构 */}
        <section id="architecture" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-3xl">技术架构</CardTitle>
                  <CardDescription className="text-base">MCP协议的技术框架与组件</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* 架构图 */}
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    MCP协议层次架构
                  </h4>
                  <div className="overflow-x-auto">
                    <div className="min-w-[700px]">
                      <div className="flex justify-between items-center mb-4">
                        <div className="p-4 bg-primary/10 rounded-lg text-center flex-1 mx-1">
                          <div className="font-medium">AI模型层</div>
                          <div className="text-sm text-muted-foreground mt-1">LLM / 多模态模型</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        <div className="p-4 bg-accent/50 rounded-lg text-center flex-1 mx-1">
                          <div className="font-medium">MCP协议层</div>
                          <div className="text-sm text-muted-foreground mt-1">标准通信协议</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                        <div className="p-4 bg-secondary/30 rounded-lg text-center flex-1 mx-1">
                          <div className="font-medium">工具服务层</div>
                          <div className="text-sm text-muted-foreground mt-1">外部工具 / API / 数据源</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      协议核心组件
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">消息格式：</span>
                          <span className="text-muted-foreground">标准化的JSON-RPC消息协议</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">传输层：</span>
                          <span className="text-muted-foreground">WebSocket、HTTP、IPC等传输方式</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">认证机制：</span>
                          <span className="text-muted-foreground">OAuth2、API Key等安全认证</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h4 className="font-medium mb-4 flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      连接器架构
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">资源发现：</span>
                          <span className="text-muted-foreground">自动发现可用工具和服务</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">能力声明：</span>
                          <span className="text-muted-foreground">工具功能与接口的标准描述</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-1 bg-primary/10 rounded-full mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <div>
                          <span className="font-medium">会话管理：</span>
                          <span className="text-muted-foreground">状态保持与上下文传递</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 核心特性 */}
        <section id="features" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle className="text-3xl">核心特性</CardTitle>
                  <CardDescription className="text-base">MCP协议的关键功能与优势</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Link,
                    title: "标准化连接",
                    description: "统一的接口规范，支持各种AI模型与外部工具的无缝连接",
                    gradient: "from-blue-500/10 to-cyan-500/10",
                    iconColor: "text-blue-600"
                  },
                  {
                    icon: Shield,
                    title: "安全可控",
                    description: "内置权限管理、访问控制和数据加密机制，确保连接安全",
                    gradient: "from-green-500/10 to-emerald-500/10",
                    iconColor: "text-green-600"
                  },
                  {
                    icon: Layers,
                    title: "模块化设计",
                    description: "支持插件式架构，工具和服务可独立开发和部署",
                    gradient: "from-purple-500/10 to-pink-500/10",
                    iconColor: "text-purple-600"
                  },
                  {
                    icon: Zap,
                    title: "实时通信",
                    description: "支持双向实时通信，工具可主动向模型推送数据更新",
                    gradient: "from-orange-500/10 to-red-500/10",
                    iconColor: "text-orange-600"
                  },
                  {
                    icon: Settings,
                    title: "动态配置",
                    description: "运行时动态加载和配置工具，无需重启应用程序",
                    gradient: "from-violet-500/10 to-purple-500/10",
                    iconColor: "text-violet-600"
                  },
                  {
                    icon: Globe,
                    title: "跨平台兼容",
                    description: "支持多种操作系统、编程语言和部署环境",
                    gradient: "from-indigo-500/10 to-blue-500/10",
                    iconColor: "text-indigo-600"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl border bg-gradient-to-br ${item.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-background/80 ${item.iconColor}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 应用场景 */}
        <section id="applications" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">应用场景</CardTitle>
                  <CardDescription className="text-base">MCP协议的典型应用领域</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    title: "数据集成",
                    description: "连接各种数据库、API和数据仓库，为AI模型提供实时数据访问",
                    gradient: "from-blue-500/10 to-cyan-500/10",
                    iconColor: "text-blue-600"
                  },
                  {
                    icon: Code,
                    title: "开发工具链",
                    description: "集成IDE、版本控制、CI/CD等开发工具，构建AI增强的开发环境",
                    gradient: "from-green-500/10 to-emerald-500/10",
                    iconColor: "text-green-600"
                  },
                  {
                    icon: Users,
                    title: "协作平台",
                    description: "连接团队协作工具，实现AI助手与工作流的深度整合",
                    gradient: "from-purple-500/10 to-pink-500/10",
                    iconColor: "text-purple-600"
                  },
                  {
                    icon: Brain,
                    title: "多模态应用",
                    description: "连接图像、音频、视频处理工具，构建多模态AI应用",
                    gradient: "from-orange-500/10 to-red-500/10",
                    iconColor: "text-orange-600"
                  },
                  {
                    icon: Search,
                    title: "知识管理",
                    description: "整合搜索引擎、知识库和文档系统，增强AI的知识检索能力",
                    gradient: "from-violet-500/10 to-purple-500/10",
                    iconColor: "text-violet-600"
                  },
                  {
                    icon: Settings,
                    title: "自动化流程",
                    description: "连接RPA工具和业务系统，实现智能业务流程自动化",
                    gradient: "from-indigo-500/10 to-blue-500/10",
                    iconColor: "text-indigo-600"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group p-6 rounded-xl border bg-gradient-to-br ${item.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-background/80 ${item.iconColor}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 实施案例 */}
        <section id="cases" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-3xl">实施案例</CardTitle>
                  <CardDescription className="text-base">MCP协议的典型应用案例</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* 案例一 */}
                <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                  <div className="bg-primary/5 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">智能代码助手平台</h3>
                    </div>
                    <p className="text-muted-foreground">
                      某科技公司使用MCP协议构建智能代码助手，集成多种开发工具和服务，提升开发效率。
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Database className="h-4 w-4 text-primary" />
                          数据源集成
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• GitHub代码库</li>
                          <li>• 技术文档系统</li>
                          <li>• API文档</li>
                          <li>• 代码质量分析工具</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <Settings className="h-4 w-4 text-primary" />
                          工具集成
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• IDE插件</li>
                          <li>• 调试器</li>
                          <li>• 测试框架</li>
                          <li>• 部署工具</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <h5 className="font-medium mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          效果提升
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• 开发效率提升40%</li>
                          <li>• 代码质量改善35%</li>
                          <li>• Bug减少60%</li>
                          <li>• 学习成本降低50%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 案例二 */}
                <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
                  <div className="bg-primary/5 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">企业知识管理系统</h3>
                    </div>
                    <p className="text-muted-foreground">
                      某企业通过MCP协议构建智能知识管理系统，整合内外部知识资源，提升知识利用效率。
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">连接的系统</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium">1</span>
                            </div>
                            <span className="text-muted-foreground">内部文档管理系统（SharePoint、Confluence）</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium">2</span>
                            </div>
                            <span className="text-muted-foreground">客户关系管理系统（CRM）</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium">3</span>
                            </div>
                            <span className="text-muted-foreground">外部专业数据库和研究报告</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium">4</span>
                            </div>
                            <span className="text-muted-foreground">行业标准和法规文件</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">实现的功能</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <div className="p-1 bg-primary/10 rounded-full mt-1">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground">智能问答：自然语言查询企业知识库</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="p-1 bg-primary/10 rounded-full mt-1">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground">内容推荐：基于用户角色推荐相关文档</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="p-1 bg-primary/10 rounded-full mt-1">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground">知识图谱：可视化展示知识关联关系</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="p-1 bg-primary/10 rounded-full mt-1">
                              <CheckCircle className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground">自动总结：快速生成报告和摘要</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 挑战与展望 */}
        <section id="challenges" className="mb-20 scroll-mt-24">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-500/10 to-red-500/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-3xl">挑战与展望</CardTitle>
                  <CardDescription className="text-base">MCP协议面临的挑战与发展前景</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    主要挑战
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "标准化程度",
                        description: "协议标准仍在发展中，不同实现间可能存在兼容性问题"
                      },
                      {
                        title: "安全风险",
                        description: "外部工具集成增加了攻击面，需要完善的安全防护机制"
                      },
                      {
                        title: "性能优化",
                        description: "多工具链路可能影响响应速度，需要优化通信效率"
                      },
                      {
                        title: "生态建设",
                        description: "需要更多工具厂商和开发者参与协议生态建设"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-orange-500/5 rounded-lg border border-orange-500/20">
                        <div className="font-medium text-orange-700 mb-2">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                    发展前景
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "生态繁荣",
                        description: "预计将有更多AI模型和工具支持MCP协议，形成丰富生态"
                      },
                      {
                        title: "标准成熟",
                        description: "协议规范将更加完善，互操作性和稳定性持续改善"
                      },
                      {
                        title: "场景扩展",
                        description: "从开发工具扩展到更多垂直领域，覆盖更广泛应用场景"
                      },
                      {
                        title: "技术演进",
                        description: "集成更先进的安全机制、性能优化和智能路由能力"
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-violet-500/5 rounded-lg border border-violet-500/20">
                        <div className="font-medium text-violet-700 mb-2">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 导航系统 */}
        <nav className="sticky bottom-8 flex justify-center z-30">
          <div className="bg-background/95 backdrop-blur-lg rounded-2xl shadow-2xl p-3 border border-border/50">
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "overview", label: "概述", icon: Target },
                { id: "architecture", label: "架构", icon: Cpu },
                { id: "features", label: "特性", icon: Sparkles },
                { id: "applications", label: "应用", icon: Rocket },
                { id: "cases", label: "案例", icon: CheckCircle },
                { id: "challenges", label: "展望", icon: AlertTriangle }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  className="rounded-xl px-4 py-2 text-sm font-medium transition-all hover:scale-105"
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </nav>

        {/* 回到顶部按钮 */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-28 right-6 p-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-40 group"
            aria-label="回到顶部"
          >
            <ChevronUp className="h-6 w-6 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
} 