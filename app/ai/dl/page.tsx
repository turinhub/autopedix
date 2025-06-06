"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp, Network, Layers, Eye, MessageSquare, BarChart3 } from "lucide-react";

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

  return (
    <>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              深度学习技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              深度学习(DL)是机器学习的重要分支，通过多层神经网络模拟人脑处理信息的方式，
              在图像识别、自然语言处理、语音识别等领域取得突破性进展，推动AI技术革命。
            </p>
          </div>
        </div>
      </section>

      {/* 技术概览 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Network className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-blue-500/10 rounded-lg mb-4 w-fit">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">卷积神经网络(CNN)</h3>
                <p className="text-muted-foreground mb-4">
                  专门用于处理图像数据的神经网络架构
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 图像识别</li>
                  <li>• 目标检测</li>
                  <li>• 图像生成</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">循环神经网络(RNN)</h3>
                <p className="text-muted-foreground mb-4">
                  处理序列数据的神经网络，具有记忆能力
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 自然语言处理</li>
                  <li>• 语音识别</li>
                  <li>• 时序预测</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-purple-500/10 rounded-lg mb-4 w-fit">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transformer</h3>
                <p className="text-muted-foreground mb-4">
                  基于注意力机制的现代神经网络架构
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 大语言模型</li>
                  <li>• 机器翻译</li>
                  <li>• 多模态AI</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">深度学习关键特性</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">技术优势</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 自动特征提取</li>
                    <li>• 端到端学习</li>
                    <li>• 非线性建模能力</li>
                    <li>• 大数据处理</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">应用领域</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 计算机视觉</li>
                    <li>• 自然语言处理</li>
                    <li>• 语音识别</li>
                    <li>• 推荐系统</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用案例 */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">典型应用案例</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-red-500/10 rounded-lg mb-4 w-fit">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">医疗影像诊断</h3>
                <p className="text-muted-foreground mb-4">
                  深度学习在医疗影像分析中达到专家级水平
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 癌症早期筛查</li>
                  <li>• 病灶定位识别</li>
                  <li>• 诊断辅助决策</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">智能客服系统</h3>
                <p className="text-muted-foreground mb-4">
                  基于深度学习的对话系统提供智能客户服务
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 自然语言理解</li>
                  <li>• 智能问答</li>
                  <li>• 情感分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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