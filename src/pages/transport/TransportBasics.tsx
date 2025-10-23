import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "lucide-react";

export default function TransportBasics() {
  const installments = [
    { id: "installment-1", label: "Installment 1" },
    { id: "installment-2", label: "Installment 2" },
    { id: "installment-3", label: "Installment 3" },
    { id: "installment-4", label: "Installment 4" },
  ];

  const months = [
    { id: "monthly", label: "Monthly", months: ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
    { id: "installment", label: "Installment", months: ["Apr 2025", "May 2025", "June 2025", "Dec 2025", "Feb 2026", "Jan 2026"] },
    { id: "senior-wing", label: "Senior wing", months: ["1th", "2th", "3th", "4th", "5th", "6th"] },
    { id: "months-2", label: "Months", months: ["Apr-Jun", "Jan-Mar", "Jul-Sep", "Oct-Dec"] },
  ];

  const selectedMonths = [
    { id: "apr-2025", label: "April 2025" },
    { id: "may-2025", label: "May 2025" },
    { id: "june-2025", label: "June 2025" },
    { id: "dec-2025", label: "December 2025" },
    { id: "feb-2026", label: "February 2026" },
    { id: "jan-2026", label: "January 2026" },
    { id: "aug-2025", label: "August 2025" },
    { id: "sept-2025", label: "September 2025" },
    { id: "oct-2025", label: "October 2025" },
    { id: "nov-2025", label: "November 2025" },
    { id: "mar-2026", label: "March 2026" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-end gap-2">
        <Calendar className="h-4 w-4" />
        <span className="text-sm">Apr 2025 - Mar 2026</span>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-6">Transport fee configuration</h2>
        
        <div className="text-sm text-destructive mb-4">
          *You can configure fee for student availing ONLY PICK UP service is:
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="pick-fee">
              Fee for student availing ONLY PICK UP service is <span className="text-destructive">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input id="pick-fee" type="number" defaultValue="100" className="max-w-[200px]" />
              <span className="text-sm">% the DROP fee</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="drop-fee">
              Fee for student availing ONLY DROP service is <span className="text-destructive">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input id="drop-fee" type="number" defaultValue="100" className="max-w-[200px]" />
              <span className="text-sm">% the DROP fee</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Select installments on which transport fee will be applied</h3>
          <p className="text-sm text-destructive mb-3">
            *Instalments that are collected/issued for will not be manageable fee
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Label className="font-semibold min-w-[120px]">Fee schedule: (Monthly)</Label>
            </div>
            
            <div className="flex gap-6">
              {installments.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox id={item.id} defaultChecked />
                  <Label htmlFor={item.id} className="cursor-pointer">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {months.map((section) => (
          <div key={section.id} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Label className="font-semibold">{section.label}:</Label>
              <div className="flex gap-4">
                {section.months.map((month, idx) => (
                  <div key={`${section.id}-${idx}`} className="flex items-center gap-2">
                    <Checkbox id={`${section.id}-${idx}`} defaultChecked />
                    <Label htmlFor={`${section.id}-${idx}`} className="cursor-pointer text-sm">
                      {month}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Select months on which transport fee will be applied</h3>
          <p className="text-sm text-destructive mb-3">
            *Months that are collected/issued for will not have transport fee
          </p>
          
          <div className="grid grid-cols-6 gap-4">
            {selectedMonths.map((month) => (
              <div key={month.id} className="flex items-center gap-2">
                <Checkbox id={month.id} defaultChecked />
                <Label htmlFor={month.id} className="cursor-pointer text-sm">
                  {month.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-4">Support Staff</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Staff Name</Label>
              <Label className="font-medium">Staff Mapped</Label>
              <Label className="font-medium">Action</Label>
            </div>
            <div className="flex items-center justify-between bg-muted/30 p-3 rounded">
              <span>Position</span>
              <span>KOONADAKUY</span>
              <Button size="sm" variant="outline" className="text-primary border-primary">
                + ADD STAFF
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button className="bg-primary text-primary-foreground">SAVE</Button>
        </div>
      </Card>
    </div>
  );
}
