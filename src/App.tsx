import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import StudentDownloadStatus from "./pages/StudentDownloadStatus";
import StaffDownloadStatus from "./pages/StaffDownloadStatus";
import ParentDownloadStatus from "./pages/ParentDownloadStatus";
import StudentActivity from "./pages/StudentActivity";
import ParentActivity from "./pages/ParentActivity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/assignment" element={<Index />} />
            <Route path="/timetable" element={<Index />} />
            <Route path="/students" element={<Index />} />
            <Route path="/download-stats/student" element={<StudentDownloadStatus />} />
            <Route path="/download-stats/staff" element={<StaffDownloadStatus />} />
            <Route path="/download-stats/parent" element={<ParentDownloadStatus />} />
            <Route path="/download-stats/student-activity" element={<StudentActivity />} />
            <Route path="/download-stats/parent-activity" element={<ParentActivity />} />
            <Route path="/fee-management" element={<Index />} />
            <Route path="/transport" element={<Index />} />
            <Route path="/id-cards" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
