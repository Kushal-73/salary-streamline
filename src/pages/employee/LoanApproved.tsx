import { motion } from "framer-motion";
import { CheckCircle, Calendar, DollarSign, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const LoanApproved = () => {
  const navigate = useNavigate();
  
  // Sample loan details
  const loanDetails = {
    amount: 500000,
    tenure: 24,
    emi: 23500,
    interestRate: 12.5,
    disbursementDate: "2025-12-05",
    accountNumber: "****5678"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-success/20 bg-gradient-to-br from-success/5 to-background">
            <CardHeader className="text-center pb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-4"
              >
                <CheckCircle className="w-12 h-12 text-success" />
              </motion.div>
              <CardTitle className="text-3xl font-display text-success mb-2">
                Loan Approved!
              </CardTitle>
              <CardDescription className="text-base">
                Congratulations! Your loan application has been approved.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <DollarSign className="w-4 h-4" />
                      <span>Loan Amount</span>
                    </div>
                    <p className="text-3xl font-display text-foreground">
                      ₹{loanDetails.amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Tenure</span>
                    </div>
                    <p className="text-3xl font-display text-foreground">
                      {loanDetails.tenure} months
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Monthly EMI</span>
                  </div>
                  <p className="text-4xl font-display text-primary">
                    ₹{loanDetails.emi.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Disbursement Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-medium text-foreground">{loanDetails.interestRate}% per annum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Disbursement Date</span>
                    <span className="font-medium text-foreground">{loanDetails.disbursementDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Account Number</span>
                    <span className="font-medium text-foreground">{loanDetails.accountNumber}</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground">
                  The loan amount will be disbursed directly to your registered bank account within 24-48 hours. 
                  Your first EMI will be deducted automatically on the 5th of next month through eNACH mandate.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={() => navigate("/employee/status")} 
                  variant="outline" 
                  className="flex-1"
                >
                  Back to Status
                </Button>
                <Button className="flex-1">
                  Download Agreement
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LoanApproved;
