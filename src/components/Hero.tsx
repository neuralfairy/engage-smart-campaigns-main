import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const benefits = [
    "Increase email engagement by 40%",
    "Automate complex drip campaigns",
    "Boost lead conversion rates",
    "Save 10+ hours per week"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cream text-primary mb-6">
              <span className="mr-2">🚀</span>
              #1 Email Marketing Automation Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automate Your
              <span className="text-primary block">Email Marketing</span>
              Like Never Before
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              iEMA (Email Marketing Automation) helps you create personalized, 
              data-driven email campaigns that convert prospects into customers. 
              Increase engagement and revenue with intelligent automation.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 5,000+ businesses worldwide
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-xs font-semibold text-muted-foreground">SALESFORCE</div>
                <div className="text-xs font-semibold text-muted-foreground">HUBSPOT</div>
                <div className="text-xs font-semibold text-muted-foreground">MAILCHIMP</div>
                <div className="text-xs font-semibold text-muted-foreground">ZOHO</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-card rounded-2xl shadow-elegant p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Campaign Performance</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Open Rate</span>
                    <span className="text-primary font-semibold">45.2%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[45%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Click Rate</span>
                    <span className="text-primary font-semibold">12.8%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[25%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Conversion</span>
                    <span className="text-primary font-semibold">8.5%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[17%]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold shadow-elegant">
                +40% ROI
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold shadow-elegant">
                24/7 Automation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;