'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
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
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />
      <NavbarShell />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-[#d41468]">Contact</p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white/75 leading-relaxed">
              Have questions about our press release distribution services? Our team is here to help you get your message heard.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-7 sm:p-8">
              <h2 className="text-3xl font-black uppercase tracking-[-0.03em] mb-8">Send Us A Message</h2>
              
              {isSubmitted ? (
                <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-emerald-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-white/75">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#f6b60f] focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#f6b60f] focus:outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#f6b60f] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                      What type of organization are you?
                    </label>
                    <select
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#f6b60f] focus:outline-none"
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
                    <label htmlFor="subject" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                      Subject: How may we help you?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#f6b60f] focus:outline-none"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-white/85 mb-2 uppercase tracking-[0.08em]">
                      Message / Comment *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/45 focus:border-[#f6b60f] focus:outline-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#f6b60f] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#ffc83f] flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Now
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 text-center">
            <h2 className="text-3xl font-black uppercase tracking-[-0.03em] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/75 mb-6">
              Please take a moment to check out our FAQs for quick answers to common questions.
            </p>
            <a href="/faq" className="inline-flex items-center rounded-2xl bg-[#f6b60f] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#ffc83f]">
              VIEW FAQs
            </a>
          </div>
        </div>
      </section> */}

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
