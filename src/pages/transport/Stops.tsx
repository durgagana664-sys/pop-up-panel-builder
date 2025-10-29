import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stopsData = [
  { 
    id: "01", 
    name: "Kirti Nagar", 
    pickUpFare: "₹ 3,000", 
    dropFare: "₹ 3,000",
    latitude: "",
    longitude: "",
    expectedPickUp: "",
    expectedDrop: ""
  },
  { 
    id: "02", 
    name: "Dwarka 18", 
    pickUpFare: "₹ 4,000", 
    dropFare: "₹ 4,000",
    latitude: "",
    longitude: "",
    expectedPickUp: "",
    expectedDrop: ""
  },
  { 
    id: "03", 
    name: "Najafgarh Road", 
    pickUpFare: "₹ 4,500", 
    dropFare: "₹ 4,500",
    latitude: "",
    longitude: "",
    expectedPickUp: "",
    expectedDrop: ""
  },
];

export default function Stops() {
  const { toast } = useToast();
  const [stops, setStops] = useState(stopsData);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newStop, setNewStop] = useState({
    name: "",
    pickUpFare: "",
    dropFare: "",
    latitude: "",
    longitude: "",
    expectedPickUp: "",
    expectedDrop: ""
  });

  const handleAddStop = () => {
    if (!newStop.name || !newStop.pickUpFare || !newStop.dropFare) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const stop = {
      id: String(stops.length + 1).padStart(2, "0"),
      name: newStop.name,
      pickUpFare: newStop.pickUpFare,
      dropFare: newStop.dropFare,
      latitude: newStop.latitude,
      longitude: newStop.longitude,
      expectedPickUp: newStop.expectedPickUp,
      expectedDrop: newStop.expectedDrop
    };

    setStops([...stops, stop]);
    setNewStop({
      name: "",
      pickUpFare: "",
      dropFare: "",
      latitude: "",
      longitude: "",
      expectedPickUp: "",
      expectedDrop: ""
    });
    setIsAddDialogOpen(false);
    toast({
      title: "Success",
      description: "Stop added successfully"
    });
  };

  const handleDeleteStop = (id: string) => {
    setStops(stops.filter(s => s.id !== id));
    toast({
      title: "Success",
      description: "Stop deleted successfully"
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Stops</h1>
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
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground">+ ADD STOP</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Stop</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Stop Name *</Label>
                    <Input 
                      id="name" 
                      value={newStop.name}
                      onChange={(e) => setNewStop({...newStop, name: e.target.value})}
                      placeholder="Enter stop name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pickUpFare">Pick up fare (Per month) *</Label>
                    <Input 
                      id="pickUpFare" 
                      value={newStop.pickUpFare}
                      onChange={(e) => setNewStop({...newStop, pickUpFare: e.target.value})}
                      placeholder="₹ 0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropFare">Drop fare (Per month) *</Label>
                    <Input 
                      id="dropFare" 
                      value={newStop.dropFare}
                      onChange={(e) => setNewStop({...newStop, dropFare: e.target.value})}
                      placeholder="₹ 0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude (decimal degree)</Label>
                    <Input 
                      id="latitude" 
                      value={newStop.latitude}
                      onChange={(e) => setNewStop({...newStop, latitude: e.target.value})}
                      placeholder="e.g., 28.7041"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude (decimal degree)</Label>
                    <Input 
                      id="longitude" 
                      value={newStop.longitude}
                      onChange={(e) => setNewStop({...newStop, longitude: e.target.value})}
                      placeholder="e.g., 77.1025"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedPickUp">Expected pick up time</Label>
                    <Input 
                      id="expectedPickUp" 
                      type="time"
                      value={newStop.expectedPickUp}
                      onChange={(e) => setNewStop({...newStop, expectedPickUp: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedDrop">Expected drop time</Label>
                    <Input 
                      id="expectedDrop" 
                      type="time"
                      value={newStop.expectedDrop}
                      onChange={(e) => setNewStop({...newStop, expectedDrop: e.target.value})}
                    />
                  </div>
                </div>
                <Button onClick={handleAddStop} className="w-full">Add Stop</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground">Stop Name</TableHead>
                <TableHead className="text-primary-foreground">Pick up fare (Per month)</TableHead>
                <TableHead className="text-primary-foreground">Drop fare (Per month)</TableHead>
                <TableHead className="text-primary-foreground">Latitude (decimal degree)</TableHead>
                <TableHead className="text-primary-foreground">Longitude (decimal degree)</TableHead>
                <TableHead className="text-primary-foreground">Expected pick up time</TableHead>
                <TableHead className="text-primary-foreground">Expected drop time</TableHead>
                <TableHead className="text-primary-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stops.map((stop) => (
                <TableRow key={stop.id}>
                  <TableCell>
                    <span className="text-muted-foreground mr-2">{stop.id}.</span>
                    {stop.name}
                  </TableCell>
                  <TableCell>{stop.pickUpFare}</TableCell>
                  <TableCell>{stop.dropFare}</TableCell>
                  <TableCell className="text-muted-foreground">{stop.latitude || "-"}</TableCell>
                  <TableCell className="text-muted-foreground">{stop.longitude || "-"}</TableCell>
                  <TableCell className="text-muted-foreground">{stop.expectedPickUp || "-"}</TableCell>
                  <TableCell className="text-muted-foreground">{stop.expectedDrop || "-"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-primary">
                        <span className="material-icons text-sm">✏️</span>
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 text-destructive"
                        onClick={() => handleDeleteStop(stop.id)}
                      >
                        <span className="material-icons text-sm">🗑️</span>
                      </Button>
                    </div>
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
