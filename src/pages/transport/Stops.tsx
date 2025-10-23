import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

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
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Academic Year</span>
            <span className="text-destructive">*</span>
            <div className="flex items-center gap-2 border rounded px-3 py-1">
              <Calendar className="h-4 w-4" />
              <span>Apr 2025 - Mar 2026</span>
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground">+ ADD STOP</Button>
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
              {stopsData.map((stop) => (
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
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
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
