export interface RouteItem {
  path: string;
  label: string;
  children?: Record<string, RouteItem>;
}

export type Routes = Record<string, RouteItem>;

export const routes: Routes = {
  home: {
    path: "/",
    label: "首页"
  },
  erp: {
    path: "/erp",
    label: "ERP系统",
    children: {
      finance: {
        path: "/erp/finance",
        label: "财务管理"
      },
      scm: {
        path: "/erp/scm",
        label: "供应链管理"
      },
      crm: {
        path: "/erp/crm",
        label: "客户关系管理"
      },
      hrm: {
        path: "/erp/hrm",
        label: "人力资源管理"
      },
      businessFinance: {
        path: "/erp/business-finance",
        label: "业财一体化"
      }
    }
  },
  ai: {
    path: "/ai",
    label: "人工智能",
    children: {
      llm: {
        path: "/ai/llm",
        label: "大语言模型"
      },
      cv: {
        path: "/ai/cv",
        label: "计算机视觉"
      }
    }
  }
};

// 辅助函数，根据路径获取面包屑数组
export function getBreadcrumbs(currentPath: string): { path: string; label: string }[] {
  const breadcrumbs: { path: string; label: string }[] = [];
  
  // 添加首页
  if (currentPath !== "/") {
    breadcrumbs.push({ path: "/", label: "首页" });
  }
  
  // 切分路径
  const pathSegments = currentPath.split("/").filter(Boolean);
  
  // 如果没有路径段，直接返回
  if (pathSegments.length === 0) {
    return breadcrumbs;
  }
  
  // 递归查找路径
  let currentRoute: RouteItem | undefined;
  let currentFullPath = "";
  
  for (const segment of pathSegments) {
    if (!currentRoute) {
      currentRoute = Object.values(routes).find(r => r.path === `/${segment}`);
      if (currentRoute) {
        currentFullPath = currentRoute.path;
        breadcrumbs.push({ path: currentFullPath, label: currentRoute.label });
      }
    } else if (currentRoute.children) {
      const childRoute = Object.values(currentRoute.children).find(
        r => r.path === `${currentFullPath}/${segment}` || r.path.endsWith(`/${segment}`)
      );
      
      if (childRoute) {
        currentFullPath = childRoute.path;
        breadcrumbs.push({ path: currentFullPath, label: childRoute.label });
        currentRoute = childRoute;
      }
    }
  }
  
  return breadcrumbs;
} 