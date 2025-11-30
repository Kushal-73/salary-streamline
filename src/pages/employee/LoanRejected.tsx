import { motion } from "framer-motion";
import { XCircle, FileX, AlertTriangle, ExternalLink, RefreshCw, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoanRejected = () => {
  const navigate = useNavigate();
  const [rejectionReason] = useState<"documents" | "credibility">("credibility");
  
  // Sample aggregator offers
  const aggregatorOffers = [
    { bank: "HDFC Bank", rate: 13.5, amount: 300000, tenure: 24 },
    { bank: "ICICI Bank", rate: 14.0, amount: 250000, tenure: 18 },
    { bank: "Bajaj Finserv", rate: 15.5, amount: 400000, tenure: 36 },
    { bank: "Tata Capital", rate: 14.5, amount: 350000, tenure: 24 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
            <CardHeader className="text-center pb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-4"
              >
                <XCircle className="w-12 h-12 text-destructive" />
              </motion.div>
              <CardTitle className="text-3xl font-display text-foreground mb-2">
                Application Not Approved
              </CardTitle>
              <CardDescription className="text-base">
                We regret to inform you that we are unable to process your loan application at this time.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {rejectionReason === "documents" ? (
                <div className="bg-warning/5 rounded-lg p-6 border border-warning/20">
                  <div className="flex gap-3 mb-4">
                    <FileX className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Document Verification Issues</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        There are some discrepancies in the documents you've submitted. Our customer support team 
                        will reach out to you within 24 hours to help rectify these issues.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Common issues found:</p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                          <li>• Salary slips not matching the format requirements</li>
                          <li>• Bank statements showing insufficient transaction history</li>
                          <li>• Document quality or clarity issues</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Resubmit Documents
                  </Button>
                </div>
              ) : (
                <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
                  <div className="flex gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Insufficient Credibility</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on our internal assessment of your financial profile and credit history, 
                        we are unable to offer you a loan at this time.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground">Alternative Options Available</h4>
                  <Badge variant="secondary">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Don't worry! You can explore better options through our Aggregator Platform. 
                  We've partnered with multiple banks and NBFCs to help you find the right loan offer.
                </p>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open('https://fintech-aggregator.netlify.app/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Explore Aggregator Platform
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Need Help?</h4>
                <p className="text-sm text-muted-foreground">
                  Our customer support team is here to assist you with any questions or concerns.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = 'tel:1800-XXX-XXXX'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Customer Support
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-display">Available Loan Offers</CardTitle>
              <CardDescription>
                Here are some alternative offers from our partner banks and NBFCs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {aggregatorOffers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-semibold text-foreground">{offer.bank}</h5>
                      <p className="text-sm text-muted-foreground">Personal Loan</p>
                    </div>
                    <Badge variant="outline">{offer.rate}% p.a.</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-medium text-foreground">₹{offer.amount.toLocaleString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tenure</p>
                      <p className="font-medium text-foreground">{offer.tenure} months</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">EMI</p>
                      <p className="font-medium text-foreground">
                        ₹{Math.round((offer.amount * offer.rate) / (12 * 100) + offer.amount / offer.tenure).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                View All Offers
              </Button>
            </CardContent>
          </Card>

          <Button 
            onClick={() => navigate("/employee/status")} 
            variant="ghost" 
            className="w-full"
          >
            Back to Status
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LoanRejected;
