import { Bell, Settings, Globe, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-primary via-accent to-primary/90 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side - Trigger */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-primary-foreground hover:bg-white/10" />
          <h1 className="text-lg md:text-xl font-heading font-semibold text-primary-foreground">
            Module Dashboard
          </h1>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* What's New Button */}
          <Button
            variant="secondary"
            size="sm"
            className="hidden md:flex bg-warning text-warning-foreground hover:bg-warning/90 font-semibold"
          >
            WHAT'S NEW
          </Button>

          {/* Raise a Query Button */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-primary-foreground/20 text-primary-foreground hover:bg-white/10"
          >
            RAISE A QUERY
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-primary-foreground hover:bg-white/10"
              >
                <Bell className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-destructive p-0 text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">New student enrollment</p>
                  <p className="text-xs text-muted-foreground">2 new students added to Class 2A</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Assignment due tomorrow</p>
                  <p className="text-xs text-muted-foreground">Math assignment for Class 3A</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-white/10"
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* Translate */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex text-primary-foreground hover:bg-white/10"
          >
            <Globe className="h-5 w-5" />
          </Button>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-primary-foreground hover:bg-white/10"
              >
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <span className="hidden md:inline font-medium">Rajni Mehra</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
