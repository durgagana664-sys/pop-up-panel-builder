import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";

export default function FeeConfiguration() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Fee Configuration
        </h1>
        <Button>Save Configuration</Button>
      </div>

      {/* Fee Receipt Section */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Fee Receipt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Fee Receipt Layout</Label>
            <Select defaultValue="a4-portrait">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4-portrait">A4 Portrait</SelectItem>
                <SelectItem value="a4-landscape">A4 Landscape</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Fee Invoice Layout</Label>
            <Select defaultValue="a4-portrait">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4-portrait">A4 Portrait</SelectItem>
                <SelectItem value="a4-landscape">A4 Landscape</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Fee Receipt Template</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Template</SelectItem>
                <SelectItem value="modern">Modern Template</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Fee Wallet Template</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Template</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Number of Copies</Label>
            <Select defaultValue="3">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Default Payment Mode</Label>
            <Select defaultValue="cash">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="online">Online Payment</SelectItem>
                <SelectItem value="cheque">Cheque</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <Label>Payment URL</Label>
          <div className="flex gap-2 mt-2">
            <Switch defaultChecked />
            <Input 
              type="text" 
              placeholder="https://online.edutinker.com/form/student/feeMethod?id=..." 
              className="flex-1"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Label>Add to fee receipt</Label>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Switch defaultChecked id="fee-due" />
              <Label htmlFor="fee-due">Fee Due</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked id="fee-discount" />
              <Label htmlFor="fee-discount">Fee Discount</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked id="fee-balance" />
              <Label htmlFor="fee-balance">Fee Balance</Label>
            </div>
          </div>
          <Input placeholder="Note for fee Receipt" className="ml-auto w-64" />
        </div>
      </Card>

      {/* Other Payment Configuration */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Other Payment Configuration</h2>
        <div className="space-y-3">
          {[
            { id: "show-zero", label: "Show zero paid component in receipt if selected at time of payment", checked: false },
            { id: "collect-siblings", label: "Collect siblings fee together in single page", checked: true },
            { id: "receipt-date", label: "Keep fee receipt date editable at time of student fee collection", checked: true },
            { id: "entry-date", label: "Keep fee entry date editable at time of student fee collection", checked: true },
            { id: "later-installment", label: "Allow to collect later installment amount even if previous installment is due", checked: true },
            { id: "multiple-discount", label: "Allow multiple discount on same installment component", checked: true },
            { id: "hide-zero", label: "Do not show component with zero pending amount at time of marking paid", checked: true },
            { id: "avoid-repeat", label: "Do not repeat discount in fee receipt", checked: true },
            { id: "cancelled-receipt", label: "Do not allow usage of cancelled receipt numbers", checked: false },
            { id: "manual-receipt", label: "Allow Manual Input of Receipt Number", checked: false },
            { id: "apply-fine", label: "Fine should apply as per fee receipt date", checked: false },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Switch defaultChecked={item.checked} id={item.id} />
              <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
            </div>
          ))}
        </div>
      </Card>

      {/* Parent Side Configuration */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Parent Side Configuration on App</h2>
        <div className="space-y-3">
          {[
            { id: "partial-payment", label: "Don't allow student/ parent to do partial payment of component", checked: false },
            { id: "hide-components-app", label: "Do not show components when student is paying the fee from app", checked: false },
            { id: "wallet-addition", label: "Allow parent side wallet amount addition", checked: true },
            { id: "show-current", label: "Show only current installment", checked: false },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Switch defaultChecked={item.checked} id={item.id} />
              <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
            </div>
          ))}
        </div>
      </Card>

      {/* Show students basic details on receipt */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Show students basic details on receipt</h2>
        <div className="space-y-3">
          {[
            { id: "receipt-date", label: "Receipt Date" },
            { id: "session", label: "Session" },
            { id: "receipt-no", label: "Receipt No." },
            { id: "student-name", label: "Student Name" },
            { id: "admission-no", label: "Admission No.", checked: true },
            { id: "class", label: "Class", checked: true },
            { id: "father-name", label: "Father Name", checked: true },
            { id: "mother-name", label: "Mother Name", checked: false },
            { id: "address", label: "Address", checked: true },
            { id: "father-phone", label: "Father Phone", checked: true },
            { id: "mother-phone", label: "Mother Phone", checked: false },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
              <Switch defaultChecked={item.checked ?? false} id={item.id} />
              <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
            </div>
          ))}
        </div>
      </Card>

      {/* Show other Institute fields */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Show other Institute fields</h2>
        <div className="space-y-3">
          {[
            { id: "affiliation", label: "Affiliation No.", checked: true },
            { id: "school-url", label: "School Url", checked: true },
            { id: "board-logo", label: "Board Logo", checked: true },
          ].map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <Switch defaultChecked={item.checked} id={item.id} />
              <Label htmlFor={item.id} className="cursor-pointer">{item.label}</Label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
