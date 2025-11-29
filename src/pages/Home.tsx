import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Zap, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Salary-Based Lending Made Simple
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Empowering employees with instant access to funds. Partner with us to offer financial wellness to your workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/employer/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Employer Registration
                </Button>
              </Link>
              <Link to="/employee/login">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                  Employee Login
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose LendWise?</h2>
            <p className="text-xl text-muted-foreground">Built for modern workplaces</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Processing",
                description: "Applications processed within 24 hours with automated verification"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Compliant",
                description: "Bank-grade security with full regulatory compliance"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Employee Friendly",
                description: "Simple application process with flexible repayment options"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to get started</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Partner Registration",
                description: "Employers register and upload employee details securely"
              },
              {
                step: "02",
                title: "Employee Application",
                description: "Employees receive invites and apply with minimal documentation"
              },
              {
                step: "03",
                title: "Instant Approval",
                description: "Automated processing and instant fund disbursement"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Benefits for Employers</h2>
              <div className="space-y-4">
                {[
                  "Enhance employee satisfaction and retention",
                  "Zero cost implementation and maintenance",
                  "Automated EMI deduction from salary",
                  "Detailed dashboard and reporting"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/employer/register">
                <Button size="lg" className="mt-8 bg-gradient-accent">
                  Register Your Company
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-primary text-white">
                <h3 className="text-2xl font-bold mb-6">For Employees</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Clock className="w-5 h-5" />, text: "Quick approval in 24 hours" },
                    { icon: <TrendingUp className="w-5 h-5" />, text: "Competitive interest rates" },
                    { icon: <Shield className="w-5 h-5" />, text: "No hidden charges" },
                    { icon: <Zap className="w-5 h-5" />, text: "Flexible tenure options" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of companies already providing financial wellness to their employees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/employer/register">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                  Employer Registration
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white hover:bg-white/90">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
