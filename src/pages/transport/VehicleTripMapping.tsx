import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Bus, Search } from "lucide-react";

const tripData = [
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
];

export default function VehicleTripMapping() {
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
          <Button className="bg-primary text-primary-foreground">+ ADD VEHICLE TRIP</Button>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <Card className="bg-blue-500 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold">2</div>
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
            <Input placeholder="Search Vehicle Trips" className="pl-10 w-[300px]" />
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
              {tripData.map((vehicle) => (
                <>
                  <TableRow key={`${vehicle.id}-pickup`}>
                    <TableCell rowSpan={2}>
                      <Checkbox />
                    </TableCell>
                    <TableCell rowSpan={2}>
                      <span className="text-muted-foreground mr-2">01.</span>
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
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive">
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
    </div>
  );
}
