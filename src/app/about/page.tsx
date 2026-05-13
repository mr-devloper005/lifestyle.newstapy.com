import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Globe2, Award, Target, Lightbulb, Building2, CheckCircle, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us - NewsNaviPress',
    description: 'Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.',
    openGraphTitle: 'About Us - NewsNaviPress',
    openGraphDescription: 'Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['about', 'press release distribution', 'media outreach', 'company'],
  })
}

const stats = [
  { label: 'Press Releases Distributed', value: '50,000+', icon: Globe2 },
  { label: 'Media Outlets', value: '5,000+', icon: Building2 },
  { label: 'Client Satisfaction', value: '98%', icon: CheckCircle },
  { label: 'Years in Business', value: '15+', icon: Award }
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven Approach',
    description: 'We are committed to helping businesses of all sizes amplify their voice and reach their target audience through strategic press release distribution.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Continuously evolving our platform with cutting-edge technology and features to provide the most effective press release distribution solutions.'
  },
  {
    icon: Users,
    title: 'Client-Centric Service',
    description: 'Your success is our success. We provide personalized support and tailored solutions to meet your unique distribution needs.'
  }
]

const timeline = [
  {
    year: '2009',
    title: 'Foundation',
    description: 'NewsNaviPress was founded with a simple mission: to make press release distribution accessible to businesses of all sizes.'
  },
  {
    year: '2014',
    title: 'Expansion',
    description: 'Expanded our media network to over 1,000 outlets and launched our first analytics platform for clients.'
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Introduced AI-powered targeting and real-time analytics, revolutionizing how press releases reach their audience.'
  },
  {
    year: '2024',
    title: 'Global Leadership',
    description: 'Now serving over 10,000 clients worldwide with distribution to 5,000+ media outlets across 100+ countries.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/team/ceo.jpg',
    bio: 'Visionary leader with 20+ years in media and communications. Founded NewsNaviPress to democratize press release distribution.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/team/cto.jpg',
    bio: 'Technology expert driving innovation in distribution algorithms and analytics platforms.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    image: '/team/operations.jpg',
    bio: 'Operational excellence expert ensuring seamless service delivery and client satisfaction.'
  },
  {
    name: 'David Kim',
    role: 'Head of Sales',
    image: '/team/sales.jpg',
    bio: 'Sales leader building strong relationships with clients and media partners worldwide.'
  }
]

export default function AboutPage() {
  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="newsnavipress-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About NewsNaviPress
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Empowering businesses to share their stories with the world through innovative press release distribution solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="newsnavipress-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009, NewsNaviPress began with a simple yet powerful vision: to make professional press release distribution accessible to businesses of all sizes. We recognized that many companies struggled to get their news heard by the right audiences, and traditional distribution methods were often expensive and ineffective.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the past 15 years, we've grown from a small startup to a global leader in press release distribution, serving over 10,000 clients across 100+ countries. Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, NewsNaviPress stands at the forefront of the industry, combining cutting-edge technology with human expertise to deliver unparalleled distribution results. Our platform leverages artificial intelligence, extensive media relationships, and deep industry knowledge to ensure your press releases reach the right journalists, influencers, and media outlets.
              </p>
              <Link href="/contact" className="newsnavipress-button-primary inline-flex items-center mt-6">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center">
              <TrendingUp className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="newsnavipress-card p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((event, index) => (
              <div key={index} className="newsnavipress-card p-6 text-center relative">
                <div className="text-2xl font-bold text-primary mb-3">{event.year}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">The experts behind NewsNaviPress success</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="newsnavipress-card overflow-hidden text-center group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Amplify Your Message?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses that trust NewsNaviPress for their press release distribution needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/press/create" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
              Submit Press Release
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="newsnavipress-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - NewsNaviPress",
        "description": "Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.",
        "url": `${SITE_CONFIG.baseUrl}/about`,
        "mainEntity": {
          "@type": "Organization",
          "name": "NewsNaviPress",
          "url": SITE_CONFIG.baseUrl,
          "foundingDate": "2009",
          "description": "Leading press release distribution platform helping businesses share their stories with global media outlets."
        }
      }} />
    </div>
  )
}
