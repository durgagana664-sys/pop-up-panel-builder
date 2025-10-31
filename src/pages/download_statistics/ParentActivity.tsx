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
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Download } from "lucide-react";

const parentActivityData = [
  { id: 1, parentId: "P-2446", name: "Suresh Kumar", studentName: "JAI RAJ", mobile: "9480175871", lastSeen: "Never Logged In", appVersion: "-" },
  { id: 2, parentId: "P-044", name: "Deepak Sharma", studentName: "MAYANK", mobile: "9990003345", lastSeen: "Never Logged In", appVersion: "-" },
  { id: 3, parentId: "P-045", name: "Ramesh Singh", studentName: "MOHAMMAD", mobile: "9990003358", lastSeen: "Never Logged In", appVersion: "-" },
  { id: 4, parentId: "P-046", name: "Vijay Kumar", studentName: "MOHAMMAD", mobile: "9990003359", lastSeen: "10/04/2025, 08:23 AM", appVersion: "2.1.3" },
  { id: 5, parentId: "P-047", name: "Rajesh Sharma", studentName: "MOHIT", mobile: "9990003366", lastSeen: "Never Logged In", appVersion: "-" },
  { id: 6, parentId: "P-048", name: "Ashok Gupta", studentName: "MONIKA", mobile: "9990003367", lastSeen: "09/04/2025, 03:14 PM", appVersion: "2.1.3" },
];

const ParentActivity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(""); // Added for search
  const totalPages = 7;
  const totalRows = 299;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Filter data based on search text for parent name, student name, or parentId
  const filteredData = parentActivityData.filter(parent =>
    parent.name.toLowerCase().includes(searchText.toLowerCase()) ||
    parent.studentName.toLowerCase().includes(searchText.toLowerCase()) ||
    parent.parentId.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-foreground">
            Parent Activity
          </h1>
          <p className="text-muted-foreground mt-1">Download Statistics</p>
        </div>
      </div>

      {/* Filters Section */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

          {/* Search Parent */}
          <div className="space-y-2">
            <Label htmlFor="search" className="font-medium">
              Search parent
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Parent Name/Parent ID/Student Name"
              className="w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      </Card>

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
      </div>

      {/* Data Table */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0a4a5c] hover:bg-[#0a4a5c]">
                <TableHead className="text-white font-semibold">Parent ID</TableHead>
                <TableHead className="text-white font-semibold">Parent Name</TableHead>
                <TableHead className="text-white font-semibold">Student Name</TableHead>
                <TableHead className="text-white font-semibold">Mobile</TableHead>
                <TableHead className="text-white font-semibold">Last Seen</TableHead>
                <TableHead className="text-white font-semibold">App Version</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((parent, index) => (
                <TableRow key={parent.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <TableCell className="text-muted-foreground">{parent.parentId}</TableCell>
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
                  <TableCell className="text-muted-foreground">{parent.studentName}</TableCell>
                  <TableCell className="text-muted-foreground">{parent.mobile}</TableCell>
                  <TableCell className="text-muted-foreground">{parent.lastSeen}</TableCell>
                  <TableCell className="text-muted-foreground">{parent.appVersion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-muted-foreground">
            Total Rows: {totalRows}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              &lt;
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
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              )
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              &gt;
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ParentActivity;
