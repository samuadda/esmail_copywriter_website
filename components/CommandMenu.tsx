"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, FileText, Home, User, Briefcase, Zap, Wrench, Copy } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface CommandMenuProps {
  posts?: BlogPost[];
}

export function CommandMenu({ posts = [] }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Visual Hint for Users */}
      <div 
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 px-3 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg cursor-pointer hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400 hover:scale-105 transition-transform"
      >
        <span className="flex items-center gap-1">
            <span className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">⌘</span>
            <span className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">K</span>
        </span>
        <span>للبحث</span>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl z-[9999] overflow-hidden"
      >
        <div className="flex items-center border-b border-gray-100 dark:border-gray-800 px-4">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <Command.Input 
            placeholder="ابحث عن صفحة، مقال، أو أداة..."
            className="w-full py-4 text-base outline-none bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400" 
          />
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-py-2">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">
            لم يتم العثور على نتائج.
          </Command.Empty>

          <Command.Group heading="الصفحات الرئيسية" className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
            <Command.Item
              onSelect={() => runCommand(() => router.push("/"))}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>الرئيسية</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/about"))}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>عن إسماعيل</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/services"))}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>الخدمات</span>
            </Command.Item>
            <Command.Item
              onSelect={() => runCommand(() => router.push("/blog"))}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>المدونة</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="أحدث المقالات" className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
            {posts.map((post) => (
              <Command.Item
                key={post.id}
                onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-gray-400" />
                <span>{post.title || post.content.substring(0, 30) + "..."}</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="إجراءات" className="px-2 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
             <Command.Item
              onSelect={() => runCommand(() => {
                navigator.clipboard.writeText(window.location.href);
                alert("تم نسخ الرابط!");
              })}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>نسخ الرابط الحالي</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
      
      {/* Overlay Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" aria-hidden="true" />
      )}
    </>
  );
}

