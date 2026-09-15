import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Github, Linkedin, Youtube, Mail, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-3">
            <Logo size="lg" theme="dark" />
            <p className="text-stone-400 text-sm leading-relaxed max-w-md pt-1">
              Junior Backend .NET Developer specializing in REST APIs, ASP.NET Core, SQL Server, Clean Architecture, and database-driven business software. Located in Qena, Egypt.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@elshawesh-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="YouTube Channel (TaleNest)"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/201286536360?text=Hello%20Yousef%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:yousefalaamohammed4@gmail.com"
                className="w-8 h-8 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="Email Yousef"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {(['home', 'about', 'projects', 'skills', 'media', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-stone-400 hover:text-amber-400 transition-colors cursor-pointer capitalize"
                  >
                    {page === 'media' ? 'Media & Certificates' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Details */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p className="flex items-center gap-1.5">
                <span className="text-stone-500 font-mono text-xs">Email:</span>
                <a
                  href="mailto:yousefalaamohammed4@gmail.com"
                  className="hover:text-amber-400 transition-colors truncate"
                >
                  yousefalaamohammed4@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-stone-500 font-mono text-xs">Phone:</span>
                <a href="tel:01286536360" className="hover:text-amber-400 transition-colors">
                  01286536360
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-stone-500 font-mono text-xs">Location:</span>
                <span className="text-stone-300">Qena, Egypt</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-stone-500 font-mono text-xs">YouTube:</span>
                <a
                  href="https://www.youtube.com/@elshawesh-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  TaleNest (@elshawesh-AI)
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Yousef Alaa Mohamed Mostafa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-stone-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available for Junior .NET Backend Roles
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
