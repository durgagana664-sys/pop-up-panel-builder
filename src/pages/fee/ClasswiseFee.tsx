import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Pencil } from "lucide-react";

// Constants
const academicYears = ["2023", "2024", "2025"];
const classes = ["Nursery", "LKG", "UKG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
const sections = ["a", "b", "c"];

const baseFees = {
  admissionFee: 3000,
  booksUniform: 14000,
  computerLabFee: 230000,
  examFee: 1800,
  fees: 20000,
  hostelFee: 12000,
};

function generateFees() {
  const dayScholarFees = [];
  const hostelerFees = [];

  academicYears.forEach(year => {
    classes.forEach(cls => {
      sections.forEach(section => {
        // slight variation in amounts, e.g. increase by class index * 100
        const classIndex = classes.indexOf(cls);
        const yearFactor = (parseInt(year) - 2023) * 100;

        // Day scholar fees
        dayScholarFees.push(
          { type: "Admission Fee", status: true, installments: 1, amount: `₹ ${baseFees.admissionFee + classIndex * 100 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Books + Uniform", status: true, installments: 1, amount: `₹ ${baseFees.booksUniform + classIndex * 200 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Computer Lab Fee", status: true, installments: 1, amount: `₹ ${baseFees.computerLabFee}`, academicYear: year, class: cls, section },
          { type: "Exam Fee", status: true, installments: 1, amount: `₹ ${baseFees.examFee}`, academicYear: year, class: cls, section },
          { type: "Fees", status: true, installments: 12, amount: `₹ ${baseFees.fees + classIndex * 200 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Miscellaneous", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Registration Charges", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Security Charges", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Transport", status: true, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "Transport Fee", status: true, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "Tuition Fee", status: true, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "UNI Exam Fee", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Hostel Fee", status: false, installments: 2, amount: "", academicYear: year, class: cls, section }
        );

        // Hosteler fees - mostly similar but hostel fee active, transport fees inactive
        hostelerFees.push(
          { type: "Admission Fee", status: true, installments: 1, amount: `₹ ${baseFees.admissionFee + classIndex * 100 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Books + Uniform", status: true, installments: 1, amount: `₹ ${baseFees.booksUniform + classIndex * 200 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Computer Lab Fee", status: true, installments: 1, amount: `₹ ${baseFees.computerLabFee}`, academicYear: year, class: cls, section },
          { type: "Exam Fee", status: true, installments: 1, amount: `₹ ${baseFees.examFee}`, academicYear: year, class: cls, section },
          { type: "Fees", status: true, installments: 12, amount: `₹ ${baseFees.fees + classIndex * 200 + yearFactor}`, academicYear: year, class: cls, section },
          { type: "Miscellaneous", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Registration Charges", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Security Charges", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Transport", status: false, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "Transport Fee", status: false, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "Tuition Fee", status: true, installments: 12, amount: "", academicYear: year, class: cls, section },
          { type: "UNI Exam Fee", status: true, installments: 1, amount: "", academicYear: year, class: cls, section },
          { type: "Hostel Fee", status: true, installments: 2, amount: `₹ ${baseFees.hostelFee + yearFactor}`, academicYear: year, class: cls, section }
        );
      });
    });
  });

  return { dayScholarFees, hostelerFees };
}

export default function ClasswiseFee() {
  const [academicYear, setAcademicYear] = useState("2025");
  const [selectedClass, setSelectedClass] = useState("Nursery");
  const [selectedSection, setSelectedSection] = useState("a");

  const { dayScholarFees: fullDayScholarFees, hostelerFees: fullHostelerFees } = generateFees();

  const filteredDayScholarFees = fullDayScholarFees.filter(
    (fee) =>
      fee.academicYear === academicYear &&
      fee.class === selectedClass &&
      fee.section === selectedSection
  );

  const filteredHostelerFees = fullHostelerFees.filter(
    (fee) =>
      fee.academicYear === academicYear &&
      fee.class === selectedClass &&
      fee.section === selectedSection
  );

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
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger>
                <SelectValue placeholder="Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">Apr 2023 - Mar 2024</SelectItem>
                <SelectItem value="2024">Apr 2024 - Mar 2025</SelectItem>
                <SelectItem value="2025">Apr 2025 - Mar 2026</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map(c => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                {sections.map(s => (<SelectItem key={s} value={s}>{s.toUpperCase()}</SelectItem>))}
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
              {filteredDayScholarFees.length > 0 ? filteredDayScholarFees.map((fee, idx) => (
                <TableRow key={idx} className={fee.status ? "bg-accent/30" : "bg-destructive/10"}>
                  <TableCell className="font-medium">{fee.type}</TableCell>
                  <TableCell>
                    <Switch checked={fee.status} />
                  </TableCell>
                  <TableCell>{fee.installments}</TableCell>
                  <TableCell>
                    {fee.amount ? <span className="font-semibold">{fee.amount}</span> : <span className="text-muted-foreground">-</span>}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">No fees found for selected filters.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-right">
          <Button variant="outline">Component-Wise Fee Details for Class {selectedClass}</Button>
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
                <TableHead>Amount</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHostelerFees.length > 0 ? filteredHostelerFees.map((fee, idx) => (
                <TableRow key={idx} className={fee.status ? "bg-accent/30" : "bg-destructive/10"}>
                  <TableCell className="font-medium">{fee.type}</TableCell>
                  <TableCell>
                    <Switch checked={fee.status} />
                  </TableCell>
                  <TableCell>{fee.installments}</TableCell>
                  <TableCell>
                    {fee.amount ? <span className="font-semibold">{fee.amount}</span> : <span className="text-muted-foreground">-</span>}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center">No fees found for selected filters.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
