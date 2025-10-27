import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function FeeReports() {
  const feeCollectionData = [
    { name: "Fees", amount: 114803, percentage: 7.43, color: "bg-orange-500" },
    { name: "Exam Fee", amount: 1953833, percentage: 2.37, color: "bg-green-500" },
    { name: "Vhi", amount: 1449369, percentage: 2.1, color: "bg-red-500" },
    { name: "Late Fine", amount: 128, percentage: 0.03, color: "bg-blue-500" },
    { name: "Transport", amount: 1344005, percentage: 2.13, color: "bg-orange-400" },
    { name: "Tuition Fee", amount: 1324386, percentage: 3.77, color: "bg-teal-500" },
    { name: "VFK Exam Fee", amount: 74980, percentage: 0.03, color: "bg-blue-700" },
    { name: "Commerce Fee", amount: 1447001, percentage: 0.86, color: "bg-blue-400" },
    { name: "Miscellaneous", amount: 112360, percentage: 0.03, color: "bg-gray-500" },
    { name: "Transport Fee", amount: 1044005, percentage: 3.8, color: "bg-orange-300" },
    { name: "Books + Uniform", amount: 1124730, percentage: 3.64, color: "bg-green-700" },
    { name: "Computer Lab Fee", amount: 1153138, percentage: 0.28, color: "bg-blue-900" },
  ];

  const pieChartData = [
    { name: "Fees", value: 735048, percentage: 0.38, color: "#e8b4e8" },
    { name: "Exam Fee", value: 128371, percentage: 1.88, color: "#ff69b4" },
    { name: "Vike Fees", value: 129489, percentage: 1.3, color: "#98d8c8" },
    { name: "Misc. Fee", value: 130336, percentage: 1.6, color: "#4cc9f0" },
    { name: "Transport", value: 130336, percentage: 0.22, color: "#ffd23f" },
    { name: "Tuition Fee", value: 156026, percentage: 0.87, color: "#ff6f61" },
    { name: "UNI Exam Fee", value: 13800, percentage: 0.02, color: "#c3b1e1" },
    { name: "Admission Fee", value: 193701, percentage: 1.6, color: "#95e1d3" },
    { name: "Miscellaneous", value: 146802, percentage: 1.3, color: "#f38181" },
    { name: "Transport Fee", value: 130036, percentage: 0.33, color: "#aa96da" },
    { name: "Books + Uniform", value: 113271, percentage: 1.38, color: "#fcbad3" },
    { name: "Computer Lab Fee", value: 178402, percentage: 0.0, color: "#ffffd2" },
    { name: "Security Charges", value: 200, percentage: 0.0, color: "#a8e6cf" },
    { name: "Registration Charges", value: 124250, percentage: 0.31, color: "#ffd3b6" },
    { name: "Pre Admission Charges", value: 115000, percentage: 0.0, color: "#ffaaa5" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          General Fee Report
        </h1>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Time Period *</label>
            <div className="flex gap-2">
              <Input type="date" defaultValue="2025-04-01" />
              <Input type="date" defaultValue="2026-03-31" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Student Type</label>
            <Select defaultValue="active">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active + DeAdmitted</SelectItem>
                <SelectItem value="active-only">Active Only</SelectItem>
                <SelectItem value="deadmitted">DeAdmitted Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Search</label>
            <Input placeholder="Search by student name" />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium mb-2 block">Filter By</label>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="class-section" defaultChecked />
              <Label htmlFor="class-section">Class, Section & Installments</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="route" />
              <Label htmlFor="route">Route and Stop</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="components" />
              <Label htmlFor="components">Components & Mode of payment</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="class-only" />
              <Label htmlFor="class-only">Class</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="admission" />
              <Label htmlFor="admission">Admission Type</Label>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-4 items-center">
          <Button variant="outline">Class & Section</Button>
          <Button variant="outline">Installment Type</Button>
          <Button>APPLY FILTER</Button>
        </div>
      </Card>

      {/* Report Tabs */}
      <Tabs defaultValue="collection" className="w-full">
        <TabsList className="bg-orange-500">
          <TabsTrigger value="collection" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            FEE COLLECTION
          </TabsTrigger>
          <TabsTrigger value="due" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            FEE DUE
          </TabsTrigger>
          <TabsTrigger value="concession" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            FEE CONCESSION
          </TabsTrigger>
          <TabsTrigger value="count" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            STUDENT COUNT
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collection" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Receivable after discount Card */}
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Receivable after discount</h3>
                  <div className="text-3xl font-bold">₹ 4,69,73,800</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Last updated On 11-10-2025 at 5:10 PM
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-orange-500">
                  🔍
                </Button>
              </div>

              <div className="space-y-3">
                {feeCollectionData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span>₹ {item.amount.toLocaleString()} ({item.percentage}%)</span>
                    </div>
                    <Progress value={item.percentage * 10} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Fee Collection Card with Pie Chart */}
            <Card className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Fee Collection</h3>
                  <div className="text-3xl font-bold text-green-600">₹ 1,19,29,701</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Last updated On 11-10-2025 at 4:59 PM
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-orange-500">
                    🔍
                  </Button>
                  <Button variant="ghost" size="sm" className="text-orange-500">
                    📊
                  </Button>
                </div>
              </div>

              <div className="flex gap-6">
                {/* Pie Chart Placeholder */}
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex-shrink-0"></div>

                {/* Legend */}
                <div className="flex-1 space-y-1 text-xs">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {pieChartData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-sm`} style={{ backgroundColor: item.color }}></div>
                        <span className="text-xs">
                          {item.name}: ₹ {item.value.toLocaleString()} ({item.percentage}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="due" className="space-y-4 mt-4">
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              Apply filters to view fee due report
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="concession" className="space-y-4 mt-4">
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              Apply filters to view fee concession report
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="count" className="space-y-4 mt-4">
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              Apply filters to view student count report
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
