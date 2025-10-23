import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ScheduleMapper() {
  const students = [
    { id: "EPSs-079", name: "ETIKA", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-080", name: "GARVITA", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-081", name: "Ekta", class: "5th", section: "A", schedule: "Monthly", image: "/placeholder.svg" },
    { id: "EPSs-082", name: "GOURAV", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-083", name: "ISHAN", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-084", name: "JAVARDHAN", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-085", name: "JOHAN", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-086", name: "KHATIFA", class: "5th", section: "A", schedule: "Monthly", image: "" },
    { id: "EPSs-087", name: "KHUSHANG", class: "5th", section: "A", schedule: "Monthly", image: "" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Student Class & Fee Schedule Mapper
        </h1>
        <Button>Save</Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <Select defaultValue="5th">
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
          <div>
            <Input placeholder="Search student" />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Switch id="show-deactivated" />
            <Label htmlFor="show-deactivated" className="cursor-pointer text-sm">
              Show Deactivated Students
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="show-deleted" />
            <Label htmlFor="show-deleted" className="cursor-pointer text-sm">
              Show Deleted Students
            </Label>
          </div>
        </div>
      </Card>

      {/* Toolbar */}
      <Card className="p-4">
        <div className="flex gap-2">
          <Button variant="outline">Columns</Button>
          <Button variant="outline">Filters</Button>
          <Button variant="outline">Density</Button>
          <Button variant="outline">Export</Button>
        </div>
      </Card>

      {/* Students Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Admission ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Schedule Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        {student.image ? (
                          <AvatarImage src={student.image} alt={student.name} />
                        ) : (
                          <AvatarFallback className="bg-muted text-xs">
                            {student.name.substring(0, 2)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={student.class.toLowerCase()}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5th">5th</SelectItem>
                        <SelectItem value="6th">6th</SelectItem>
                        <SelectItem value="7th">7th</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue={student.section.toLowerCase()}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="b">B</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select defaultValue="monthly">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Total Rows: 12</div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm">1</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
