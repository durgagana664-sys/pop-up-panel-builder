import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function FeeReports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Fee Reports
        </h1>
        <Button>Export All Reports</Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="collection">Collection</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="installment">Installment</TabsTrigger>
          <TabsTrigger value="component">Component</TabsTrigger>
          <TabsTrigger value="classwise">Class-wise</TabsTrigger>
          <TabsTrigger value="cheques">Cheques</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
          <TabsTrigger value="ledger">Ledger</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
        </TabsList>

        {/* Global Filters Tab */}
        <TabsContent value="filters" className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Global Report Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Academic Year</label>
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
                <label className="text-sm font-medium mb-2 block">Time Period Start</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Time Period End</label>
                <Input type="date" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Student Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="day-scholar">Day Scholar</SelectItem>
                    <SelectItem value="hosteler">Hosteler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Class</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="3rd">3rd</SelectItem>
                    <SelectItem value="4th">4th</SelectItem>
                    <SelectItem value="5th">5th</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Section</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    <SelectItem value="a">A</SelectItem>
                    <SelectItem value="b">B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Payment Mode</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Button>Apply Filters</Button>
              <Button variant="outline">Reset</Button>
            </div>
          </Card>
        </TabsContent>

        {/* General Fee Reports */}
        <TabsContent value="general" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">General Fee Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Select filters and click "Apply Filters" to generate report
            </div>
          </Card>
        </TabsContent>

        {/* Student Fee Collection */}
        <TabsContent value="collection" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Student Fee Collection Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Select filters and click "Apply Filters" to generate report
            </div>
          </Card>
        </TabsContent>

        {/* Daily Fee Collection */}
        <TabsContent value="daily" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Daily Fee Collection Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Select date range and apply filters to view daily collections
            </div>
          </Card>
        </TabsContent>

        {/* Installment Wise Dues */}
        <TabsContent value="installment" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Installment Wise Dues</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Displays dues broken down by installment periods
            </div>
          </Card>
        </TabsContent>

        {/* Component Wise Report */}
        <TabsContent value="component" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Component Wise Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              View collection and dues by fee components
            </div>
          </Card>
        </TabsContent>

        {/* Class Wise Fee Report */}
        <TabsContent value="classwise" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Class Wise Fee Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              View collection and dues summarized by class
            </div>
          </Card>
        </TabsContent>

        {/* Pending Cheques Report */}
        <TabsContent value="cheques" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Pending Cheques Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              View all pending, cleared, and rejected cheques
            </div>
          </Card>
        </TabsContent>

        {/* Wallet Report */}
        <TabsContent value="wallet" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Wallet Report</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              View student wallet balances and transactions
            </div>
          </Card>
        </TabsContent>

        {/* Student Ledger */}
        <TabsContent value="ledger" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Student Ledger</h2>
              <Button variant="outline">Export</Button>
            </div>
            <div className="text-center py-12 text-muted-foreground">
              Detailed transaction ledger for individual students
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
