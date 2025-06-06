"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { 
  ChevronUp, 
  Brain, 
  Target, 
  BarChart3, 
  Users, 
  TrendingUp,
  Database,
  Zap,
  Code,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Clock,
  ArrowRight,
  Activity,
  Layers,
  Workflow,
  Settings,
  LineChart,
  PieChart,
  GitBranch,
  Cpu,
  Cloud,
  MonitorSpeaker
} from "lucide-react";

export default function MlPage() {
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

  // 机器学习算法分类
  const algorithms = [
    {
      category: "监督学习算法",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/5",
      algorithms: [
        { name: "线性回归", use: "数值预测", complexity: "简单" },
        { name: "逻辑回归", use: "二分类", complexity: "简单" },
        { name: "决策树", use: "分类回归", complexity: "中等" },
        { name: "随机森林", use: "分类回归", complexity: "中等" },
        { name: "支持向量机", use: "分类回归", complexity: "复杂" },
        { name: "XGBoost", use: "集成学习", complexity: "复杂" }
      ]
    },
    {
      category: "无监督学习算法",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/5",
      algorithms: [
        { name: "K-Means", use: "聚类分析", complexity: "简单" },
        { name: "层次聚类", use: "层次聚类", complexity: "中等" },
        { name: "PCA", use: "降维", complexity: "中等" },
        { name: "t-SNE", use: "可视化", complexity: "复杂" },
        { name: "异常检测", use: "异常识别", complexity: "中等" },
        { name: "关联规则", use: "模式挖掘", complexity: "简单" }
      ]
    },
    {
      category: "强化学习算法",
      icon: Users,
      color: "from-purple-500 to-violet-500", 
      bgColor: "bg-purple-500/5",
      algorithms: [
        { name: "Q-Learning", use: "值函数学习", complexity: "中等" },
        { name: "策略梯度", use: "策略优化", complexity: "复杂" },
        { name: "Actor-Critic", use: "混合方法", complexity: "复杂" },
        { name: "DQN", use: "深度Q网络", complexity: "复杂" },
        { name: "PPO", use: "策略优化", complexity: "复杂" },
        { name: "A3C", use: "异步学习", complexity: "复杂" }
      ]
    }
  ];

  // 学习路径
  const learningPath = [
    {
      level: "基础入门",
      icon: BookOpen,
      color: "text-green-600",
      items: ["数学基础", "Python编程", "数据处理", "统计学原理"]
    },
    {
      level: "核心算法",
      icon: Code,
      color: "text-blue-600", 
      items: ["监督学习", "无监督学习", "模型评估", "特征工程"]
    },
    {
      level: "高级应用",
      icon: TrendingUp,
      color: "text-purple-600",
      items: ["深度学习", "强化学习", "集成方法", "模型优化"]
    },
    {
      level: "实战项目",
      icon: Zap,
      color: "text-orange-600",
      items: ["端到端项目", "部署运维", "A/B测试", "业务应用"]
    }
  ];

  // 工具和框架
  const tools = [
    {
      category: "编程语言",
      items: [
        { name: "Python", desc: "最流行的ML语言", popularity: 95 },
        { name: "R", desc: "统计分析专用", popularity: 70 },
        { name: "Julia", desc: "高性能科学计算", popularity: 40 },
        { name: "Scala", desc: "大数据处理", popularity: 30 }
      ]
    },
    {
      category: "机器学习库",
      items: [
        { name: "Scikit-learn", desc: "通用ML库", popularity: 90 },
        { name: "Pandas", desc: "数据处理", popularity: 95 },
        { name: "NumPy", desc: "数值计算", popularity: 98 },
        { name: "XGBoost", desc: "梯度提升", popularity: 85 }
      ]
    },
    {
      category: "可视化工具",
      items: [
        { name: "Matplotlib", desc: "基础绘图", popularity: 85 },
        { name: "Seaborn", desc: "统计可视化", popularity: 80 },
        { name: "Plotly", desc: "交互图表", popularity: 75 },
        { name: "Tableau", desc: "商业智能", popularity: 70 }
      ]
    }
  ];

  // 应用领域案例
  const industryApplications = [
    {
      industry: "金融科技",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      cases: [
        { title: "信用评分模型", desc: "基于用户行为数据评估信用风险，提高放贷决策精度", tech: "逻辑回归、随机森林" },
        { title: "欺诈检测系统", desc: "实时识别异常交易模式，防范金融欺诈行为", tech: "异常检测、孤立森林" },
        { title: "算法交易", desc: "利用量化模型自动执行交易策略，优化投资收益", tech: "时间序列、强化学习" }
      ]
    },
    {
      industry: "电商零售",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      cases: [
        { title: "个性化推荐", desc: "基于用户行为和偏好推荐商品，提升转化率", tech: "协同过滤、矩阵分解" },
        { title: "价格优化", desc: "动态调整商品价格，平衡利润与销量", tech: "回归分析、强化学习" },
        { title: "库存管理", desc: "预测商品需求，优化库存配置减少成本", tech: "时间序列预测" }
      ]
    },
    {
      industry: "医疗健康",
      icon: Activity,
      color: "from-red-500 to-pink-500",
      cases: [
        { title: "疾病诊断辅助", desc: "分析医疗数据辅助医生诊断，提高诊断准确性", tech: "分类算法、集成学习" },
        { title: "药物发现", desc: "筛选和设计新药分子，加速药物研发过程", tech: "聚类分析、回归预测" },
        { title: "个性化治疗", desc: "根据患者特征制定个性化治疗方案", tech: "决策树、关联规则" }
      ]
    }
  ];

  return (
    <>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-3xl bg-gradient-to-br from-primary to-primary/60 shadow-2xl">
                <Brain className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              机器学习技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              机器学习(ML)是人工智能的核心分支，通过算法让计算机从数据中自动学习模式和规律，
              无需明确编程即可做出预测和决策，为各行业提供数据驱动的智能解决方案。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Database className="w-4 h-4 mr-2" />
                数据驱动
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Lightbulb className="w-4 h-4 mr-2" />
                自动学习
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                预测决策
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 技术概览 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 justify-center">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-blue-500/10 rounded-lg mb-4 w-fit">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">监督学习</h3>
                <p className="text-muted-foreground mb-4">
                  使用标注数据训练模型，学习输入与输出之间的映射关系
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    分类任务：逻辑回归、支持向量机
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    回归预测：线性回归、决策树
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    集成方法：随机森林、XGBoost
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">无监督学习</h3>
                <p className="text-muted-foreground mb-4">
                  从无标注数据中发现隐藏模式和结构
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    聚类分析：K-means、层次聚类
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    降维技术：PCA、t-SNE
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    异常检测：孤立森林、LOF
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-orange-500/10 rounded-lg mb-4 w-fit">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">强化学习</h3>
                <p className="text-muted-foreground mb-4">
                  通过与环境交互获得奖励信号来学习最优策略
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    价值学习：Q-Learning、DQN
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    策略学习：策略梯度、PPO
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    游戏AI：AlphaGo、Atari游戏
                  </li>
                </ul>
              </div>
            </div>

            {/* 机器学习工作流程 */}
            <Card className="mb-16 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">机器学习工作流程</CardTitle>
                </div>
                <CardDescription>从问题定义到模型部署的完整流程</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "问题定义", desc: "明确业务需求与目标", icon: Lightbulb },
                    { step: "2", title: "数据收集", desc: "获取相关数据集", icon: Database },
                    { step: "3", title: "特征工程", desc: "数据清洗与特征提取", icon: Settings },
                    { step: "4", title: "模型训练", desc: "选择算法与调参", icon: Cpu },
                    { step: "5", title: "评估验证", desc: "指标测试与优化", icon: LineChart },
                    { step: "6", title: "部署应用", desc: "集成到生产环境", icon: Cloud },
                    { step: "7", title: "监控维护", desc: "持续优化模型", icon: MonitorSpeaker },
                    { step: "8", title: "反馈迭代", desc: "改进数据与模型", icon: GitBranch }
                  ].map((item, index) => (
                    <div key={index} className="bg-secondary/5 p-4 rounded-xl border hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {item.step}
                        </div>
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 算法详解 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">核心算法详解</h2>
              <p className="text-xl text-muted-foreground">深入了解机器学习的主要算法类别和应用场景</p>
            </div>

            <div className="space-y-8">
              {algorithms.map((category, index) => (
                <Card key={index} className={`shadow-xl ${category.bgColor} border-0 overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                        <CardDescription>了解该类别下的主要算法及其应用场景</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.algorithms.map((algo, algoIndex) => (
                        <div key={algoIndex} className="bg-background/50 p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{algo.name}</h4>
                            <Badge variant={algo.complexity === "简单" ? "default" : algo.complexity === "中等" ? "secondary" : "destructive"} className="text-xs">
                              {algo.complexity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{algo.use}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">机器学习学习路径</h2>
              <p className="text-xl text-muted-foreground">从零基础到专业应用的系统学习指南</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPath.map((level, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-3 rounded-xl bg-background shadow-sm w-fit ${level.color}`}>
                      <level.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{level.level}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {level.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 工具和框架 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">工具与框架生态</h2>
              <p className="text-xl text-muted-foreground">机器学习开发必备的工具链和技术栈</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {tools.map((toolCategory, index) => (
                <Card key={index} className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">{toolCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {toolCategory.items.map((tool, toolIndex) => (
                        <div key={toolIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{tool.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {tool.popularity}%
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{tool.desc}</p>
                          <div className="w-full bg-secondary/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tool.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 行业应用案例 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">行业应用案例</h2>
              <p className="text-xl text-muted-foreground">机器学习在各行业的实际应用与成功案例</p>
            </div>

            <div className="space-y-8">
              {industryApplications.map((industry, index) => (
                <Card key={index} className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${industry.color} text-white`}>
                    <div className="flex items-center gap-4">
                      <industry.icon className="w-8 h-8" />
                      <CardTitle className="text-2xl">{industry.industry}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {industry.cases.map((caseItem, caseIndex) => (
                        <div key={caseIndex} className="bg-secondary/5 p-6 rounded-xl border">
                          <h4 className="font-semibold text-lg mb-3">{caseItem.title}</h4>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {caseItem.desc}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {caseItem.tech}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 发展趋势 */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">发展趋势与未来</h2>
              <p className="text-xl text-muted-foreground">机器学习技术的最新发展方向和未来展望</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "自动化机器学习", desc: "AutoML技术降低使用门槛", icon: Zap, trend: "自动化" },
                { title: "联邦学习", desc: "隐私保护下的分布式学习", icon: Users, trend: "隐私保护" },
                { title: "边缘计算ML", desc: "本地化模型部署与推理", icon: Cpu, trend: "边缘计算" },
                { title: "解释性AI", desc: "提高模型可解释性和透明度", icon: Lightbulb, trend: "可解释性" }
              ].map((trend, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <trend.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{trend.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{trend.desc}</p>
                    <Badge variant="secondary" className="text-xs">
                      {trend.trend}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 开始学习CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="mx-auto p-4 rounded-3xl bg-gradient-to-br from-primary to-accent w-fit shadow-xl">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">开始您的机器学习之旅</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  从基础概念到实际应用，系统掌握机器学习技术，用数据驱动决策，创造智能未来
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="px-8 py-4 text-lg rounded-xl">
                    <BookOpen className="w-5 h-5 mr-2" />
                    开始学习
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    查看案例
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 回到顶部按钮 */}
      {showScrollTop && (
        <div className="fixed right-5 bottom-5 z-50">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop} 
            className="rounded-full h-12 w-12 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 bg-background/80 backdrop-blur-sm"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
}
