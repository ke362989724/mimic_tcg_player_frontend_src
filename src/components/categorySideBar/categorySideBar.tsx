"use client";

import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Props = {};

const CategorySidebar = (props: Props) => {
  return (
    <SidebarProvider>
      <main>
        <SidebarTrigger />
        <div>Hello World</div>
      </main>
    </SidebarProvider>
  );
};

export default CategorySidebar;
