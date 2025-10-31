import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
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
  ChevronDown,
  UserCog,
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

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Define your menu items with colors
const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, color: "text-indigo-500" },
  { title: "Assignment", url: "/", icon: ClipboardList, color: "text-green-600" },
  { title: "Time Table", url: "/", icon: Calendar, color: "text-blue-600" },
  { title: "Student Management", url: "/", icon: Users, color: "text-orange-500" },
  {
    title: "Password Management",
    icon: UserCog,
    color: "text-purple-600",
    subItems: [
      { title: "Reset Password", url: "/password_management/password_reset" },
    ],
  },
  {
    title: "Staff Management",
    icon: UserCog,
    color: "text-purple-600",
    subItems: [
      { title: "Staff Directory", url: "/staff/staffdirectory" },
      { title: "Add Staff", url: "/staff/addstaff" },
      { title: "Bulk Staff Import", url: "/staff/bulkstaffimport" },
      { title: "Bulk Photo Upload", url: "/staff/bulkphotoupload" },
      { title: "Staff Attendance", url: "/staff/staffattendance" },
      { title: "Mark Bulk Attendance", url: "/staff/markbulkattendance" },
    ],
  },
  {
    title: "Download Statistics",
    icon: Download,
    color: "text-pink-600",
    subItems: [
      { title: "Student Download Status", url: "/download-stats/student" },
      { title: "Staff Download Status", url: "/download-stats/staff" },
      { title: "Parent Download Status", url: "/download-stats/parent" },
      { title: "Student Activity", url: "/student-activity" },
      { title: "Parent Activity", url: "/parent-activity" },
    ],
  },
  {
    title: "Fee Management",
    icon: DollarSign,
    color: "text-yellow-600",
    subItems: [
      { title: "Fee Configuration", url: "/fee/configuration" },
      { title: "Fee Basics", url: "/fee/basics" },
      { title: "Class-wise Fee", url: "/fee/class-wise" },
      { title: "Student-wise Fee", url: "/fee/student-wise" },
      { title: "Student Class & Fee Schedule Mapper", url: "/fee/schedule-mapper" },
      { title: "Refund Fee", url: "/fee/refund" },
      { title: "Fee Receipts", url: "/fee/receipts" },
      { title: "Pending Cheques", url: "/fee/pending-cheques" },
      { title: "Fee Invoice", url: "/fee/invoice" },
      { title: "Fee Reports", url: "/fee/reports" },
    ],
  },
  {
    title: "Transport Management",
    icon: Bus,
    color: "text-red-500",
    subItems: [
      { title: "Transport Basics", url: "/transport/basics" },
      { title: "Vehicles", url: "/transport/vehicles" },
      { title: "Stops", url: "/transport/stops" },
      { title: "Routes", url: "/transport/routes" },
      { title: "Vehicle trip mapping", url: "/transport/vehicle-trip" },
      { title: "Student route mapping", url: "/transport/student-route" },
    ],
  },
  { title: "ID Card / Bus Pass", url: "/id-cards", icon: CreditCard, color: "text-green-500" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  // State for collapsible sections
  const [openStaffManagement, setOpenStaffManagement] = useState(
    location.pathname.startsWith("/staff")
  );
  const [openDownloadStats, setOpenDownloadStats] = useState(
    location.pathname.startsWith("/download-stats")
  );
  const [openFeeManagement, setOpenFeeManagement] = useState(
    location.pathname.startsWith("/fee")
  );
  const [openTransport, setOpenTransport] = useState(
    location.pathname.startsWith("/transport")
  );
   const [openPassword_Management, setOpenPassword_Management] = useState(
    location.pathname.startsWith("/poassword_management")
  );

  const getNavCls = (isActive: boolean) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-primary font-semibold"
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* Logo/Brand Section */}
          <div className="px-4 py-3">
            {!isCollapsed ? (
              <div className="text-lg font-bold text-sidebar-primary">
                <div>ERP Education</div>
                <div className="text-xs font-normal text-sidebar-foreground/70">Portal</div>
              </div>
            ) : (
              <div className="text-lg font-bold text-sidebar-primary">E</div>
            )}
          </div>

          {/* Search Bar */}
          {!isCollapsed && (
            <div className="px-4 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search..."
                  className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm"
                />
              </div>
            </div>
          )}

          {/* Navigation Menu */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isStaffManagement = item.title === "Staff Management";
                const isDownloadStats = item.title === "Download Statistics";
                const isFeeManagement = item.title === "Fee Management";
                const isTransport = item.title === "Transport Management";
                const isPassword_Management = item.title === "Password Management";

                const isOpen =
                  (isStaffManagement && openStaffManagement) ||
                  (isDownloadStats && openDownloadStats) ||
                  (isFeeManagement && openFeeManagement) ||
                  (isTransport && openTransport)||
                  (isPassword_Management && openPassword_Management);

                const setIsOpen =
                  isStaffManagement
                    ? setOpenStaffManagement
                    : isDownloadStats
                    ? setOpenDownloadStats
                    : isFeeManagement
                    ? setOpenFeeManagement
                    : isTransport
                    ? setOpenTransport
                    : isPassword_Management
                    ? setOpenPassword_Management
                    : () => {};

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon className={`h-4 w-4 ${item.color}`} />
                            {!isCollapsed && (
                              <>
                                <span>{item.title}</span>
                                <ChevronDown
                                  className={`ml-auto h-4 w-4 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </>
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {!isCollapsed && (
                          <CollapsibleContent className="pl-6">
                            {item.subItems.map((subItem) => (
                              <NavLink
                                key={subItem.url}
                                to={subItem.url}
                                className={({ isActive }) =>
                                  `block rounded-md px-3 py-2 text-sm ${getNavCls(isActive)}`
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            ))}
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    ) : (
                      <NavLink to={item.url!}>
                        {({ isActive }) => (
                          <SidebarMenuButton className={getNavCls(isActive)}>
                            <item.icon className={`h-4 w-4 ${item.color}`} />
                            {!isCollapsed && <span>{item.title}</span>}
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Footer branding */}
          {!isCollapsed && (
            <div className="mt-auto px-4 py-3 text-xs text-sidebar-foreground/70">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-sidebar-primary text-sidebar-primary-foreground font-bold">
                  ET
                </div>
                <span>eduTinker</span>
              </div>
            </div>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
