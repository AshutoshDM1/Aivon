"use client";

import * as React from "react";
import {
  ChevronDown,
  FileText,
  Paperclip,
  AtSign,
  ArrowUp,
  Clock,
} from "lucide-react";
import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

interface RecentItem {
  id: string;
  title: string;
  image: string;
  icon?: React.ReactNode;
}

const recentItems: RecentItem[] = [
  {
    id: "1",
    title: "Movies",
    image: "https://picsum.photos/200/100?random=1",
  },
  {
    id: "2",
    title: "Todo",
    image: "https://picsum.photos/200/100?random=2",
  },
  {
    id: "3",
    title: "How to Deploy Server",
    image: "https://picsum.photos/200/100?random=3",
  },
  {
    id: "4",
    title: "Internship Pitch",
    image: "https://picsum.photos/200/100?random=4",
    icon: <FileText className="h-6 w-6 text-gray-400" />,
  },
  {
    id: "5",
    title: "Watching List",
    image: "https://picsum.photos/200/100?random=5",
  },
  {
    id: "6",
    title: "Server Rendering",
    image: "https://picsum.photos/200/100?random=6",
  },
];

export function SearchInterface() {
  const [activeTab, setActiveTab] = React.useState("Ask");

  return (
    <div className="flex flex-col items-center bg-white pt-16 ">
      <div className="flex items-center gap-3 mb-8">
        <Avatar className="h-10 w-10 bg-gray-100 text-gray-800 border border-gray-200 flex items-center justify-center cursor-pointer">
          <span className="text-xl">🪄</span>
        </Avatar>
        <h1 className="text-xl font-medium text-gray-800">
          Good evening, Elitedev
        </h1>
      </div>

      <div className="w-full max-w-3xl px-4">
        <div className="relative mb-2">
          <Input
            className="h-14 rounded-xl ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm font-medium"
            placeholder="Ask or find anything from your workspace..."
          />
        </div>

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className={cn(
                "px-3 py-2 h-auto text-sm font-medium rounded-md cursor-pointer",
                activeTab === "Ask"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              )}
              onClick={() => setActiveTab("Ask")}
            >
              Ask
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "px-3 py-2 h-auto text-sm font-medium rounded-md cursor-pointer",
                activeTab === "Research"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              )}
              onClick={() => setActiveTab("Research")}
            >
              Research
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "px-3 py-2 h-auto text-sm font-medium rounded-md cursor-pointer",
                activeTab === "Build"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              )}
              onClick={() => setActiveTab("Build")}
            >
              Build
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            >
              <FileText className="h-4 w-4 mr-1" />
              All sources
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            >
              <AtSign className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-gray-400" />
            <h2 className="text-sm font-medium text-gray-500">
              Recently visited
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recentItems.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
              >
                <button className="w-full h-full text-left cursor-pointer">
                  <div className="relative h-24 w-full overflow-hidden">
                    {item.icon ? (
                      <div className="flex h-full w-full items-center justify-center bg-gray-50">
                        {item.icon}
                      </div>
                    ) : (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-800 truncate">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
