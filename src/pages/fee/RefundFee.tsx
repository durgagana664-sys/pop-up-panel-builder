import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const refundData = [
  {
    id: "EPS-125",
    studentName: "NEERAJ",
    fatherName: "EPS-125",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 0,
    totalDue: 0,
    totalRefunded: 0,
    avatar: null,
  },
  {
    id: "EPS-115",
    studentName: "LAKSHITA",
    fatherName: "EPS-115",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 2500,
    totalDue: 2500,
    totalRefunded: 0,
    avatar: null,
  },
  {
    id: "EPS-103",
    studentName: "TANISHKA",
    fatherName: "EPS-103",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 2500,
    totalDue: 2500,
    totalRefunded: 0,
    avatar: null,
  },
  {
    id: "EPS-124",
    studentName: "NEHA",
    fatherName: "EPS-124",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 0,
    totalDue: 0,
    totalRefunded: 0,
    avatar: null,
  },
  {
    id: "SGN2447",
    studentName: "Poonam",
    fatherName: "SGN2447",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 400,
    totalDue: 400,
    totalRefunded: 0,
    avatar: null,
  },
  {
    id: "300",
    studentName: "NEHA",
    fatherName: "300",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 400,
    totalDue: 400,
    totalRefunded: 0,
    avatar: "/placeholder.svg",
  },
  {
    id: "EPS-081",
    studentName: "Esha",
    fatherName: "EPS-081",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 400,
    totalDue: 400,
    totalRefunded: 0,
    avatar: "/placeholder.svg",
  },
  {
    id: "SGN2440",
    studentName: "Neeraj",
    fatherName: "SGN2440",
    academicYear: "Apr 2025 - Mar 2026",
    component: "Exam Fee",
    totalPaid: 1,
    totalDue: 1,
    totalRefunded: 0,
    avatar: null,
  },
];

export default function RefundFee() {
  const [searchText, setSearchText] = useState("");

  const filteredStudents = refundData.filter((student) =>
    student.studentName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Refund Fee
        </h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Student"
            className="pl-10"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Father Name</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Academic Year</TableHead>
                <TableHead>Component</TableHead>
                <TableHead>Total Paid</TableHead>
                <TableHead>Total Due</TableHead>
                <TableHead>Total Refunded</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4 text-muted-foreground">
                    No students found
                  </TableCell>
                </TableRow>
              )}
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        {student.avatar ? (
                          <AvatarImage src={student.avatar} alt={student.studentName} />
                        ) : (
                          <AvatarFallback>{student.studentName[0]}</AvatarFallback>
                        )}
                      </Avatar>
                      <span>{student.studentName}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.academicYear}</TableCell>
                  <TableCell>{student.component}</TableCell>
                  <TableCell>₹ {student.totalPaid}</TableCell>
                  <TableCell>₹ {student.totalDue}</TableCell>
                  <TableCell>₹ {student.totalRefunded}</TableCell>
                  <TableCell>
                    {student.totalPaid > 0 && (
                      <Button variant="link" className="text-orange-500">
                        Refund Fee
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
