'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Building2, Send, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="newsnavipress-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Have questions about our press release distribution services? Our team is here to help you get your message heard.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="newsnavipress-card p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      What type of organization are you?
                    </label>
                    <select
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select organization type</option>
                      <option value="startup">Startup</option>
                      <option value="small-business">Small Business</option>
                      <option value="medium-business">Medium Business</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="pr-agency">PR Agency</option>
                      <option value="nonprofit">Non-profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject: How may we help you?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Comment *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="robot"
                      required
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="robot" className="text-sm text-gray-700">
                      I'm not a robot
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="newsnavipress-button-primary w-full flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Now
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Telephone Hours */}
                <div className="newsnavipress-card p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Telephone Hours</h3>
                      <p className="text-gray-600">Monday to Friday 8:30am to 5:00pm Pacific (PDT)</p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="newsnavipress-card p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        Toll Free: <span className="font-semibold">1-888-880-9539</span><br />
                        Direct: <span className="font-semibold">(646) 417-8294</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* US Address */}
                <div className="newsnavipress-card p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">US Address</h3>
                      <p className="text-gray-600">
                        Suite 1400 - 506 Second Avenue<br />
                        Seattle, WA 98104<br />
                        USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Canada Address */}
                <div className="newsnavipress-card p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Canada Address</h3>
                      <p className="text-gray-600">
                        Suite 203 - 901 West 3rd St.<br />
                        North Vancouver, BC V7P 3P9<br />
                        Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="newsnavipress-card p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">
                        General: <span className="font-semibold">info@newsnavipress.com</span><br />
                        Support: <span className="font-semibold">support@newsnavipress.com</span><br />
                        Sales: <span className="font-semibold">sales@newsnavipress.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="newsnavipress-card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Please take a moment to check out our FAQs for quick answers to common questions.
            </p>
            <a href="/faq" className="newsnavipress-button-primary inline-flex items-center">
              VIEW FAQs
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - NewsNaviPress",
        "description": "Get in touch with NewsNaviPress for press release distribution services. Contact our team for sales, support, and media inquiries.",
        "url": `${SITE_CONFIG.baseUrl}/contact`,
        "mainEntity": {
          "@type": "Organization",
          "name": "NewsNaviPress",
          "url": SITE_CONFIG.baseUrl,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-888-880-9539",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          }
        }
      }} />
    </div>
  )
}
