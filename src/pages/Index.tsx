import { Card } from "@/components/ui/card";
import { Users, TrendingUp, ClipboardList, Calendar } from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Total Students", value: "299", icon: Users, color: "text-info", borderColor: "border-info" },
    { label: "Active Classes", value: "12", icon: Calendar, color: "text-success", borderColor: "border-success" },
    { label: "Assignments", value: "24", icon: ClipboardList, color: "text-warning", borderColor: "border-warning" },
    { label: "Average Grade", value: "88.2%", icon: TrendingUp, color: "text-success", borderColor: "border-success" },
  ];

  return (
    <div className="p-6 space-y-6">
      <Card className="p-6 bg-card shadow-sm">
        <h1 className="text-2xl font-heading font-semibold text-foreground">
          Welcome Back!
        </h1>
        <p className="text-muted-foreground mt-2">
          You have 3 outstanding tasks and a class starting soon.
        </p>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className={`p-6 border-b-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <p className="text-3xl font-heading font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon className={`h-10 w-10 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 shadow-sm">
        <h2 className="text-xl font-heading font-semibold mb-4">Quick Actions</h2>
        <p className="text-muted-foreground">
          Navigate using the sidebar to access different sections of the portal.
        </p>
      </Card>
    </div>
  );
};

export default Index;
