import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, Share2, ChevronLeft, ChevronRight, ArrowRight, Clock, Globe2, Building2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

// Mock data - in real app, this would come from API/database
const getPressRelease = (slug: string) => {
  const releases = {
    "techcorp-launches-revolutionary-ai-platform": {
      id: 1,
      slug: "techcorp-launches-revolutionary-ai-platform",
      title: "TechCorp Launches Revolutionary AI Platform for Enterprise Solutions",
      subtitle: "Groundbreaking artificial intelligence solution transforms business operations across multiple industries",
      featuredImage: "/placeholder-tech-ai.jpg",
      author: "Sarah Johnson",
      authorRole: "CEO, TechCorp",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      location: "San Francisco, CA",
      content: `
        <p>San Francisco, CA - TechCorp, a leading technology company specializing in artificial intelligence solutions, today announced the launch of its revolutionary AI platform designed specifically for enterprise operations. The new platform promises to transform how businesses leverage artificial intelligence to enhance productivity, streamline operations, and drive innovation across multiple industries.</p>
        
        <h3>Transforming Enterprise Operations</h3>
        <p>The new AI platform represents a significant breakthrough in enterprise artificial intelligence, offering businesses unprecedented capabilities in data analysis, process automation, and decision-making support. Built on cutting-edge machine learning algorithms and neural network architectures, the platform can process vast amounts of data in real-time, providing actionable insights that drive business growth.</p>
        
        <blockquote>"This represents a paradigm shift in how enterprises can leverage artificial intelligence," said Sarah Johnson, CEO of TechCorp. "Our platform doesn't just analyze data - it understands context, learns from patterns, and provides intelligent recommendations that transform business operations."</blockquote>
        
        <h3>Key Features and Capabilities</h3>
        <p>The TechCorp AI platform includes several groundbreaking features:</p>
        <ul>
          <li><strong>Real-time Data Processing:</strong> Processes millions of data points per second with 99.9% accuracy</li>
          <li><strong>Predictive Analytics:</strong> Forecasts business trends and identifies opportunities before competitors</li>
          <li><strong>Automated Workflow Integration:</strong> Seamlessly integrates with existing enterprise systems</li>
          <li><strong>Custom AI Models:</strong> Industry-specific AI models tailored to unique business needs</li>
          <li><strong>Advanced Security:</strong> Enterprise-grade security with end-to-end encryption</li>
        </ul>
        
        <h3>Industry Impact and Adoption</h3>
        <p>Early adopters of the TechCorp AI platform have reported remarkable results. Manufacturing companies have seen a 40% reduction in operational costs, while financial services firms report a 60% improvement in fraud detection accuracy. Healthcare providers using the platform have achieved a 35% reduction in administrative overhead.</p>
        
        <p>"The impact has been transformative," said Michael Chen, CTO of Global Manufacturing Inc. "We've been able to optimize our entire supply chain, reduce waste, and improve customer satisfaction - all through the power of AI."</p>
        
        <h3>Future Roadmap</h3>
        <p>TechCorp has outlined an ambitious roadmap for the platform's future development. The company plans to introduce industry-specific modules for healthcare, finance, manufacturing, and retail sectors. Additionally, a mobile application and API integration platform are scheduled for release in Q3 2024.</p>
        
        <h3>About TechCorp</h3>
        <p>TechCorp is a leading technology company specializing in artificial intelligence and machine learning solutions for enterprise clients. Founded in 2018, the company has established itself as an innovator in AI technology, serving over 500 enterprise clients worldwide. TechCorp's mission is to democratize artificial intelligence and make advanced AI capabilities accessible to businesses of all sizes.</p>
        
        <h3>Media Contact</h3>
        <p>For more information about TechCorp's AI platform or to schedule a demo, please contact:<br/>
        Sarah Johnson<br/>
        CEO, TechCorp<br/>
        Email: press@techcorp.com<br/>
        Phone: (555) 123-4567</p>
      `,
      tags: ["Artificial Intelligence", "Enterprise Software", "Technology", "Machine Learning", "Innovation"],
      relatedArticles: [
        {
          id: 2,
          slug: "globalhealth-expands-to-european-markets",
          title: "GlobalHealth Expands to European Markets",
          excerpt: "Healthcare provider announces strategic expansion into five European countries..."
        },
        {
          id: 3,
          slug: "ecotech-secures-50m-series-b-funding",
          title: "EcoTech Secures $50M Series B Funding",
          excerpt: "Sustainable technology company raises major investment round..."
        }
      ]
    },
    "globalhealth-expands-to-european-markets": {
      id: 2,
      slug: "globalhealth-expands-to-european-markets",
      title: "GlobalHealth Expands to European Markets with Telemedicine Services",
      subtitle: "Healthcare provider announces strategic expansion into five European countries, bringing innovative telemedicine solutions to millions of new patients",
      featuredImage: "/placeholder-health-europe.jpg",
      author: "Michael Chen",
      authorRole: "CEO, GlobalHealth",
      date: "March 14, 2024",
      readTime: "6 min read",
      category: "Healthcare",
      location: "London, UK",
      content: `
        <p>London, UK - GlobalHealth, a leading telemedicine provider, today announced its strategic expansion into five European markets, including the United Kingdom, Germany, France, Spain, and Italy. This expansion marks a significant milestone in the company's mission to make quality healthcare accessible to millions across Europe through innovative telemedicine solutions.</p>
        
        <h3>European Market Entry</h3>
        <p>The expansion represents GlobalHealth's commitment to addressing the growing demand for accessible healthcare services across Europe. The company will launch its comprehensive telemedicine platform in each market, offering virtual consultations, remote monitoring, and digital health services to patients and healthcare providers.</p>
        
        <blockquote>"We're excited to bring our proven telemedicine solutions to European patients and healthcare providers," said Michael Chen, CEO of GlobalHealth. "Our platform has already transformed healthcare delivery in North America, and we're confident it will make a similar impact across Europe."</blockquote>
        
        <h3>Service Offerings</h3>
        <p>GlobalHealth's European expansion includes:</p>
        <ul>
          <li><strong>Virtual Consultations:</strong> 24/7 access to certified healthcare professionals</li>
          <li><strong>Remote Monitoring:</strong> Advanced wearable integration for chronic disease management</li>
          <li><strong>Prescription Services:</strong> Digital prescription management and home delivery</li>
          <li><strong>Mental Health Support:</strong> Specialized teletherapy and counseling services</li>
          <li><strong>Multi-language Support:</strong> Services available in 12 European languages</li>
        </ul>
        
        <h3>Partnerships and Collaborations</h3>
        <p>GlobalHealth has established strategic partnerships with leading healthcare systems, insurance providers, and technology companies across Europe. These partnerships ensure seamless integration with existing healthcare infrastructure and provide patients with comprehensive care options.</p>
        
        <h3>Impact on Healthcare Accessibility</h3>
        <p>The expansion is expected to significantly improve healthcare accessibility in rural and underserved areas across Europe. Patients will have access to specialist care without the need for long-distance travel, reducing wait times and improving health outcomes.</p>
        
        <h3>About GlobalHealth</h3>
        <p>GlobalHealth is a pioneering telemedicine company dedicated to transforming healthcare delivery through technology. Founded in 2019, the company has served over 2 million patients across North America and continues to expand its global reach.</p>
        
        <h3>Media Contact</h3>
        <p>For more information about GlobalHealth's European expansion, please contact:<br/>
        Michael Chen<br/>
        CEO, GlobalHealth<br/>
        Email: media@globalhealth.com<br/>
        Phone: +44 20 1234 5678</p>
      `,
      tags: ["Healthcare", "Telemedicine", "European Expansion", "Digital Health", "Innovation"],
      relatedArticles: [
        {
          id: 1,
          slug: "techcorp-launches-revolutionary-ai-platform",
          title: "TechCorp Launches Revolutionary AI Platform",
          excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..."
        },
        {
          id: 3,
          slug: "ecotech-secures-50m-series-b-funding",
          title: "EcoTech Secures $50M Series B Funding",
          excerpt: "Sustainable technology company raises major investment round..."
        }
      ]
    },
    "ecotech-secures-50m-series-b-funding": {
      id: 3,
      slug: "ecotech-secures-50m-series-b-funding",
      title: "EcoTech Secures $50M Series B Funding for Green Energy Solutions",
      subtitle: "Sustainable technology company raises major investment round to accelerate development of revolutionary green energy solutions and expand global operations",
      featuredImage: "/placeholder-green-energy.jpg",
      author: "Emily Rodriguez",
      authorRole: "Founder & CEO, EcoTech",
      date: "March 13, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      location: "New York, NY",
      content: `
        <p>New York, NY - EcoTech, a leading sustainable technology company, today announced the successful closure of a $50 million Series B funding round led by Green Ventures Partners with participation from Climate Capital and Sustainable Growth Fund. The investment will accelerate the development and deployment of EcoTech's revolutionary green energy solutions across global markets.</p>
        
        <h3>Revolutionary Green Energy Technology</h3>
        <p>EcoTech's proprietary technology platform combines advanced materials science with artificial intelligence to create highly efficient, cost-effective renewable energy solutions. The company's flagship products include next-generation solar panels, smart energy storage systems, and AI-powered energy management platforms.</p>
        
        <blockquote>"This funding round represents a significant vote of confidence in our vision to democratize clean energy," said Emily Rodriguez, Founder & CEO of EcoTech. "With the support of our investors, we can accelerate our mission to make sustainable energy accessible and affordable for everyone, everywhere."</blockquote>
        
        <h3>Technology Breakthroughs</h3>
        <p>EcoTech's recent technological achievements include:</p>
        <ul>
          <li><strong>Ultra-Efficient Solar Panels:</strong> 30% higher efficiency than conventional panels</li>
          <li><strong>Smart Storage Systems:</strong> AI-optimized battery management with 50% longer lifespan</li>
          <li><strong>Grid Integration Platform:</strong> Real-time energy optimization for commercial and residential use</li>
          <li><strong>Carbon Capture Technology:</strong> Innovative carbon capture solutions for industrial applications</li>
        </ul>
        
        <h3>Market Expansion Plans</h3>
        <p>The Series B funding will support EcoTech's expansion into new markets across North America, Europe, and Asia. The company plans to establish manufacturing facilities in strategic locations and build partnerships with energy providers, construction companies, and government agencies.</p>
        
        <h3>Environmental Impact</h3>
        <p>EcoTech's solutions are projected to help reduce carbon emissions by over 1 million tons annually by 2026. The company's technology has already been adopted by major corporations and municipalities looking to achieve their sustainability goals.</p>
        
        <h3>Investment Highlights</h3>
        <p>The funding round attracted significant interest from impact investors and venture capital firms focused on climate technology. EcoTech's strong growth trajectory and proven technology platform positioned it as one of the most promising companies in the green energy sector.</p>
        
        <h3>About EcoTech</h3>
        <p>EcoTech is a sustainable technology company dedicated to developing innovative solutions for the global energy transition. Founded in 2020, the company has quickly established itself as a leader in renewable energy technology and sustainable innovation.</p>
        
        <h3>Media Contact</h3>
        <p>For more information about EcoTech's funding round and technology, please contact:<br/>
        Emily Rodriguez<br/>
        Founder & CEO, EcoTech<br/>
        Email: press@ecotech.com<br/>
        Phone: (212) 555-0123</p>
      `,
      tags: ["Sustainability", "Green Energy", "Series B Funding", "Climate Technology", "Renewable Energy"],
      relatedArticles: [
        {
          id: 1,
          slug: "techcorp-launches-revolutionary-ai-platform",
          title: "TechCorp Launches Revolutionary AI Platform",
          excerpt: "Leading technology company announces groundbreaking artificial intelligence solution..."
        },
        {
          id: 2,
          slug: "globalhealth-expands-to-european-markets",
          title: "GlobalHealth Expands to European Markets",
          excerpt: "Healthcare provider announces strategic expansion into five European countries..."
        }
      ]
    }
  }
  return releases[slug as keyof typeof releases] || null
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join('/')
  const release = getPressRelease(slug)
  
  if (!release) {
    return {
      title: 'Press Release Not Found',
      description: 'The requested press release could not be found.'
    }
  }

  return buildPageMetadata({
    path: `/press/${slug}`,
    title: release.title,
    description: release.subtitle,
    openGraphTitle: release.title,
    openGraphDescription: release.subtitle,
    image: release.featuredImage,
    keywords: [...release.tags, 'press release', 'news']
  })
}

