import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Calculator, Upload, CheckCircle2, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const LoanApplication = () => {
  const [step, setStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [tenure, setTenure] = useState(12);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    state: "",
    city: "",
    pincode: "",
    street: "",
    landmark: ""
  });
  const [permanentAddress, setPermanentAddress] = useState({
    state: "",
    city: "",
    pincode: "",
    street: "",
    landmark: ""
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const calculateEMI = () => {
    const rate = 12 / 12 / 100; // 12% annual rate
    const emi = (loanAmount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    return Math.round(emi);
  };

  const handleCorrespondenceAddressChange = (field, value) => {
    const updatedAddress = {
      ...correspondenceAddress,
      [field]: value
    };
    setCorrespondenceAddress(updatedAddress);
    
    // If same address is checked, update permanent address too
    if (isSameAddress) {
      setPermanentAddress(updatedAddress);
    }
  };

  const handlePermanentAddressChange = (field, value) => {
    setPermanentAddress({
      ...permanentAddress,
      [field]: value
    });
  };

  const handleSameAddressChange = (checked) => {
    setIsSameAddress(checked);
    if (checked) {
      // Copy correspondence address to permanent address
      setPermanentAddress(correspondenceAddress);
    } else {
      // Clear permanent address when unchecked
      setPermanentAddress({
        state: "",
        city: "",
        pincode: "",
        street: "",
        landmark: ""
      });
    }
  };

  const handleSendOtp = () => {
    // Simulate OTP sending
    setIsOtpSent(true);
    setIsOtpVerified(false);
    setOtpCountdown(30);
    
    // Start countdown timer
    const timer = setInterval(() => {
      setOtpCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "OTP Sent!",
      description: "Verification code has been sent to your registered mobile number.",
    });
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification
    if (otp.length === 6) {
      setIsOtpVerified(true);
      toast({
        title: "OTP Verified!",
        description: "Your account has been successfully verified.",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
        variant: "destructive",
      });
    }
  };

  const handleResendOtp = () => {
    handleSendOtp();
    toast({
      title: "OTP Resent!",
      description: "New verification code has been sent to your registered mobile number.",
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted!",
      description: "Your loan application is under review. We'll contact you within 24 hours.",
    });
    navigate("/employee/status");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Loan Application</h1>
            <p className="text-xl text-muted-foreground">Complete your application in simple steps</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Your details will be auto-filled from PAN</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input id="pan" placeholder="ABCDE1234F" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Auto-filled from PAN" disabled />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" disabled />
                      </div>
                    </div>

                    {/* Correspondence Address Section */}
                    <div className="space-y-4 pt-4 border-t">
                      <Label className="text-lg font-semibold">Correspondence Address</Label>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input 
                            id="state" 
                            placeholder="Enter state" 
                            value={correspondenceAddress.state}
                            onChange={(e) => handleCorrespondenceAddressChange("state", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city" 
                            placeholder="Enter city" 
                            value={correspondenceAddress.city}
                            onChange={(e) => handleCorrespondenceAddressChange("city", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input 
                            id="pincode" 
                            placeholder="Enter pincode" 
                            value={correspondenceAddress.pincode}
                            onChange={(e) => handleCorrespondenceAddressChange("pincode", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Input 
                          id="street" 
                          placeholder="Enter street address" 
                          value={correspondenceAddress.street}
                          onChange={(e) => handleCorrespondenceAddressChange("street", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="landmark">Landmark (Optional)</Label>
                        <Input 
                          id="landmark" 
                          placeholder="Enter nearby landmark" 
                          value={correspondenceAddress.landmark}
                          onChange={(e) => handleCorrespondenceAddressChange("landmark", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Permanent Address Section */}
                    <div className="space-y-4 pt-4 border-t">
                      <Label className="text-lg font-semibold">Permanent Address</Label>

                      <div className="flex items-center space-x-2 mb-4">
                        <Checkbox 
                          id="sameAddress" 
                          checked={isSameAddress}
                          onCheckedChange={handleSameAddressChange}
                        />
                        <Label 
                          htmlFor="sameAddress" 
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          Same as correspondence address
                        </Label>
                      </div>

                      {!isSameAddress && (
                        <>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="permanentState">State</Label>
                              <Input 
                                id="permanentState" 
                                placeholder="Enter state" 
                                value={permanentAddress.state}
                                onChange={(e) => handlePermanentAddressChange("state", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="permanentCity">City</Label>
                              <Input 
                                id="permanentCity" 
                                placeholder="Enter city" 
                                value={permanentAddress.city}
                                onChange={(e) => handlePermanentAddressChange("city", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="permanentPincode">Pincode</Label>
                              <Input 
                                id="permanentPincode" 
                                placeholder="Enter pincode" 
                                value={permanentAddress.pincode}
                                onChange={(e) => handlePermanentAddressChange("pincode", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="permanentStreet">Street Address</Label>
                            <Input 
                              id="permanentStreet" 
                              placeholder="Enter street address" 
                              value={permanentAddress.street}
                              onChange={(e) => handlePermanentAddressChange("street", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="permanentLandmark">Landmark (Optional)</Label>
                            <Input 
                              id="permanentLandmark" 
                              placeholder="Enter nearby landmark" 
                              value={permanentAddress.landmark}
                              onChange={(e) => handlePermanentAddressChange("landmark", e.target.value)}
                            />
                          </div>
                        </>
                      )}

                      {isSameAddress && (
                        <div className="bg-muted rounded-lg p-4 space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium">State:</span>
                              <p className="text-muted-foreground mt-1">{correspondenceAddress.state || "Not provided"}</p>
                            </div>
                            <div>
                              <span className="font-medium">City:</span>
                              <p className="text-muted-foreground mt-1">{correspondenceAddress.city || "Not provided"}</p>
                            </div>
                            <div>
                              <span className="font-medium">Pincode:</span>
                              <p className="text-muted-foreground mt-1">{correspondenceAddress.pincode || "Not provided"}</p>
                            </div>
                            <div>
                              <span className="font-medium">Street:</span>
                              <p className="text-muted-foreground mt-1">{correspondenceAddress.street || "Not provided"}</p>
                            </div>
                            {correspondenceAddress.landmark && (
                              <div className="md:col-span-2">
                                <span className="font-medium">Landmark:</span>
                                <p className="text-muted-foreground mt-1">{correspondenceAddress.landmark}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <Button onClick={() => setStep(2)} className="w-full bg-gradient-accent">
                      Next: Upload Documents
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )}

              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Document Upload</CardTitle>
                    <CardDescription>Please upload the required documents</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Salary Slips (Last 3 months)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Bank Statements (Last 3 months)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                        Previous
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-1 bg-gradient-accent">
                        Next: Banking Details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Banking Details</CardTitle>
                    <CardDescription>For loan disbursement and EMI deduction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ifsc">IFSC Code</Label>
                        <Input id="ifsc" placeholder="SBIN0001234" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bank">Bank Name</Label>
                        <Input id="bank" placeholder="Auto-filled" disabled />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="account">Account Number</Label>
                      <Input id="account" placeholder="Enter account number" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm">Confirm Account Number</Label>
                      <Input id="confirm" placeholder="Re-enter account number" />
                    </div>

                    {/* OTP Verification Section */}
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-3">
                        <Label className="text-lg font-semibold">Account Verification</Label>
                        <p className="text-sm text-muted-foreground">
                          OTP will be sent to your registered mobile number for account verification and eNACH mandate
                        </p>
                        
                        {!isOtpSent ? (
                          <Button 
                            onClick={handleSendOtp} 
                            variant="outline" 
                            className="w-full"
                          >
                            Send OTP to Registered Mobile
                          </Button>
                        ) : (
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label htmlFor="otp">Enter OTP</Label>
                              <div className="flex gap-2">
                                <Input 
                                  id="otp"
                                  type="text"
                                  placeholder="Enter 6-digit OTP"
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                  className="flex-1"
                                  disabled={isOtpVerified}
                                />
                                {!isOtpVerified && (
                                  <Button 
                                    onClick={handleVerifyOtp}
                                    className="bg-gradient-accent"
                                    disabled={otp.length !== 6}
                                  >
                                    Verify
                                  </Button>
                                )}
                              </div>
                            </div>

                            {!isOtpVerified && (
                              <div className="flex justify-between items-center">
                                <p className="text-sm text-muted-foreground">
                                  {otpCountdown > 0 
                                    ? `Resend OTP in ${otpCountdown}s`
                                    : "Didn't receive OTP?"
                                  }
                                </p>
                                <Button
                                  variant="link"
                                  onClick={handleResendOtp}
                                  disabled={otpCountdown > 0}
                                  className="p-0 h-auto"
                                >
                                  Resend OTP
                                </Button>
                              </div>
                            )}

                            {isOtpVerified && (
                              <div className="flex items-center gap-2 text-success text-sm">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>OTP verified successfully</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={`rounded-lg p-4 ${
                      isOtpVerified 
                        ? 'bg-success/10 border border-success/20' 
                        : 'bg-muted border border-border'
                    }`}>
                      <div className={`flex items-center gap-2 mb-2 ${
                        isOtpVerified ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-semibold">eNACH Mandate</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {isOtpVerified 
                          ? "You have successfully authorized automatic EMI deduction via eNACH"
                          : "By proceeding, you authorize automatic EMI deduction via eNACH. OTP verification is required."
                        }
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                        Previous
                      </Button>
                      <Button 
                        onClick={() => setStep(4)} 
                        className="flex-1 bg-gradient-accent"
                        disabled={!isOtpVerified}
                      >
                        Next: Loan Amount
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {step === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Loan Details</CardTitle>
                    <CardDescription>Choose your loan amount and tenure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label>Loan Amount</Label>
                        <span className="text-2xl font-bold text-primary">₹{loanAmount.toLocaleString()}</span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        min={50000}
                        max={500000}
                        step={10000}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>₹50,000</span>
                        <span>₹5,00,000</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label>Tenure</Label>
                        <span className="text-2xl font-bold text-primary">{tenure} months</span>
                      </div>
                      <Slider
                        value={[tenure]}
                        onValueChange={(value) => setTenure(value[0])}
                        min={6}
                        max={36}
                        step={6}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>6 months</span>
                        <span>36 months</span>
                      </div>
                    </div>

                    <div className="bg-gradient-primary rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/80">Monthly EMI</span>
                        <span className="text-3xl font-bold">₹{calculateEMI().toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                        <div>
                          <p className="text-white/70 text-sm">Interest Rate</p>
                          <p className="font-semibold">12% p.a.</p>
                        </div>
                        <div>
                          <p className="text-white/70 text-sm">Processing Fee</p>
                          <p className="font-semibold">₹999</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button onClick={() => setStep(3)} variant="outline" className="flex-1">
                        Previous
                      </Button>
                      <Button onClick={handleSubmit} className="flex-1 bg-gradient-accent">
                        Submit Application
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Eligibility Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Monthly Salary</Label>
                    <Input type="number" placeholder="Enter your salary" />
                  </div>
                  <div className="space-y-2">
                    <Label>Existing EMIs</Label>
                    <Input type="number" placeholder="Total monthly EMIs" />
                  </div>
                  <Button className="w-full" variant="outline">Calculate Eligibility</Button>
                  
                  <div className="bg-muted rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Maximum Eligible Amount</p>
                    <p className="text-2xl font-bold text-success">₹2,50,000</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Application Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { label: "Personal Info", completed: step > 1 },
                      { label: "Documents", completed: step > 2 },
                      { label: "Banking", completed: step > 3 },
                      { label: "Loan Details", completed: step > 4 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                          item.completed ? 'bg-success text-white' : 'bg-secondary text-muted-foreground'
                        }`}>
                          {item.completed ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                        </div>
                        <span className={item.completed ? 'text-foreground' : 'text-muted-foreground'}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;