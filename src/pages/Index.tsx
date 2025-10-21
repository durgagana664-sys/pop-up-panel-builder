import { Card } from "@/components/ui/card";
import { Users, TrendingUp, ClipboardList, Calendar } from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Total Students", value: "299", icon: Users, color: "text-primary" },
    { label: "Active Classes", value: "12", icon: Calendar, color: "text-accent" },
    { label: "Assignments", value: "24", icon: ClipboardList, color: "text-warning" },
    { label: "Average Grade", value: "88.2%", icon: TrendingUp, color: "text-success" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-semibold text-foreground">
          Welcome Back!
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your classes today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-heading font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon className={`h-10 w-10 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-heading font-semibold mb-4">Quick Actions</h2>
        <p className="text-muted-foreground">
          Navigate using the sidebar to access different sections of the portal.
        </p>
      </Card>
    </div>
  );
};

export default Index;
