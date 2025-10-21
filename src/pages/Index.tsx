import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
  });

  const handleToggleChange = (key: string, value: boolean) => {
    setToggles((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Open Form
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Configuration Panel</DialogTitle>
            <DialogDescription className="text-base">
              Configure your settings using the dropdowns and toggles below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Dropdowns Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-semibold text-primary">Dropdown Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dropdown 1 */}
                <div className="space-y-2">
                  <Label htmlFor="dropdown1" className="font-medium">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger id="dropdown1" className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Electronics</SelectItem>
                      <SelectItem value="option2">Clothing</SelectItem>
                      <SelectItem value="option3">Home & Garden</SelectItem>
                      <SelectItem value="option4">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dropdown 2 */}
                <div className="space-y-2">
                  <Label htmlFor="dropdown2" className="font-medium">
                    Priority Level
                  </Label>
                  <Select>
                    <SelectTrigger id="dropdown2" className="w-full">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dropdown 3 */}
                <div className="space-y-2">
                  <Label htmlFor="dropdown3" className="font-medium">
                    Status
                  </Label>
                  <Select>
                    <SelectTrigger id="dropdown3" className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dropdown 4 */}
                <div className="space-y-2">
                  <Label htmlFor="dropdown4" className="font-medium">
                    Region
                  </Label>
                  <Select>
                    <SelectTrigger id="dropdown4" className="w-full">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North America</SelectItem>
                      <SelectItem value="south">South America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia Pacific</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Toggles Section */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-heading font-semibold text-primary">Toggle Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Toggle 1 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="space-y-0.5">
                    <Label htmlFor="toggle1" className="font-medium text-base cursor-pointer">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    id="toggle1"
                    checked={toggles.toggle1}
                    onCheckedChange={(checked) => handleToggleChange("toggle1", checked)}
                  />
                </div>

                {/* Toggle 2 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="space-y-0.5">
                    <Label htmlFor="toggle2" className="font-medium text-base cursor-pointer">
                      Auto-save
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save changes
                    </p>
                  </div>
                  <Switch
                    id="toggle2"
                    checked={toggles.toggle2}
                    onCheckedChange={(checked) => handleToggleChange("toggle2", checked)}
                  />
                </div>

                {/* Toggle 3 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="space-y-0.5">
                    <Label htmlFor="toggle3" className="font-medium text-base cursor-pointer">
                      Dark Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark theme
                    </p>
                  </div>
                  <Switch
                    id="toggle3"
                    checked={toggles.toggle3}
                    onCheckedChange={(checked) => handleToggleChange("toggle3", checked)}
                  />
                </div>

                {/* Toggle 4 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="space-y-0.5">
                    <Label htmlFor="toggle4" className="font-medium text-base cursor-pointer">
                      Analytics Tracking
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Allow data collection
                    </p>
                  </div>
                  <Switch
                    id="toggle4"
                    checked={toggles.toggle4}
                    onCheckedChange={(checked) => handleToggleChange("toggle4", checked)}
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
