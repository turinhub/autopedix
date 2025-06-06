"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { 
  ChevronUp, 
  Network, 
  Layers, 
  Eye, 
  MessageSquare, 
  Brain,
  Cpu,
  Zap,
  Code,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Clock,
  ArrowRight,
  Settings,
  GitBranch,
  Database,
  TrendingUp,
  Mic,
  Lock,
  Sparkles} from "lucide-react";

export default function DlPage() {
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

  // 神经网络架构详解
  const neuralNetworks = [
    {
      category: "卷积神经网络 (CNN)",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/5",
      description: "专门处理图像数据的神经网络架构，通过卷积操作提取特征",
      architectures: [
        { name: "LeNet", year: "1998", use: "手写识别", innovation: "卷积层+池化层" },
        { name: "AlexNet", year: "2012", use: "图像分类", innovation: "ReLU激活+Dropout" },
        { name: "VGG", year: "2014", use: "特征提取", innovation: "小卷积核堆叠" },
        { name: "ResNet", year: "2015", use: "深层网络", innovation: "残差连接" },
        { name: "DenseNet", year: "2017", use: "密集连接", innovation: "特征复用" },
        { name: "EfficientNet", year: "2019", use: "高效架构", innovation: "复合缩放" }
      ]
    },
    {
      category: "循环神经网络 (RNN)",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/5",
      description: "处理序列数据的神经网络，具有记忆能力，适合时间序列任务",
      architectures: [
        { name: "Vanilla RNN", year: "1986", use: "序列建模", innovation: "循环连接" },
        { name: "LSTM", year: "1997", use: "长序列", innovation: "门控机制" },
        { name: "GRU", year: "2014", use: "简化LSTM", innovation: "重置门+更新门" },
        { name: "BiLSTM", year: "1997", use: "双向序列", innovation: "前后向信息" },
        { name: "Seq2Seq", year: "2014", use: "序列转换", innovation: "编码器-解码器" },
        { name: "Attention", year: "2015", use: "注意机制", innovation: "动态权重" }
      ]
    },
    {
      category: "Transformer架构",
      icon: Layers,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/5",
      description: "基于注意力机制的现代架构，革命性地改变了NLP和多模态AI",
      architectures: [
        { name: "Transformer", year: "2017", use: "机器翻译", innovation: "自注意力机制" },
        { name: "BERT", year: "2018", use: "语言理解", innovation: "双向编码器" },
        { name: "GPT", year: "2018", use: "文本生成", innovation: "自回归生成" },
        { name: "Vision Transformer", year: "2020", use: "图像分类", innovation: "图像分块" },
        { name: "DALL-E", year: "2021", use: "图像生成", innovation: "文本到图像" },
        { name: "ChatGPT", year: "2022", use: "对话AI", innovation: "指令微调" }
      ]
    }
  ];

  // 深度学习发展历程
  const milestones = [
    {
      era: "早期探索",
      period: "1943-1980",
      color: "from-gray-500 to-slate-500",
      events: [
        { year: "1943", event: "MP神经元模型", impact: "神经网络理论基础" },
        { year: "1957", event: "感知机算法", impact: "第一个学习算法" },
        { year: "1969", event: "《感知机》书籍", impact: "指出线性不可分问题" },
        { year: "1974", event: "反向传播算法", impact: "多层网络训练方法" }
      ]
    },
    {
      era: "第一次AI冬天",
      period: "1980-1990",
      color: "from-blue-500 to-indigo-500",
      events: [
        { year: "1982", event: "Hopfield网络", impact: "联想记忆模型" },
        { year: "1986", event: "反向传播普及", impact: "多层感知机训练" },
        { year: "1989", event: "CNN概念提出", impact: "卷积神经网络雏形" },
        { year: "1990", event: "通用逼近定理", impact: "神经网络理论突破" }
      ]
    },
    {
      era: "深度学习复兴",
      period: "2006-2012",
      color: "from-green-500 to-emerald-500",
      events: [
        { year: "2006", event: "深度信念网络", impact: "\"深度学习\"概念" },
        { year: "2009", event: "ReLU激活函数", impact: "解决梯度消失问题" },
        { year: "2011", event: "GPU加速训练", impact: "大规模并行计算" },
        { year: "2012", event: "AlexNet突破", impact: "深度学习实用化" }
      ]
    },
    {
      era: "深度学习爆发",
      period: "2012至今",
      color: "from-orange-500 to-red-500",
      events: [
        { year: "2014", event: "GAN生成网络", impact: "对抗生成技术" },
        { year: "2017", event: "Transformer", impact: "注意力革命" },
        { year: "2020", event: "GPT-3发布", impact: "大语言模型时代" },
        { year: "2022", event: "ChatGPT现象", impact: "AI民主化" }
      ]
    }
  ];

  // 深度学习框架和工具
  const frameworks = [
    {
      category: "深度学习框架",
      tools: [
        { name: "TensorFlow", company: "Google", popularity: 95, features: ["分布式训练", "TensorBoard", "移动部署"] },
        { name: "PyTorch", company: "Meta", popularity: 90, features: ["动态图", "研究友好", "快速原型"] },
        { name: "Keras", company: "TensorFlow", popularity: 80, features: ["高级API", "易于使用", "快速开发"] },
        { name: "JAX", company: "Google", popularity: 60, features: ["函数式编程", "自动微分", "XLA编译"] }
      ]
    },
    {
      category: "模型部署",
      tools: [
        { name: "TensorFlow Serving", company: "Google", popularity: 85, features: ["模型服务", "版本管理", "高性能"] },
        { name: "ONNX", company: "开源", popularity: 75, features: ["模型互操作", "跨框架", "标准格式"] },
        { name: "TensorRT", company: "NVIDIA", popularity: 70, features: ["推理优化", "GPU加速", "量化压缩"] },
        { name: "OpenVINO", company: "Intel", popularity: 65, features: ["边缘推理", "CPU优化", "多硬件"] }
      ]
    },
    {
      category: "云平台服务",
      tools: [
        { name: "Google Colab", company: "Google", popularity: 90, features: ["免费GPU", "Jupyter环境", "协作编程"] },
        { name: "AWS SageMaker", company: "Amazon", popularity: 80, features: ["端到端MLOps", "分布式训练", "模型管理"] },
        { name: "Azure ML", company: "Microsoft", popularity: 75, features: ["企业级", "AutoML", "MLOps"] },
        { name: "Hugging Face", company: "开源", popularity: 85, features: ["预训练模型", "模型分享", "Transformers库"] }
      ]
    }
  ];

  // 应用领域案例
  const applicationDomains = [
    {
      domain: "计算机视觉",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      applications: [
        { 
          title: "医疗影像诊断", 
          desc: "利用CNN分析X光、CT、MRI等医疗图像，辅助医生诊断疾病",
          tech: "ResNet、DenseNet",
          accuracy: "95%+",
          impact: "提高诊断准确率，减少误诊"
        },
        { 
          title: "自动驾驶系统", 
          desc: "实时识别道路、车辆、行人等，为自动驾驶提供视觉感知",
          tech: "YOLO、R-CNN",
          accuracy: "99%+",
          impact: "提升道路安全，减少交通事故"
        },
        { 
          title: "工业质检", 
          desc: "自动检测产品缺陷，提高生产效率和产品质量",
          tech: "CNN、异常检测",
          accuracy: "98%+",
          impact: "降低人工成本，提高检测精度"
        }
      ]
    },
    {
      domain: "自然语言处理",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      applications: [
        { 
          title: "智能客服系统", 
          desc: "基于Transformer的对话AI，提供24/7智能客户服务",
          tech: "BERT、GPT",
          accuracy: "90%+",
          impact: "降低人工成本，提升服务效率"
        },
        { 
          title: "机器翻译", 
          desc: "实时翻译多种语言，打破语言障碍促进国际交流",
          tech: "Transformer、mT5",
          accuracy: "BLEU 40+",
          impact: "促进全球化沟通，降低翻译成本"
        },
        { 
          title: "内容创作", 
          desc: "AI辅助写作、代码生成、创意设计等内容创作任务",
          tech: "GPT-4、Codex",
          accuracy: "高质量",
          impact: "提升创作效率，激发创新灵感"
        }
      ]
    },
    {
      domain: "语音与音频",
      icon: Mic,
      color: "from-purple-500 to-violet-500",
      applications: [
        { 
          title: "语音识别", 
          desc: "将语音转换为文字，支持多语言和方言识别",
          tech: "Transformer、CTC",
          accuracy: "95%+",
          impact: "便捷语音交互，提升可访问性"
        },
        { 
          title: "语音合成", 
          desc: "将文本转换为自然流畅的语音，支持个性化声音",
          tech: "WaveNet、Tacotron",
          accuracy: "近人类水平",
          impact: "丰富交互体验，辅助语言障碍"
        },
        { 
          title: "音乐生成", 
          desc: "AI创作音乐、伴奏生成、音频修复等音频处理",
          tech: "VAE、GAN",
          accuracy: "创意性强",
          impact: "降低创作门槛，丰富音乐形式"
        }
      ]
    }
  ];

  // 技术挑战和解决方案
  const challenges = [
    {
      challenge: "计算资源需求",
      icon: Cpu,
      difficulty: "高",
      solutions: [
        "模型压缩与量化",
        "知识蒸馏技术",
        "边缘计算部署",
        "混合精度训练"
      ]
    },
    {
      challenge: "数据质量与标注",
      icon: Database,
      difficulty: "中",
      solutions: [
        "自监督学习",
        "少样本学习",
        "数据增强技术",
        "主动学习策略"
      ]
    },
    {
      challenge: "模型可解释性",
      icon: Lightbulb,
      difficulty: "高",
      solutions: [
        "注意力可视化",
        "梯度分析方法",
        "特征重要性评估",
        "对抗样本分析"
      ]
    },
    {
      challenge: "安全与隐私",
      icon: Lock,
      difficulty: "高",
      solutions: [
        "联邦学习技术",
        "差分隐私保护",
        "对抗训练方法",
        "同态加密计算"
      ]
    }
  ];

  // 前沿技术趋势
  const frontierTech = [
    {
      tech: "大模型技术",
      icon: Brain,
      trend: "快速发展",
      description: "千亿参数大模型展现强大的通用能力",
      applications: ["通用人工智能", "多模态理解", "代码生成"],
      timeline: "2020-2025"
    },
    {
      tech: "神经架构搜索",
      icon: Settings,
      trend: "自动化",
      description: "自动搜索最优神经网络架构设计",
      applications: ["AutoML", "模型优化", "硬件适配"],
      timeline: "2018-2024"
    },
    {
      tech: "量子神经网络",
      icon: Zap,
      trend: "探索阶段",
      description: "结合量子计算的神经网络新范式",
      applications: ["量子优势", "组合优化", "量子机器学习"],
      timeline: "2025-2030"
    },
    {
      tech: "神经形态计算",
      icon: Network,
      trend: "硬件创新",
      description: "模拟大脑神经元的专用芯片架构",
      applications: ["边缘AI", "低功耗计算", "实时处理"],
      timeline: "2022-2028"
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
                <Network className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              深度学习技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              深度学习(DL)是机器学习的重要分支，通过多层神经网络模拟人脑处理信息的方式，
              在图像识别、自然语言处理、语音识别等领域取得突破性进展，推动AI技术革命。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Layers className="w-4 h-4 mr-2" />
                多层网络
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                神经模拟
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                智能突破
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
                <Network className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-blue-500/10 rounded-lg mb-4 w-fit">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">卷积神经网络(CNN)</h3>
                <p className="text-muted-foreground mb-4">
                  专门用于处理图像数据的神经网络架构
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    图像识别与分类
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    目标检测与分割
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    图像生成与增强
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">循环神经网络(RNN)</h3>
                <p className="text-muted-foreground mb-4">
                  处理序列数据的神经网络，具有记忆能力
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    自然语言处理
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    语音识别与合成
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    时间序列预测
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-3 bg-purple-500/10 rounded-lg mb-4 w-fit">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transformer</h3>
                <p className="text-muted-foreground mb-4">
                  基于注意力机制的现代神经网络架构
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    大语言模型基础
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    机器翻译突破
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    多模态AI架构
                  </li>
                </ul>
              </div>
            </div>

            {/* 深度学习关键特性 */}
            <Card className="mb-16 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">深度学习关键特性</CardTitle>
                </div>
                <CardDescription>深度学习技术的核心优势和应用特点</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "自动特征提取", desc: "无需手工设计特征", icon: Settings },
                    { title: "端到端学习", desc: "从原始数据到最终输出", icon: ArrowRight },
                    { title: "非线性建模", desc: "处理复杂非线性关系", icon: TrendingUp },
                    { title: "大数据处理", desc: "充分利用海量数据", icon: Database },
                    { title: "迁移学习", desc: "知识在任务间迁移", icon: GitBranch },
                    { title: "多模态融合", desc: "整合不同类型数据", icon: Layers },
                    { title: "实时推理", desc: "高速在线预测能力", icon: Zap },
                    { title: "持续学习", desc: "在线更新和优化", icon: TrendingUp }
                  ].map((feature, index) => (
                    <div key={index} className="bg-secondary/5 p-4 rounded-xl border hover:shadow-md transition-shadow text-center">
                      <div className="mx-auto p-3 rounded-xl bg-primary/10 w-fit mb-3">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-medium mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 神经网络架构详解 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">神经网络架构详解</h2>
              <p className="text-xl text-muted-foreground">深入了解主流神经网络架构的发展历程和技术特点</p>
            </div>

            <div className="space-y-8">
              {neuralNetworks.map((network, index) => (
                <Card key={index} className={`shadow-xl ${network.bgColor} border-0 overflow-hidden`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${network.color} text-white`}>
                        <network.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{network.category}</CardTitle>
                        <CardDescription className="text-base">{network.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {network.architectures.map((arch, archIndex) => (
                        <div key={archIndex} className="bg-background/50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{arch.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {arch.year}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{arch.use}</p>
                          <p className="text-xs text-primary font-medium">{arch.innovation}</p>
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

      {/* 发展历程时间线 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">深度学习发展历程</h2>
              <p className="text-xl text-muted-foreground">从神经网络理论到深度学习革命的重要里程碑</p>
            </div>

            <div className="space-y-12">
              {milestones.map((era, index) => (
                <Card key={index} className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${era.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{era.era}</CardTitle>
                        <CardDescription className="text-white/80 text-lg">{era.period}</CardDescription>
                      </div>
                      <Clock className="w-8 h-8 opacity-80" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {era.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-secondary/5 p-4 rounded-xl border">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                              {event.year.slice(-2)}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {event.year}
                            </Badge>
                          </div>
                          <h4 className="font-semibold mb-2">{event.event}</h4>
                          <p className="text-sm text-muted-foreground">{event.impact}</p>
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

      {/* 框架和工具生态 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">框架与工具生态</h2>
              <p className="text-xl text-muted-foreground">深度学习开发的完整工具链和技术栈</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {frameworks.map((category, index) => (
                <Card key={index} className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Code className="w-6 h-6" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{tool.name}</h4>
                              <p className="text-sm text-muted-foreground">{tool.company}</p>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {tool.popularity}%
                            </Badge>
                          </div>
                          <div className="w-full bg-secondary/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tool.popularity}%` }}
                            ></div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {tool.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
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

      {/* 应用领域详解 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">应用领域详解</h2>
              <p className="text-xl text-muted-foreground">深度学习在各个领域的具体应用和成功案例</p>
            </div>

            <div className="space-y-8">
              {applicationDomains.map((domain, index) => (
                <Card key={index} className="shadow-xl border-0 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${domain.color} text-white`}>
                    <div className="flex items-center gap-4">
                      <domain.icon className="w-8 h-8" />
                      <CardTitle className="text-2xl">{domain.domain}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {domain.applications.map((app, appIndex) => (
                        <div key={appIndex} className="bg-secondary/5 p-6 rounded-xl border hover:shadow-lg transition-shadow">
                          <h4 className="font-semibold text-lg mb-3">{app.title}</h4>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {app.desc}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">技术栈</span>
                              <Badge variant="outline" className="text-xs">
                                {app.tech}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">准确率</span>
                              <Badge variant="default" className="text-xs">
                                {app.accuracy}
                              </Badge>
                            </div>
                            <div className="mt-3 p-3 bg-background/50 rounded-lg">
                              <p className="text-xs text-muted-foreground">
                                <strong>影响：</strong>{app.impact}
                              </p>
                            </div>
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

      {/* 技术挑战与解决方案 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">技术挑战与解决方案</h2>
              <p className="text-xl text-muted-foreground">深度学习面临的主要挑战和前沿解决方案</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="shadow-xl border-0">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <challenge.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{challenge.challenge}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm text-muted-foreground">难度：</span>
                          <Badge variant={challenge.difficulty === "高" ? "destructive" : "secondary"}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-muted-foreground">解决方案：</h4>
                      {challenge.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{solution}</span>
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

      {/* 前沿技术趋势 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">前沿技术趋势</h2>
              <p className="text-xl text-muted-foreground">深度学习领域的最新技术发展和未来方向</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {frontierTech.map((tech, index) => (
                <Card key={index} className="shadow-xl border-0 hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                        <tech.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{tech.tech}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="default" className="text-xs">
                            {tech.trend}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{tech.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {tech.description}
                    </p>
                    <div>
                      <h4 className="font-medium text-sm mb-3">应用方向：</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 开始学习CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="mb-6">
                  <div className="mx-auto p-4 rounded-3xl bg-gradient-to-br from-primary to-accent w-fit shadow-xl">
                    <Network className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">深入探索深度学习世界</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  从神经网络基础到前沿架构，掌握深度学习核心技术，构建智能应用，推动AI创新
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="px-8 py-4 text-lg rounded-xl">
                    <BookOpen className="w-5 h-5 mr-2" />
                    开始学习
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    探索应用
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-xl">
                    <Code className="w-5 h-5 mr-2" />
                    实践项目
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