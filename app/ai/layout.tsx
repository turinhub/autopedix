import { ReactNode } from "react";
import { ModuleHeader } from "@/components/module-header";
import { SiteFooter } from "@/components/site-footer";

export default function AILayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-accent">
      <ModuleHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
} 