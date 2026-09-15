import React from 'react';
import { PageId, Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Server, 
  Database, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  ExternalLink,
  Phone,
  FileText,
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenCv: () => void;
  projects: Project[];
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCv, projects }) => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Developer Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-100 text-amber-900 border border-amber-300/60">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                Junior Backend .NET Developer
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-stone-600 bg-stone-100 border border-stone-200">
                <GraduationCap className="w-3.5 h-3.5 text-stone-500" />
                Qena University (2027)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono text-stone-600 bg-stone-100 border border-stone-200">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                Qena, Egypt
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                Yousef Alaa Mohamed Mostafa
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-stone-700 font-mono">
                Junior Backend .NET Developer
              </p>
            </div>

            {/* Natural Description from Professional Summary */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              4th-year Computer Science student focused on backend development with <strong className="font-semibold text-stone-900">C#</strong>, <strong className="font-semibold text-stone-900">ASP.NET Core Web API &amp; MVC</strong>, <strong className="font-semibold text-stone-900">Entity Framework Core</strong>, and <strong className="font-semibold text-stone-900">SQL Server</strong>. Building clean, layered architectures with hands-on client delivery experience.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="hero-view-projects-btn"
                onClick={() => {
                  onNavigate('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-md transition-all shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 rounded-md transition-colors cursor-pointer border border-stone-300 shadow-2xs"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>View CV</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer border border-stone-200"
              >
                <Mail className="w-4 h-4 text-stone-600" />
                <span>Contact</span>
              </button>

              <a
                id="hero-whatsapp-link"
                href="https://wa.me/201286536360?text=Hello%20Yousef%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors border border-emerald-200"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>01286536360</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center gap-4 text-stone-500 text-sm">
              <span className="font-mono text-xs text-stone-400">Profiles:</span>
              <a
                href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 transition-colors font-mono text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://www.linkedin.com/in/yousef-alaa-mohammed-9b3540326/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 transition-colors font-mono text-xs"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="mailto:yousefalaamohammed4@gmail.com"
                className="flex items-center gap-1.5 text-stone-700 hover:text-stone-900 transition-colors font-mono text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Developer Portrait Composition with Yousef's Real Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md bg-stone-900 rounded-2xl p-3 sm:p-4 border border-stone-800 shadow-2xl relative overflow-hidden">
              {/* Terminal-style Titlebar */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-stone-800 text-[11px] font-mono text-stone-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-stone-300">yousef-alaa.net</span>
                </div>
                <span className="text-amber-400 text-[10px]">C# 12 &bull; .NET 8</span>
              </div>

              {/* Real Portrait Image Frame */}
              <div className="relative mt-3 rounded-xl overflow-hidden border border-stone-800 aspect-[4/5] bg-stone-950">
                <img
                  src="/assets/images/profile/yousef.png"
                  alt="Yousef Alaa Mohamed Mostafa - Junior Backend .NET Developer"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to GitHub avatar if local asset load has issues
                    const target = e.currentTarget;
                    if (target.src !== 'https://avatars.githubusercontent.com/u/229819552?v=4') {
                      target.src = 'https://avatars.githubusercontent.com/u/229819552?v=4';
                    }
                  }}
                  className="w-full h-full object-cover"
                />

                {/* Status Overlay */}
                <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-xs px-2.5 py-1 rounded-full border border-stone-700/80 flex items-center gap-1.5 text-[11px] font-mono text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Junior Backend Roles</span>
                </div>

                {/* Bottom Tech Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/95 via-stone-950/80 to-transparent p-4 pt-8 text-white">
                  <div className="text-xs font-bold font-mono text-amber-400">
                    Yousef Alaa Mohamed Mostafa
                  </div>
                  <div className="text-[11px] text-stone-300 font-mono mt-0.5">
                    Junior Backend .NET Developer &bull; Qena, Egypt
                  </div>
                </div>
              </div>

              {/* Code Tags Strip */}
              <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] font-mono text-stone-400 border-t border-stone-800/80 px-1">
                <span>Clean Architecture</span>
                <span className="text-stone-600">&bull;</span>
                <span>EF Core</span>
                <span className="text-stone-600">&bull;</span>
                <span>SQL Server</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Specializations */}
      <section className="border-t border-stone-200 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-2">
              REST APIs &amp; .NET Core
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Designing structured, stateless endpoints with ASP.NET Core Web API, DTO mappings, dependency injection, and proper status code conventions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-2">
              SQL Server &amp; EF Core
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Relational schema normalization, foreign key constraints, LINQ queries, and automated migration management with Entity Framework Core.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-md bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-800 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-2">
              Clean Code &amp; Security
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Adhering to SOLID principles, layered Clean Architecture separation, Generic Repositories, Unit of Work, and ASP.NET Core Identity.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects (Exact CV Projects) */}
      <section className="border-t border-stone-200 pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>Real Software Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Selected Backend Projects
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Real software systems built with ASP.NET Core Web API, EF Core, and SQL Server.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 font-mono cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Real Freelance Delivery Experience (From CV) */}
      <section className="border-t border-stone-200 pt-14">
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider">
                Production Experience
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                Client Freelance Engagements
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Real clients &bull; Production delivery
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  مكتب خبراء الوساطة (Khubara Al-Wasat)
                </h3>
                <a
                  href="https://khubaraalwasat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>khubaraalwasat.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Delivered a production website for a business client from initial requirements scoping to live server deployment. Built responsive, user-friendly pages with structured content.
              </p>
            </div>

            <div className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-stone-900 text-sm">
                  E-Commerce Store (Mostaql)
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 bg-stone-200 text-stone-700 rounded">
                  Mostaql
                </span>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Communicated directly with the client to scope and plan an e-commerce storefront, building product listing functionality and a responsive multi-device interface through delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Skills Overview */}
      <section className="border-t border-stone-200 pt-14">
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider">
                Technical Stack
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Core Competencies
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('skills');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 font-mono cursor-pointer"
            >
              <span>Explore Full Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: 'C#', tag: '.NET Core' },
              { name: 'ASP.NET Core', tag: 'Web API & MVC' },
              { name: 'Entity Framework', tag: 'EF Core' },
              { name: 'SQL Server', tag: 'Database' },
              { name: 'Clean Architecture', tag: 'Pattern' },
              { name: 'JWT & Identity', tag: 'Security' },
              { name: 'LINQ', tag: 'Queries' },
              { name: 'SOLID Principles', tag: 'Clean Code' },
              { name: 'Git & GitHub', tag: 'VCS' },
              { name: 'Postman / Swagger', tag: 'API Testing' },
              { name: 'Generic Repository', tag: 'Unit of Work' },
              { name: 'Data Structures', tag: 'Algorithms' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-center"
              >
                <div className="font-semibold text-stone-800 text-xs sm:text-sm">
                  {skill.name}
                </div>
                <div className="text-[10px] font-mono text-stone-500 mt-0.5">
                  {skill.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Education Snippet */}
      <section className="border-t border-stone-200 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider">
              Background &amp; Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              About Yousef Alaa
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              4th-year student at <strong>Qena University — Faculty of Computer Science &amp; Information</strong>, graduating in 2027. My technical interest is centered on backend engineering with C# and the .NET ecosystem, focusing on clean architecture, relational database design, and maintainable software.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-md transition-colors border border-stone-200 font-mono"
              >
                <span>Read Full Biography &amp; Approach</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </button>
              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 px-3.5 py-2 rounded-md transition-colors font-mono"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Complete CV</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 bg-stone-100 p-5 rounded-lg border border-stone-200 space-y-3 text-xs font-mono">
            <div>
              <span className="text-stone-500 block">UNIVERSITY</span>
              <span className="font-bold text-stone-800">Qena University (CS Faculty)</span>
            </div>
            <div>
              <span className="text-stone-500 block">EXPECTED GRADUATION</span>
              <span className="font-bold text-stone-800">2027 (4th Year Student)</span>
            </div>
            <div>
              <span className="text-stone-500 block">LOCATION</span>
              <span className="font-bold text-stone-800">Qena, Egypt</span>
            </div>
            <div>
              <span className="text-stone-500 block">PRIMARY STACK</span>
              <span className="font-bold text-stone-800">C# 12 &bull; ASP.NET Core &bull; SQL Server</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA Banner */}
      <section className="bg-stone-900 rounded-xl p-8 sm:p-10 text-white border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Interested in discussing opportunities?
          </h2>
          <p className="text-stone-400 text-sm max-w-xl">
            I am available for Junior Backend .NET Developer roles, internships, and backend project engagements.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={onOpenCv}
            className="px-5 py-2.5 rounded-md bg-white hover:bg-stone-100 text-stone-950 text-sm font-semibold transition-colors cursor-pointer"
          >
            Review CV
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-md bg-amber-400 hover:bg-amber-500 text-stone-950 text-sm font-semibold transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
          <a
            href="https://wa.me/201286536360?text=Hello%20Yousef%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors border border-stone-700"
          >
            Direct WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
