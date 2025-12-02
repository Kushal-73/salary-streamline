import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployerRegister from "./pages/employer/EmployerRegister";
import EmployerLogin from "./pages/employer/EmployerLogin";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployeeLogin from "./pages/employee/EmployeeLogin";
import LoanApplication from "./pages/employee/LoanApplication";
import ApplicationStatus from "./pages/employee/ApplicationStatus";
import NotFound from "./pages/NotFound";
import LoanApproved from "./pages/employee/LoanApproved";
import LoanRejected from "./pages/employee/LoanRejected";
import Services from "./pages/Services";
import CapitalMarket from "./pages/services/CapitalMarket";
import DebtSyndication from "./pages/services/DebtSyndication";
import AuditTaxation from "./pages/services/AuditTaxation";
import FinancialAdvisory from "./pages/services/FinancialAdvisory";
import GstAdvisory from "./pages/services/GstAdvisory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/capital-market" element={<CapitalMarket />} />
          <Route path="/services/debt-syndication" element={<DebtSyndication />} />
          <Route path="/services/audit-taxation" element={<AuditTaxation />} />
          <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
          <Route path="/services/gst-advisory" element={<GstAdvisory />} />
          <Route path="/employer/register" element={<EmployerRegister />} />
          <Route path="/employer/login" element={<EmployerLogin />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/employee/login" element={<EmployeeLogin />} />
          <Route path="/employee/application" element={<LoanApplication />} />
          <Route path="/employee/status" element={<ApplicationStatus />} />
          <Route path="/employee/loan-approved" element={<LoanApproved />} />
          <Route path="/employee/loan-rejected" element={<LoanRejected />} /> 
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
