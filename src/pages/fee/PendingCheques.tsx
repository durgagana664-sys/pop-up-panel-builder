import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PendingCheques() {
  const stats = [
    { label: "Paid", count: 1, color: "bg-green-500" },
    { label: "Processing", count: 2, color: "bg-yellow-500" },
    { label: "Rejected", count: 0, color: "bg-red-500" },
  ];

  const cheques = [
    { 
      student: "Poonam Chauhan", 
      year: "Apr 2025 - Mar 2026",
      class: "1st A",
      section: "A",
      admId: "SGN2441", 
      remarks: "", 
      updatedBy: "Rajni Mehra", 
      bank: "Axis Bank", 
      chequeNo: "2695226", 
      date: "30/06/2025", 
      receiptNo: "240", 
      amount: "₹ 33,000", 
      clearDate: "30/06/2025",
      reason: "",
      status: "Paid" 
    },
    { 
      student: "AAVASA", 
      year: "Apr 2025 - Mar 2026",
      class: "3rd A",
      section: "A",
      admId: "EPSs-067", 
      remarks: "", 
      updatedBy: "Poonam", 
      bank: "", 
      chequeNo: "25656", 
      date: "28/05/2025", 
      receiptNo: "117", 
      amount: "₹ 10,000", 
      clearDate: "-",
      reason: "",
      status: "Processing" 
    },
    { 
      student: "Poonam Chauhan", 
      year: "Apr 2025 - Mar 2026",
      class: "1st A",
      section: "A",
      admId: "SGN2441", 
      remarks: "", 
      updatedBy: "Rajni Mehra", 
      bank: "", 
      chequeNo: "01", 
      date: "04/08/2025", 
      receiptNo: "252", 
      amount: "₹ 20,000", 
      clearDate: "-",
      reason: "",
      status: "Processing" 
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Pending Cheques
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <Select defaultValue="2025">
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
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="3rd">3rd</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="a">A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Input type="date" defaultValue="2025-01-04" placeholder="Start Date" />
          </div>
          <div>
            <Input type="date" defaultValue="2026-01-03" placeholder="End Date" />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <Button variant="outline">Clear</Button>
          <Button>Apply</Button>
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Student" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Students</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{stat.count}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
              <div className={`${stat.color} h-12 w-12 rounded-lg`}></div>
            </div>
          </Card>
        ))}
      </div>

      {/* Toolbar */}
      <Card className="p-4">
        <div className="flex gap-2">
          <Button variant="outline">Columns</Button>
          <Button variant="outline">Filters</Button>
          <Button variant="outline">Density</Button>
          <Button variant="outline">Export</Button>
        </div>
      </Card>

      {/* Cheques Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Academic year</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Admission ID</TableHead>
                <TableHead>Remarks</TableHead>
                <TableHead>Last updated By</TableHead>
                <TableHead>Bank Name</TableHead>
                <TableHead>Cheque Number</TableHead>
                <TableHead>Fee Receipt Date</TableHead>
                <TableHead>Receipt number</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Clearing / Reject Date</TableHead>
                <TableHead>Rejected Reason</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cheques.map((cheque, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{cheque.student}</TableCell>
                  <TableCell className="text-xs">{cheque.year}</TableCell>
                  <TableCell>{cheque.class}</TableCell>
                  <TableCell>{cheque.section}</TableCell>
                  <TableCell>{cheque.admId}</TableCell>
                  <TableCell>{cheque.remarks || "-"}</TableCell>
                  <TableCell>{cheque.updatedBy}</TableCell>
                  <TableCell>{cheque.bank || "-"}</TableCell>
                  <TableCell>{cheque.chequeNo}</TableCell>
                  <TableCell>{cheque.date}</TableCell>
                  <TableCell>{cheque.receiptNo}</TableCell>
                  <TableCell className="font-semibold">{cheque.amount}</TableCell>
                  <TableCell>{cheque.clearDate}</TableCell>
                  <TableCell>{cheque.reason || "-"}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={cheque.status === "Paid" ? "default" : "secondary"}
                      className={cheque.status === "Paid" ? "bg-green-500" : "bg-yellow-500"}
                    >
                      {cheque.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex justify-center gap-1">
          <span className="text-sm text-muted-foreground">1-3 of 3</span>
          <div className="flex gap-1 ml-4">
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <Button variant="outline" size="sm">...</Button>
            <Button variant="outline" size="sm">11</Button>
            <Button variant="outline" size="sm">→</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
