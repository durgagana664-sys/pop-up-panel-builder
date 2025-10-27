import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Refund Fee
        </h1>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Select Student"
            className="pl-10"
          />
        </div>
      </Card>

      {/* Refund List */}
      <div className="space-y-2">
        {refundData.map((student) => (
          <Collapsible key={student.id}>
            <Card>
              <div className="p-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 flex items-center gap-3">
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{student.fatherName}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={student.avatar || undefined} />
                      <AvatarFallback>{student.studentName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{student.studentName}</span>
                  </div>
                  <div className="col-span-2 text-sm">{student.academicYear}</div>
                  <div className="col-span-1 text-sm">{student.component}</div>
                  <div className="col-span-1 text-sm">₹ {student.totalPaid}</div>
                  <div className="col-span-1 text-sm">₹ {student.totalDue}</div>
                  <div className="col-span-1 text-sm flex items-center gap-1">
                    ₹ {student.totalRefunded}
                    {student.totalPaid > 0 && <ChevronDown className="h-4 w-4" />}
                  </div>
                  <div className="col-span-1"></div>
                  <div className="col-span-1">
                    {student.totalPaid > 0 && (
                      <Button variant="link" className="text-orange-500">Refund Fee</Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
