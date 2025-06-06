"use client";

import { Brain, Eye, MessageSquare, Puzzle, Home, Network, BarChart3 } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

// AI模块导航项
const aiMenuItems = [
  {
    title: "AI 概述",
    url: "/ai",
    icon: Brain,
    description: "人工智能技术概览"
  },
  {
    title: "机器学习",
    url: "/ai/ml",
    icon: BarChart3,
    description: "ML 技术与应用"
  },
  {
    title: "深度学习",
    url: "/ai/dl", 
    icon: Network,
    description: "DL 技术与应用"
  },
  {
    title: "计算机视觉",
    url: "/ai/cv",
    icon: Eye,
    description: "CV 技术与应用"
  },
  {
    title: "大语言模型",
    url: "/ai/llm",
    icon: MessageSquare,
    description: "LLM 技术与应用"
  },
  {
    title: "MCP 协议",
    url: "/ai/mcp",
    icon: Puzzle,
    description: "模型上下文协议"
  },
];

export function AISidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Brain className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">AI 应用领域</h2>
            <p className="text-sm text-muted-foreground">人工智能技术介绍</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>导航菜单</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    tooltip={item.description}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>返回首页</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
} 