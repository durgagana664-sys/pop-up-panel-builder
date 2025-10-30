import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Download, MessageSquare, MessageCircle, UserCircle2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const staffData = [
  { id: 1, name: "Rajesh Kumar", phone: "9876543210", department: "Mathematics" },
  { id: 2, name: "Priya Sharma", phone: "9876543211", department: "English" },
  { id: 3, name: "Amit Singh", phone: "9876543212", department: "Science" },
  { id: 4, name: "Neha Gupta", phone: "9876543213", department: "Social Studies" },
  { id: 5, name: "Vikram Patel", phone: "9876543214", department: "Physical Education" },
  { id: 6, name: "Anjali Verma", phone: "9876543215", department: "Hindi" },
  { id: 7, name: "Suresh Reddy", phone: "9876543216", department: "Computer Science" },
  { id: 8, name: "Kavita Joshi", phone: "9876543217", department: "Art" },
];

const StaffDownloadStatus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [academicYear, setAcademicYear] = useState("2025-2026");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  
  const totalPages = 8;
  const loggedIn = 15;
  const notLoggedIn = 45;
  const totalStaff = loggedIn + notLoggedIn;

  // Filter data based on selections
  const filteredData = staffData.filter(staff => {
    if (selectedDepartment !== "all" && staff.department.toLowerCase() !== selectedDepartment) {
      return false;
    }
    return true;
  });

  const getPageNumbers = () => {
    const pages = [];
    if (currentPage > 2) pages.push(1);
    if (currentPage > 3) pages.push("...");
    
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pages.push(i);
    }
    
    if (currentPage < totalPages - 2) pages.push("...");
    if (currentPage < totalPages - 1) pages.push(totalPages);
    
    return pages;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-foreground">
            Staff Download Status
          </h1>
          <p className="text-muted-foreground mt-1">Download Statistics</p>
        </div>
      </div>

      {/* Filters Section */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academic Year */}
          <div className="space-y-2">
            <Label htmlFor="academic-year" className="font-medium">
              Academic Year <span className="text-destructive">*</span>
            </Label>
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger id="academic-year">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-2026">Apr 2025 - Mar 2026</SelectItem>
                <SelectItem value="2024-2025">Apr 2024 - Mar 2025</SelectItem>
                <SelectItem value="2023-2024">Apr 2023 - Mar 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Department */}
          <div className="space-y-2">
            <Label htmlFor="department" className="font-medium">
              Select Department
            </Label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="social studies">Social Studies</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="font-medium">
              Select Role
            </Label>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="admin">Admin Staff</SelectItem>
                <SelectItem value="support">Support Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 bg-gradient-to-br from-success to-success/80 text-success-foreground border-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Staff who have logged in</p>
              <p className="text-4xl font-heading font-bold mt-2">{loggedIn}</p>
            </div>
            <UserCircle2 className="h-12 w-12 opacity-50" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground border-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Staff who haven't logged in</p>
              <p className="text-4xl font-heading font-bold mt-2">{notLoggedIn}</p>
            </div>
            <X className="h-12 w-12 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="gap-2">
          <Eye className="h-4 w-4" />
          VIEW
        </Button>
        <Button variant="outline" className="gap-2 text-warning border-warning hover:bg-warning hover:text-warning-foreground">
          <Download className="h-4 w-4" />
          DOWNLOAD
        </Button>
        <Button variant="outline" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          SEND SMS TO ALL
        </Button>
        <Button className="gap-2 bg-success hover:bg-success/90">
          <MessageCircle className="h-4 w-4" />
          WHATSAPP TO ALL
        </Button>
      </div>

      {/* Data Table */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-sidebar hover:bg-sidebar">
                <TableHead className="text-sidebar-foreground font-semibold">Staff Name</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Contact Number</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-muted">
                        <AvatarFallback className="text-muted-foreground">
                          {staff.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{staff.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{staff.phone}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{staff.department}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-muted-foreground">
            Total Rows: {totalStaff}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {getPageNumbers().map((page, index) => (
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className="min-w-[2.5rem]"
                  onClick={() => setCurrentPage(page as number)}
                >
                  {page}
                </Button>
              )
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StaffDownloadStatus;
