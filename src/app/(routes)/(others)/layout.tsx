import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
    </div>
  );
}
