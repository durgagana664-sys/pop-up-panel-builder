import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Upload, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

const mockImportHistory = [
  {
    count: "0 staff imported",
    date: "18/06/2024 at 03:26 PM",
    status: { passed: 0, failed: 0 },
    loginCredentials: "View"
  },
  {
    count: "8 staff imported",
    date: "05/12/2023 at 03:02 PM",
    status: { passed: 8, failed: 0 },
    loginCredentials: "View"
  },
];

export default function BulkStaffImport() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }
    toast.success("File uploaded successfully!");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bulk Staff Import</h1>
        <p className="text-sm text-gray-500 mt-1">
          Import multiple staff members at once using an Excel file
        </p>
      </div>

      {/* Instructions Card */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Instructions</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• You can download the staff import template from the link provided below.</li>
            <li>• All columns that are marked with * are required fields which must be entered. Click here to know the details of each column and what values can be entered.</li>
            <li>• None of the fields can have value over 255 characters.</li>
            <li>• After successful import, you will be shown both success count and error count. If error count is more than 0, an error file will be downloaded.</li>
            <li>• Note: This import function only supports xlsx files (comma separated). So when you are saving this file from any spreadsheet software, please save it as a xlsx file.</li>
            <li>• If you have more confusion or if you face any problem which you cannot resolve, please feel free to contact us at contact@edulinker.com</li>
          </ul>
          <Button variant="outline" className="mt-4">
            <Download className="h-4 w-4 mr-2" />
            DOWNLOAD STAFF IMPORT TEMPLATE XLSX
          </Button>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <Input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileSelect}
                className="cursor-pointer"
              />
              {selectedFile && (
                <p className="text-sm text-gray-500 mt-2">Selected: {selectedFile.name}</p>
              )}
            </div>
            <Button onClick={handleUpload}>
              <Upload className="h-4 w-4 mr-2" />
              UPLOAD
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Import History */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Bulk Staff import status</h3>
          <Button variant="outline" size="sm">SHOW LOGS</Button>
        </div>

        <div className="border rounded-lg bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff count</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Login Credentials</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockImportHistory.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.count}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="bg-green-50 text-green-700">
                        {record.status.passed} Passed
                      </Badge>
                      <Badge variant="secondary" className="bg-red-50 text-red-700">
                        {record.status.failed} Failed
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" size="sm">{record.loginCredentials}</Button>
                  </TableCell>
                </TableRow>
              ))}
              {mockImportHistory.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No import history available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
