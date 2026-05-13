import Link from 'next/link'
import { FileText, Building2, Users, Globe2, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

const footerLinks = {
  products: [
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Agency Discount Program', href: '/agency-discount' },
    { name: 'Writing Services', href: '/writing-services' },
    { name: 'Affiliate Program', href: '/affiliate' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Who Uses Us', href: '/who-uses-us' },
    { name: 'Meet The Team', href: '/team' },
  ],
  resources: [
    { name: 'Knowledge Base', href: '/help' },
    { name: 'RSS', href: '/rss' },
    { name: 'News Widget', href: '/widget' },
    { name: 'For Journalists', href: '/journalists' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Content Guidelines', href: '/guidelines' },
    { name: 'FAQs', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Site Map', href: '/sitemap' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Pinterest', href: '#', icon: Globe2 },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function FooterNewsNaviPressClean() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">NP</span>
                </div>
                <div>
                  <div className="text-xl font-bold">NewsNaviPress</div>
                  <div className="text-sm text-gray-400">Professional Press Release Distribution</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>+1 888-880-9539</span>
                </div>
                <div className="text-sm text-gray-400">
                  Telephone Hours: Monday to Friday 8:30am to 5:00pm Pacific (PDT)
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe2 className="h-4 w-4" />
                  <span className="text-sm">Suite 1400 - 506 Second Avenue</span>
                </div>
                <div className="text-sm text-gray-400 ml-7">
                  Seattle, WA 98104, USA
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2004-{new Date().getFullYear()} 24-7 Press Release Newswire. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
