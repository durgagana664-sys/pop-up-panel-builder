import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";

export default function FeeBasics() {
  const stats = [
    { label: "No. of Fee schedule created", value: 3, color: "bg-green-500" },
    { label: "No. of Fee component created", value: 12, color: "bg-red-500" },
    { label: "No. of Fee discounts created", value: 4, color: "bg-orange-500" },
    { label: "No. of Misc Fee created", value: 2, color: "bg-yellow-500" },
    { label: "No. of Fee Fine created", value: 1, color: "bg-gray-500" },
  ];

  const feeSchedules = [
    { class: "Nursery", installments: 4, name: "Fee schedule", date: "01/04/2025 - 31/12/2025" },
    { class: "1st, 2nd, 3rd, 4th, 5th, LKG, UKG", installments: 12, name: "Monthly", date: "01/04/2025 - 10/03/2026" },
    { class: "6th, 7th, 8th, 9th, 10th, 11, 12", installments: 4, name: "Senior wing", date: "01/04/2025 - 10/01/2026" },
  ];

  const feeComponents = [
    { head: "CU exam fee", component: "Exam Fee", admission: "All Students", gender: "All Students" },
    { head: "Registration", component: "Fees", admission: "New", gender: "All Students" },
    { head: "School Fee", component: "Transport Fee", admission: "All Students", gender: "All Students" },
    { head: "School Fees", component: "Tution Fee", admission: "All Students", gender: "All Students" },
    { head: "", component: "Admission Fee", admission: "New", gender: "All Students" },
    { head: "", component: "Registration Charges", admission: "New", gender: "All Students" },
    { head: "", component: "Computer Lab Fee", admission: "All Students", gender: "All Students" },
    { head: "", component: "UNI Exam Fee", admission: "All Students", gender: "All Students" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Fee Basics
        </h1>
        <div className="flex gap-2">
          <Select defaultValue="2025">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">Apr 2025 - Mar 2026</SelectItem>
              <SelectItem value="2024">Apr 2024 - Mar 2025</SelectItem>
            </SelectContent>
          </Select>
          <Button>Add Academic Year</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center gap-3">
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                <span className="text-xl font-bold">{stat.value}</span>
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fee Schedule */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">1. Fee Schedule</h2>
          <Button>Add Fee Schedule</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Classes</TableHead>
              <TableHead>No. of Installments</TableHead>
              <TableHead>Schedule Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeSchedules.map((schedule, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{schedule.class}</TableCell>
                <TableCell>{schedule.installments}</TableCell>
                <TableCell>{schedule.name}</TableCell>
                <TableCell>{schedule.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Fee Component */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">2. Fee Component</h2>
          <div className="flex gap-2">
            <Button variant="outline">Component Reordering</Button>
            <Button>Add Fee Component</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Head Name</TableHead>
              <TableHead>Component Name</TableHead>
              <TableHead>Admission Type</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feeComponents.map((component, index) => (
              <TableRow key={index}>
                <TableCell>{component.head}</TableCell>
                <TableCell className="font-medium">{component.component}</TableCell>
                <TableCell>{component.admission}</TableCell>
                <TableCell>{component.gender}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Fee Discount */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">3. Fee Discount</h2>
          <Button>Add Discount</Button>
        </div>
        <div className="text-sm text-muted-foreground text-center py-8">
          No discounts created yet. Click "Add Discount" to create one.
        </div>
      </Card>

      {/* Miscellaneous Fee */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">4. Miscellaneous Fee</h2>
          <Button>Add Miscellaneous Fee</Button>
        </div>
        <div className="text-sm text-muted-foreground text-center py-8">
          No miscellaneous fees created yet.
        </div>
      </Card>

      {/* Fee Fine */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">5. Fee Fine</h2>
          <Button>Add Fee Fine</Button>
        </div>
        <div className="text-sm text-muted-foreground text-center py-8">
          No fee fines configured yet.
        </div>
      </Card>
    </div>
  );
}
