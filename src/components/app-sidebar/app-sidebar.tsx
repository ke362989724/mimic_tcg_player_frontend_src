"use client";

import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar";
import { IoIosClose } from "react-icons/io";
import { getCardCategories } from "@/api-service/card.category";
import { BiCategoryAlt } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import { CategoryProps } from "@/interface/app-sidebar.interface";

type Props = {};

function AppSidebar({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const { data, isLoading, isError, refetch, isFetching, error } = useQuery({
    queryKey: ["cardCategories"],
    queryFn: async () => {
      const data = await getCardCategories();
      return data as CategoryProps[];
    },
    staleTime: 12 * 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  });

  return (
    <>
      <SidebarProvider
        className="min-h-fit max-w-fit"
        open={openSidebar}
        onOpenChange={setOpenSidebar}
      >
        <div>
          <Sidebar className="">
            <SidebarHeader className="px-3 py-4 border-b-2">
              <div className="flex justify-between items-center">
                <div className="font-title">Every Category</div>
                <IoIosClose
                  fontSize={24}
                  onClick={() => {
                    setOpenSidebar(false);
                  }}
                  className="cursor-pointer"
                />
              </div>
            </SidebarHeader>
            <SidebarContent className="">
              {data &&
                data.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="px-4 py-5 border-b-1 cursor-pointer hover:bg-sidebar-ring"
                    >
                      {el.name}
                    </div>
                  );
                })}
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
        </div>
        <SidebarTrigger
          className="w-fit p-3 h-full rounded-none cursor-pointer"
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
