import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Mail, Users } from "lucide-react";

const ROICalculator = () => {
  const [emailList, setEmailList] = useState(5000);
  const [emailsPerMonth, setEmailsPerMonth] = useState(12);
  const [currentOpenRate, setCurrentOpenRate] = useState(18);
  const [avgOrderValue, setAvgOrderValue] = useState(150);

  // Calculations
  const totalEmails = emailList * emailsPerMonth;
  const currentOpens = Math.round(totalEmails * (currentOpenRate / 100));
  const improvedOpenRate = Math.min(currentOpenRate * 1.4, 60); // 40% improvement cap at 60%
  const improvedOpens = Math.round(totalEmails * (improvedOpenRate / 100));
  const additionalOpens = improvedOpens - currentOpens;
  const conversionRate = 0.02; // 2% conversion rate
  const additionalConversions = Math.round(additionalOpens * conversionRate);
  const monthlyROI = additionalConversions * avgOrderValue;
  const yearlyROI = monthlyROI * 12;
  const investmentCost = 299 * 12; // Annual cost
  const netROI = yearlyROI - investmentCost;
  const roiPercentage = Math.round(((netROI / investmentCost) * 100));

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            <Calculator className="mr-2 h-4 w-4" />
            ROI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your iEMA ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much revenue you could generate with improved email automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Your Current Email Metrics</CardTitle>
              <CardDescription>
                Enter your current email marketing data to calculate potential ROI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="emailList">Email List Size</Label>
                <Input
                  id="emailList"
                  type="number"
                  value={emailList}
                  onChange={(e) => setEmailList(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="emailsPerMonth">Emails per Month</Label>
                <Input
                  id="emailsPerMonth"
                  type="number"
                  value={emailsPerMonth}
                  onChange={(e) => setEmailsPerMonth(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="currentOpenRate">Current Open Rate (%)</Label>
                <Input
                  id="currentOpenRate"
                  type="number"
                  value={currentOpenRate}
                  onChange={(e) => setCurrentOpenRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="avgOrderValue">Average Order Value ($)</Label>
                <Input
                  id="avgOrderValue"
                  type="number"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-soft bg-gradient-secondary">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Your Projected Results
              </CardTitle>
              <CardDescription>
                With iEMA's 40% improvement in email engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    {improvedOpenRate.toFixed(1)}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Improved Open Rate
                  </div>
                </div>
                
                <div className="text-center p-4 bg-card rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    +{additionalOpens.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Additional Opens/Month
                  </div>
                </div>
              </div>

              {/* ROI Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Additional Conversions/Month:</span>
                  <span className="font-semibold">{additionalConversions}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Monthly Revenue Increase:</span>
                  <span className="font-semibold text-primary">
                    ${monthlyROI.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Annual Revenue Increase:</span>
                  <span className="font-semibold text-primary">
                    ${yearlyROI.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Annual iEMA Cost:</span>
                  <span className="font-semibold">
                    ${investmentCost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Final ROI */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {roiPercentage}% ROI
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Net Annual Return: ${netROI.toLocaleString()}
                </div>
                <Button variant="hero" className="w-full">
                  Start Your Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;