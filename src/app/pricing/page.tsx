import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight, ChevronRight, HelpCircle, Star, Users, Globe2, Zap, Shield, BarChart3 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - NewsNaviPress',
    description: 'Choose the perfect press release distribution plan for your business. Flexible pricing for startups, agencies, and enterprises.',
    openGraphTitle: 'Pricing Plans - NewsNaviPress',
    openGraphDescription: 'Choose the perfect press release distribution plan for your business. Flexible pricing for startups, agencies, and enterprises.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['press release pricing', 'distribution plans', 'media distribution costs'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses and startups',
    price: '$299',
    period: '/release',
    popular: false,
    features: [
      'Distribution to 500+ media outlets',
      'Basic analytics and reporting',
      '1 multimedia inclusion',
      '24-48 hour turnaround',
      'Email support',
      'Standard SEO optimization'
    ],
    excludedFeatures: [
      'Priority distribution',
      'Advanced targeting',
      'Custom analytics'
    ]
  },
  {
    name: 'Pro',
    description: 'Ideal for growing companies',
    price: '$599',
    period: '/release',
    popular: true,
    features: [
      'Distribution to 2,000+ media outlets',
      'Advanced analytics dashboard',
      '3 multimedia inclusions',
      '12-24 hour turnaround',
      'Priority email & phone support',
      'Advanced SEO optimization',
      'Custom targeting options',
      'Social media amplification'
    ],
    excludedFeatures: [
      'Dedicated account manager',
      'Translation services'
    ]
  },
  {
    name: 'Premium',
    description: 'For enterprises and agencies',
    price: '$999',
    period: '/release',
    popular: false,
    features: [
      'Distribution to 5,000+ media outlets',
      'Premium analytics with insights',
      'Unlimited multimedia',
      '6-12 hour express delivery',
      'Dedicated account manager',
      'Custom targeting options',
      'Translation services',
      'White-label options',
      'API access',
      'Custom reporting'
    ],
    excludedFeatures: []
  }
]

const addOns = [
  {
    name: 'Express Distribution',
    description: 'Get your press release delivered within 2-4 hours',
    price: '$199',
    popular: true
  },
  {
    name: 'Translation Services',
    description: 'Professional translation into 5 languages',
    price: '$299',
    popular: false
  },
  {
    name: 'Video Production',
    description: 'Professional video content for your press release',
    price: '$499',
    popular: false
  },
  {
    name: 'Media Monitoring',
    description: '30-day comprehensive media coverage tracking',
    price: '$149',
    popular: true
  }
]

const faqs = [
  {
    question: 'What is included in the distribution network?',
    answer: 'Our network includes major news outlets, industry-specific publications, local media, journalists, bloggers, and influencers. We continuously update and expand our network to ensure maximum reach for your press releases.'
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply to future press releases, and we\'ll prorate any differences if you have an active subscription.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for new customers. If you\'re not satisfied with our service, contact our support team within 30 days for a full refund.'
  },
  {
    question: 'How quickly will my press release be distributed?',
    answer: 'Distribution times vary by plan: Basic plans typically process within 24-48 hours, Pro plans within 12-24 hours, and Premium plans offer express 6-12 hour delivery.'
  },
  {
    question: 'Can I target specific industries or regions?',
    answer: 'Yes, Pro and Premium plans include advanced targeting options. You can target by industry, geographic location, publication type, and journalist preferences.'
  },
  {
    question: 'What kind of analytics do you provide?',
    answer: 'All plans include basic analytics. Pro plans offer advanced analytics with engagement metrics, and Premium plans include custom reporting and detailed insights about media pickup and audience reach.'
  }
]

export default function PricingPage() {
  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Distribution Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Flexible pricing designed for businesses of all sizes. From startups to enterprises, 
              we have the right plan to amplify your message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name} 
                className={`newsnavipress-card p-8 relative ${
                  plan.popular ? 'border-2 border-primary shadow-xl transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.excludedFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 opacity-50">
                      <div className="h-5 w-5 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5"></div>
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/contact?plan=${plan.name.toLowerCase()}`}
                  className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'newsnavipress-button-primary' 
                      : 'newsnavipress-button-secondary'
                  }`}
                >
                  {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                </Link>
              </div>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Compare Features Across Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Basic</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Media Outlets', basic: '500+', pro: '2,000+', premium: '5,000+' },
                    { feature: 'Multimedia Files', basic: '1', pro: '3', premium: 'Unlimited' },
                    { feature: 'Distribution Time', basic: '24-48 hours', pro: '12-24 hours', premium: '6-12 hours' },
                    { feature: 'Analytics', basic: 'Basic', pro: 'Advanced', premium: 'Premium + Custom' },
                    { feature: 'Support', basic: 'Email', pro: 'Priority Email & Phone', premium: 'Dedicated Manager' },
                    { feature: 'SEO Optimization', basic: 'Standard', pro: 'Advanced', premium: 'Premium' },
                    { feature: 'Targeting', basic: 'Basic', pro: 'Advanced', premium: 'Custom' },
                    { feature: 'API Access', basic: '✗', pro: '✗', premium: '✓' },
                    { feature: 'White-label', basic: '✗', pro: '✗', premium: '✓' },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{row.basic}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{row.pro}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhance Your Distribution</h2>
            <p className="text-xl text-gray-600">Add powerful services to boost your press release impact</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn) => (
              <div key={addOn.name} className="newsnavipress-card p-6 text-center relative">
                {addOn.popular && (
                  <div className="absolute -top-3 right-6">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addOn.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{addOn.description}</p>
                <div className="text-2xl font-bold text-primary">{addOn.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="newsnavipress-card p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Have questions about our plans? Need a custom solution? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
              Contact Sales
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/press/create" className="newsnavipress-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Pricing Plans - NewsNaviPress",
        "description": "Choose the perfect press release distribution plan for your business. Flexible pricing for startups, agencies, and enterprises.",
        "url": `${SITE_CONFIG.baseUrl}/pricing`
      }} />
    </div>
  )
}
