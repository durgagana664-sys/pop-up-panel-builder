import { useState } from "react";
import { Search, Download, Edit, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const mockStaffData = [
  { id: "Tanisha11", name: "Tanisha Thakur", designation: "Teacher", qualification: "M.Ed", department: "Mathematics", mobile: "8219660604", email: "tanisha@edulinker.com", photo: "" },
  { id: "Ritika 001", name: "Ritika", designation: "Teacher", qualification: "B.Ed", department: "Science", mobile: "8219665050", email: "ritika@edulinker.com", photo: "" },
  { id: "Jassica 002", name: "Jassica", designation: "Teacher", qualification: "M.A", department: "English", mobile: "8819660601", email: "Jassica000@js.com", photo: "" },
  { id: "poonam003", name: "Poonam", designation: "Principal", qualification: "Ph.D", department: "Administration", mobile: "8200060600", email: "punam99@gmail.com", photo: "" },
  { id: "Dev004", name: "Dev Raaj", designation: "Teacher", qualification: "B.Sc", department: "Physics", mobile: "5019660000", email: "dev.w@dev.com", photo: "" },
];

export default function StaffDirectory() {
  const [activeTab, setActiveTab] = useState("teaching");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredStaff = mockStaffData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Staff Directory</h1>
        <div className="flex gap-2">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            ACTIVE STAFF
          </Badge>
          <Badge variant="outline" className="text-sm px-4 py-2">
            DEACTIVATED STAFF
          </Badge>
          <Link to="/staff/addstaff">
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Add Staff
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="teaching">TEACHING</TabsTrigger>
          <TabsTrigger value="non-teaching">NON-TEACHING</TabsTrigger>
          <TabsTrigger value="driver">DRIVER/SUPPORTING STAFF</TabsTrigger>
          <TabsTrigger value="others">OTHERS</TabsTrigger>
          <TabsTrigger value="admin">ADMIN</TabsTrigger>
        </TabsList>

        {/* Search and Filters */}
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, ID, or email..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">SHOW LOGS</Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            DOWNLOAD/VIEW
          </Button>
        </div>

        {/* Staff Table */}
        <TabsContent value="teaching" className="mt-4">
          <div className="border rounded-lg bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff ID ↕</TableHead>
                  <TableHead>Name A-Z</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Highest Qualification</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStaff.map((staff, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{staff.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={staff.photo} />
                          <AvatarFallback>
                            {staff.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span>{staff.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{staff.designation}</TableCell>
                    <TableCell>{staff.qualification}</TableCell>
                    <TableCell>{staff.department}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {staff.mobile}
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          Copy
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {staff.email}
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          Copy
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
        <TabsContent value="non-teaching">
          <div className="text-center py-12 text-gray-500">
            No non-teaching staff records found.
          </div>
        </TabsContent>
        <TabsContent value="driver">
          <div className="text-center py-12 text-gray-500">
            No driver/supporting staff records found.
          </div>
        </TabsContent>
        <TabsContent value="others">
          <div className="text-center py-12 text-gray-500">
            No other staff records found.
          </div>
        </TabsContent>
        <TabsContent value="admin">
          <div className="text-center py-12 text-gray-500">
            No admin staff records found.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
