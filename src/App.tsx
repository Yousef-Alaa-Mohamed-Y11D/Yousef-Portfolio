/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CvModal } from './components/CvModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { MediaPage } from './pages/MediaPage';
import { ContactPage } from './pages/ContactPage';

import staticProjects from './assets/data/projects.json';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'projects', 'skills', 'media', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Fetch dynamic projects.json if available
  useEffect(() => {
    fetch('/assets/data/projects.json')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Fallback to local dataset');
      })
      .then((data: Project[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(() => {
        // staticProjects already initialized
      });
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleCloseCv = () => {
    setIsCvOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        onOpenCv={handleOpenCv}
      />

      {/* Main Page Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenCv={handleOpenCv}
            projects={projects} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenCv={handleOpenCv}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage projects={projects} />
        )}
        {currentPage === 'skills' && (
          <SkillsPage />
        )}
        {currentPage === 'media' && (
          <MediaPage />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenCv={handleOpenCv} />
        )}
      </main>

      {/* Interactive CV Modal View */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={handleCloseCv} 
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Structured Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
