import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function StudentRouteMapping() {
  const { toast } = useToast();
  const [studentData, setStudentData] = useState([
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
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("all");
  const [selectedRoute, setSelectedRoute] = useState("all");
  const [selectedStop, setSelectedStop] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    admissionId: "",
    class: "",
    vehicleCode: "",
    route: "",
    stopName: "",
  });

  const filteredStudentData = studentData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.admissionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.class.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesVehicle = !selectedVehicle || selectedVehicle === "all" || student.trips.some((trip) => trip.vehicleCode === selectedVehicle);
    const matchesRoute = !selectedRoute || selectedRoute === "all" || student.trips.some((trip) => trip.route === selectedRoute);
    const matchesStop = !selectedStop || selectedStop === "all" || student.trips.some((trip) => trip.stopName === selectedStop);

    return matchesSearch && matchesVehicle && matchesRoute && matchesStop;
  });

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.admissionId || !newStudent.class || !newStudent.vehicleCode || !newStudent.route || !newStudent.stopName) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const id = String(studentData.length + 1).padStart(2, "0");
    const student = {
      id,
      name: newStudent.name,
      admissionId: newStudent.admissionId,
      class: newStudent.class,
      trips: [
        { vehicleCode: newStudent.vehicleCode, route: newStudent.route, stopName: newStudent.stopName, pickupDrop: "PickUp" },
        { vehicleCode: newStudent.vehicleCode, route: newStudent.route, stopName: newStudent.stopName, pickupDrop: "Drop" },
      ],
    };

    setStudentData([...studentData, student]);
    setNewStudent({ name: "", admissionId: "", class: "", vehicleCode: "", route: "", stopName: "" });
    setIsAddDialogOpen(false);
    toast({
      title: "Success",
      description: "Student added successfully",
    });
  };

  const handleDeleteStudent = (id: string) => {
    setStudentData(studentData.filter((student) => student.id !== id));
    toast({
      title: "Success",
      description: "Student deleted successfully",
    });
  };
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
          <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vehicles</SelectItem>
              <SelectItem value="199888">199888</SelectItem>
              <SelectItem value="199991">199991</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Select Route</span>
          <Select value={selectedRoute} onValueChange={setSelectedRoute}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Routes</SelectItem>
              <SelectItem value="Route 1">Route 1</SelectItem>
              <SelectItem value="eduTinker Public School">eduTinker Public School</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Select stop</span>
          <Select value={selectedStop} onValueChange={setSelectedStop}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stops</SelectItem>
              <SelectItem value="Route A">Route A</SelectItem>
              <SelectItem value="Stop 1">Stop 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">Total Students : {filteredStudentData.length}</span>
          <span className="text-sm font-medium">Search</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-10 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => setIsAddDialogOpen(true)} className="bg-primary text-primary-foreground">+ ADD STUDENT</Button>
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
              {filteredStudentData.map((student) => (
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
                        <Button onClick={() => handleDeleteStudent(student.id)} size="icon" variant="ghost" className="h-8 w-8 text-destructive">
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
          <span>1-{filteredStudentData.length} of {filteredStudentData.length}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            ‹
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            ›
          </Button>
        </div>
      </Card>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Student to Route</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  placeholder="Enter student name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admissionId">Admission ID *</Label>
                <Input
                  id="admissionId"
                  placeholder="Enter admission ID"
                  value={newStudent.admissionId}
                  onChange={(e) => setNewStudent({ ...newStudent, admissionId: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentClass">Class *</Label>
                <Input
                  id="studentClass"
                  placeholder="e.g., 3rd - A"
                  value={newStudent.class}
                  onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentVehicle">Vehicle Code *</Label>
                <Select value={newStudent.vehicleCode} onValueChange={(value) => setNewStudent({ ...newStudent, vehicleCode: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="199888">199888</SelectItem>
                    <SelectItem value="199991">199991</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentRoute">Route *</Label>
                <Select value={newStudent.route} onValueChange={(value) => setNewStudent({ ...newStudent, route: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Route 1">Route 1</SelectItem>
                    <SelectItem value="eduTinker Public School">eduTinker Public School</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentStop">Stop Name *</Label>
                <Select value={newStudent.stopName} onValueChange={(value) => setNewStudent({ ...newStudent, stopName: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Route A">Route A</SelectItem>
                    <SelectItem value="Stop 1">Stop 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddStudent}>Add Student</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
