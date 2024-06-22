import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";

export default async function RoutesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow p-5">{children}</div>
    </div>
  );
}
