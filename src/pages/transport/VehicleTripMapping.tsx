import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Bus, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function VehicleTripMapping() {
  const { toast } = useToast();
  const [tripData, setTripData] = useState([
    {
      id: "199991",
      vehicleCode: "199991",
      route: "Route 1",
      trips: [
        { serviceType: "PickUp", driverName: "Naresh", staffName: "Poonam", studentsMapped: "PickUp: 22" },
        { serviceType: "Drop", driverName: "Naresh", staffName: "Poonam", studentsMapped: "Drop: 22" },
      ],
    },
    {
      id: "199888",
      vehicleCode: "199888",
      route: "eduTinker Public School",
      trips: [
        { serviceType: "PickUp", driverName: "Raju Kumar", staffName: "Himanshu Sharma", studentsMapped: "PickUp: 29" },
        { serviceType: "Drop", driverName: "Raju Kumar", staffName: "Himanshu Sharma", studentsMapped: "Drop: 29" },
      ],
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTrip, setNewTrip] = useState({
    vehicleCode: "",
    route: "",
    pickupDriver: "",
    pickupStaff: "",
    dropDriver: "",
    dropStaff: "",
  });

  const filteredTripData = tripData.filter((vehicle) =>
    Object.values(vehicle).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    vehicle.trips.some((trip) =>
      Object.values(trip).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  const handleAddTrip = () => {
    if (!newTrip.vehicleCode || !newTrip.route || !newTrip.pickupDriver || !newTrip.pickupStaff) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const trip = {
      id: newTrip.vehicleCode,
      vehicleCode: newTrip.vehicleCode,
      route: newTrip.route,
      trips: [
        { serviceType: "PickUp", driverName: newTrip.pickupDriver, staffName: newTrip.pickupStaff, studentsMapped: "PickUp: 0" },
        { serviceType: "Drop", driverName: newTrip.dropDriver || newTrip.pickupDriver, staffName: newTrip.dropStaff || newTrip.pickupStaff, studentsMapped: "Drop: 0" },
      ],
    };

    setTripData([...tripData, trip]);
    setNewTrip({ vehicleCode: "", route: "", pickupDriver: "", pickupStaff: "", dropDriver: "", dropStaff: "" });
    setIsAddDialogOpen(false);
    toast({
      title: "Success",
      description: "Vehicle trip added successfully",
    });
  };

  const handleDeleteTrip = (id: string) => {
    setTripData(tripData.filter((trip) => trip.id !== id));
    toast({
      title: "Success",
      description: "Vehicle trip deleted successfully",
    });
  };
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vehicle trip mapping</h1>
          <p className="text-sm text-muted-foreground">Transport Management</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Academic Year</span>
            <span className="text-destructive">*</span>
            <div className="flex items-center gap-2 border rounded px-3 py-1">
              <Calendar className="h-4 w-4" />
              <span>Apr 2025 - Mar 2026</span>
            </div>
          </div>
          <Button onClick={() => setIsAddDialogOpen(true)} className="bg-primary text-primary-foreground">+ ADD VEHICLE TRIP</Button>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <Card className="bg-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold">{tripData.length}</div>
            <div className="text-sm mt-1">Total Vehicle Trips</div>
          </div>
          <Bus className="h-12 w-12 opacity-80" />
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Search</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Vehicle Trips"
              className="pl-10 w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="text-primary border-primary">
            📋 REORDER VEHICLE TRIPS
          </Button>
          <Button variant="outline">👁️ VIEW</Button>
          <Button variant="outline">⬇️ DOWNLOAD</Button>
          <Button variant="outline">⬆️ UPLOAD</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground">
                  <Checkbox className="border-white" />
                </TableHead>
                <TableHead className="text-primary-foreground">Vehicle Code</TableHead>
                <TableHead className="text-primary-foreground">Route</TableHead>
                <TableHead className="text-primary-foreground">Service Type</TableHead>
                <TableHead className="text-primary-foreground">Driver Name</TableHead>
                <TableHead className="text-primary-foreground">Staff Name</TableHead>
                <TableHead className="text-primary-foreground">Students Mapped</TableHead>
                <TableHead className="text-primary-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTripData.map((vehicle, index) => (
                <>
                  <TableRow key={`${vehicle.id}-pickup`}>
                    <TableCell rowSpan={2}>
                      <Checkbox />
                    </TableCell>
                    <TableCell rowSpan={2}>
                      <span className="text-muted-foreground mr-2">{String(index + 1).padStart(2, "0")}.</span>
                      {vehicle.vehicleCode}
                    </TableCell>
                    <TableCell rowSpan={2}>{vehicle.route}</TableCell>
                    <TableCell>{vehicle.trips[0].serviceType}</TableCell>
                    <TableCell>{vehicle.trips[0].driverName}</TableCell>
                    <TableCell>{vehicle.trips[0].staffName}</TableCell>
                    <TableCell>{vehicle.trips[0].studentsMapped}</TableCell>
                    <TableCell rowSpan={2}>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-primary">
                          <span className="material-icons text-sm">✏️</span>
                        </Button>
                        <Button onClick={() => handleDeleteTrip(vehicle.id)} size="icon" variant="ghost" className="h-8 w-8 text-destructive">
                          <span className="material-icons text-sm">🗑️</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow key={`${vehicle.id}-drop`}>
                    <TableCell>{vehicle.trips[1].serviceType}</TableCell>
                    <TableCell>{vehicle.trips[1].driverName}</TableCell>
                    <TableCell>{vehicle.trips[1].staffName}</TableCell>
                    <TableCell>{vehicle.trips[1].studentsMapped}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Vehicle Trip</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleCode">Vehicle Code *</Label>
                <Input
                  id="vehicleCode"
                  placeholder="Enter vehicle code"
                  value={newTrip.vehicleCode}
                  onChange={(e) => setNewTrip({ ...newTrip, vehicleCode: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="route">Route *</Label>
                <Input
                  id="route"
                  placeholder="Enter route"
                  value={newTrip.route}
                  onChange={(e) => setNewTrip({ ...newTrip, route: e.target.value })}
                />
              </div>
            </div>
            <div className="text-sm font-semibold mt-4">Pickup Details</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickupDriver">Driver Name *</Label>
                <Input
                  id="pickupDriver"
                  placeholder="Enter driver name"
                  value={newTrip.pickupDriver}
                  onChange={(e) => setNewTrip({ ...newTrip, pickupDriver: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupStaff">Staff Name *</Label>
                <Input
                  id="pickupStaff"
                  placeholder="Enter staff name"
                  value={newTrip.pickupStaff}
                  onChange={(e) => setNewTrip({ ...newTrip, pickupStaff: e.target.value })}
                />
              </div>
            </div>
            <div className="text-sm font-semibold mt-4">Drop Details (Optional)</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dropDriver">Driver Name</Label>
                <Input
                  id="dropDriver"
                  placeholder="Leave empty to use pickup driver"
                  value={newTrip.dropDriver}
                  onChange={(e) => setNewTrip({ ...newTrip, dropDriver: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dropStaff">Staff Name</Label>
                <Input
                  id="dropStaff"
                  placeholder="Leave empty to use pickup staff"
                  value={newTrip.dropStaff}
                  onChange={(e) => setNewTrip({ ...newTrip, dropStaff: e.target.value })}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddTrip}>Add Vehicle Trip</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
