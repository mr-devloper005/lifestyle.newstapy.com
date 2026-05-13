'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Calendar, ChevronRight, ArrowRight, Globe2, Building2, TrendingUp, Clock } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'

// Mock data for press releases
const mockPressReleases = [
  {
    id: 1,
    slug: "techcorp-launches-revolutionary-ai-platform",
    title: "TechCorp Launches Revolutionary AI Platform for Enterprise Solutions",
    excerpt: "Leading technology company announces groundbreaking artificial intelligence solution designed to transform business operations and enhance productivity across multiple industries.",
    date: "March 15, 2024",
    category: "Technology",
    author: "Sarah Johnson",
    image: "/placeholder-tech.jpg",
    featured: true,
    readTime: "3 min read"
  },
  {
    id: 2,
    slug: "globalhealth-expands-to-european-markets",
    title: "GlobalHealth Expands to European Markets with Telemedicine Services",
    excerpt: "Healthcare provider announces strategic expansion into five European countries, bringing innovative telemedicine solutions to millions of new patients.",
    date: "March 14, 2024",
    category: "Healthcare",
    author: "Michael Chen",
    image: "/placeholder-health.jpg",
    featured: true,
    readTime: "4 min read"
  },
  {
    id: 3,
    slug: "ecotech-secures-50m-series-b-funding",
    title: "EcoTech Secures $50M Series B Funding for Green Energy Solutions",
    excerpt: "Sustainable technology company raises major investment round to accelerate development of revolutionary green energy solutions and expand global operations.",
    date: "March 13, 2024",
    category: "Finance",
    author: "Emily Rodriguez",
    image: "/placeholder-finance.jpg",
    featured: false,
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "FinanceHub Introduces Digital Banking Platform for SMBs",
    excerpt: "Financial technology company launches comprehensive digital banking solution specifically designed for small and medium businesses with advanced features.",
    date: "March 12, 2024",
    category: "Finance",
    author: "David Kim",
    image: "/placeholder-banking.jpg",
    featured: false,
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "RetailMax Partners with Leading E-commerce Platforms",
    excerpt: "Major retail technology company announces strategic partnerships with top e-commerce platforms to streamline inventory management and sales processes.",
    date: "March 11, 2024",
    category: "Retail",
    author: "Lisa Anderson",
    image: "/placeholder-retail.jpg",
    featured: false,
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "EducationFirst Launches AI-Powered Learning Platform",
    excerpt: "EdTech startup unveils innovative artificial intelligence platform that personalizes learning experiences for students of all ages and skill levels.",
    date: "March 10, 2024",
    category: "Education",
    author: "Robert Taylor",
    image: "/placeholder-education.jpg",
    featured: false,
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "FoodTech Innovates with Sustainable Packaging Solutions",
    excerpt: "Food technology company introduces biodegradable packaging materials that could revolutionize the industry and reduce environmental impact significantly.",
    date: "March 9, 2024",
    category: "Food & Beverage",
    author: "Maria Garcia",
    image: "/placeholder-food.jpg",
    featured: false,
    readTime: "4 min read"
  },
  {
    id: 8,
    title: "AutoDrive Advances Autonomous Vehicle Technology",
    excerpt: "Automotive technology company announces breakthrough in self-driving technology with enhanced safety features and improved navigation systems.",
    date: "March 8, 2024",
    category: "Automotive",
    author: "James Wilson",
    image: "/placeholder-auto.jpg",
    featured: false,
    readTime: "5 min read"
  }
]

const categories = ["All", "Technology", "Healthcare", "Finance", "Retail", "Education", "Food & Beverage", "Automotive"]
const sortOptions = ["Latest", "Most Popular", "Trending", "Most Viewed"]

export default function PressReleasePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Latest")
  const [showFilters, setShowFilters] = useState(false)

  const filteredReleases = mockPressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || release.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredReleases = filteredReleases.filter(release => release.featured)
  const regularReleases = filteredReleases.filter(release => !release.featured)

  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="newsnavipress-hero text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Press Releases & News
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Stay updated with the latest announcements and news from our clients across various industries
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search press releases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/30 transition-colors"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-white text-primary"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-gray-600">Press Releases Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-gray-600">Media Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Media Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Press Releases */}
      {featuredReleases.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Press Releases</h2>
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredReleases.map((release) => (
                <article key={release.id} className="newsnavipress-card overflow-hidden group cursor-pointer">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {release.readTime}
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {release.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        By {release.author}
                      </div>
                      <Link 
                        href={`/press/${release.slug}`}
                        className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all"
                      >
                        Read Full Release
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Press Releases Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              All Press Releases ({filteredReleases.length})
            </h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {filteredReleases.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No press releases found</h3>
              <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularReleases.map((release) => (
                <article key={release.id} className="newsnavipress-card overflow-hidden group cursor-pointer">
                  <div className="h-40 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {release.date}
                      </div>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {release.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {release.excerpt}
                    </p>
                    <Link 
                      href={`/press/${release.slug}`}
                      className="text-primary text-sm font-semibold inline-flex items-center hover:gap-2 transition-all"
                    >
                      Read More
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredReleases.length > 6 && (
            <div className="text-center mt-12">
              <button className="newsnavipress-button-primary inline-flex items-center">
                Load More Press Releases
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Distribute Your Press Release</h2>
          <p className="text-xl mb-8 text-white/90">
            Ready to share your news with the world? Get started with our professional press release distribution service.
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
        "@type": "CollectionPage",
        "name": "Press Releases - NewsNaviPress",
        "description": "Browse the latest press releases and news announcements from our clients across various industries.",
        "url": `${SITE_CONFIG.baseUrl}/press`
      }} />
    </div>
  )
}
