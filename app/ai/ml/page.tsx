"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp, Brain, Target, BarChart3, Users } from "lucide-react";

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

  return (
    <>
      {/* 页面标题区域 */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              机器学习技术与应用
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              机器学习(ML)是人工智能的核心分支，通过算法让计算机从数据中自动学习模式和规律，
              无需明确编程即可做出预测和决策，为各行业提供数据驱动的智能解决方案。
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
                <Brain className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">技术概览</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-blue-500/10 rounded-lg mb-4 w-fit">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">监督学习</h3>
                <p className="text-muted-foreground mb-4">
                  使用标注数据训练模型，学习输入与输出之间的映射关系
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 分类任务：逻辑回归、支持向量机</li>
                  <li>• 回归预测：线性回归、决策树</li>
                  <li>• 集成方法：随机森林、XGBoost</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-green-500/10 rounded-lg mb-4 w-fit">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">无监督学习</h3>
                <p className="text-muted-foreground mb-4">
                  从无标注数据中发现隐藏模式和结构
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 聚类分析：K-means、层次聚类</li>
                  <li>• 降维技术：PCA、t-SNE</li>
                  <li>• 异常检测：孤立森林、LOF</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="p-3 bg-orange-500/10 rounded-lg mb-4 w-fit">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">强化学习</h3>
                <p className="text-muted-foreground mb-4">
                  通过与环境交互获得奖励信号来学习最优策略
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 价值学习：Q-Learning、DQN</li>
                  <li>• 策略学习：策略梯度、PPO</li>
                  <li>• 游戏AI：AlphaGo、Atari游戏</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-4">机器学习工作流程</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { step: "1", title: "问题定义", desc: "明确业务需求与目标" },
                  { step: "2", title: "数据收集", desc: "获取相关数据集" },
                  { step: "3", title: "特征工程", desc: "数据清洗与特征提取" },
                  { step: "4", title: "模型训练", desc: "选择算法与调参" },
                  { step: "5", title: "评估验证", desc: "指标测试与优化" },
                  { step: "6", title: "部署应用", desc: "集成到生产环境" },
                  { step: "7", title: "监控维护", desc: "持续优化模型" },
                  { step: "8", title: "反馈迭代", desc: "改进数据与模型" }
                ].map((item, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-2 text-primary font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 应用案例 */}
            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">机器学习应用案例</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    零售业客户分析
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    通过客户购买历史构建聚类模型，实现精细化营销
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• RFM客户价值分析</li>
                    <li>• 购买行为预测</li>
                    <li>• 个性化推荐</li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    金融风控系统
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    使用监督学习识别欺诈交易，降低金融风险
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• 信用评分模型</li>
                    <li>• 异常交易检测</li>
                    <li>• 反洗钱分析</li>
                  </ul>
                </div>
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
