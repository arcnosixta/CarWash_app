import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Mail, MessageSquare, Clock, Twitter } from "lucide-react";
import { SiDiscord, SiTelegram, SiYoutube } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to Send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "support@smartmoneyacademy.com",
      action: "mailto:support@smartmoneyacademy.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team during business hours",
      contact: "Available Mon-Fri, 9am-6pm EST",
      action: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We aim to respond to all inquiries within",
      contact: "24 hours or less",
      action: null,
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-contact">
            Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question about our courses, mentorship programs, or community? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`contact-method-${index}`}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-md bg-primary/10 mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-sm font-medium text-primary hover:underline"
                    data-testid={`link-${method.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-primary">{method.contact}</p>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} data-testid="input-contact-name" />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how we can help..."
                            className="min-h-[150px]"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-muted-foreground mb-8">
              Follow us on social media for daily trading insights, market analysis, and community updates.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="p-6 hover-elevate">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                  data-testid="link-social-discord"
                >
                  <div className="p-3 rounded-md bg-[#5865F2]/10">
                    <SiDiscord className="h-6 w-6 text-[#5865F2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Discord Community</h3>
                    <p className="text-sm text-muted-foreground">Join 5,000+ traders</p>
                  </div>
                </a>
              </Card>

              <Card className="p-6 hover-elevate">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                  data-testid="link-social-telegram"
                >
                  <div className="p-3 rounded-md bg-[#0088cc]/10">
                    <SiTelegram className="h-6 w-6 text-[#0088cc]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Telegram Channel</h3>
                    <p className="text-sm text-muted-foreground">Real-time market alerts</p>
                  </div>
                </a>
              </Card>

              <Card className="p-6 hover-elevate">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                  data-testid="link-social-twitter"
                >
                  <div className="p-3 rounded-md bg-primary/10">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Twitter / X</h3>
                    <p className="text-sm text-muted-foreground">Daily market insights</p>
                  </div>
                </a>
              </Card>

              <Card className="p-6 hover-elevate">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                  data-testid="link-social-youtube"
                >
                  <div className="p-3 rounded-md bg-destructive/10">
                    <SiYoutube className="h-6 w-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">YouTube Channel</h3>
                    <p className="text-sm text-muted-foreground">Free trading tutorials</p>
                  </div>
                </a>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available during the following hours:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday - Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
