import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, MessageSquare, Video, TrendingUp, Award, Zap, Globe, Calendar } from "lucide-react";
import { SiDiscord, SiTelegram } from "react-icons/si";

export default function Community() {
  const features = [
    {
      icon: MessageSquare,
      title: "Daily Market Analysis",
      description: "Professional traders share daily market breakdowns, key levels, and trading opportunities across all major markets.",
    },
    {
      icon: TrendingUp,
      title: "Live Trade Ideas",
      description: "Real-time trade setups shared with entry points, stop losses, and profit targets based on Smart Money analysis.",
    },
    {
      icon: Video,
      title: "Weekly Live Sessions",
      description: "Interactive sessions covering market structure, current opportunities, and member Q&A with professional mentors.",
    },
    {
      icon: Award,
      title: "Trade Reviews",
      description: "Get your trades reviewed by experienced mentors and receive constructive feedback to improve your performance.",
    },
    {
      icon: Zap,
      title: "Strategy Discussion",
      description: "Collaborate with fellow traders to refine strategies, share insights, and learn from each other's experiences.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with traders from over 50 countries, exchange perspectives, and build lasting trading relationships.",
    },
  ];

  const channels = [
    { name: "General Discussion", description: "Connect with fellow traders and share experiences", members: "5,000+" },
    { name: "Trade Setups", description: "Share and discuss high-probability trading opportunities", members: "4,200+" },
    { name: "Chart Analysis", description: "Post charts for feedback and community analysis", members: "3,800+" },
    { name: "News & Events", description: "Stay updated on economic events and market news", members: "4,500+" },
    { name: "Resources", description: "Access trading tools, templates, and educational materials", members: "3,200+" },
    { name: "Success Stories", description: "Celebrate wins and milestones with the community", members: "2,900+" },
  ];

  const stats = [
    { value: "5,000+", label: "Active Members" },
    { value: "24/7", label: "Community Support" },
    { value: "50+", label: "Countries" },
    { value: "1,000+", label: "Weekly Messages" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-community">
            Exclusive Community
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Trading Community</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of like-minded traders, share insights, get real-time support, and accelerate your trading journey together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-to-br from-primary/5 to-transparent" data-testid={`stat-${index}`}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-[#5865F2]/5 to-transparent border-[#5865F2]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-md bg-[#5865F2]/10">
                <SiDiscord className="h-8 w-8 text-[#5865F2]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Discord Server</h3>
                <p className="text-sm text-muted-foreground">Primary trading community hub</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Our Discord server is the heart of our community. Access organized channels for different topics, participate in voice calls, and get real-time notifications for important market events.
            </p>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">5,000+ active members</span>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[#0088cc]/5 to-transparent border-[#0088cc]/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-md bg-[#0088cc]/10">
                <SiTelegram className="h-8 w-8 text-[#0088cc]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Telegram Channel</h3>
                <p className="text-sm text-muted-foreground">Quick updates and alerts</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Get instant market alerts, breaking news, and time-sensitive trading opportunities delivered straight to your phone. Perfect for traders who need real-time updates on the go.
            </p>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">Real-time market alerts</span>
            </div>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`feature-card-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Discord Channels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6" data-testid={`channel-card-${index}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <h3 className="font-semibold">{channel.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{channel.members} members</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="p-12 bg-gradient-to-br from-primary/10 to-transparent text-center">
          <Calendar className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Weekly Community Events</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join live trading sessions every week where mentors analyze markets in real-time, answer questions, and guide the community through current opportunities.
          </p>
          <div className="space-y-3 max-w-md mx-auto mb-8">
            <div className="text-left p-4 bg-background/50 rounded-md">
              <div className="font-semibold mb-1">Monday Market Preview</div>
              <div className="text-sm text-muted-foreground">Week ahead analysis and key levels</div>
            </div>
            <div className="text-left p-4 bg-background/50 rounded-md">
              <div className="font-semibold mb-1">Wednesday Live Trading</div>
              <div className="text-sm text-muted-foreground">Watch pros execute trades in real-time</div>
            </div>
            <div className="text-left p-4 bg-background/50 rounded-md">
              <div className="font-semibold mb-1">Friday Member Q&A</div>
              <div className="text-sm text-muted-foreground">Ask anything about trading and strategies</div>
            </div>
          </div>
          <Link href="/pricing">
            <Button size="lg" className="text-lg px-8" data-testid="button-join-community">
              Join the Community
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
