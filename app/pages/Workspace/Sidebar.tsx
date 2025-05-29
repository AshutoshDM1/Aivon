import type * as React from "react";
import {
  Search,
  Home,
  Inbox,
  Settings,
  FileText,
  Trash2,
  MoreHorizontal,
  Film,
  CheckSquare,
  Eye,
  Gamepad2,
  Globe,
  Lightbulb,
  Calendar,
  Bell,
} from "lucide-react";

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
  SidebarRail,
  SidebarFooter,
} from "~/components/ui/sidebar";
import { Button } from "~/components/ui/button";

// Navigation data organized by sections
const navigationData = {
  main: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
  ],
  favorites: [
    {
      title: "Movies",
      url: "#",
      icon: Film,
    },
    {
      title: "Todo",
      url: "#",
      icon: CheckSquare,
    },
  ],
  shared: [
    {
      title: "How to Deploy Server",
      url: "#",
      icon: Globe,
    },
    {
      title: "BCA-603 E-Commerce",
      url: "#",
      icon: FileText,
    },
  ],
  private: [
    {
      title: "Todo",
      url: "#",
      icon: CheckSquare,
    },
    {
      title: "Watching List",
      url: "#",
      icon: Eye,
    },
    {
      title: "Manga Haven",
      url: "#",
      icon: Gamepad2,
    },
    {
      title: "Harkirat Cohort: 3 Content",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Web3 Harkirat Cohort: 3",
      url: "#",
      icon: Globe,
    },
    {
      title: "Project Ideas: Ashutosh",
      url: "#",
      icon: Lightbulb,
    },
    {
      title: "Movies",
      url: "#",
      icon: Film,
    },
    {
      title: "PC 2025",
      url: "#",
      icon: Calendar,
    },
    {
      title: "How live in Terminal in Windows",
      url: "#",
      icon: FileText,
    },
    {
      title: "Ashutosh Tiwari Notion",
      url: "#",
      icon: Bell,
    },
  ],
  system: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Templates",
      url: "#",
      icon: FileText,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border- border-gray-200 bg-white" {...props}>
      <SidebarHeader className="border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2 px-3 py-2 pl-5">
          <h1 className="text-[17px] flex items-center gap-1 font-medium text-gray-700">
            <span>
              <img src="/favicon.png" alt="logo" className="h-4 w-4 mb-1" />
            </span>
            ivon
          </h1>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Favorites Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Favorites
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.favorites.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Shared Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Shared
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.shared.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="truncate">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Private Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Private
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.private.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span className="truncate">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* More Button */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  <button className="flex items-center gap-3 w-full">
                    <MoreHorizontal className="h-4 w-4" />
                    <span>More</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 bg-white">
        <SidebarMenu>
          {navigationData.system.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="text-gray-700 hover:bg-gray-50 hover:text-gray-900 data-[active=true]:bg-gray-100 data-[active=true]:text-gray-900"
              >
                <a href={item.url} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
