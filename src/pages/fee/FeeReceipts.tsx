import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function FeeReceipts() {
  const [searchText, setSearchText] = useState("");
  const [academicYear, setAcademicYear] = useState("2025");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");

  const receipts = [
    { no: "110118", date: "24/09/2025", admId: "EPSs-081", name: "Ekta", year: "2025", father: "", class: "5th A", amount: "₹ 20,000", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110116", date: "23/09/2025", admId: "SGN2447", name: "Poonam", year: "2025", father: "Deepak", class: "3rd A", amount: "₹ 32,000", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110115", date: "23/09/2025", admId: "3DG", name: "NEHA", year: "2025", father: "SURESH", class: "3rd A", amount: "₹ 47,000", orderId: "", paymentId: "", settlementDate: "", mode: "Online Payment (done at school)", method: "" },
    { no: "110114", date: "23/09/2025", admId: "3DG", name: "NEHA", year: "2025", father: "SURESH", class: "3rd A", amount: "₹ 10,030", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110113", date: "23/09/2025", admId: "EPSs-081", name: "Ekta", year: "2025", father: "", class: "5th A", amount: "₹ 29,400", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110112", date: "18/09/2025", admId: "EPSs-126", name: "NEHA", year: "2025", father: "", class: "9th A", amount: "₹ 48,000", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110111", date: "18/09/2025", admId: "EPSs-071", name: "ANANYA", year: "2025", father: "", class: "4th A", amount: "₹ 10,000", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "110110", date: "17/09/2025", admId: "SGN2440", name: "Neeraj", year: "2025", father: "Sadashiv", class: "1st A", amount: "₹ 1", orderId: "202509172104", paymentId: "202509172134", settlementDate: "", mode: "Online Payment", method: "" },
    { no: "11019", date: "17/09/2025", admId: "SGN2441", name: "Poonam Chauhan", year: "2025", father: "Manoj", class: "1st A", amount: "₹ 20,600", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "11017", date: "17/09/2025", admId: "EPSs-090", name: "LAKSHAY", year: "2025", father: "", class: "6th A", amount: "₹ 53,000", orderId: "", paymentId: "", settlementDate: "", mode: "UPI", method: "" },
    { no: "11016", date: "16/09/2025", admId: "SGN2440", name: "Neeraj", year: "2025", father: "Sadashiv", class: "1st A", amount: "₹ 1", orderId: "202509162105", paymentId: "202509162105", settlementDate: "", mode: "Online Payment", method: "" },
    { no: "11015", date: "12/09/2025", admId: "EPSs-103", name: "TANISHKA", year: "2025", father: "", class: "7th A", amount: "₹ 41,950", orderId: "", paymentId: "", settlementDate: "", mode: "UPI", method: "" },
    { no: "11014", date: "12/09/2025", admId: "AB-123", name: "Manisha", year: "2025", father: "", class: "2nd A", amount: "₹ 10,000", orderId: "", paymentId: "", settlementDate: "", mode: "Cash", method: "" },
    { no: "11013", date: "09/09/2025", admId: "EPSs-047", name: "MOHIT", year: "2025", father: "", class: "1st A", amount: "₹ 23,040", orderId: "111111111", paymentId: "", settlementDate: "", mode: "UPI", method: "" },
    { no: "11012", date: "09/09/2025", admId: "EPSs-189", name: "SNEHA", year: "2025", father: "", class: "12 A", amount: "₹ 76,500", orderId: "", paymentId: "", settlementDate: "", mode: "UPI", method: "" },
  ];

  // Filter receipts array by all filters and search:
  const filteredReceipts = receipts.filter((receipt) => {
    // Filter by academic year (match exact or "all")
    const yearMatch = academicYear === "all" || receipt.year === academicYear;
    // Filter by class (match start with selectedClass or "all")
    const classMatch = selectedClass === "all" || receipt.class.toLowerCase().startsWith(selectedClass.toLowerCase());
    // Filter by section (match ends with selectedSection or "all"), only if section is specified and class has section like "5th A"
    const sectionMatch = selectedSection === "all" || receipt.class.toLowerCase().endsWith(selectedSection.toLowerCase());

    // Search in no, name, admId (case-insensitive)
    const searchLower = searchText.toLowerCase();
    const matchesSearch =
      receipt.no.toLowerCase().includes(searchLower) ||
      receipt.name.toLowerCase().includes(searchLower) ||
      receipt.admId.toLowerCase().includes(searchLower);

    return yearMatch && classMatch && sectionMatch && matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Fee Receipt Record
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">Generate Fee Receipt Report</Button>
          <Button variant="outline">Cash Report</Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
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
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue>{selectedClass === "all" ? "All Classes" : selectedClass}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="3rd">3rd</SelectItem>
                <SelectItem value="4th">4th</SelectItem>
                <SelectItem value="5th">5th</SelectItem>
                <SelectItem value="6th">6th</SelectItem>
                <SelectItem value="7th">7th</SelectItem>
                <SelectItem value="8th">8th</SelectItem>
                <SelectItem value="9th">9th</SelectItem>
                <SelectItem value="10th">10th</SelectItem>
                <SelectItem value="12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger>
                <SelectValue>{selectedSection === "all" ? "All Sections" : selectedSection.toUpperCase()}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
                <SelectItem value="c">C</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Input
            placeholder="Search by receipt number/student name/admission ID"
            className="max-w-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </Card>

      {/* Summary */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Amount</span>
          <Badge variant="outline" className="text-lg font-semibold px-4 py-2">
            ₹ 1,50,13,751
          </Badge>
        </div>
      </Card>

      {/* Fee Receipt - Paid Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Fee Receipt - Paid ({filteredReceipts.length})</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rct. No</TableHead>
                <TableHead>Rct. Date</TableHead>
                <TableHead>Adm. ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Academic Year</TableHead>
                <TableHead>Father Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Payment ID</TableHead>
                <TableHead>Settlement Date</TableHead>
                <TableHead>Payment mode</TableHead>
                <TableHead>Online Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReceipts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={13} className="text-center py-4 text-muted-foreground">
                    No receipts found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredReceipts.map((receipt, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-primary">{receipt.no}</TableCell>
                    <TableCell>{receipt.date}</TableCell>
                    <TableCell>{receipt.admId}</TableCell>
                    <TableCell>{receipt.name}</TableCell>
                    <TableCell className="text-xs">{`Apr ${receipt.year} - Mar ${parseInt(receipt.year)+1}`}</TableCell>
                    <TableCell>{receipt.father || "-"}</TableCell>
                    <TableCell>{receipt.class}</TableCell>
                    <TableCell className="font-semibold">{receipt.amount}</TableCell>
                    <TableCell className="text-xs">{receipt.orderId || "-"}</TableCell>
                    <TableCell className="text-xs">{receipt.paymentId || "-"}</TableCell>
                    <TableCell>{receipt.settlementDate || "-"}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{receipt.mode}</Badge>
                    </TableCell>
                    <TableCell>{receipt.method || "-"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Total Rows: {filteredReceipts.length}
        </div>
      </Card>
    </div>
  );
}
