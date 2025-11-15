import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Target, Users, TrendingUp, Award } from 'lucide-react';
import futureImage from '@assets/generated_images/Futuristic_neon_green_background_72287d12.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('aboutPage.values.mission.title'),
      description: t('aboutPage.values.mission.description'),
    },
    {
      icon: Users,
      title: t('aboutPage.values.community.title'),
      description: t('aboutPage.values.community.description'),
    },
    {
      icon: TrendingUp,
      title: t('aboutPage.values.growth.title'),
      description: t('aboutPage.values.growth.description'),
    },
    {
      icon: Award,
      title: t('aboutPage.values.excellence.title'),
      description: t('aboutPage.values.excellence.description'),
    },
  ];

  const team = [
    {
      key: 'michael',
      initials: 'MT',
    },
    {
      key: 'sarah',
      initials: 'SM',
    },
    {
      key: 'david',
      initials: 'DC',
    },
    {
      key: 'emma',
      initials: 'EW',
    },
  ];

  const milestones = ['2018', '2020', '2022', '2024'];

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-96 flex items-center justify-center overflow-hidden"
        data-testid="section-about-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${futureImage})`,
            filter: 'blur(2px)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white" data-testid="text-about-hero-title">
            {t('aboutPage.mission')}
          </h1>
        </motion.div>
      </section>

      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-mission-statement">
            {t('aboutPage.missionText')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-value-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="font-serif text-4xl font-bold text-center mb-12" data-testid="text-team-title">
            {t('aboutPage.team')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.key}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-team-${member.key}`}>
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{t(`aboutPage.teamMembers.${member.key}.name`)}</h3>
                    <p className="text-sm text-primary mb-3">{t(`aboutPage.teamMembers.${member.key}.role`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`aboutPage.teamMembers.${member.key}.bio`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="font-serif text-4xl font-bold text-center mb-12" data-testid="text-history-title">
            {t('aboutPage.history')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((year) => (
                <motion.div
                  key={year}
                  variants={itemVariants}
                  className="flex gap-6 items-start"
                  data-testid={`milestone-${year}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{year}</span>
                    </div>
                  </div>
                  <Card className="flex-grow hover-elevate active-elevate-2">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{t(`aboutPage.milestones.${year}.event`)}</h3>
                      <p className="text-muted-foreground">{t(`aboutPage.milestones.${year}.description`)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
