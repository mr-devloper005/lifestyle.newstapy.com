import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Globe2, Users, Building2, FileText, Star, Quote, Calendar, Search, Filter, Share2, ChevronRight } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

export default function HomePage() {
  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="newsnavipress-hero text-white py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Distribute Your Press Releases to Global Media Outlets
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-2xl">
                Reach journalists, influencers, and news outlets worldwide with our professional press release distribution service. Get your story heard by millions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/press/create" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                  Submit Press Release
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/pricing" className="newsnavipress-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-2 bg-white/30 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-2 bg-white/30 rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="h-2 bg-white/30 rounded w-1/2 mb-2"></div>
                    <div className="h-2 bg-white/20 rounded w-full"></div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live Distribution Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600">Join thousands of companies distributing their news through NewsNaviPress</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'GlobalNews', 'MediaHub', 'PressWire', 'NewsDesk', 'DistributePro'].map((brand) => (
              <div key={brand} className="text-gray-400 font-semibold text-lg">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Intro Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Press Release Distribution & Multimedia Services
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              NewsNaviPress provides comprehensive press release distribution services, helping businesses of all sizes 
              reach their target audience through our extensive network of media outlets, journalists, and news platforms. 
              Our multimedia distribution ensures your message gets maximum visibility across print, digital, and broadcast channels.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Distribution Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing for businesses of all sizes</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Content Pro */}
            <div className="newsnavipress-card p-8 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Pro</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses and startups</p>
              <div className="text-3xl font-bold text-primary mb-6">$299<span className="text-lg text-gray-500">/release</span></div>
              <ul className="space-y-3 mb-8">
                {[
                  'Distribution to 500+ media outlets',
                  'Basic analytics and reporting',
                  '1 multimedia inclusion',
                  '24-48 hour turnaround',
                  'Email support'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="newsnavipress-button-primary w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Media Pro - Most Popular */}
            <div className="newsnavipress-card p-8 relative border-2 border-primary shadow-xl transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Media Pro</h3>
              <p className="text-gray-600 mb-6">Ideal for growing companies</p>
              <div className="text-3xl font-bold text-primary mb-6">$599<span className="text-lg text-gray-500">/release</span></div>
              <ul className="space-y-3 mb-8">
                {[
                  'Distribution to 2,000+ media outlets',
                  'Advanced analytics dashboard',
                  '3 multimedia inclusions',
                  '12-24 hour turnaround',
                  'Priority email & phone support',
                  'SEO optimization'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="newsnavipress-button-primary w-full text-center">
                Choose Pro
              </Link>
            </div>

            {/* Total Pro */}
            <div className="newsnavipress-card p-8 relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Pro</h3>
              <p className="text-gray-600 mb-6">For enterprises and agencies</p>
              <div className="text-3xl font-bold text-primary mb-6">$999<span className="text-lg text-gray-500">/release</span></div>
              <ul className="space-y-3 mb-8">
                {[
                  'Distribution to 5,000+ media outlets',
                  'Premium analytics with insights',
                  'Unlimited multimedia',
                  '6-12 hour express delivery',
                  'Dedicated account manager',
                  'Custom targeting options',
                  'Translation services'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="newsnavipress-button-primary w-full text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Amplify Your Message?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses that trust NewsNaviPress for their press release distribution needs
          </p>
          <Link href="/contact" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center">
            Learn More
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Use Case Sections */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Small Businesses */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Small Businesses</h3>
              <p className="text-lg text-gray-600 mb-6">
                Get your startup or small business noticed by local and national media. Our affordable distribution 
                packages ensure your news reaches the right journalists and publications without breaking the bank.
              </p>
              <Link href="/solutions/small-business" className="newsnavipress-button-primary inline-flex items-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <Building2 className="h-24 w-24 text-primary" />
            </div>
          </div>

          {/* PR Agencies */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <Users className="h-24 w-24 text-primary" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">PR Agencies</h3>
              <p className="text-lg text-gray-600 mb-6">
                Manage multiple client campaigns efficiently with our agency dashboard. Bulk distribution, 
                white-label options, and dedicated support make NewsNaviPress the perfect partner for PR professionals.
              </p>
              <Link href="/solutions/agencies" className="newsnavipress-button-primary inline-flex items-center">
                Agency Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* In-house PR Teams */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">In-house PR Teams</h3>
              <p className="text-lg text-gray-600 mb-6">
                Streamline your corporate communications with our enterprise-grade distribution platform. 
                Advanced targeting, comprehensive analytics, and priority support ensure your corporate announcements make maximum impact.
              </p>
              <Link href="/solutions/enterprise" className="newsnavipress-button-primary inline-flex items-center">
                Enterprise Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
              <Globe2 className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
          <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
            "NewsNaviPress transformed our media outreach. Our press releases now reach twice as many journalists, 
            and we've seen a 300% increase in media mentions since switching to their platform."
          </blockquote>
          <div className="text-lg">
            <div className="font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-gray-600">PR Director, TechCorp Industries</div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Insights</h2>
            <p className="text-xl text-gray-600">Expert tips and best practices for press release success</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "How to Write the Perfect Press Release",
                description: "Learn the essential elements of crafting press releases that get noticed by journalists and media outlets.",
                image: "/placeholder.jpg"
              },
              {
                title: "Media Distribution Best Practices",
                description: "Discover proven strategies to maximize your press release reach and impact across different media channels.",
                image: "/placeholder.jpg"
              },
              {
                title: "Measuring PR Success",
                description: "Understand key metrics and analytics to track the effectiveness of your press release campaigns.",
                image: "/placeholder.jpg"
              }
            ].map((resource, index) => (
              <div key={index} className="newsnavipress-card overflow-hidden group cursor-pointer">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link href="/resources" className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all">
                    Read More
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Press Releases</h2>
              <p className="text-xl text-gray-600">Discover recent news and announcements from our clients</p>
            </div>
            <Link href="/press" className="newsnavipress-button-primary">
              View All
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "TechCorp Launches Revolutionary AI Platform",
                excerpt: "Leading technology company announces groundbreaking artificial intelligence solution for enterprise clients...",
                date: "March 15, 2024",
                image: "/placeholder.jpg"
              },
              {
                title: "GlobalHealth Expands to European Markets",
                excerpt: "Healthcare provider announces strategic expansion into five European countries with innovative telemedicine services...",
                date: "March 14, 2024",
                image: "/placeholder.jpg"
              },
              {
                title: "EcoTech Secures $50M Series B Funding",
                excerpt: "Sustainable technology company raises major investment round to accelerate development of green energy solutions...",
                date: "March 13, 2024",
                image: "/placeholder.jpg"
              },
              {
                title: "FinanceHub Introduces Digital Banking Platform",
                excerpt: "Financial technology company launches comprehensive digital banking solution for small and medium businesses...",
                date: "March 12, 2024",
                image: "/placeholder.jpg"
              }
            ].map((release, index) => (
              <article key={index} className="newsnavipress-card overflow-hidden group cursor-pointer">
                <div className="h-32 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    {release.date}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {release.excerpt}
                  </p>
                  <Link href={`/press/${index + 1}`} className="text-primary text-sm font-semibold inline-flex items-center hover:gap-2 transition-all">
                    Read Full Release
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NewsNaviPress",
        "description": "Professional press release distribution service for businesses worldwide",
        "url": SITE_CONFIG.baseUrl
      }} />
    </div>
  )
}
