import React from 'react';
import { PageId } from '../types';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code2,
  Briefcase,
  ExternalLink,
  Printer
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCv: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenCv }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider block mb-1">
            Biography &amp; Profile
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            About Yousef Alaa Mohamed Mostafa
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Junior Backend .NET Developer with a strong academic Computer Science background and focus on structured, clean architectures.
          </p>
        </div>

        <button
          id="about-open-cv-btn"
          onClick={onOpenCv}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-md transition-colors shrink-0 shadow-xs cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>View / Print CV</span>
        </button>
      </div>

      {/* 1. Personal Introduction with Real Profile Photo */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <Terminal className="w-5 h-5 text-amber-600" />
          <span>Introduction</span>
        </h2>
        
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Real Photograph */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-xl overflow-hidden border-2 border-stone-200 shadow-md bg-stone-900">
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
                <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-xs p-2 text-center text-[10px] font-mono text-stone-200 border-t border-stone-800">
                  Yousef Alaa Mohamed &bull; Qena
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="md:col-span-8 space-y-3.5 text-stone-700 leading-relaxed text-sm sm:text-base">
              <p>
                Hello, I am <strong>Yousef Alaa Mohamed Mostafa</strong>, a 4th-year Computer Science student at <strong>Qena University</strong>, graduating in <strong>2027</strong>.
              </p>
              <p>
                Throughout my academic studies and software engineering practice, I concentrated my development efforts on <strong>backend engineering</strong>. While visual interfaces change often, backend logic demands rigorous thinking: entity modeling, transaction safety, clean domain segregation, and reliable API contracts.
              </p>
              <p>
                I build backend applications using <strong>C#</strong>, <strong>ASP.NET Core Web API</strong>, <strong>Entity Framework Core</strong>, and <strong>Microsoft SQL Server</strong>, with a strong foundation in Data Structures, Algorithms, OOP, and SOLID principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Education & Academic Details */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-600" />
          <span>Education</span>
        </h2>

        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Qena University &mdash; Faculty of Computer Science &amp; Information
              </h3>
              <p className="text-sm font-medium text-stone-600">
                Bachelor&apos;s Degree in Computer Science, Department of Computer Science (CS)
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-stone-500">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 font-semibold mb-1">
                4th Year Student
              </span>
              <div>Expected Graduation: 2027</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-stone-600">
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="text-stone-400 block mb-1">LOCATION</span>
              <span className="text-stone-900 font-semibold text-sm">Qena, Egypt</span>
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <span className="text-stone-400 block mb-1">CORE FOUNDATIONS</span>
              <span className="text-stone-900 font-semibold text-sm">Data Structures &amp; Algorithms, OOP, Database Systems, Computer Networks, OS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Freelance Client Experience (Exact from CV) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-amber-600" />
          <span>Freelance Web Development Experience</span>
        </h2>

        <div className="space-y-4">
          {/* Khubara Al-Wasat Office */}
          <div className="p-6 bg-white rounded-lg border border-stone-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Freelance Web Developer &mdash; مكتب خبراء الوساطة (Khubara Al-Wasat Office)
                </h3>
                <span className="text-xs text-stone-500">
                  Production Client Engagement &bull; Real Business Solution
                </span>
              </div>
              <a
                href="https://khubaraalwasat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-700 hover:text-amber-800 font-semibold"
              >
                <span>khubaraalwasat.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-stone-700 pl-1 leading-relaxed">
              <li>Developed and delivered a production website (WordPress-based) for a real business client, managing requirements gathering through live deployment.</li>
              <li>Translated business requirements into a functional, professional web presence presenting services and corporate offerings.</li>
              <li>Engineered responsive, user-friendly pages with structured content tailored for non-technical stakeholders.</li>
              <li>Handled end-to-end delivery and deployment to a live production environment.</li>
            </ul>
          </div>

          {/* E-Commerce Store */}
          <div className="p-6 bg-white rounded-lg border border-stone-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-stone-900">
                  Freelance Web Developer &mdash; E-Commerce Store
                </h3>
                <span className="text-xs text-stone-500">
                  Client Project &bull; Mostaql Platform
                </span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                Mostaql
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-stone-700 pl-1 leading-relaxed">
              <li>Analyzed client specifications and communicated directly with the client to scope and plan the e-commerce store.</li>
              <li>Built product listing and catalog functionality for browsing and presenting items to end users.</li>
              <li>Implemented a responsive UI ensuring smooth experience across mobile and desktop devices.</li>
              <li>Managed project timeline through successful delivery and handoff to the client.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Career Direction */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <Server className="w-5 h-5 text-amber-600" />
          <span>Career Direction &amp; Focus</span>
        </h2>

        <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs space-y-4">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            I am seeking opportunities as a <strong>Junior Backend .NET Developer</strong> where I can write clean, testable code, implement layered architectural patterns, and work with relational data. My specific focus includes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              'ASP.NET Core Web API & RESTful Endpoints',
              'Clean / Layered Architecture (API, Core, Infrastructure)',
              'Generic Repository & Unit of Work Patterns',
              'Entity Framework Core Fluent API & Migrations',
              'ASP.NET Core Identity & Role-Based Authorization',
              'Database Relationship Modeling (1-to-1, 1-to-Many, Many-to-Many)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Development Approach & Engineering Principles */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <Code2 className="w-5 h-5 text-amber-600" />
          <span>Development Approach</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-lg border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">
              Clean Architecture &amp; Separation
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Separating business domains, data access abstractions, and HTTP API controllers into decoupled layers, keeping entities unencumbered by external frameworks.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">
              SOLID Principles &amp; Clean Code
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Applying single-responsibility classes, interface segregation, and dependency inversion via ASP.NET Core&apos;s native Dependency Injection container.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">
              Database Integrity First
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Proper relational schema design in SQL Server, enforcing foreign keys, and tracking database evolution with versioned EF Core code-first migrations.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2">
              API Documentation &amp; Verification
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Documenting endpoints with Swagger/OpenAPI schemas and validating HTTP response codes, query params, and validation errors using Postman.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Action Callout */}
      <div className="p-6 bg-stone-900 rounded-xl border border-stone-800 text-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-base">Want to review the complete CV or discuss opportunities?</h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
            You can inspect the full CV directly or get in touch for backend positions.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCv}
            className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-500 rounded-md transition-colors cursor-pointer"
          >
            Open Full CV
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 text-xs font-semibold text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md border border-stone-700 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
