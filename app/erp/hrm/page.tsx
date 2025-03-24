"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  Settings,
  CheckCircle2,
  Users,
  FileText,
  Briefcase,
  GraduationCap,
  Target,
  GitCompare,
  ClipboardList,
  LineChart,
  Rocket,
  Globe,
  BadgeCheck,
  DatabaseZap,
  DollarSign,
  Calendar,
  Award
} from "lucide-react"

export default function HrmPage() {
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
              ERP 人力资源管理模块
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              人力资源管理(HRM)是企业ERP系统的核心组成部分，帮助企业优化人才招聘、管理、培训和发展的全生命周期，
              提高人力资源效率，降低成本，支持企业战略决策与可持续发展。
            </p>
          </div>
        </div>
      </section>

      {/* 人力资源模块的核心定位 */}
      <section className="py-16" id="core-positioning">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">人力资源模块的核心定位</h2>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <h3 className="text-xl font-semibold mb-4">企业人才管理的“动力中心”</h3>
              <p className="mb-6 text-muted-foreground">
                人力资源管理模块通过整合员工全生命周期数据，帮助企业实施有效的人才战略，
                将员工与企业目标紧密关联，从而优化人力资本配置，提升组织绩效与竞争力。
              </p>

              <h4 className="text-lg font-medium mb-3">覆盖范围：</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">核心功能</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">人员信息管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">招聘与入职</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">绩效考核</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">薪酬管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">培训与发展</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">考勤与假期</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">扩展功能</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">人才发展规划</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">员工关系管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">企业文化建设</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">组织结构管理</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 人力资源模块的核心功能解析 */}
      <section className="py-16 bg-secondary/10" id="core-functions">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Settings className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">人力资源模块的核心功能解析</h2>
            </div>

            {/* 人员信息管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">人员信息管理（Personnel Management）</h3>
              </div>

              <p className="mb-4 text-muted-foreground">
                人员信息管理是人力资源模块的基础，负责集中存储和管理员工所有基本资料，建立企业人才档案库。
              </p>

              <div className="mb-6">
                <h4 className="font-medium mb-3">关键能力：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">统一电子档案管理，支持多维度员工信息查询</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">员工自助信息维护，减轻HR工作负担</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">组织结构与职位管理，支持灵活的组织变更</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">应用示例：</h4>
                <p className="text-muted-foreground">员工入职时统一录入基本信息，系统自动关联至各业务模块，避免重复录入。</p>
              </div>
            </div>

            {/* 招聘与入职 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">招聘与入职管理（Recruitment & Onboarding）</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3">招聘管理：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">需求发布与审批</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">简历筛选</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">面试管理</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">自动化流程：</span>
                      岗位需求→简历筛选→面试安排→录用决策→入职准备
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">入职管理：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">入职准备清单</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">文档电子化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">培训安排</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">集成优势：</span>
                      入职信息自动同步至薪酬、考勤等模块，避免多次录入
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 绩效管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">绩效管理（Performance Management）</h3>
              </div>

              <p className="mb-4 text-muted-foreground">
                绩效管理模块帮助企业建立科学的目标设定与评估体系，实现组织目标与个人发展的有效统一。
              </p>

              <div className="mb-6">
                <h4 className="font-medium mb-3">主要功能：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">目标设定与分解（OKR/KPI）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">多维度评估（360°评估、上下级互评等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">绩效面谈管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-muted-foreground">绩效结果应用（与薪酬、晋升等联动）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">集成价值：</h4>
                <p className="text-muted-foreground">绩效结果自动关联薪酬调整、晋升决策、培训需求，形成闭环管理。</p>
              </div>
            </div>

            {/* 薪酬管理 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">薪酬管理（Compensation Management）</h3>
              </div>

              <p className="mb-4 text-muted-foreground">
                薪酬管理模块负责企业各类薪酬福利政策的设计与执行，确保薪酬体系的公平性与竞争力。
              </p>

              <div className="mb-6">
                <h4 className="font-medium mb-3">核心场景：</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">薪酬结构设计（基本工资、绩效、津贴等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">薪资核算（含税计算、社保公积金等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-muted-foreground">福利管理（保险、补贴、股权激励等）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">应用示例：</h4>
                <p className="text-muted-foreground">根据考勤数据和绩效结果，自动计算月度薪资并生成工资条，同步至财务系统进行发放。</p>
              </div>
            </div>

            {/* 培训与发展 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">培训与发展（Training & Development）</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3">培训管理：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">培训需求分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">培训计划与预算</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">培训效果评估</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">应用场景：</span>
                      基于绩效结果和岗位要求，自动生成个性化培训计划。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">人才发展：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">职业生涯规划</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">继任者计划</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">人才梯队建设</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">价值体现：</span>
                      识别关键岗位人才，降低人才流失风险，保障企业可持续发展。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2">集成优势：</h4>
                <p className="text-muted-foreground">培训与绩效、人才发展形成良性循环，员工成长与企业发展同步推进。</p>
              </div>
            </div>

            {/* 考勤与假期 */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">考勤与假期管理（Attendance & Leave）</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium mb-3">考勤管理：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">排班管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">打卡记录与统计</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">加班管理</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">自动化流程：</span>
                      支持多种考勤方式（指纹、刷卡、APP打卡等），自动计算工时。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">假期管理：</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">假期政策配置</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">请假申请与审批</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">假期余额管理</span>
                    </li>
                  </ul>

                  <div className="mt-4 bg-secondary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">集成优势：</span>
                      考勤数据自动同步至薪酬计算，减少人工干预。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心对比 */}
      <section className="py-16" id="comparison">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <GitCompare className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">传统人力资源 vs ERP人力资源</h2>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">对比维度</th>
                      <th className="text-left p-3 font-semibold text-red-500">传统人力资源管理</th>
                      <th className="text-left p-3 font-semibold text-green-500">ERP人力资源模块</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">信息管理</td>
                      <td className="p-3 text-muted-foreground">人事档案纸质化或分散管理</td>
                      <td className="p-3 text-muted-foreground">电子化集中管理，数据一致性高</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">流程效率</td>
                      <td className="p-3 text-muted-foreground">人工操作多，审批流程长</td>
                      <td className="p-3 text-muted-foreground">自动化程度高，流程标准化</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">数据利用</td>
                      <td className="p-3 text-muted-foreground">基础统计与报表，分析能力弱</td>
                      <td className="p-3 text-muted-foreground">多维度数据分析，支持决策预测</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">部门协同</td>
                      <td className="p-3 text-muted-foreground">HR孤岛化，与业务脱节</td>
                      <td className="p-3 text-muted-foreground">与财务、业务系统无缝集成</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">战略价值</td>
                      <td className="p-3 text-muted-foreground">注重事务性工作</td>
                      <td className="p-3 text-muted-foreground">支持人才战略与组织发展</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施步骤 */}
      <section className="py-16 bg-secondary/10" id="steps">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">实施关键步骤</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">需求分析</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>梳理现有人力资源管理流程与痛点</li>
                  <li>明确组织架构与岗位体系</li>
                  <li>确定系统的关键需求与目标</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">系统设计</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>设计人事档案与组织结构模型</li>
                  <li>规划薪酬体系与绩效评估机制</li>
                  <li>制定工作流与审批规则</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">数据准备</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>员工基础信息清洗与整理</li>
                  <li>历史数据的标准化与迁移</li>
                  <li>数据字典与编码规则统一</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold">系统配置</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>搭建组织架构与职级体系</li>
                  <li>配置薪酬计算规则（税前、税后、社保等）</li>
                  <li>设置考勤规则与假期政策</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold">流程测试</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>验证各模块核心功能</li>
                  <li>测试端到端业务场景（如入职到离职全流程）</li>
                  <li>确认与财务等其他模块的集成</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold">培训与上线</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>HR团队专业培训（系统管理、报表分析等）</li>
                  <li>员工自助功能培训（休假申请、信息查询等）</li>
                  <li>分阶段上线，确保平稳过渡</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-16" id="scenarios">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <LineChart className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">典型应用场景</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">人员招聘与入职流程优化</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">传统痛点</h4>
                    <p className="text-sm text-muted-foreground">招聘流程分散，新员工入职准备繁琐，HR团队工作量大</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">ERP方案</h4>
                    <p className="text-sm text-muted-foreground">一体化招聘平台，自动化入职流程，新员工入职时间缩短50%</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">跨区域人员管理</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">传统痛点</h4>
                    <p className="text-sm text-muted-foreground">总部难以实时掌握分支机构人员状况，政策执行不统一</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">ERP方案</h4>
                    <p className="text-sm text-muted-foreground">统一HR信息平台，灵活适应各地区政策，实时监控分支人员变化</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">人才发展与保留</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">传统痛点</h4>
                    <p className="text-sm text-muted-foreground">缺乏系统化人才评估体系，核心人才流失风险高</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">ERP方案</h4>
                    <p className="text-sm text-muted-foreground">建立人才画像与发展地图，关键岗位继任计划，降低人才流失率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实施挑战与应对策略 */}
      <section className="py-16 bg-secondary/10" id="challenges">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ClipboardList className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">实施挑战与应对策略</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">数据私密性管理</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">挑战</h4>
                    <p className="text-sm text-muted-foreground">员工敏感信息安全与访问权限控制</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">对策</h4>
                    <p className="text-sm text-muted-foreground">精细化权限设计，数据加密与脱敏处理</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">流程与系统适配</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">挑战</h4>
                    <p className="text-sm text-muted-foreground">企业特殊HR流程与标准化系统冲突</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">对策</h4>
                    <p className="text-sm text-muted-foreground">灵活配置工作流，核心流程适度定制开发</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">用户接受度</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">挑战</h4>
                    <p className="text-sm text-muted-foreground">员工对新系统抵触，使用率低</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">对策</h4>
                    <p className="text-sm text-muted-foreground">优化用户体验，分阶段培训，绩效激励机制</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">法规合规性</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">挑战</h4>
                    <p className="text-sm text-muted-foreground">各地劳动法规差异，政策更新频繁</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">对策</h4>
                    <p className="text-sm text-muted-foreground">模块化设计，支持地区性差异配置，定期更新法规库</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">HR团队转型</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">挑战</h4>
                    <p className="text-sm text-muted-foreground">HR从事务性向战略性转型的能力不足</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">对策</h4>
                    <p className="text-sm text-muted-foreground">HR专业化培训，引入数据分析思维，建立新型HR评价体系</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-16" id="cases">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">成功案例</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">某制造企业</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">问题:</span>
                    <span className="text-sm text-muted-foreground">多地工厂人员管理混乱，薪资核算错误率高达12%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">方案:</span>
                    <span className="text-sm text-muted-foreground">ERP人力资源模块整合考勤、薪酬系统，实现统一管理</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">成果:</span>
                    <span className="text-sm text-muted-foreground">薪资核算错误率降至0.5%，HR人员工作效率提升35%</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">某服务型企业</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">问题:</span>
                    <span className="text-sm text-muted-foreground">人才流失率高，关键岗位空缺周期长</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">方案:</span>
                    <span className="text-sm text-muted-foreground">实施ERP人才发展与继任计划模块，建立人才梯队</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium min-w-[60px]">成果:</span>
                    <span className="text-sm text-muted-foreground">关键岗位内部晋升率提升40%，人才流失率降低15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 未来趋势 */}
      <section className="py-16 bg-secondary/10" id="future">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <DatabaseZap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">总结与未来趋势</h2>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border mb-6">
              <h3 className="text-xl font-semibold mb-3">人力资源模块的战略定位</h3>
              <p className="text-muted-foreground mb-4">从传统“管理者”转变为“人才赋能者”，通过数据驱动的人才决策支持企业可持续发展</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">智能化</h3>
                <p className="text-muted-foreground">AI技术应用于人才筛选、绩效预测与员工流失风险预警</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">体验化</h3>
                <p className="text-muted-foreground">移动化员工自助服务，提升员工体验与满意度</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-3">数据化</h3>
                <p className="text-muted-foreground">人力资源数据分析驱动组织效能提升与战略决策</p>
              </div>
            </div>

            <div className="mt-8 bg-card rounded-lg p-6 shadow-sm border text-center">
              <p className="text-lg italic text-muted-foreground">“ERP人力资源模块让企业从‘人力管理’迈向‘人才经营’。”</p>
            </div>
          </div>
        </div>
      </section>

      {/* 移动端导航 */}
      <nav className="md:hidden sticky bottom-8 flex justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex overflow-x-auto space-x-1 px-1 no-scrollbar">
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("intro")}>
              简介
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("core-positioning")}>
              核心定位
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("core-functions")}>
              核心功能
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("comparison")}>
              对比
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("steps")}>
              实施步骤
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("challenges")}>
              实施挑战
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("scenarios")}>
              应用场景
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("cases")}>
              成功案例
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full text-xs whitespace-nowrap" onClick={() => scrollToSection("future")}>
              未来趋势
            </Button>
          </div>
        </div>
      </nav>

      {/* 桌面端导航 */}
      <nav className="hidden md:flex sticky bottom-8 justify-center z-10">
        <div className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 border">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("intro")}>
              简介
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("core-positioning")}>
              核心定位
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("core-functions")}>
              核心功能
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("comparison")}>
              对比
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("steps")}>
              实施步骤
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("challenges")}>
              实施挑战
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("scenarios")}>
              应用场景
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("cases")}>
              成功案例
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full" onClick={() => scrollToSection("future")}>
              未来趋势
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
    </>
  )
} 