export default function PressReleasePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const release = getPressRelease(slug)

  if (!release) {
    return (
      <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
        <NavbarShell />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Press Release Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The press release you're looking for doesn't exist or has been removed.</p>
            <Link href="/press" className="newsnavipress-button-primary">
              View All Press Releases
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="factory-brand-newsnavipress factory-palette-newsnavipress factory-surface-newsnavipress factory-accent-newsnavipress">
      <NavbarShell />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/press" className="text-gray-600 hover:text-primary">Press Releases</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{release.title.substring(0, 50)}...</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {release.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {release.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {release.title}
            </h1>
            
            <h2 className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {release.subtitle}
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{release.author}</span>
                {release.authorRole && <span className="text-gray-500">- {release.authorRole}</span>}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{release.date}</span>
              </div>
              {release.location && (
                <div className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5" />
                  <span>{release.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <div className="h-96 bg-gray-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-white/50" />
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-gray-600 font-medium">Share this press release:</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Share2 className="h-4 w-4" />
              LinkedIn
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
              <Share2 className="h-4 w-4" />
              Twitter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
              <Share2 className="h-4 w-4" />
              Email
            </button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: release.content }} />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {release.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Press Releases</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {release.relatedArticles.map((article) => (
              <article key={article.id} className="newsnavipress-card overflow-hidden group cursor-pointer">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/press/${article.slug}`}
                    className="text-primary font-semibold inline-flex items-center hover:gap-2 transition-all"
                  >
                    Read Full Release
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Distribute Your Press Release?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses that trust NewsNaviPress for their press release distribution needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/press/create" className="newsnavipress-button-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
              Submit Your Press Release
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="newsnavipress-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <SchemaJsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": release.title,
        "description": release.subtitle,
        "image": release.featuredImage,
        "author": {
          "@type": "Person",
          "name": release.author
        },
        "datePublished": release.date,
        "publisher": {
          "@type": "Organization",
          "name": "NewsNaviPress",
          "url": SITE_CONFIG.baseUrl
        },
        "url": `${SITE_CONFIG.baseUrl}/press/${release.slug}`
      }} />
    </div>
  )
}
