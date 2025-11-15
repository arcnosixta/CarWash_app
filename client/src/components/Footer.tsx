import { Link } from "wouter";
import { Twitter } from "lucide-react";
import { SiDiscord, SiTelegram, SiYoutube } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Smart Money Academy
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional trading education focused on Smart Money concepts, market structure, and institutional order flow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/curriculum" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-curriculum">
                  Course Curriculum
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-mentors">
                  Our Mentors
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-success">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-community">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Discord"
                data-testid="link-discord"
              >
                <SiDiscord className="h-5 w-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Telegram"
                data-testid="link-telegram"
              >
                <SiTelegram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Smart Money Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
