import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/mentorship', label: t('nav.mentorship') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@nofomofx', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/nofomo.fx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-24" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-serif text-2xl font-bold mb-4">
              <span className="text-primary">Nofomo FX</span>
              <span className="text-foreground"> Academy</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <motion.div
                    className="text-muted-foreground hover:text-primary text-sm cursor-pointer transition-colors"
                    whileHover={{ x: 4 }}
                    data-testid={`footer-link-${link.path === '/' ? 'home' : link.path.slice(1)}`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Smart Money Academy. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
