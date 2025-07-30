import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "5,000+" },
    { label: "Emails Sent", value: "500M+" },
    { label: "Years of Experience", value: "8+" },
    { label: "Team Members", value: "50+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We're constantly pushing the boundaries of email marketing automation technology."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer support."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering businesses worldwide to connect with their audiences more effectively."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Marketing at TechCorp with 15+ years in email marketing automation.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Previously lead engineer at major SaaS companies, expert in scalable automation systems.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Dedicated to ensuring every customer achieves their email marketing goals.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Thompson",
      role: "Head of Product",
      bio: "15 years of product management experience in marketing technology.",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <Badge variant="outline" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Revolutionizing Email Marketing
              <span className="text-primary block">One Automation at a Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2016, Artificialintelligencebits Solutions has been at the forefront of email marketing automation, 
              helping businesses of all sizes create meaningful connections with their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To democratize sophisticated email marketing automation, making it accessible and effective 
                  for businesses of all sizes. We believe every business deserves the tools to build 
                  meaningful relationships with their customers.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Through our iEMA platform, we're not just providing software – we're empowering businesses 
                  to tell their stories, nurture relationships, and drive growth through intelligent automation.
                </p>
                <Button variant="hero">
                  Learn More About iEMA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <Card className="shadow-elegant">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                        <span className="text-primary font-semibold">98.5%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[98%]"></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Platform Uptime</span>
                        <span className="text-primary font-semibold">99.9%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[99%]"></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Customer Retention</span>
                        <span className="text-primary font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The experts behind iEMA's innovation and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: "2016", title: "Company Founded", description: "Started with a vision to simplify email marketing automation" },
                { year: "2018", title: "First 1,000 Customers", description: "Reached our first major customer milestone" },
                { year: "2020", title: "iEMA Platform Launch", description: "Launched our flagship email marketing automation platform" },
                { year: "2022", title: "International Expansion", description: "Expanded operations to serve customers globally" },
                { year: "2024", title: "AI Integration", description: "Integrated advanced AI capabilities for smarter automation" }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Become part of the growing community of businesses using iEMA to transform their email marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;