import { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ERPLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-accent">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
} 