import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertRegistrationSchema, type InsertRegistration } from "@shared/schema";
import { CheckCircle2, Star, Zap, Crown } from "lucide-react";

export default function Pricing() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const { toast } = useToast();

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      format: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      return apiRequest("POST", "/api/register", data);
    },
    onSuccess: () => {
      toast({
        title: "Registration Successful!",
        description: "We'll contact you shortly with next steps and payment information.",
      });
      form.reset();
      setDialogOpen(false);
    },
    onError: () => {
      toast({
        title: "Registration Failed",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    registerMutation.mutate(data);
  };

  const handleEnroll = (planName: string) => {
    setSelectedPlan(planName);
    form.setValue("format", planName);
    setDialogOpen(true);
  };

  const plans = [
    {
      name: "Self-Study",
      icon: Star,
      price: "$497",
      period: "one-time",
      description: "Perfect for independent learners who want to learn at their own pace",
      features: [
        "Lifetime access to all course modules",
        "48+ hours of video content",
        "Downloadable resources and templates",
        "Community forum access",
        "Course updates included",
        "30-day money-back guarantee",
      ],
      highlighted: false,
    },
    {
      name: "Group Mentorship",
      icon: Zap,
      price: "$997",
      period: "one-time",
      description: "Best value - Learn alongside other traders with weekly group sessions",
      features: [
        "Everything in Self-Study",
        "8 weekly live group sessions",
        "Q&A with professional mentors",
        "Live trade analysis sessions",
        "Private Discord community",
        "Trading journal review",
        "Lifetime course access",
        "Priority email support",
      ],
      highlighted: true,
    },
    {
      name: "1-on-1 Mentorship",
      icon: Crown,
      price: "$2,497",
      period: "one-time",
      description: "Premium personalized training with dedicated mentor support",
      features: [
        "Everything in Group Mentorship",
        "12 private 1-on-1 sessions",
        "Personalized trading plan",
        "Custom strategy development",
        "Direct mentor access via chat",
        "Portfolio review & optimization",
        "Prop firm preparation",
        "Ongoing support for 6 months",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-pricing">
            Investment in Your Future
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Choose Your Learning Path</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the format that best fits your learning style and goals. All plans include lifetime access to course content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.highlighted ? "border-primary border-2" : ""}`}
              data-testid={`plan-card-${index}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <Button
                  className="w-full mb-6"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => handleEnroll(plan.name)}
                  data-testid={`button-enroll-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Enroll Now
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2" data-testid={`feature-${index}-${featureIndex}`}>
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground">
              We're confident in the quality of our training. If you're not completely satisfied within 30 days of enrollment, we'll provide a full refund—no questions asked.
            </p>
          </div>
        </Card>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help you choose the right program for your trading goals.
          </p>
          <Button variant="outline" asChild data-testid="button-contact-pricing">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent data-testid="dialog-registration">
          <DialogHeader>
            <DialogTitle>Enroll in {selectedPlan}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll send you payment details and onboarding information.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="format"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selected Format</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-format">
                          <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Self-Study">Self-Study - $497</SelectItem>
                        <SelectItem value="Group Mentorship">Group Mentorship - $997</SelectItem>
                        <SelectItem value="1-on-1 Mentorship">1-on-1 Mentorship - $2,497</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={registerMutation.isPending}
                data-testid="button-submit-registration"
              >
                {registerMutation.isPending ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
