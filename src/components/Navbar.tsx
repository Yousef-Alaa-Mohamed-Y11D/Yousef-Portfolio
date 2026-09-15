import React, { useState } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'media', label: 'Media & Certs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fafaf9]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            id="nav-brand-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-amber-700 bg-amber-50 font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Social Quick Links & CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              id="nav-github-link"
              href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-linkedin-link"
              href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="h-4 w-px bg-stone-200 mx-1" />
            <button
              id="nav-view-cv-btn"
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors border border-stone-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>View CV</span>
            </button>
            <button
              id="nav-contact-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-500 rounded-md transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#fafaf9] px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-amber-700 bg-amber-50 font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:yousefalaamohammed4@gmail.com"
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md border border-stone-200"
              >
                View CV
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-stone-900 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
