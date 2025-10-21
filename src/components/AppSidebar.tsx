import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  Users,
  Download,
  TrendingUp,
  DollarSign,
  Bus,
  CreditCard,
  Search,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Assignment", url: "/assignment", icon: ClipboardList },
  { title: "Time Table", url: "/timetable", icon: Calendar },
  { title: "Student Management", url: "/students", icon: Users },
  { title: "Download Statistics", url: "/download-stats", icon: Download },
  { title: "Student Activity", url: "/student-activity", icon: TrendingUp },
  { title: "Fee Management", url: "/fee-management", icon: DollarSign },
  { title: "Transport Management", url: "/transport", icon: Bus },
  { title: "ID Card / Bus Pass", url: "/id-cards", icon: CreditCard },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const getNavCls = (isActive: boolean) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-primary font-semibold"
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent className="bg-sidebar">
        {/* Logo/Brand Section */}
        <div className="p-4 border-b border-sidebar-border">
          {!isCollapsed ? (
            <div>
              <h2 className="text-xl font-heading font-semibold text-sidebar-foreground">
                EMD Education
              </h2>
              <p className="text-sm text-sidebar-foreground/70">Portal</p>
            </div>
          ) : (
            <div className="text-center text-sidebar-foreground font-bold text-xl">E</div>
          )}
        </div>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="px-3 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-foreground/50" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg bg-sidebar-accent/30 py-2 pl-9 pr-3 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/50 border border-sidebar-border/50 focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
              />
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => getNavCls(isActive)}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer branding */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-bold text-sm">
                ET
              </div>
              <div className="text-xs text-sidebar-foreground/70">eduTinker</div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
