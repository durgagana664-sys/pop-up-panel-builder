import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function StudentwiseFee() {
  const [academicYear, setAcademicYear] = useState("2025");
  const [selectedClass, setSelectedClass] = useState("3rd");
  const [selectedSection, setSelectedSection] = useState("a");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeactivated, setShowDeactivated] = useState(true);
  const [showDeleted, setShowDeleted] = useState(false);
  const students = [
    { name: "ROHIT", admissionId: "EPSs-064", father: "Golu", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "SANA", admissionId: "EPSs-065", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "SAZIDA", admissionId: "EPSs-066", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "AAVASA", admissionId: "EPSs-067", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,500", paid: "₹ 2,72,500", due: "₹ 0", status: "Active" },
    { name: "AJMAL", admissionId: "EPSs-068", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "ALIYA", admissionId: "EPSs-069", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "SUFIYANA", admissionId: "EPSs-230", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "surya2", admissionId: "EPSs-231", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "TANISHA", admissionId: "EPSs-232", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "UJJWAL", admissionId: "EPSs-233", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "VAMAKSH", admissionId: "EPSs-234", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
    { name: "Vansh", admissionId: "EPSs-235", father: "", class: "3rd A", schedule: "Monthly", receivable: "₹ 2,72,600", paid: "₹ 2,72,600", due: "₹ 0", status: "Active" },
  ];

  // Filter students based on all selections
  const filteredStudents = students.filter(student => {
    const matchesSearch = searchQuery === "" || 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.admissionId.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Student-wise Fee
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">Apr 2025 - Mar 2026</SelectItem>
                <SelectItem value="2024">Apr 2024 - Mar 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3rd">3rd</SelectItem>
                <SelectItem value="4th">4th</SelectItem>
                <SelectItem value="5th">5th</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input 
              placeholder="Search by student name/admission ID" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Switch checked={showDeactivated} onCheckedChange={setShowDeactivated} id="show-deactivated" />
            <Label htmlFor="show-deactivated" className="cursor-pointer text-sm">
              Show Deactivated Students
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={showDeleted} onCheckedChange={setShowDeleted} id="show-deleted" />
            <Label htmlFor="show-deleted" className="cursor-pointer text-sm">
              Show Deleted Students
            </Label>
          </div>
        </div>
      </Card>

      {/* Students Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Admission Id</TableHead>
                <TableHead>Father's Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Fee Schedule Name</TableHead>
                <TableHead>Receivable after discount</TableHead>
                <TableHead>Paid Till Date</TableHead>
                <TableHead>Fee Due</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-muted text-xs">
                        {student.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.admissionId}</TableCell>
                  <TableCell>{student.father || "-"}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.schedule}</TableCell>
                  <TableCell>{student.receivable}</TableCell>
                  <TableCell>{student.paid}</TableCell>
                  <TableCell className="font-semibold text-green-600">{student.due}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Total Rows: 22</div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">→</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
