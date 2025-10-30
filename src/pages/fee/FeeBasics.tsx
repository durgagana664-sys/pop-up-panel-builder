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
  const [isAddComponentDialogOpen, setIsAddComponentDialogOpen] = useState(false);
  const [isAddDiscountDialogOpen, setIsAddDiscountDialogOpen] = useState(false);
  const [isAddMiscFeeDialogOpen, setIsAddMiscFeeDialogOpen] = useState(false);
  const [isAddFineDialogOpen, setIsAddFineDialogOpen] = useState(false);
  const [isAddAcademicYearDialogOpen, setIsAddAcademicYearDialogOpen] = useState(false);
  
  const [newSchedule, setNewSchedule] = useState({
    class: "",
    installments: "",
    name: "",
    startDate: "",
    endDate: "",
  });

  const [newComponent, setNewComponent] = useState({
    head: "",
    component: "",
    admission: "All Students",
    gender: "All Students",
  });

  const [newDiscount, setNewDiscount] = useState({
    name: "",
    remarks: "",
  });

  const [newMiscFee, setNewMiscFee] = useState({
    head: "",
    name: "",
  });

  const [newFine, setNewFine] = useState({
    name: "",
    type: "Fixed Amount",
    status: false,
  });

  const [newAcademicYear, setNewAcademicYear] = useState({
    startDate: "",
    endDate: "",
  });

  const [feeComponents, setFeeComponents] = useState([
    { head: "CU exam fee", component: "Exam Fee", admission: "All Students", gender: "All Students" },
    { head: "Registration", component: "Fees", admission: "New", gender: "All Students" },
    { head: "School Fee", component: "Transport Fee", admission: "All Students", gender: "All Students" },
    { head: "School Fees", component: "Tution Fee", admission: "All Students", gender: "All Students" },
    { head: "", component: "Admission Fee", admission: "New", gender: "All Students" },
    { head: "", component: "Registration Charges", admission: "New", gender: "All Students" },
    { head: "", component: "Computer Lab Fee", admission: "All Students", gender: "All Students" },
    { head: "", component: "UNI Exam Fee", admission: "All Students", gender: "All Students" },
  ]);

  const [feeDiscounts, setFeeDiscounts] = useState([
    { name: "Staff Discount", remarks: "" },
    { name: "New Student", remarks: "" },
    { name: "New student", remarks: "" },
    { name: "Siblings Discount", remarks: "" },
  ]);

  const [miscFees, setMiscFees] = useState([
    { head: "School Fees", name: "TC Fee" },
    { head: "", name: "Extra class charges" },
    { head: "", name: "Parking Fee" },
    { head: "", name: "Quilt charges" },
  ]);

  const [feeFines, setFeeFines] = useState([
    { name: "Fine", type: "Fixed Amount", status: false },
    { name: "Fine 2", type: "Fixed Amount", status: false },
    { name: "Late Fee", type: "Fixed Amount", status: true },
    { name: "Late Fee fine", type: "Day-wise Amount", status: true },
    { name: "Late Fine", type: "Slab-wise Amount", status: true },
  ]);

  const stats = [
    { label: "No. of Fee schedule created", value: feeSchedules.length, color: "bg-green-500" },
    { label: "No. of Fee component created", value: feeComponents.length, color: "bg-red-500" },
    { label: "No. of Fee discounts created", value: feeDiscounts.length, color: "bg-orange-500" },
    { label: "No. of Misc Fee created", value: miscFees.length, color: "bg-yellow-500" },
    { label: "No. of Fee Fine created", value: feeFines.length, color: "bg-gray-500" },
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

  const handleAddComponent = () => {
    if (!newComponent.component) {
      toast({
        title: "Error",
        description: "Component name is required",
        variant: "destructive",
      });
      return;
    }

    setFeeComponents([...feeComponents, newComponent]);
    toast({
      title: "Success",
      description: "Fee component added successfully",
    });

    setNewComponent({
      head: "",
      component: "",
      admission: "All Students",
      gender: "All Students",
    });
    setIsAddComponentDialogOpen(false);
  };

  const handleAddDiscount = () => {
    if (!newDiscount.name) {
      toast({
        title: "Error",
        description: "Discount name is required",
        variant: "destructive",
      });
      return;
    }

    setFeeDiscounts([...feeDiscounts, newDiscount]);
    toast({
      title: "Success",
      description: "Fee discount added successfully",
    });

    setNewDiscount({ name: "", remarks: "" });
    setIsAddDiscountDialogOpen(false);
  };

  const handleAddMiscFee = () => {
    if (!newMiscFee.name) {
      toast({
        title: "Error",
        description: "Misc fee name is required",
        variant: "destructive",
      });
      return;
    }

    setMiscFees([...miscFees, newMiscFee]);
    toast({
      title: "Success",
      description: "Misc fee added successfully",
    });

    setNewMiscFee({ head: "", name: "" });
    setIsAddMiscFeeDialogOpen(false);
  };

  const handleAddFine = () => {
    if (!newFine.name) {
      toast({
        title: "Error",
        description: "Fine name is required",
        variant: "destructive",
      });
      return;
    }

    setFeeFines([...feeFines, newFine]);
    toast({
      title: "Success",
      description: "Fee fine added successfully",
    });

    setNewFine({ name: "", type: "Fixed Amount", status: false });
    setIsAddFineDialogOpen(false);
  };

  const handleAddAcademicYear = () => {
    if (!newAcademicYear.startDate || !newAcademicYear.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Academic year added successfully",
    });

    setNewAcademicYear({ startDate: "", endDate: "" });
    setIsAddAcademicYearDialogOpen(false);
  };

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
          <Button onClick={() => setIsAddAcademicYearDialogOpen(true)}>Add Academic Year</Button>
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
            <Button onClick={() => setIsAddComponentDialogOpen(true)}>Add Fee Component</Button>
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
            <Button variant="outline" onClick={() => setIsAddDiscountDialogOpen(true)}>ADD FEE DISCOUNTS</Button>
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
            {feeDiscounts.map((discount, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{discount.name}</TableCell>
                <TableCell>{discount.remarks}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Miscellaneous Fee */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">4. Misc. Fee</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsAddMiscFeeDialogOpen(true)}>ADD MISC. FEE</Button>
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
            {miscFees.map((fee, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{fee.head}</TableCell>
                <TableCell>{fee.name}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Fee Fine */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">5. Fee fine</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsAddFineDialogOpen(true)}>ADD FEE FINE</Button>
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
            {feeFines.map((fine, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{fine.name}</TableCell>
                <TableCell>{fine.type}</TableCell>
                <TableCell>
                  <Switch defaultChecked={fine.status} />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4 text-orange-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
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

      {/* Add Fee Component Dialog */}
      <Dialog open={isAddComponentDialogOpen} onOpenChange={setIsAddComponentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Fee Component</DialogTitle>
            <DialogDescription>Enter the details for the new fee component</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="head">Head Name</Label>
              <Input
                id="head"
                placeholder="e.g., School Fees"
                value={newComponent.head}
                onChange={(e) => setNewComponent({ ...newComponent, head: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="component">Component Name</Label>
              <Input
                id="component"
                placeholder="e.g., Tuition Fee"
                value={newComponent.component}
                onChange={(e) => setNewComponent({ ...newComponent, component: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="admission">Admission Type</Label>
              <Select value={newComponent.admission} onValueChange={(value) => setNewComponent({ ...newComponent, admission: value })}>
                <SelectTrigger id="admission">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Students">All Students</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Existing">Existing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={newComponent.gender} onValueChange={(value) => setNewComponent({ ...newComponent, gender: value })}>
                <SelectTrigger id="gender">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Students">All Students</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddComponentDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddComponent}>Add Component</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Fee Discount Dialog */}
      <Dialog open={isAddDiscountDialogOpen} onOpenChange={setIsAddDiscountDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Fee Discount</DialogTitle>
            <DialogDescription>Enter the details for the new fee discount</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="discountName">Discount Name</Label>
              <Input
                id="discountName"
                placeholder="e.g., Staff Discount"
                value={newDiscount.name}
                onChange={(e) => setNewDiscount({ ...newDiscount, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="remarks">Remarks</Label>
              <Input
                id="remarks"
                placeholder="Optional remarks"
                value={newDiscount.remarks}
                onChange={(e) => setNewDiscount({ ...newDiscount, remarks: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDiscountDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddDiscount}>Add Discount</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Misc Fee Dialog */}
      <Dialog open={isAddMiscFeeDialogOpen} onOpenChange={setIsAddMiscFeeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Misc. Fee</DialogTitle>
            <DialogDescription>Enter the details for the new miscellaneous fee</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="miscHead">Head Name</Label>
              <Input
                id="miscHead"
                placeholder="e.g., School Fees"
                value={newMiscFee.head}
                onChange={(e) => setNewMiscFee({ ...newMiscFee, head: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="miscName">Misc. Fee Name</Label>
              <Input
                id="miscName"
                placeholder="e.g., TC Fee"
                value={newMiscFee.name}
                onChange={(e) => setNewMiscFee({ ...newMiscFee, name: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddMiscFeeDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddMiscFee}>Add Misc Fee</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Fee Fine Dialog */}
      <Dialog open={isAddFineDialogOpen} onOpenChange={setIsAddFineDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Fee Fine</DialogTitle>
            <DialogDescription>Enter the details for the new fee fine</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="fineName">Fine Name</Label>
              <Input
                id="fineName"
                placeholder="e.g., Late Fee"
                value={newFine.name}
                onChange={(e) => setNewFine({ ...newFine, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="fineType">Fine Type</Label>
              <Select value={newFine.type} onValueChange={(value) => setNewFine({ ...newFine, type: value })}>
                <SelectTrigger id="fineType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fixed Amount">Fixed Amount</SelectItem>
                  <SelectItem value="Day-wise Amount">Day-wise Amount</SelectItem>
                  <SelectItem value="Slab-wise Amount">Slab-wise Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={newFine.status} onCheckedChange={(checked) => setNewFine({ ...newFine, status: checked })} id="fineStatus" />
              <Label htmlFor="fineStatus" className="cursor-pointer">Active Status</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddFineDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddFine}>Add Fine</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Academic Year Dialog */}
      <Dialog open={isAddAcademicYearDialogOpen} onOpenChange={setIsAddAcademicYearDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Academic Year</DialogTitle>
            <DialogDescription>Enter the start and end dates for the new academic year</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="yearStartDate">Start Date</Label>
              <Input
                id="yearStartDate"
                type="date"
                value={newAcademicYear.startDate}
                onChange={(e) => setNewAcademicYear({ ...newAcademicYear, startDate: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="yearEndDate">End Date</Label>
              <Input
                id="yearEndDate"
                type="date"
                value={newAcademicYear.endDate}
                onChange={(e) => setNewAcademicYear({ ...newAcademicYear, endDate: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddAcademicYearDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddAcademicYear}>Add Academic Year</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
