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
import TransportBasics from "./pages/transport/TransportBasics";
import Vehicles from "./pages/transport/Vehicles";
import Stops from "./pages/transport/Stops";
import RoutesPage from "./pages/transport/Routes";
import VehicleTripMapping from "./pages/transport/VehicleTripMapping";
import StudentRouteMapping from "./pages/transport/StudentRouteMapping";
import FeeConfiguration from "./pages/fee/FeeConfiguration";
import FeeBasics from "./pages/fee/FeeBasics";
import ClasswiseFee from "./pages/fee/ClasswiseFee";
import StudentwiseFee from "./pages/fee/StudentwiseFee";
import ScheduleMapper from "./pages/fee/ScheduleMapper";
import RefundFee from "./pages/fee/RefundFee";
import FeeReceipts from "./pages/fee/FeeReceipts";
import PendingCheques from "./pages/fee/PendingCheques";
import FeeInvoice from "./pages/fee/FeeInvoice";
import FeeReports from "./pages/fee/FeeReports";
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
            <Route path="/transport/basics" element={<TransportBasics />} />
            <Route path="/transport/vehicles" element={<Vehicles />} />
            <Route path="/transport/stops" element={<Stops />} />
            <Route path="/transport/routes" element={<RoutesPage />} />
            <Route path="/transport/vehicle-trip-mapping" element={<VehicleTripMapping />} />
            <Route path="/transport/student-route-mapping" element={<StudentRouteMapping />} />
            <Route path="/fee/configuration" element={<FeeConfiguration />} />
            <Route path="/fee/basics" element={<FeeBasics />} />
            <Route path="/fee/class-wise" element={<ClasswiseFee />} />
            <Route path="/fee/student-wise" element={<StudentwiseFee />} />
            <Route path="/fee/schedule-mapper" element={<ScheduleMapper />} />
            <Route path="/fee/refund" element={<RefundFee />} />
            <Route path="/fee/receipts" element={<FeeReceipts />} />
            <Route path="/fee/pending-cheques" element={<PendingCheques />} />
            <Route path="/fee/invoice" element={<FeeInvoice />} />
            <Route path="/fee/reports" element={<FeeReports />} />
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
