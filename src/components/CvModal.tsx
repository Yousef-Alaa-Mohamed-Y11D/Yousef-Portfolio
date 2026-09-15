import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2,
  Calendar,
  Briefcase,
  GraduationCap,
  Code2,
  Database,
  Layers,
  Wrench,
  FileText
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-container"
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="px-5 py-3.5 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-semibold">
              Curriculum Vitae — Yousef Alaa Mohamed Mostafa
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Document */}
        <div className="overflow-y-auto p-6 sm:p-10 text-stone-800 space-y-7 bg-white print:p-0">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 border-b border-stone-300 pb-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-stone-200 shrink-0 shadow-xs bg-stone-900">
              <img
                src="/assets/images/profile/yousef.png"
                alt="Yousef Alaa Mohamed Mostafa"
                loading="eager"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== 'https://avatars.githubusercontent.com/u/229819552?v=4') {
                    target.src = 'https://avatars.githubusercontent.com/u/229819552?v=4';
                  }
                }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                Yousef Alaa Mohamed Mostafa
              </h1>
              <p className="text-base sm:text-lg font-semibold text-stone-700 font-mono">
                Junior Backend .NET Developer
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-stone-600 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Qena, Egypt
                </span>
                <span className="text-stone-300">|</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-stone-400" />
                  01286536360
                </span>
                <span className="text-stone-300">|</span>
                <a
                  href="mailto:yousefalaamohammed4@gmail.com"
                  className="flex items-center gap-1 text-stone-800 hover:text-amber-700 underline underline-offset-2"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  yousefalaamohammed4@gmail.com
                </a>
                <span className="text-stone-300">|</span>
                <a
                  href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-stone-800 hover:text-amber-700 underline underline-offset-2"
                >
                  <Github className="w-3.5 h-3.5 text-stone-400" />
                  GitHub
                </a>
                <span className="text-stone-300">|</span>
                <a
                  href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-stone-800 hover:text-amber-700 underline underline-offset-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-stone-400" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-900 uppercase border-b-2 border-stone-800 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify">
              4th-year Computer Science student focused on backend development with C# and ASP.NET Core, including Web API, MVC, Entity Framework Core, and SQL Server. Builds RESTful APIs and CRUD-based applications applying OOP, SOLID principles, and clean, layered architecture, backed by a solid foundation in data structures, algorithms, and problem solving. Has hands-on experience through personal backend projects and two freelance web development engagements delivered to real clients.
            </p>
          </section>

          {/* 2. TECHNICAL SKILLS */}
          <section className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-900 uppercase border-b-2 border-stone-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">LANGUAGES:</strong>{' '}
                <span className="text-stone-700">C#, C++, Python, JavaScript</span>
              </div>
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">BACKEND DEVELOPMENT:</strong>{' '}
                <span className="text-stone-700">ASP.NET Core, ASP.NET Core Web API, ASP.NET Core MVC, RESTful APIs, CRUD Operations, ASP.NET Core Identity, JWT, Dependency Injection, Middleware</span>
              </div>
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">DATABASE &amp; ORM:</strong>{' '}
                <span className="text-stone-700">SQL Server, Entity Framework Core (EF Core), LINQ, EF Core Migrations, Relational Database Design, Database Relationships</span>
              </div>
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">SOFTWARE ENGINEERING:</strong>{' '}
                <span className="text-stone-700">OOP, SOLID Principles, Design Patterns, Clean Code, Layered / Clean Architecture, Generic Repository Pattern, Unit of Work Pattern</span>
              </div>
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">COMPUTER SCIENCE:</strong>{' '}
                <span className="text-stone-700">Data Structures &amp; Algorithms, Problem Solving, Complexity Analysis, Basic Computer Networks, Basic Operating Systems</span>
              </div>
              <div>
                <strong className="text-stone-900 font-mono text-xs uppercase tracking-wide">TOOLS:</strong>{' '}
                <span className="text-stone-700">Git, GitHub, Postman, Swagger, Visual Studio, VS Code, SQL Server Management Studio</span>
              </div>
            </div>
          </section>

          {/* 3. FREELANCE EXPERIENCE */}
          <section className="space-y-4">
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-900 uppercase border-b-2 border-stone-800 pb-1">
              FREELANCE EXPERIENCE
            </h2>

            {/* Khubara Al-Wasat Office */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  Freelance Web Developer &mdash; مكتب خبراء الوساطة (Khubara Al-Wasat Office)
                </h3>
                <a
                  href="https://khubaraalwasat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-700 hover:underline"
                >
                  khubaraalwasat.com
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1 leading-relaxed">
                <li>Developed and delivered a production website (WordPress-based) for a real business client, from requirements gathering to live deployment.</li>
                <li>Translated client requirements into a functional, professional web presence for presenting the company&apos;s services and information.</li>
                <li>Built responsive, user-friendly pages and managed content structure for a non-technical business audience.</li>
                <li>Handled end-to-end delivery and deployment of the final website to a live production environment.</li>
              </ul>
            </div>

            {/* E-Commerce Store */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  Freelance Web Developer &mdash; E-Commerce Store
                </h3>
                <span className="text-xs font-mono text-stone-500">
                  Mostaql
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1 leading-relaxed">
                <li>Analyzed client requirements and communicated directly with the client to scope and plan an e-commerce web store.</li>
                <li>Built product listing and product-related functionality for browsing and presenting items to end users.</li>
                <li>Implemented a responsive UI to ensure a consistent experience across devices.</li>
                <li>Managed the project through to delivery and handoff to the client.</li>
              </ul>
            </div>
          </section>

          {/* 4. PROJECTS */}
          <section className="space-y-4">
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-900 uppercase border-b-2 border-stone-800 pb-1">
              PROJECTS
            </h2>

            {/* Rivo API */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  Rivo API &mdash; E-Commerce Backend API
                </h3>
                <a
                  href="https://github.com/Yousef-Alaa-Mohamed-Y11D/Rivo-API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-700 hover:underline"
                >
                  github.com/Yousef-Alaa-Mohamed-Y11D/Rivo-API
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1 leading-relaxed">
                <li>Structured an e-commerce backend using Clean Architecture, separating the solution into API, Core, and Infrastructure projects with ASP.NET Core Web API and C#.</li>
                <li>Modeled core domain entities (Product, Category, Photo) with one-to-many relationships, configured through EF Core Fluent API.</li>
                <li>Implemented a Generic Repository and Unit of Work pattern to centralize data access logic and reduce duplication across entities.</li>
                <li>Configured Dependency Injection for repositories, Unit of Work, and the EF Core DbContext, with SQL Server as the data provider.</li>
                <li>Set up EF Core code-first migrations with seed data and integrated Swagger for interactive API documentation.</li>
              </ul>
            </div>

            {/* Game Management Platform */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  Game Management Platform
                </h3>
                <a
                  href="https://github.com/Yousef-Alaa-Mohamed-Y11D/Game-Management-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-700 hover:underline"
                >
                  github.com/Yousef-Alaa-Mohamed-Y11D/Game-Management-Platform
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1 leading-relaxed">
                <li>Built an ASP.NET Core MVC application for administrators to create, edit, and manage games, including category assignment and device support.</li>
                <li>Implemented ASP.NET Core Identity with role-based authorization, restricting game management actions to Admin users.</li>
                <li>Modeled a many-to-many relationship between games and supported devices, plus category associations, using EF Core code-first migrations.</li>
                <li>Added cover image upload with custom validation attributes for allowed file extensions and maximum file size.</li>
                <li>Used Select2 for enhanced dropdown selection and jQuery AJAX (with SweetAlert2 confirmation) for asynchronous game deletion.</li>
              </ul>
            </div>

            {/* StudentHub */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  StudentHub &mdash; Collaborative Student Platform (Backend Contributor)
                </h3>
                <a
                  href="https://github.com/Yousef-Alaa-Mohamed-Y11D/Student-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-700 hover:underline"
                >
                  github.com/Yousef-Alaa-Mohamed-Y11D/Student-Hub
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 pl-1 leading-relaxed">
                <li>Contributed to the backend module of a team-built student platform project as part of a collaborative development effort.</li>
                <li>Worked within a shared codebase alongside teammates, following Git-based version control practices.</li>
              </ul>
            </div>
          </section>

          {/* 5. EDUCATION */}
          <section className="space-y-2">
            <h2 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-900 uppercase border-b-2 border-stone-800 pb-1">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-stone-900">
                  Qena University &mdash; Faculty of Computer Science &amp; Information
                </h3>
                <p className="text-stone-600">
                  Bachelor&apos;s Degree in Computer Science, Department of Computer Science (CS)
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-stone-500 pt-1 sm:pt-0">
                <span className="font-semibold text-stone-800">4th Year Student</span>
                <div>Expected Graduation: 2027</div>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
          <span>Official CV Data &bull; Yousef Alaa Mohamed Mostafa</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-stone-900 text-white rounded hover:bg-stone-800 font-sans font-semibold transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded font-sans transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
