import React from 'react';
import { 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Layout, 
  CheckCircle2, 
  Terminal,
  ShieldCheck,
  GitBranch,
  Layers
} from 'lucide-react';
import skillsData from '../assets/data/skills.json';

export const SkillsPage: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Server className="w-5 h-5 text-amber-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'Programming & Fundamentals':
        return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'Tools & DevOps':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-amber-600" />;
      default:
        return <Terminal className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mb-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Skills &amp; Technical Proficiency
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
          Logically grouped technical skills acquired through Computer Science academic coursework, targeted backend development training, and project implementation.
        </p>
      </div>

      {/* Logical Skills Groups Grid */}
      <div className="space-y-8">
        {skillsData.map((group) => {
          const isBackend = group.category === 'Backend';
          return (
            <div
              key={group.category}
              id={`skills-group-${group.category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`p-6 sm:p-7 rounded-xl border transition-all ${
                isBackend 
                  ? 'bg-white border-amber-300 shadow-sm ring-1 ring-amber-100' 
                  : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              {/* Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-md flex items-center justify-center ${
                    isBackend ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-800'
                  }`}>
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                      <span>{group.category}</span>
                      {isBackend && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-stone-950">
                          Primary Focus
                        </span>
                      )}
                    </h2>
                  </div>
                </div>

                <span className="text-xs font-mono text-stone-500">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Group Description */}
              <p className="text-stone-600 text-xs sm:text-sm mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Chips Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center gap-2 p-2.5 rounded-md border text-xs sm:text-sm font-medium transition-colors ${
                      isBackend
                        ? 'bg-amber-50/50 border-amber-200/80 text-stone-900 hover:bg-amber-100/50'
                        : 'bg-stone-50 border-stone-200/80 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                      isBackend ? 'text-amber-600' : 'text-stone-400'
                    }`} />
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Backend Architecture Focus Callout */}
      <div className="p-6 bg-stone-900 rounded-xl border border-stone-800 text-stone-300">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
          <Terminal className="w-4 h-4" />
          <span>Backend Quality Standard</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          How I Apply These Skills In Real Projects
        </h3>
        <p className="text-sm text-stone-400 leading-relaxed mb-4">
          Rather than building monolithic code in controllers, I structure backend solutions with separation of concerns: using DTOs to hide internal entity details, Dependency Injection to keep services loosely coupled, and EF Core migrations to ensure reproducible database states across developer environments.
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-stone-800 text-amber-300 border border-stone-700">
            C# 12 / .NET 8
          </span>
          <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700">
            SQL Server Normalized Schemas
          </span>
          <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700">
            JWT &amp; Refresh Token Rotation
          </span>
          <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700">
            Clean Architecture
          </span>
        </div>
      </div>
    </div>
  );
};
