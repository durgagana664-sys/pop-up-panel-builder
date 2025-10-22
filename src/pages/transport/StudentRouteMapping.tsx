import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Search } from "lucide-react";

const studentData = [
  {
    id: "01",
    name: "RONIT",
    admissionId: "EPSs-064",
    class: "3rd - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
  {
    id: "02",
    name: "SAZIDA",
    admissionId: "EPSs-066",
    class: "3rd - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
  {
    id: "03",
    name: "AJMAL",
    admissionId: "EPSs-068",
    class: "3rd - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
  {
    id: "04",
    name: "ANITA",
    admissionId: "EPSs-072",
    class: "4th - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
  {
    id: "05",
    name: "BHAGYASHREE",
    admissionId: "EPSs-074",
    class: "4th - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
  {
    id: "06",
    name: "BHAVYA",
    admissionId: "EPSs-076",
    class: "4th - A",
    trips: [
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "PickUp" },
      { vehicleCode: "199888", route: "eduTinker Public School", stopName: "Route A", pickupDrop: "Drop" },
    ],
  },
];

export default function StudentRouteMapping() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Student route mapping</h1>
          <p className="text-sm text-muted-foreground">Transport Management</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">Academic Year</span>
          <span className="text-destructive">*</span>
          <div className="flex items-center gap-2 border rounded px-3 py-1">
            <Calendar className="h-4 w-4" />
            <span>Apr 2025 - Mar...</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Select Vehicle</span>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="199888">199888</SelectItem>
              <SelectItem value="199991">199991</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Select Route</span>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="route1">Route 1</SelectItem>
              <SelectItem value="route2">Route 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Select stop</span>
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stop1">Stop 1</SelectItem>
              <SelectItem value="stop2">Stop 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">Total Students : 3</span>
          <span className="text-sm font-medium">Search</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-10 w-[200px]" />
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="bg-primary text-primary-foreground">+ ADD STUDENT</Button>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground">Student Name</TableHead>
                <TableHead className="text-primary-foreground">Admission ID</TableHead>
                <TableHead className="text-primary-foreground">Class</TableHead>
                <TableHead className="text-primary-foreground">Vehicle Code</TableHead>
                <TableHead className="text-primary-foreground">Route</TableHead>
                <TableHead className="text-primary-foreground">Stop Name</TableHead>
                <TableHead className="text-primary-foreground">Pickup/Drop</TableHead>
                <TableHead className="text-primary-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentData.map((student) => (
                <>
                  <TableRow key={`${student.id}-pickup`}>
                    <TableCell rowSpan={2}>
                      <span className="text-muted-foreground mr-2">{student.id}.</span>
                      {student.name}
                    </TableCell>
                    <TableCell rowSpan={2}>{student.admissionId}</TableCell>
                    <TableCell rowSpan={2}>{student.class}</TableCell>
                    <TableCell>{student.trips[0].vehicleCode}</TableCell>
                    <TableCell>{student.trips[0].route}</TableCell>
                    <TableCell>{student.trips[0].stopName}</TableCell>
                    <TableCell>{student.trips[0].pickupDrop}</TableCell>
                    <TableCell rowSpan={2}>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-primary">
                          <span className="material-icons text-sm">✏️</span>
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
                          <span className="material-icons text-sm">🗑️</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow key={`${student.id}-drop`}>
                    <TableCell>{student.trips[1].vehicleCode}</TableCell>
                    <TableCell>{student.trips[1].route}</TableCell>
                    <TableCell>{student.trips[1].stopName}</TableCell>
                    <TableCell>{student.trips[1].pickupDrop}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 flex justify-end items-center gap-2 text-sm">
          <span>1-96 of 96</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            ‹
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            ›
          </Button>
        </div>
      </Card>
    </div>
  );
}
