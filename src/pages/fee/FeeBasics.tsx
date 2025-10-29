import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FeeBasics() {
  const { toast } = useToast();
  
  const [feeSchedules, setFeeSchedules] = useState([
    { class: "Nursery", installments: 4, name: "Fee schedule", date: "01/04/2025 - 31/12/2025" },
    { class: "1st, 2nd, 3rd, 4th, 5th, LKG, UKG", installments: 12, name: "Monthly", date: "01/04/2025 - 10/03/2026" },
    { class: "6th, 7th, 8th, 9th, 10th, 11, 12", installments: 4, name: "Senior wing", date: "01/04/2025 - 10/01/2026" },
  ]);
  
  const [isAddScheduleDialogOpen, setIsAddScheduleDialogOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    class: "",
    installments: "",
    name: "",
    startDate: "",
    endDate: "",
  });

  const stats = [
    { label: "No. of Fee schedule created", value: feeSchedules.length, color: "bg-green-500" },
    { label: "No. of Fee component created", value: 12, color: "bg-red-500" },
    { label: "No. of Fee discounts created", value: 4, color: "bg-orange-500" },
    { label: "No. of Misc Fee created", value: 2, color: "bg-yellow-500" },
    { label: "No. of Fee Fine created", value: 1, color: "bg-gray-500" },
  ];

  const handleAddSchedule = () => {
    if (!newSchedule.class || !newSchedule.installments || !newSchedule.name || !newSchedule.startDate || !newSchedule.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const formattedDate = `${newSchedule.startDate.split("-").reverse().join("/")} - ${newSchedule.endDate.split("-").reverse().join("/")}`;
    
    setFeeSchedules([...feeSchedules, {
      class: newSchedule.class,
      installments: parseInt(newSchedule.installments),
      name: newSchedule.name,
      date: formattedDate,
    }]);

    toast({
      title: "Success",
      description: "Fee schedule added successfully",
    });

    setNewSchedule({
      class: "",
      installments: "",
      name: "",
      startDate: "",
      endDate: "",
    });
    setIsAddScheduleDialogOpen(false);
  };

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
          <Button onClick={() => setIsAddScheduleDialogOpen(true)}>Add Fee Schedule</Button>
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
          <h2 className="text-lg font-semibold text-foreground">3. Fee Discounts</h2>
          <div className="flex gap-2">
            <Button variant="outline">ADD FEE DISCOUNTS</Button>
            <Button variant="outline">SHOW LOGS</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Discount name</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Staff Discount</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">New Student</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">New student</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Siblings Discount</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Miscellaneous Fee */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">4. Misc. Fee</h2>
          <div className="flex gap-2">
            <Button variant="outline">ADD MISC. FEE</Button>
            <Button variant="outline">SHOW LOGS</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Head Name</TableHead>
              <TableHead>Misc. Fee Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">School Fees</TableCell>
              <TableCell>TC Fee</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Extra class charges</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Parking Fee</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Quilt charges</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-orange-500">
                    🗑️
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Fee Fine */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">5. Fee fine</h2>
          <div className="flex gap-2">
            <Button variant="outline">ADD FEE FINE</Button>
            <Button variant="outline">SHOW LOGS</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fine name</TableHead>
              <TableHead>Fine Type</TableHead>
              <TableHead>Fine Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Fine</TableCell>
              <TableCell>Fixed Amount</TableCell>
              <TableCell>
                <Switch defaultChecked={false} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-orange-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Fine 2</TableCell>
              <TableCell>Fixed Amount</TableCell>
              <TableCell>
                <Switch defaultChecked={false} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-orange-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Late Fee</TableCell>
              <TableCell>Fixed Amount</TableCell>
              <TableCell>
                <Switch defaultChecked={true} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-orange-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Late Fee fine</TableCell>
              <TableCell>Day-wise Amount</TableCell>
              <TableCell>
                <Switch defaultChecked={true} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-orange-500" />
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Late Fine</TableCell>
              <TableCell>Slab-wise Amount</TableCell>
              <TableCell>
                <Switch defaultChecked={true} />
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4 text-orange-500" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Add Fee Schedule Dialog */}
      <Dialog open={isAddScheduleDialogOpen} onOpenChange={setIsAddScheduleDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Fee Schedule</DialogTitle>
            <DialogDescription>
              Enter the details for the new fee schedule
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="class">Classes</Label>
              <Input
                id="class"
                placeholder="e.g., 1st, 2nd, 3rd"
                value={newSchedule.class}
                onChange={(e) => setNewSchedule({ ...newSchedule, class: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="installments">Number of Installments</Label>
              <Input
                id="installments"
                type="number"
                placeholder="e.g., 12"
                value={newSchedule.installments}
                onChange={(e) => setNewSchedule({ ...newSchedule, installments: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="name">Schedule Name</Label>
              <Input
                id="name"
                placeholder="e.g., Monthly"
                value={newSchedule.name}
                onChange={(e) => setNewSchedule({ ...newSchedule, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={newSchedule.startDate}
                onChange={(e) => setNewSchedule({ ...newSchedule, startDate: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={newSchedule.endDate}
                onChange={(e) => setNewSchedule({ ...newSchedule, endDate: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddScheduleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddSchedule}>Add Schedule</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
