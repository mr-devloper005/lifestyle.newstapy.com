'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Upload, FileText, Calendar, Globe2, DollarSign, Users, Check, AlertCircle, ChevronRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'


export default function CreatePressReleasePage() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    category: '',
    releaseDate: '',
    releaseTime: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    organization: '',
    distributionType: 'standard',
    addOns: {
      premiumPlacement: false,
      socialMedia: false,
      analytics: false,
      translation: false
    }
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      setFormData(prev => ({
        ...prev,
        addOns: {
          ...prev.addOns,
          [name]: checkbox.checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    // Simulate submission process
    setTimeout(() => {
      setIsUploading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const distributionPlans = [
    {
      id: 'basic',
      name: 'Basic Distribution',
      price: '$99',
      description: 'Reach 500+ media outlets',
      features: ['Basic media list', 'Email distribution', 'Basic analytics']
    },
    {
      id: 'standard',
      name: 'Standard Distribution',
      price: '$299',
      description: 'Reach 2,000+ media outlets',
      features: ['Extended media list', 'Email distribution', 'Advanced analytics', 'Social media sharing']
    },
    {
      id: 'premium',
      name: 'Premium Distribution',
      price: '$599',
      description: 'Reach 5,000+ media outlets',
      features: ['Premium media list', 'Email distribution', 'Advanced analytics', 'Social media sharing', 'Priority placement']
    }
  ]

  if (isSubmitted) {
    return (
      <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
        <NavbarShell />
        
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Release Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your press release has been successfully submitted for review. Our team will review it and contact you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/press" className="newsnavipress-button-primary">
                View All Press Releases
              </Link>
              <Link href="/pricing" className="newsnavipress-button-secondary">
                Upgrade Distribution Plan
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="newsnavipress-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Create Your Press Release
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Distribute your news to thousands of media outlets and journalists worldwide with our professional press release distribution service.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>5,000+ Media Outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5" />
                <span>100+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>50,000+ Releases</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Basic Information */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Press Release Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter a compelling headline for your press release"
                  />
                </div>
                
                <div>
                  <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle/Summary
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Brief summary of your news (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Press Release Content *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Write your press release content here. Include the who, what, when, where, and why of your news."
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="education">Education</option>
                      <option value="automotive">Automotive</option>
                      <option value="food-beverage">Food & Beverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company or organization name"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Release Schedule */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Release Schedule</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Release Date
                  </label>
                  <input
                    type="date"
                    id="releaseDate"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="releaseTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Release Time
                  </label>
                  <input
                    type="time"
                    id="releaseTime"
                    name="releaseTime"
                    value={formData.releaseTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Leave blank for immediate release
              </p>
            </div>

            {/* Contact Information */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Person media can contact"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="media@yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Distribution Plan */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Distribution Plan</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {distributionPlans.map((plan) => (
                  <div key={plan.id} className="relative">
                    <input
                      type="radio"
                      id={plan.id}
                      name="distributionType"
                      value={plan.id}
                      checked={formData.distributionType === plan.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <label
                      htmlFor={plan.id}
                      className={`block p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.distributionType === plan.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="newsnavipress-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Optional Add-ons</h2>
              <div className="space-y-4">
                {[
                  { id: 'premiumPlacement', name: 'Premium Placement', price: '$99', description: 'Guaranteed placement in premium media outlets' },
                  { id: 'socialMedia', name: 'Social Media Promotion', price: '$49', description: 'Promote across our social media channels' },
                  { id: 'analytics', name: 'Advanced Analytics', price: '$29', description: 'Detailed performance analytics and insights' },
                  { id: 'translation', name: 'Translation Services', price: '$79', description: 'Translate to multiple languages' }
                ].map((addOn) => (
                  <div key={addOn.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        id={addOn.id}
                        name={addOn.id}
                        checked={formData.addOns[addOn.id as keyof typeof formData.addOns]}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <div>
                        <label htmlFor={addOn.id} className="font-medium text-gray-900 cursor-pointer">
                          {addOn.name}
                        </label>
                        <p className="text-sm text-gray-600">{addOn.description}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-primary">{addOn.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isUploading}
                className="newsnavipress-button-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Press Release
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                By submitting, you agree to our Terms of Service and Content Guidelines
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Create Press Release - NewsNaviPress",
        "description": "Create and distribute your press release with NewsNaviPress. Reach thousands of media outlets and journalists worldwide.",
        "url": `${SITE_CONFIG.baseUrl}/press/create`,
        "mainEntity": {
          "@type": "Service",
          "name": "Press Release Creation Service",
          "provider": {
            "@type": "Organization",
            "name": "NewsNaviPress",
            "url": SITE_CONFIG.baseUrl
          }
        }
      }} />
    </div>
  )
}
