import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UserCheck, Video, Target, TrendingUp, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import futureImage from '@assets/generated_images/Futuristic_neon_green_background_72287d12.png';

type FormValues = {
  name: string;
  email: string;
  experience: string;
  message: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Mentorship() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, t('mentorshipPage.validationNameMin')),
    email: z.string().email(t('mentorshipPage.validationEmailInvalid')),
    experience: z.string().min(10, t('mentorshipPage.validationExperienceMin')),
    message: z.string().min(20, t('mentorshipPage.validationMessageMin')),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      experience: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Mentorship application:', data);
    toast({
      title: t('mentorshipPage.successTitle'),
      description: t('mentorshipPage.successMessage'),
    });
    form.reset();
  };

  const benefits = [
    {
      icon: UserCheck,
      title: t('mentorshipPage.personalGuidance.title'),
      description: t('mentorshipPage.personalGuidance.description'),
    },
    {
      icon: Video,
      title: t('mentorshipPage.liveTrading.title'),
      description: t('mentorshipPage.liveTrading.description'),
    },
    {
      icon: Target,
      title: t('mentorshipPage.accountability.title'),
      description: t('mentorshipPage.accountability.description'),
    },
  ];

  const progressStats = [
    { label: t('mentorshipPage.progressStats.winRate'), value: '73%', icon: TrendingUp },
    { label: t('mentorshipPage.progressStats.students'), value: '500+', icon: Award },
    { label: t('mentorshipPage.progressStats.successRate'), value: '85%', icon: Target },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative h-96 flex items-center justify-center overflow-hidden"
        data-testid="section-mentorship-hero"
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white" data-testid="text-mentorship-hero-title">
            {t('mentorshipPage.hero')}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t('mentorshipPage.subtitle')}
          </p>
        </motion.div>
      </section>

      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="font-serif text-4xl font-bold text-center mb-16"
          variants={itemVariants}
          data-testid="text-benefits-title"
        >
          {t('mentorshipPage.benefits')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-mentorship-benefit-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="font-serif text-4xl font-bold text-center mb-12" data-testid="text-progress-title">
            {t('mentorshipPage.progress')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {progressStats.map((stat, index) => (
              <Card key={index} className="hover-elevate active-elevate-2" data-testid={`card-progress-stat-${index}`}>
                <CardContent className="p-8 text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <Card className="hover-elevate active-elevate-2">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center" data-testid="text-apply-title">
                {t('mentorshipPage.apply')}
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('mentorshipPage.name')}</FormLabel>
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
                        <FormLabel>{t('mentorshipPage.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('mentorshipPage.experience')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your trading experience..."
                            className="min-h-24"
                            {...field}
                            data-testid="input-experience"
                          />
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
                        <FormLabel>{t('mentorshipPage.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Why do you want to join our mentorship program?"
                            className="min-h-32"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-submit-application"
                  >
                    {form.formState.isSubmitting ? t('mentorshipPage.submitting') : t('mentorshipPage.submit')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
