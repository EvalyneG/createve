'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavigationProps {
  currentPage?: 'home' | 'case-study' | 'all-projects'
  onNavigateToHome?: () => void
  onNavigateToFeaturedCaseStudies?: () => void
}

export function Navigation({ 
  currentPage = 'home', 
  onNavigateToHome, 
  onNavigateToFeaturedCaseStudies 
}: NavigationProps = {}) {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)

    // Only set up scroll spy on home page
    if (currentPage === 'home') {
      const handleScroll = () => {
        const sections = ['hero', 'skills', 'services', 'work', 'contact']
        const scrollY = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    document.documentElement.classList.toggle('dark', newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    setIsDark(newDarkMode)
  }

  const handleNavigation = (sectionId: string) => {
    if (currentPage === 'home') {
      // On home page, scroll to section
      scrollToSection(sectionId)
    } else {
      // On other pages, navigate based on section
      if (sectionId === 'work') {
        // Navigate to featured case studies
        onNavigateToFeaturedCaseStudies?.()
      } else {
        // Navigate to home and scroll to section
        onNavigateToHome?.()
        // Use setTimeout to ensure page navigation completes before scrolling
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 100)
      }
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    if (currentPage === 'home') {
      scrollToSection('hero')
    } else {
      onNavigateToHome?.()
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]">
        Skip to main content
      </a>
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-[var(--color-border)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={handleLogoClick}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                aria-label="Go to home section"
              >
                creat.eve
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] ${
                    (currentPage === 'home' && activeSection === item.id) ||
                    (currentPage === 'all-projects' && item.id === 'work') ||
                    (currentPage === 'case-study' && item.id === 'work')
                      ? 'bg-[var(--color-primary-blue)] text-white shadow-[var(--shadow-lg)]'
                      : 'text-[var(--color-neutral-600)] hover:text-[var(--color-primary-blue)] hover:bg-[var(--color-neutral-100)]'
                  }`}
                  aria-current={
                    (currentPage === 'home' && activeSection === item.id) ||
                    (currentPage === 'all-projects' && item.id === 'work') ||
                    (currentPage === 'case-study' && item.id === 'work')
                      ? 'page' 
                      : undefined
                  }
                >
                  {item.label}
                </button>
              ))}
              
              <div className="w-px h-6 bg-[var(--color-neutral-300)] mx-2" />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">
                  {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="sr-only">
                  {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            id="mobile-menu"
            className="fixed top-16 left-0 right-0 glass-effect border-b border-[var(--color-border)] animate-fade-in-scale"
            role="menu"
            aria-labelledby="mobile-menu"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-blue)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)] ${
                    (currentPage === 'home' && activeSection === item.id) ||
                    (currentPage === 'all-projects' && item.id === 'work') ||
                    (currentPage === 'case-study' && item.id === 'work')
                      ? 'bg-[var(--color-primary-blue)] text-white'
                      : 'text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)]'
                  }`}
                  role="menuitem"
                  aria-current={
                    (currentPage === 'home' && activeSection === item.id) ||
                    (currentPage === 'all-projects' && item.id === 'work') ||
                    (currentPage === 'case-study' && item.id === 'work')
                      ? 'page' 
                      : undefined
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}