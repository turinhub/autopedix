"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // 考虑固定导航的高度
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">人工智能概念介绍</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            探索人工智能的定义、发展历程、核心技术与应用领域，了解这项改变世界的技术。
          </p>
        </header>

        <section id="definition" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">1. 定义与核心目标</CardTitle>
              <CardDescription>人工智能的本质与追求</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AI是什么？</h3>
                  <p className="mb-2"><span className="font-medium">全称：</span>Artificial Intelligence（人工智能）</p>
                  <p className="mb-4"><span className="font-medium">定义：</span>模拟人类智能的技术与系统，通过机器学习、数据分析等方式实现感知、推理、学习和决策能力。</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">核心目标</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>自动化复杂任务</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>增强人类决策能力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>提升效率与创新力</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>解决传统方法难以处理的复杂问题</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="history" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">2. 发展历程</CardTitle>
              <CardDescription>人工智能的演进之路</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">1950s-1960s：AI诞生</h3>
                  <p>达特茅斯会议提出“人工智能”概念，早期聚焦符号逻辑与规则系统。</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">1970s-1980s：专家系统兴起</h3>
                  <p>基于知识库的专家系统（如MYCIN）应用于医疗、金融领域。</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">1990s-2000s：机器学习突破</h3>
                  <p>统计学习方法（如SVM、随机森林）推动数据驱动型AI发展。</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">2010s至今：深度学习革命</h3>
                  <p>神经网络、GPU算力与大数据的结合，催生图像识别、自然语言处理等突破。</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold mb-2">2020s新趋势</h3>
                  <p>生成式AI（如GPT、Diffusion模型）、多模态融合、通用人工智能（AGI）探索。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="technologies" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">3. 核心技术分支</CardTitle>
              <CardDescription>人工智能的技术构成</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">机器学习（ML）</h3>
                  <p>监督学习、无监督学习、强化学习。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">深度学习（DL）</h3>
                  <p>神经网络（CNN、RNN、Transformer）。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">自然语言处理（NLP）</h3>
                  <p>文本分析、情感识别、语言理解。</p>
                </div>
                
                <a href="/ai/cv" className="p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:bg-secondary/20">
                  <h3 className="text-xl font-semibold mb-2">计算机视觉（CV）</h3>
                  <p>图像识别、视频分析、人脸检测。</p>
                </a>
                
                <a href="/ai/llm" className="p-4 rounded-lg border bg-card hover:shadow-md transition-all hover:bg-secondary/20">
                  <h3 className="text-xl font-semibold mb-2">大语言模型（LLM）</h3>
                  <p>文本生成、对话系统、知识问答。</p>
                </a>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">机器人技术</h3>
                  <p>自主导航、人机协作（如工业机器人、服务机器人）。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="applications" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">4. 应用领域</CardTitle>
              <CardDescription>人工智能的实际应用场景</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">医疗</h3>
                  <p>疾病诊断（如AI辅助影像分析）、药物研发。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">金融</h3>
                  <p>风险预测、智能投顾、反欺诈检测。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">制造业</h3>
                  <p>预测性维护、智能质检、供应链优化。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">零售</h3>
                  <p>个性化推荐、库存管理、无人商店。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">交通</h3>
                  <p>自动驾驶、路线规划、交通流量预测。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">其他</h3>
                  <p>教育（智能辅导）、娱乐（AI生成内容）、能源（智能电网）。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="advantages" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">5. 关键优势</CardTitle>
              <CardDescription>人工智能的核心价值</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">高效处理海量数据</h3>
                  <p>远超人类的分析速度与规模。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">持续学习与优化</h3>
                  <p>通过反馈迭代提升准确性。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">跨领域适应性</h3>
                  <p>灵活应用于多行业场景。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">成本节约</h3>
                  <p>减少重复性人力投入，降低错误率。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">创新驱动</h3>
                  <p>赋能新产品/服务（如虚拟助手、智能硬件）。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="challenges" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">6. 实施挑战</CardTitle>
              <CardDescription>人工智能面临的问题</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">数据依赖</h3>
                  <p>需高质量、标注数据，存在数据偏见风险。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">算力需求</h3>
                  <p>训练大模型依赖高性能硬件，成本高昂。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">伦理与监管</h3>
                  <p>隐私泄露、算法歧视、就业冲击等争议。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">技术黑箱</h3>
                  <p>深度学习模型可解释性低，影响信任度。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">安全风险</h3>
                  <p>对抗攻击、模型滥用（如深度伪造）。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="future" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">7. 未来趋势</CardTitle>
              <CardDescription>人工智能的发展方向</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">多模态AI</h3>
                  <p>融合文本、图像、语音等多维度信息。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">边缘AI</h3>
                  <p>在终端设备（如手机、IoT）部署轻量化模型。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">可解释性增强</h3>
                  <p>开发透明化AI工具，提升决策可信度。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">伦理与法规完善</h3>
                  <p>全球AI治理框架建立（如欧盟《AI法案》）。</p>
                </div>
                
                <div className="p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-2">人机协作深化</h3>
                  <p>AI作为“增强智能”辅助人类创新。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="summary" className="mb-16 scroll-mt-16">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">8. 总结</CardTitle>
              <CardDescription>人工智能的价值与展望</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AI是推动社会变革的核心技术，正在重塑各行各业。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>需平衡技术创新与伦理责任，构建可持续的AI生态。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>企业应用AI需明确场景需求，避免“为技术而技术”。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>长期投入人才培养与数据基建是成功关键。</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 移动端导航 */}
        <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
          <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
            <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-xs whitespace-nowrap"
                onClick={() => scrollToSection("definition")}
              >
                定义
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-xs whitespace-nowrap"
                onClick={() => scrollToSection("history")}
              >
                历程
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-xs whitespace-nowrap"
                onClick={() => scrollToSection("technologies")}
              >
                技术
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full text-xs whitespace-nowrap"
                onClick={() => scrollToSection("applications")}
              >
                应用
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
                onClick={() => scrollToSection("definition")}
              >
                定义
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => scrollToSection("history")}
              >
                历程
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => scrollToSection("technologies")}
              >
                技术
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => scrollToSection("applications")}
              >
                应用
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => scrollToSection("advantages")}
              >
                优势
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => scrollToSection("challenges")}
              >
                挑战
              </Button>
            </div>
          </div>
        </nav>

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
        </div>
    </div>
  );
} 