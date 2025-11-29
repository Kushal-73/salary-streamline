import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Building2, ChevronRight, CheckCircle2 } from "lucide-react";

const steps = [
  { id: 1, title: "Company Details" },
  { id: 2, title: "Agreements" },
  { id: 3, title: "Verification" }
];

const EmployerRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    entityName: "",
    tradeName: "",
    email: "",
    gstin: "",
    pan: "",
    registeredAddress: "",
    udyamNumber: "",
    epfoNumber: "",
    emiDeduction: false,
    nocAgreement: false
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Registration Submitted!",
        description: "Your application is under review. You'll receive login credentials via email within 24 hours.",
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.entityName && formData.email && formData.pan && formData.gstin;
    }
    if (currentStep === 2) {
      return formData.emiDeduction && formData.nocAgreement;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Employer Registration</h1>
            <p className="text-xl text-muted-foreground">
              Join our platform to offer salary-based lending to your employees
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep >= step.id 
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                  </div>
                  <span className="text-sm mt-2 font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-4 transition-all ${
                    currentStep > step.id ? 'bg-primary' : 'bg-secondary'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Company Information"}
                {currentStep === 2 && "Agreements & Consent"}
                {currentStep === 3 && "KYC Verification"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your company details"}
                {currentStep === 2 && "Review and accept the terms"}
                {currentStep === 3 && "Complete your verification to get started"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="entityName">Legal Entity Name *</Label>
                      <Input
                        id="entityName"
                        placeholder="ABC Private Limited"
                        value={formData.entityName}
                        onChange={(e) => handleInputChange("entityName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tradeName">Trade Name</Label>
                      <Input
                        id="tradeName"
                        placeholder="ABC Corp"
                        value={formData.tradeName}
                        onChange={(e) => handleInputChange("tradeName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Registered Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="company@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gstin">GSTIN *</Label>
                      <Input
                        id="gstin"
                        placeholder="22AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) => handleInputChange("gstin", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN *</Label>
                      <Input
                        id="pan"
                        placeholder="AAAAA0000A"
                        value={formData.pan}
                        onChange={(e) => handleInputChange("pan", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Registered Office Address</Label>
                    <Input
                      id="address"
                      placeholder="Full address"
                      value={formData.registeredAddress}
                      onChange={(e) => handleInputChange("registeredAddress", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="udyam">Udyam Registration Number</Label>
                      <Input
                        id="udyam"
                        placeholder="UDYAM-XX-00-0000000"
                        value={formData.udyamNumber}
                        onChange={(e) => handleInputChange("udyamNumber", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="epfo">EPFO Number</Label>
                      <Input
                        id="epfo"
                        placeholder="XXXXX 000 0000000"
                        value={formData.epfoNumber}
                        onChange={(e) => handleInputChange("epfoNumber", e.target.value)}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="emiDeduction"
                      checked={formData.emiDeduction}
                      onCheckedChange={(checked) => handleInputChange("emiDeduction", checked as boolean)}
                    />
                    <div className="flex-1">
                      <label htmlFor="emiDeduction" className="text-sm font-medium cursor-pointer">
                        EMI Deduction Agreement
                      </label>
                      <p className="text-sm text-muted-foreground mt-1">
                        I agree to deduct the EMI amount from the employee's salary and remit it to LendWise as per the agreed schedule.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border rounded-lg">
                    <Checkbox
                      id="nocAgreement"
                      checked={formData.nocAgreement}
                      onCheckedChange={(checked) => handleInputChange("nocAgreement", checked as boolean)}
                    />
                    <div className="flex-1">
                      <label htmlFor="nocAgreement" className="text-sm font-medium cursor-pointer">
                        NOC Agreement
                      </label>
                      <p className="text-sm text-muted-foreground mt-1">
                        I agree to obtain a No Objection Certificate (NOC) from LendWise before accepting resignation from any employee with an active loan.
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Terms & Conditions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>All employee data will be kept confidential</li>
                      <li>Loan disbursement is subject to credit approval</li>
                      <li>Company shall not be liable for individual loan defaults</li>
                      <li>Agreement is valid for 3 years from date of signing</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Registration Complete!</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your application has been submitted successfully. Our team will verify your details and send login credentials to your registered email within 24 hours.
                  </p>
                  <div className="bg-muted p-4 rounded-lg max-w-md mx-auto">
                    <h4 className="font-semibold mb-2">What's Next?</h4>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>✓ Document verification (1-2 hours)</li>
                      <li>✓ KYC completion</li>
                      <li>✓ Dashboard access via email</li>
                      <li>✓ Upload employee data</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-gradient-accent"
                >
                  {currentStep === 3 ? "Finish" : "Next"}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerRegister;
