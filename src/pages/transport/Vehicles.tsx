import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bus, Car, Bike } from "lucide-react";

const vehicleStats = [
  { label: "All Vehicles", count: 5, color: "bg-blue-500", icon: Bus },
  { label: "Auto", count: 0, color: "bg-orange-500", icon: Car },
  { label: "Bus", count: 5, color: "bg-pink-500", icon: Bus },
  { label: "Van", count: 0, color: "bg-green-500", icon: Bus },
  { label: "Bike", count: 0, color: "bg-amber-500", icon: Bike },
  { label: "Others", count: 0, color: "bg-orange-400", icon: Bus },
];

const vehicleData = [
  { id: "01", code: "199888", regNum: "UP39C979", seats: "35", description: "", documents: "No document attached" },
  { id: "02", code: "199991", regNum: "UP7001", seats: "30", description: "", documents: "No document attached" },
  { id: "03", code: "199986", regNum: "DL22PA19", seats: "30", description: "", documents: "No document attached" },
  { id: "04", code: "199989", regNum: "DL01198", seats: "30", description: "", documents: "No document attached" },
  { id: "05", code: "199990", regNum: "HR98GC1", seats: "25", description: "", documents: "No document attached" },
];

export default function Vehicles() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-end">
        <div className="flex gap-3">
          <Button className="bg-primary text-primary-foreground">+ ADD NEW VEHICLE</Button>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Select Vehicle Type</span>
        <Select defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="bus">Bus</SelectItem>
            <SelectItem value="van">Van</SelectItem>
            <SelectItem value="bike">Bike</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {vehicleStats.map((stat) => (
          <Card key={stat.label} className={`${stat.color} p-4 text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">{stat.count}</div>
                <div className="text-sm mt-1">{stat.label}</div>
              </div>
              <stat.icon className="h-10 w-10 opacity-80" />
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground">Vehicle Code</TableHead>
                <TableHead className="text-primary-foreground">Reg Num</TableHead>
                <TableHead className="text-primary-foreground">Seats</TableHead>
                <TableHead className="text-primary-foreground">Description</TableHead>
                <TableHead className="text-primary-foreground">Documents</TableHead>
                <TableHead className="text-primary-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicleData.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="text-muted-foreground text-sm">
                    <span className="mr-2">{vehicle.id}.</span>
                    {vehicle.code}
                  </TableCell>
                  <TableCell>{vehicle.regNum}</TableCell>
                  <TableCell>{vehicle.seats}</TableCell>
                  <TableCell>{vehicle.description}</TableCell>
                  <TableCell className="text-muted-foreground">{vehicle.documents}</TableCell>
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
