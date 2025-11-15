import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "wouter";
import { TrendingUp, Users, Award, BarChart3 } from "lucide-react";
import mentor1 from "@assets/generated_images/Male_mentor_headshot_1_cbf987a9.png";
import mentor2 from "@assets/generated_images/Female_mentor_headshot_8644b05b.png";
import mentor3 from "@assets/generated_images/Male_mentor_headshot_2_66711c20.png";

export default function Mentors() {
  const mentors = [
    {
      name: "Marcus Chen",
      role: "Head Trading Mentor",
      image: mentor1,
      initials: "MC",
      experience: "15 Years",
      students: "2,500+",
      specialty: "Market Structure & Order Flow",
      bio: "Former institutional trader with over 15 years of experience in forex and futures markets. Specialized in Smart Money concepts and has mentored over 2,500 successful traders. Known for breaking down complex institutional strategies into actionable trading plans.",
      achievements: [
        "15+ years trading major financial institutions",
        "Developed proprietary order flow analysis system",
        "Trained traders managing $50M+ in capital",
        "Featured speaker at trading conferences worldwide",
      ],
    },
    {
      name: "Sarah Mitchell",
      role: "Senior Trading Strategist",
      image: mentor2,
      initials: "SM",
      experience: "12 Years",
      students: "1,800+",
      specialty: "Risk Management & Psychology",
      bio: "Certified financial analyst and professional trader specializing in risk management and trading psychology. Has helped thousands of traders develop disciplined, profitable trading strategies through psychological mastery and proper risk control.",
      achievements: [
        "12 years managing proprietary trading desk",
        "Certified Financial Risk Manager (FRM)",
        "Published author on trading psychology",
        "Maintains 85%+ win rate on documented trades",
      ],
    },
    {
      name: "David Rodriguez",
      role: "Quantitative Trading Expert",
      image: mentor3,
      initials: "DR",
      experience: "18 Years",
      students: "3,200+",
      specialty: "Multi-Timeframe Analysis",
      bio: "Quantitative trader with extensive experience in algorithmic trading and multi-timeframe analysis. Expert in combining Smart Money concepts with data-driven decision making. Previously headed algorithmic trading division at a major hedge fund.",
      achievements: [
        "18+ years in quantitative trading",
        "Former hedge fund algorithmic trading director",
        "Developed multi-timeframe confluence system",
        "Mentored traders across 40+ countries",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-mentors">
            Expert Mentors
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Learn From the Best</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mentors are professional traders with decades of combined experience in institutional trading.
            They're dedicated to your success and provide ongoing support throughout your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center" data-testid="stat-experience">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">45+ Years</div>
            <p className="text-muted-foreground">Combined Trading Experience</p>
          </Card>
          <Card className="p-8 text-center" data-testid="stat-students">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">7,500+</div>
            <p className="text-muted-foreground">Successful Students Mentored</p>
          </Card>
          <Card className="p-8 text-center" data-testid="stat-success">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Student Success Rate</p>
          </Card>
        </div>

        <div className="space-y-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="overflow-hidden" data-testid={`mentor-card-${index}`}>
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-gradient-to-br from-primary/5 to-transparent flex flex-col items-center justify-center">
                  <Avatar className="h-48 w-48 mb-6 border-4 border-primary/20">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback className="text-4xl">{mentor.initials}</AvatarFallback>
                  </Avatar>
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    <div className="text-center" data-testid={`mentor-stat-experience-${index}`}>
                      <div className="text-2xl font-bold text-primary">{mentor.experience}</div>
                      <div className="text-xs text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center" data-testid={`mentor-stat-students-${index}`}>
                      <div className="text-2xl font-bold text-primary">{mentor.students}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center" data-testid={`mentor-stat-specialty-${index}`}>
                      <BarChart3 className="h-8 w-8 text-primary mx-auto" />
                      <div className="text-xs text-muted-foreground mt-1">Trading</div>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold mb-2">{mentor.name}</h2>
                    <p className="text-lg text-primary font-semibold mb-2">{mentor.role}</p>
                    <Badge variant="secondary" data-testid={`badge-specialty-${index}`}>
                      {mentor.specialty}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6">{mentor.bio}</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Key Achievements</h3>
                    <ul className="space-y-2">
                      {mentor.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2"
                          data-testid={`achievement-${index}-${achievementIndex}`}
                        >
                          <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <h2 className="text-3xl font-bold mb-4">Get Personal Guidance from Expert Traders</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our mentorship program and get direct access to professional traders who will guide you every step of the way.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8" data-testid="button-enroll-mentors">
                Start Your Mentorship
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
