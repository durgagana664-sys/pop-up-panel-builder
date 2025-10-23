import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

export default function ClasswiseFee() {
  const dayScholarFees = [
    { type: "Admission Fee", status: true, installments: 12, amount: "₹ 3,000" },
    { type: "Books + Uniform", status: true, installments: 12, amount: "₹ 14,000" },
    { type: "Computer Lab Fee", status: true, installments: 12, amount: "₹ 2,30,000" },
    { type: "Exam Fee", status: true, installments: 12, amount: "₹ 1,800" },
    { type: "Fees", status: true, installments: 12, amount: "₹ 20,000" },
    { type: "Miscellaneous", status: false, installments: 12, amount: "" },
    { type: "Registration Charges", status: false, installments: 12, amount: "" },
    { type: "Security Charges", status: false, installments: 12, amount: "" },
    { type: "Transport", status: false, installments: 12, amount: "" },
    { type: "Transport Fee", status: false, installments: 12, amount: "" },
    { type: "Tuition Fee", status: false, installments: 12, amount: "" },
    { type: "UNI Exam Fee", status: false, installments: 12, amount: "" },
  ];

  const hostelerFees = [
    { type: "Admission Fee", status: false, installments: 12, amount: "₹ 40,000" },
    { type: "Books + Uniform", status: false, installments: 12, amount: "" },
    { type: "Computer Lab Fee", status: false, installments: 12, amount: "" },
    { type: "Exam Fee", status: false, installments: 12, amount: "" },
    { type: "Fees", status: false, installments: 12, amount: "" },
    { type: "Miscellaneous", status: false, installments: 12, amount: "" },
    { type: "Registration Charges", status: false, installments: 12, amount: "" },
    { type: "Security Charges", status: false, installments: 12, amount: "" },
    { type: "Transport", status: false, installments: 12, amount: "" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Class-wise Fee
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Select defaultValue="2025">
              <SelectTrigger>
                <SelectValue placeholder="Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">Apr 2025 - Mar 2026</SelectItem>
                <SelectItem value="2024">Apr 2024 - Mar 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select defaultValue="3rd">
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
            <Select defaultValue="a">
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Summary Card */}
      <Card className="p-6 bg-primary">
        <div className="flex items-center gap-3 text-primary-foreground">
          <div className="text-4xl font-bold">₹ 2,68,800</div>
          <div className="text-lg">Quarterly</div>
        </div>
      </Card>

      {/* Day Scholar Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Day-boarder</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Installment</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dayScholarFees.map((fee, index) => (
                <TableRow key={index} className={fee.status ? "bg-accent/30" : "bg-destructive/10"}>
                  <TableCell className="font-medium">{fee.type}</TableCell>
                  <TableCell>
                    <Switch checked={fee.status} />
                  </TableCell>
                  <TableCell>{fee.installments}</TableCell>
                  <TableCell>
                    {fee.amount ? (
                      <span className="font-semibold">{fee.amount}</span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-right">
          <Button variant="outline">Component-Wise Fee Details for Class 3rd</Button>
        </div>
      </Card>

      {/* Hosteler Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Hostler</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Installment</TableHead>
                <TableHead>Mandatory</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hostelerFees.map((fee, index) => (
                <TableRow key={index} className={fee.status ? "bg-accent/30" : "bg-destructive/10"}>
                  <TableCell className="font-medium">{fee.type}</TableCell>
                  <TableCell>
                    <Switch checked={fee.status} />
                  </TableCell>
                  <TableCell>{fee.installments}</TableCell>
                  <TableCell>
                    {fee.amount ? (
                      <span className="font-semibold">{fee.amount}</span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
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
