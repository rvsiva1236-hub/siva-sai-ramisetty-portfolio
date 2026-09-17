import { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand / Logo */}
          <button
            id="nav-brand-btn"
            onClick={() => scrollToSection('home')}
            className="text-left group cursor-pointer"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
              Siva Sai Ramisetty
            </span>
            <span className="hidden sm:block text-xs text-neutral-500 font-medium">
              AI & Data Science Portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 bg-neutral-100 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Resume CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 active:bg-neutral-100 transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-700" />
              <span>Resume</span>
            </button>
            <button
              id="nav-contact-cta"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs lg:text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-all shadow-xs cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              id="nav-mobile-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-md shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-neutral-200 px-4 pt-2 pb-4 space-y-1 shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                activeSection === item.id
                  ? 'bg-neutral-100 text-neutral-950 font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-100 mt-2">
            <button
              id="mobile-menu-contact-btn"
              onClick={() => scrollToSection('contact')}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
