import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Navigation, MapPin } from "lucide-react";

const routesData = [
  { id: "01", name: "Route 1", stops: "2 Stops" },
  { id: "02", name: "Route 2", stops: "2 Stops" },
  { id: "03", name: "Route 3", stops: "2 Stops" },
];

export default function Routes() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Routes</h1>
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
          <Button className="bg-primary text-primary-foreground">+ ADD NEW ROUTE</Button>
          <Button variant="outline" className="text-primary border-primary">
            📋 CLONE ROUTE
          </Button>
          <Button variant="outline">SHOW LOGS</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-blue-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold">3</div>
              <div className="text-sm mt-1">Total Routes</div>
            </div>
            <Navigation className="h-12 w-12 opacity-80" />
          </div>
        </Card>
        <Card className="bg-orange-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold">6</div>
              <div className="text-sm mt-1">Total Stops</div>
            </div>
            <MapPin className="h-12 w-12 opacity-80" />
          </div>
        </Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground">Route Name</TableHead>
                <TableHead className="text-primary-foreground">Stops</TableHead>
                <TableHead className="text-primary-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routesData.map((route) => (
                <TableRow key={route.id}>
                  <TableCell>
                    <span className="text-muted-foreground mr-2">{route.id}.</span>
                    {route.name}
                  </TableCell>
                  <TableCell>{route.stops}</TableCell>
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
