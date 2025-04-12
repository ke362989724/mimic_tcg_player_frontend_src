"use client";

import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { IoIosClose } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";

type Props = {};

function AppSidebar({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <SidebarProvider
        className="min-h-fit max-w-fit"
        open={openSidebar}
        onOpenChange={setOpenSidebar}
      >
        <div>
          <Sidebar className="">
            <SidebarHeader>
              <div className="flex justify-between items-center">
                <div>Every Category</div>
                <IoIosClose
                  fontSize={24}
                  onClick={() => {
                    setOpenSidebar(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
            </SidebarHeader>
            <SidebarContent className="p-2">
              <div>123123</div>
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
        </div>
        <SidebarTrigger
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          <div className="p-3 hover:bg-gray-100">
            <BiCategoryAlt fontSize={20} />
          </div>
        </SidebarTrigger>
      </SidebarProvider>
    </>
  );
}

export default AppSidebar;
