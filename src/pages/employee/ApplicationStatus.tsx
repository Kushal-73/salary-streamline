import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, XCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ApplicationStatus = () => {
  const [status] = useState<"pending" | "approved" | "rejected">("approved"); // Can be: "pending", "approved", "rejected"

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          {status === "pending" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10 text-warning" />
                  </div>
                  <CardTitle className="text-3xl">Application Under Review</CardTitle>
                  <CardDescription className="text-lg">
                    Your loan application is being processed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">What's happening?</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Application Received</p>
                          <p className="text-sm text-muted-foreground">Your documents are with our team</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Verification in Progress</p>
                          <p className="text-sm text-muted-foreground">Checking your documents and eligibility</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-muted-foreground">Final Decision</p>
                          <p className="text-sm text-muted-foreground">We'll notify you within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    Our team will reach out to you in the next 24 hours with an update.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {status === "approved" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="text-center border-success">
                <CardHeader>
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </div>
                  <CardTitle className="text-3xl text-success">Loan Approved!</CardTitle>
                  <CardDescription className="text-lg">
                    Congratulations! Your loan has been approved
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-primary rounded-lg p-8 text-white">
                    <p className="text-white/80 mb-2">Approved Amount</p>
                    <p className="text-5xl font-bold mb-6">₹1,50,000</p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                      <div className="text-left">
                        <p className="text-white/70 text-sm mb-1">Monthly EMI</p>
                        <p className="text-2xl font-semibold">₹13,500</p>
                      </div>
                      <div className="text-left">
                        <p className="text-white/70 text-sm mb-1">Tenure</p>
                        <p className="text-2xl font-semibold">12 months</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-6 rounded-lg text-left">
                    <h3 className="font-semibold mb-4">Disbursement Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Account Number</span>
                        <span className="font-medium">XXXX XXXX 1234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bank Name</span>
                        <span className="font-medium">State Bank of India</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processing Fee</span>
                        <span className="font-medium">₹999</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Net Disbursement</span>
                        <span className="font-medium text-success">₹1,49,001</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Funds will be credited to your account within 2-3 working days.</strong>
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-accent" size="lg">
                    View Loan Agreement
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {status === "rejected" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="text-center border-destructive">
                <CardHeader>
                  <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-10 h-10 text-destructive" />
                  </div>
                  <CardTitle className="text-3xl">Application Not Approved</CardTitle>
                  <CardDescription className="text-lg">
                    We're unable to process your loan at this time
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg text-left">
                    <h3 className="font-semibold mb-3">Common Reasons:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Insufficient salary for requested loan amount</li>
                      <li>• Incomplete or unclear documentation</li>
                      <li>• Credit score below required threshold</li>
                      <li>• High existing debt obligations</li>
                    </ul>
                  </div>

                  <p className="text-muted-foreground">
                    Our customer support team will contact you with specific details and suggestions for improvement.
                  </p>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Looking for alternative options?</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check our aggregator platform for offers from other lenders
                    </p>
                    <Button className="w-full bg-gradient-accent">
                      View Alternative Offers
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicationStatus;
