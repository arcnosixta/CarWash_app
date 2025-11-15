import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "wouter";
import { TrendingUp, DollarSign, Calendar, Quote } from "lucide-react";

export default function SuccessStories() {
  const stories = [
    {
      name: "James Patterson",
      initials: "JP",
      role: "Full-Time Trader",
      timeframe: "6 months",
      initialCapital: "$5,000",
      currentProfit: "$42,500",
      winRate: "78%",
      testimony: "Smart Money Academy completely transformed my trading. I went from losing money consistently to making more in 6 months than my entire year's salary. The mentors' approach to market structure and liquidity is unlike anything I've seen. Best investment I've ever made.",
      achievement: "Quit corporate job to trade full-time",
    },
    {
      name: "Michelle Torres",
      initials: "MT",
      role: "Swing Trader",
      timeframe: "8 months",
      initialCapital: "$10,000",
      currentProfit: "$67,300",
      winRate: "82%",
      testimony: "After years of struggling with traditional technical analysis, the Smart Money concepts finally made everything click. The institutional order flow analysis taught here is absolutely game-changing. I'm now consistently profitable and have grown my account by over 600%.",
      achievement: "Achieved financial independence",
    },
    {
      name: "Robert Kim",
      initials: "RK",
      role: "Day Trader",
      timeframe: "4 months",
      initialCapital: "$15,000",
      currentProfit: "$53,200",
      winRate: "75%",
      testimony: "The precision entry techniques and risk management strategies taught in this course are second to none. I've been trading for 5 years, but this program took my trading to a professional level. The community support is incredible too.",
      achievement: "Passed prop firm evaluation",
    },
    {
      name: "Alexandra Santos",
      initials: "AS",
      role: "Forex Trader",
      timeframe: "10 months",
      initialCapital: "$8,000",
      currentProfit: "$91,500",
      winRate: "84%",
      testimony: "I tried multiple trading courses before finding Smart Money Academy. This is the only one that actually delivers results. The mentors genuinely care about student success, and the live trading sessions are invaluable. I'm now trading with a funded account managing $200K.",
      achievement: "Managing $200K funded account",
    },
    {
      name: "Daniel Martinez",
      initials: "DM",
      role: "Crypto Trader",
      timeframe: "5 months",
      initialCapital: "$12,000",
      currentProfit: "$78,400",
      winRate: "80%",
      testimony: "The Smart Money concepts work perfectly in crypto markets. Learning to read institutional manipulation and liquidity sweeps has been a complete game-changer. I went from revenge trading and blowing accounts to consistent profitability. Thank you to the entire team!",
      achievement: "Grew account by 650% in 5 months",
    },
    {
      name: "Emily Johnson",
      initials: "EJ",
      role: "Part-Time Trader",
      timeframe: "7 months",
      initialCapital: "$6,000",
      currentProfit: "$34,800",
      winRate: "76%",
      testimony: "As a busy professional, I needed a trading approach that didn't require watching charts all day. The swing trading strategies and higher timeframe analysis taught here are perfect. I'm making great supplemental income while keeping my day job.",
      achievement: "Consistent monthly income",
    },
  ];

  const stats = [
    { value: "$2.4M+", label: "Total Student Profits" },
    { value: "89%", label: "Become Profitable" },
    { value: "450%", label: "Average ROI" },
    { value: "5,000+", label: "Success Stories" },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-success-stories">
            Student Success Stories
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Results from Real Traders</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students come from all backgrounds and experience levels. Here are just a few of the thousands who have transformed their trading with Smart Money Academy.
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

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="p-8" data-testid={`story-card-${index}`}>
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarFallback className="text-xl bg-primary/10 text-primary">{story.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{story.role}</p>
                  <Badge variant="secondary" className="text-xs" data-testid={`badge-achievement-${index}`}>
                    {story.achievement}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-md">
                <div data-testid={`metric-timeframe-${index}`}>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <Calendar className="h-3 w-3" />
                    <span>Timeframe</span>
                  </div>
                  <div className="font-semibold text-sm">{story.timeframe}</div>
                </div>
                <div data-testid={`metric-profit-${index}`}>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <DollarSign className="h-3 w-3" />
                    <span>Profit</span>
                  </div>
                  <div className="font-semibold text-sm text-chart-5">{story.currentProfit}</div>
                </div>
                <div data-testid={`metric-winrate-${index}`}>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>Win Rate</span>
                  </div>
                  <div className="font-semibold text-sm text-primary">{story.winRate}</div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20">
                <Quote className="absolute -left-3 top-0 h-6 w-6 text-primary/20" />
                <p className="text-sm text-muted-foreground italic leading-relaxed">{story.testimony}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who have achieved consistent profitability and financial freedom through Smart Money trading.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8" data-testid="button-enroll-success">
                Start Your Journey Today
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
