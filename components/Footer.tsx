'use client'

import { ArrowUp, Heart, Coffee, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/evalyne-gachoka-8b9947206/',
    color: 'hover:text-[var(--color-primary-blue)]'
  }
]

const quickLinks = [
  { name: 'Work', id: 'work' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' }
]

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-100)] text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-blue)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--color-accent-orange)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">creat.eve</h3>
              <p className="text-sm text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-600)] leading-relaxed max-w-md">
                Passionate about creating meaningful digital experiences that solve real user problems through thoughtful design and strategic thinking.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-[var(--color-neutral-700)] dark:bg-[var(--color-neutral-200)] border border-[var(--color-neutral-600)] dark:border-[var(--color-neutral-300)] rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-neutral-600)] dark:hover:bg-[var(--color-neutral-300)] hover:border-[var(--color-primary-blue)] hover:scale-110 ${social.color} focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-neutral-800)] dark:focus:ring-offset-[var(--color-neutral-100)]`}
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <IconComponent className="h-5 w-5 text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-700)]" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-600)] hover:text-[var(--color-primary-blue)] transition-colors duration-200 focus:outline-none focus:text-[var(--color-primary-blue)] focus:underline"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] mb-6">Let's Work Together</h4>
            <div className="space-y-3">
              <p className="text-sm text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-600)]">
                <span className="block text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] font-medium">Email</span>
                <a 
                  href="mailto:createve254@gmail.com" 
                  className="hover:text-[var(--color-primary-blue)] transition-colors duration-200 focus:outline-none focus:text-[var(--color-primary-blue)] focus:underline"
                >
                  createve254@gmail.com
                </a>
              </p>
              <p className="text-sm text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-600)]">
                <span className="block text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] font-medium">Location</span>
                Nairobi, Kenya
              </p>
              <p className="text-sm text-[var(--color-neutral-300)] dark:text-[var(--color-neutral-600)]">
                <span className="block text-[var(--color-neutral-100)] dark:text-[var(--color-neutral-800)] font-medium">Availability</span>
                Remote & On-site
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[var(--color-neutral-600)] dark:border-[var(--color-neutral-300)] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-xs text-[var(--color-neutral-400)] dark:text-[var(--color-neutral-500)]">
              <span>© 2025 Evalyne Gachoka. All rights reserved.</span>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[var(--color-primary-blue)] hover:text-[var(--color-secondary-blue)] transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-neutral-800)] dark:focus:ring-offset-[var(--color-neutral-100)]"
              aria-label="Back to top of page"
            >
              <span className="text-xs">Back to top</span>
              <div className="w-8 h-8 bg-[var(--color-primary-blue)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-secondary-blue)] group-hover:scale-110 transition-all duration-200">
                <ArrowUp className="h-4 w-4 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}