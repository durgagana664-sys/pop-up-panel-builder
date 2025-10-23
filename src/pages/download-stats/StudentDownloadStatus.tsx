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

const studentData = [
  { id: 1, name: "JAI RAJ", phone: "886805050", class: "2 A" },
  { id: 2, name: "Vansh", phone: "9998777659", class: "2 A" },
  { id: 3, name: "Sumit", phone: "7854211111", class: "1st A" },
  { id: 4, name: "SACHIN", phone: "9990874532", class: "UKG A" },
  { id: 5, name: "muskan sharma", phone: "9882784187", class: "3rd A" },
  { id: 6, name: "Manisha", phone: "7458965845", class: "2nd A" },
  { id: 7, name: "Amit", phone: "9876543210", class: "1st A" },
  { id: 8, name: "Priya", phone: "8765432109", class: "2 A" },
];

const DownloadStatistics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;
  const loggedIn = 27;
  const notLoggedIn = 272;
  const totalStudents = loggedIn + notLoggedIn;

  // Filters
  const [academicYear, setAcademicYear] = useState("2025-2026");
  const [classFilter, setClassFilter] = useState("all");
  const [sectionFilter, setSectionFilter] = useState("all");

  const filteredStudents = studentData.filter((s) => {
    // class filter (simple substring matching to work with sample data like "1st A", "2 A", "UKG A")
    if (classFilter && classFilter !== "all") {
      const cf = classFilter.toLowerCase();
      const sc = s.class.toLowerCase();
      if (cf === "ukg") {
        if (!sc.includes("ukg")) return false;
      } else {
        // match number part: '1a' -> '1', '2a' -> '2'
        const num = cf[0];
        if (!sc.includes(num)) return false;
      }
    }

    // section filter: sample data doesn't include sections so this is noop for now
    if (sectionFilter && sectionFilter !== "all") {
      // keep for future: if s.section exists, check here
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
      {/* Filters Section */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academic Year */}
          <div className="space-y-2">
            <Label htmlFor="academic-year" className="font-medium">
              Academic Year <span className="text-destructive">*</span>
            </Label>
            <Select value={academicYear} onValueChange={(v) => setAcademicYear(v)}>
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
            <Select value={classFilter} onValueChange={(v) => setClassFilter(v)}>
              <SelectTrigger id="class">
                <SelectValue />
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
            <Select value={sectionFilter} onValueChange={(v) => setSectionFilter(v)}>
              <SelectTrigger id="section">
                <SelectValue />
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
              <p className="text-sm font-medium opacity-90">Students who have logged in</p>
              <p className="text-4xl font-heading font-bold mt-2">{loggedIn}</p>
            </div>
            <UserCircle2 className="h-12 w-12 opacity-50" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground border-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">Students who haven't logged in</p>
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
                <TableHead className="text-sidebar-foreground font-semibold">Student Name</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Father's Contact Number</TableHead>
                <TableHead className="text-sidebar-foreground font-semibold">Class</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-muted">
                        <AvatarFallback className="text-muted-foreground">
                          {student.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{student.phone}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{student.class}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-muted-foreground">
            Total Rows: {totalStudents}
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

export default DownloadStatistics;