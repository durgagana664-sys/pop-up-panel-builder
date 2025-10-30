import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, RefreshCw } from "lucide-react";

const invoiceData = [
  {
    id: 1,
    invoiceName: "Invoice Neeraj",
    studentName: "Neeraj",
    studentAvatar: null,
    classSection: "1st-A",
    generatedOn: "25/10/2025",
  },
  {
    id: 2,
    invoiceName: "Class-1",
    studentName: "",
    studentAvatar: null,
    classSection: "1st-A",
    generatedOn: "12/08/2025",
  },
  {
    id: 3,
    invoiceName: "Dummy 2",
    studentName: "NEHA",
    studentAvatar: "/placeholder.svg",
    classSection: "3rd-A",
    generatedOn: "09/05/2025",
  },
  {
    id: 4,
    invoiceName: "Dummy",
    studentName: "YUVRAJ",
    studentAvatar: null,
    classSection: "8th-A",
    generatedOn: "09/05/2025",
  },
];

export default function FeeInvoice() {
  // State for filters
  const [academicYear, setAcademicYear] = useState("2025");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");

  // Filter invoiceData based on filter state
  const filteredInvoices = invoiceData.filter((invoice) => {
    const academicYearMatch = academicYear === "all" || invoice.generatedOn.includes(academicYear);
    const classMatch =
      selectedClass === "all" ||
      (invoice.classSection && invoice.classSection.toLowerCase().startsWith(selectedClass.toLowerCase()));
    const sectionMatch =
      selectedSection === "all" ||
      (invoice.classSection && invoice.classSection.toLowerCase().endsWith(selectedSection.toLowerCase()));

    return academicYearMatch && classMatch && sectionMatch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Fee Invoice
          <span className="text-sm text-muted-foreground ml-2">Generate Invoice</span>
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Academic Year *</label>
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger>
                <SelectValue>{academicYear === "all" ? "All Academic Years" : academicYear}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Academic Years</SelectItem>
                <SelectItem value="2025">Apr 2025 - Mar 2026</SelectItem>
                <SelectItem value="2024">Apr 2024 - Mar 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Select Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue>{selectedClass === "all" ? "All Classes" : selectedClass}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="1st">1st</SelectItem>
                <SelectItem value="3rd">3rd</SelectItem>
                <SelectItem value="8th">8th</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Select Section</label>
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger>
                <SelectValue>{selectedSection === "all" ? "All Sections" : selectedSection.toUpperCase()}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="lg">
          + GENERATE
        </Button>
        <Button variant="outline" size="icon">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Invoice Table */}
      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0f4c5c] hover:bg-[#0f4c5c]">
              <TableHead className="text-white">Invoice Name</TableHead>
              <TableHead className="text-white">Student Name</TableHead>
              <TableHead className="text-white">Class & Section</TableHead>
              <TableHead className="text-white">Generated on</TableHead>
              <TableHead className="text-white">Send to Students</TableHead>
              <TableHead className="text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  <span className="text-muted-foreground text-sm mr-2">0{invoice.id}.</span>
                  {invoice.invoiceName}
                </TableCell>
                <TableCell>
                  {invoice.studentName && (
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={invoice.studentAvatar || undefined} />
                        <AvatarFallback>{invoice.studentName[0]}</AvatarFallback>
                      </Avatar>
                      <span>{invoice.studentName}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell>{invoice.classSection}</TableCell>
                <TableCell>{invoice.generatedOn}</TableCell>
                <TableCell>
                  <Button variant="outline" className="text-orange-500 border-orange-500">
                    SEND TO STUDENTS ▶
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4 text-orange-500" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="h-4 w-4 text-orange-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredInvoices.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                  No invoices found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
