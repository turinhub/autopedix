"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Puzzle, 
  Zap, 
  TrendingUp,
  ArrowRight,
  Clock,
  Network,
  Heart,
  Briefcase,
  Gauge,
  ShoppingCart,
  Car,
  GraduationCap,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Globe,
  ChevronUp,
  Play,
  Star} from "lucide-react";
import Link from "next/link";

export default function AIPage() {
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

  // AI核心技术领域
  const aiDomains = [
    {
      title: "机器学习",
      description: "让计算机通过数据自动学习模式和规律，无需明确编程即可做出预测和决策",
      icon: Brain,
      href: "/ai/ml",
      tags: ["监督学习", "无监督学习", "强化学习"],
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/5",
      stats: "基础算法"
    },
    {
      title: "深度学习",
      description: "基于神经网络的机器学习方法，通过多层网络结构模拟人脑处理信息的方式",
      icon: Network,
      href: "/ai/dl",
      tags: ["神经网络", "CNN", "RNN"],
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/5",
      stats: "深层架构"
    },
    {
      title: "计算机视觉",
      description: "让机器能够\"看见\"并理解视觉世界，通过图像识别、目标检测等技术实现智能化视觉处理",
      icon: Eye,
      href: "/ai/cv",
      tags: ["图像识别", "目标检测", "图像分割"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/5",
      stats: "准确率>95%"
    },
    {
      title: "大语言模型",
      description: "具备强大语言理解与生成能力的AI模型，实现自然语言交互、内容创作与知识问答",
      icon: MessageSquare,
      href: "/ai/llm",
      tags: ["自然语言处理", "文本生成", "智能对话"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/5",
      stats: "千亿参数"
    },
    {
      title: "MCP协议",
      description: "模型上下文协议，用于连接AI模型与外部工具、数据源和服务的开放标准",
      icon: Puzzle,
      href: "/ai/mcp",
      tags: ["协议标准", "模型连接", "工具集成"],
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/5",
      stats: "开放标准"
    }
  ];

  // AI应用场景
  const applications = [
    { icon: Heart, title: "医疗健康", desc: "AI辅助诊断", color: "text-red-600" },
    { icon: Briefcase, title: "金融服务", desc: "智能风控", color: "text-green-600" },
    { icon: Gauge, title: "智能制造", desc: "预测维护", color: "text-blue-600" },
    { icon: ShoppingCart, title: "零售电商", desc: "个性推荐", color: "text-orange-600" },
    { icon: Car, title: "智能交通", desc: "自动驾驶", color: "text-purple-600" },
    { icon: GraduationCap, title: "教育培训", desc: "智能辅导", color: "text-indigo-600" }
  ];

  // AI发展里程碑
  const milestones = [
    { year: "1950", event: "图灵测试", desc: "人工智能概念提出" },
    { year: "1997", event: "深蓝胜利", desc: "AI首次击败世界象棋冠军" },
    { year: "2012", event: "深度学习", desc: "ImageNet竞赛突破" },
    { year: "2016", event: "AlphaGo", desc: "AI征服围棋领域" },
    { year: "2022", event: "ChatGPT", desc: "生成式AI爆发" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* 动态背景 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl relative">
        {/* Hero区域 */}
        <section className="mb-20 text-center relative">
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            {/* 主图标 */}
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-3xl flex items-center justify-center shadow-2xl">
                <Brain className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>

            {/* 标题与描述 */}
            <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              人工智能
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              探索AI技术的核心领域，了解前沿技术如何重塑未来
            </p>

            {/* 特色标签 */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Brain className="w-5 h-5 mr-2" />
                智能感知
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <Zap className="w-5 h-5 mr-2" />
                自主学习
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">
                <TrendingUp className="w-5 h-5 mr-2" />
                智能决策
              </Badge>
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-8 py-4 text-lg rounded-2xl">
                <Play className="w-5 h-5 mr-2" />
                开始探索
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-2xl">
                <Star className="w-5 h-5 mr-2" />
                了解更多
              </Button>
            </div>
          </div>
        </section>

        {/* 核心AI技术领域 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">核心技术领域</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              深入了解AI技术的五大核心领域，掌握前沿技术趋势
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiDomains.map((domain, index) => (
              <Link key={index} href={domain.href} className="group block">
                <Card className={`h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 shadow-lg ${domain.bgColor} relative overflow-hidden`}>
                  {/* 背景装饰 */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${domain.gradient} opacity-10 rounded-full blur-2xl`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${domain.gradient} text-white shadow-lg`}>
                        <domain.icon className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          {domain.stats}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {domain.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {domain.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        深入了解
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* AI应用场景 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">应用场景</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI技术在各行各业的广泛应用，推动社会数字化转型
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-background shadow-sm ${app.color}`}>
                      <app.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{app.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI发展历程 */}
        <section className="mb-20">
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/80">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-b">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-3xl">发展历程</CardTitle>
                  <CardDescription className="text-base">人工智能的重要里程碑</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                {/* 时间轴线 */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary"></div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-center gap-6 group">
                      {/* 时间点 */}
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                          {milestone.year}
                        </div>
                      </div>
                      
                      {/* 内容 */}
                      <div className="flex-1 bg-gradient-to-r from-secondary/5 to-accent/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI优势与特点 */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 优势 */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500/5 to-emerald-500/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">核心优势</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "高效处理海量数据",
                    "持续学习与优化",
                    "24/7不间断服务",
                    "跨领域适应性强"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-lg">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 挑战 */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500/5 to-red-500/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-orange-500/10 rounded-xl">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">面临挑战</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "数据质量与隐私保护",
                    "算力需求与成本控制",
                    "伦理道德与法规监管",
                    "技术解释性与透明度"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-lg">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 未来展望 */}
        <section className="mb-20">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-violet-500/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle className="text-3xl">未来展望</CardTitle>
              </div>
              <CardDescription className="text-lg">
                人工智能正在朝着更智能、更安全、更普惠的方向发展
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Network, title: "多模态融合", desc: "视觉、语言、感知全面整合" },
                  { icon: Globe, title: "边缘计算", desc: "本地化AI部署与隐私保护" },
                  { icon: Brain, title: "通用人工智能", desc: "向AGI目标持续迈进" }
                ].map((trend, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-background/50 backdrop-blur-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-500/10 rounded-xl mb-4">
                      <trend.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{trend.title}</h3>
                    <p className="text-muted-foreground">{trend.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 开始探索CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">开始您的AI探索之旅</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                选择感兴趣的AI领域，深入了解技术原理与应用实践
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {aiDomains.map((domain, index) => (
                  <Link key={index} href={domain.href}>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-6 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <domain.icon className="w-5 h-5 mr-2" />
                      {domain.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-2xl shadow-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="回到顶部"
        >
          <ChevronUp className="h-6 w-6 group-hover:transform group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
