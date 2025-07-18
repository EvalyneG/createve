'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, ExternalLink, Calendar, Clock, TrendingUp, Users, Filter, Grid3X3, List } from 'lucide-react'

interface AllProjectsPageProps {
  onBack: () => void
  onViewCaseStudy: (caseStudyId: string) => void
  onNavigateToContact: () => void
}

const allProjects = [
  {
    id: 'easyshift-moving-platform',
    title: 'EasyShift – Simplifying the Stress of Moving in Kenya',
    subtitle: 'A smoother way to shift',
    category: 'Web Platform Design',
    tags: ['UX Research', 'Mobile First', 'Cost Calculator', 'Service Design'],
    year: '2024',
    duration: '3 months',
    status: 'Concept',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A platform where users can calculate their moving costs upfront, choose their relocation services, and book with clarity and confidence in the Kenyan market.',
    results: [
      { metric: '4/5', label: 'Would Use Platform' },
      { metric: '100%', label: 'Pricing Transparency' },
      { metric: 'High', label: 'Industry Interest' }
    ],
    featured: true
  },
  {
    id: 'mindful-mental-health-app',
    title: 'Mindful – A Mental Health Mobile App',
    subtitle: 'Designing safe, personalized mental health support',
    category: 'Mobile App Design',
    tags: ['Mental Health', 'Personalization', 'Privacy', 'Offline Access'],
    year: '2024',
    duration: '4 months',
    status: 'Concept',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A mental health app that adapts to users rather than the other way around, featuring personalized onboarding, anonymous group sessions, and AI-powered support.',
    results: [
      { metric: '92%', label: 'Preferred Familiar Groups' },
      { metric: 'High', label: 'Anonymity Value' },
      { metric: 'Essential', label: 'Offline Access' }
    ],
    featured: true
  },
  {
    id: 'agripath-sustainable-agriculture',
    title: 'AgriPath – Bridging Sustainable Agriculture and Digital Access',
    subtitle: 'Global mission through accessible web experience',
    category: 'Webflow Development',
    tags: ['Webflow', 'CMS', 'International', 'Content Strategy'],
    year: '2023',
    duration: '3 months',
    status: 'Live Product',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A responsive website for an international sustainable agriculture initiative, featuring dynamic content systems and intuitive resource exploration.',
    results: [
      { metric: '100%', label: 'Successful Launch' },
      { metric: '300%', label: 'Content Discoverability' },
      { metric: 'Global', label: 'Stakeholder Reach' }
    ],
    featured: true
  },
  {
    id: 'standard-chartered-banking-redesign',
    title: 'Standard Chartered Digital Mobile Banking Redesign',
    subtitle: 'Simplifying a legacy banking experience by addressing usability pain points, reducing friction, and restoring user trust',
    category: 'Mobile App Design',
    tags: ['Banking', 'UX Research', 'Legacy Redesign', 'User Trust'],
    year: '2023',
    duration: '6 months',
    status: 'Concept',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Standard Chartered Bank is a well-established institution, but its digital platforms present several usability challenges from cluttered layouts and inconsistent UI to complex user flows that can leave users feeling overwhelmed. This redesign initiative began with one goal in mind: to transform the digital experience into one that feels intuitive, focused, and empowering for everyday users.',
    results: [
      { metric: 'In Progress', label: 'Challenge Analysis' },
      { metric: 'In Progress', label: 'Solution Design' },
      { metric: 'In Progress', label: 'Results Testing' }
    ],
    featured: false
  }
]

const categories = ['All', 'Mobile App Design', 'Web Platform Design', 'Website Design', 'Webflow Development']

export function AllProjectsPage({ onBack, onViewCaseStudy, onNavigateToContact }: AllProjectsPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <header className="z-40">
        <div className="max-w-7xl mx-auto container-padding py-2">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-8">
        <div className="max-w-7xl mx-auto container-padding">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-[var(--color-neutral-900)] mb-4">All Projects</h1>
            <p className="lead max-w-3xl mx-auto mb-8">
              Explore my complete portfolio of UX/UI design projects spanning mobile apps, web platforms, 
              and digital experiences across various industries and user needs.
            </p>
            

          </div>

          {/* Filters and View Toggle */}
          <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[var(--color-primary-blue)] text-white shadow-[var(--shadow-lg)]'
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-200)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Featured Projects - Now at the top */}
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto container-padding">
            <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <h2 className="text-[var(--color-neutral-900)] mb-2">Featured Projects</h2>
              <p className="text-[var(--color-neutral-600)]">Highlighted work showcasing design impact and results</p>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="card-featured overflow-hidden group">
                  <div className="relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--color-primary-blue)] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{project.duration}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[var(--color-primary-blue)] font-medium">{project.category}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Live Product' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className="text-[var(--color-neutral-900)] mb-2 h-16 flex items-start">{project.title}</h3>
                        <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>



                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 h-12 content-start">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-[var(--color-neutral-500)] text-xs">+{project.tags.length - 3} more</span>
                        )}
                      </div>

                      <Button 
                        onClick={() => onViewCaseStudy(project.id)}
                        className="btn-primary w-full group"
                      >
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Projects */}
      {otherProjects.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto container-padding">
            <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <h2 className="text-[var(--color-neutral-900)] mb-2">Additional Projects</h2>
              <p className="text-[var(--color-neutral-600)]">More work and design explorations</p>
            </div>

            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-6'
            } ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {otherProjects.map((project, index) => (
                <Card key={project.id} className={`card-modern overflow-hidden group ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}>
                  {/* Image Section */}
                  <div className={`relative ${
                    viewMode === 'list' 
                      ? 'lg:w-80 lg:min-w-80 flex-shrink-0' 
                      : 'w-full'
                  }`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                        viewMode === 'list' 
                          ? 'w-full h-48 lg:h-full lg:min-h-64' 
                          : 'w-full h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Live Product' 
                            ? 'bg-green-500/80 text-white' 
                            : 'bg-white/20 text-white'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className={`p-6 ${
                    viewMode === 'list' 
                      ? 'flex-1 flex flex-col justify-between' 
                      : ''
                  }`}>
                    <div className={`${
                      viewMode === 'list' ? 'space-y-4' : 'space-y-3'
                    }`}>
                      <div>
                        <span className="text-sm text-[var(--color-primary-blue)] font-medium">{project.category}</span>
                        <h4 className={`text-[var(--color-neutral-900)] mb-2 ${
                          viewMode === 'list' ? 'text-xl h-16' : 'h-16'
                        } flex items-start`}>{project.title}</h4>
                        <p className={`text-[var(--color-neutral-600)] leading-relaxed ${
                          viewMode === 'list' ? 'text-base' : 'text-sm'
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 h-12 content-start">
                        {project.tags.slice(0, viewMode === 'list' ? 4 : 2).map((tag, idx) => (
                          <span key={idx} className="bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`${viewMode === 'list' ? 'mt-6' : 'mt-3'}`}>
                      <Button 
                        onClick={() => onViewCaseStudy(project.id)}
                        className={`btn-secondary group ${
                          viewMode === 'list' 
                            ? 'w-auto' 
                            : 'w-full text-sm'
                        }`}
                        size={viewMode === 'list' ? 'default' : 'sm'}
                      >
                        View Details
                        <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-[var(--color-neutral-50)] py-16">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h3 className="text-[var(--color-neutral-900)] mb-4">Ready to start your next project?</h3>
          <p className="text-[var(--color-neutral-600)] mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on meaningful projects that solve real user problems. 
            Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onNavigateToContact}
              className="btn-primary"
            >
              Let's Work Together
            </Button>
            <Button onClick={onBack} className="btn-secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}