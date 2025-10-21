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

const parentData = [
  { id: 1, name: "Suresh Kumar", phone: "9876543210", studentName: "JAI RAJ", class: "2 A" },
  { id: 2, name: "Deepak Sharma", phone: "9998777659", studentName: "Vansh", class: "2 A" },
  { id: 3, name: "Ramesh Singh", phone: "7854211111", studentName: "Sumit", class: "1st A" },
  { id: 4, name: "Vijay Kumar", phone: "9990874532", studentName: "SACHIN", class: "UKG A" },
  { id: 5, name: "Rajesh Sharma", phone: "9882784187", studentName: "muskan sharma", class: "3rd A" },
  { id: 6, name: "Ashok Gupta", phone: "7458965845", studentName: "Manisha", class: "2nd A" },
  { id: 7, name: "Mohan Lal", phone: "9876543218", studentName: "Amit", class: "1st A" },
  { id: 8, name: "Dinesh Patel", phone: "8765432109", studentName: "Priya", class: "2 A" },
];

const ParentDownloadStatus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;
  const loggedIn = 35;
  const notLoggedIn = 264;
  const totalParents = loggedIn + notLoggedIn;

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
            Parent Download Status
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
            <Select defaultValue="2025-2026">
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

          {/* Select Class */}
          <div className="space-y-2">
            <Label htmlFor="class" className="font-medium">
              Select Class
            </Label>
            <Select>
              <SelectTrigger id="class">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="1a">Class 1 A</SelectItem>
                <SelectItem value="2a">Class 2 A</SelectItem>
                <SelectItem value="3a">Class 3 A</SelectItem>
                <SelectItem value="ukg">UKG A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Select Section */}
          <div className="space-y-2">
            <Label htmlFor="section" className="font-medium">
              Select Section
            </Label>
            <Select>
              <SelectTrigger id="section">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="a">Section A</SelectItem>
                <SelectItem value="b">Section B</SelectItem>
                <SelectItem value="c">Section C</SelectItem>
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
              <p className="text-sm font-medium opacity-90">Parents who have logged in</p>
              <p className="text-4xl font-heading font-bold mt-2">{loggedIn}</p>
            </div>
            <UserCircle2 className="h-12 w-12 opacity-50" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground border-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Parents who haven't logged in</p>
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
                <TableHead className="text-sidebar-foreground font-semibold">Parent Name</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Contact Number</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Student Name</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Class</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parentData.map((parent) => (
                <TableRow key={parent.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-muted">
                        <AvatarFallback className="text-muted-foreground">
                          {parent.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{parent.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{parent.phone}</TableCell>
                  <TableCell className="text-muted-foreground">{parent.studentName}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{parent.class}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-muted-foreground">
            Total Rows: {totalParents}
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

export default ParentDownloadStatus;
