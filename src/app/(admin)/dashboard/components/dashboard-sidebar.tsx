import Link from 'next/link';
import { Bell, Home, Package2, Plus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
export default function DashboardSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="">
              <Logo />
            </span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/category/add"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Plus className="h-4 w-4" />
              Create Blogs Category
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
            </Link>

            <Link
              href="/dashboard/blogs/add"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Plus className="h-4 w-4" />
              Add Blogs
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
