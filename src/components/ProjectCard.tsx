import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ChevronDown, ChevronUp, Layers, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      id={`project-card-${project.id}`}
      className="bg-white rounded-lg border border-stone-200 overflow-hidden flex flex-col hover:border-amber-400/80 transition-all shadow-xs hover:shadow-md"
    >
      {/* Project Visual / Architecture Diagram */}
      <div className="relative aspect-16/9 bg-stone-900 overflow-hidden border-b border-stone-100 flex items-center justify-center">
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} diagram preview`}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-900 text-stone-300 font-mono text-xs">
            <Terminal className="w-8 h-8 text-amber-500 mb-2" />
            <span className="font-semibold text-stone-200">{project.title}</span>
            <span className="text-stone-500 text-[11px] mt-1">.NET Backend Architecture</span>
          </div>
        )}

        {project.featured && (
          <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded shadow-xs">
            Featured
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-2.5">
            <h3 className="text-stone-900 font-bold text-lg tracking-tight hover:text-amber-600 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Short Description */}
          <p className="text-stone-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Architectural / Deep-dive Expansion */}
          {project.details && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-700 hover:text-amber-800 font-medium cursor-pointer"
              >
                <span>{expanded ? 'Hide Architecture Notes' : 'Why it matters & Architecture'}</span>
                {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {expanded && (
                <div className="mt-2 p-3 bg-stone-50 rounded-md border border-stone-200 text-xs text-stone-700 leading-relaxed font-sans space-y-2">
                  <p>{project.details}</p>
                  <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Clean domain boundaries &amp; EF Core data migrations</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Technology Skills Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 bg-stone-100 text-stone-700 font-mono text-xs rounded border border-stone-200/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links / Buttons */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
          {/* GitHub Action */}
          {project.github ? (
            <a
              id={`project-github-${project.id}`}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-stone-700" />
              <span>Source Code</span>
            </a>
          ) : (
            <span 
              className="inline-flex items-center gap-1.5 text-xs text-stone-400 px-3 py-1.5 rounded-md bg-stone-50 border border-stone-100 cursor-not-allowed"
              title="Private or internal organization repository"
            >
              <Github className="w-3.5 h-3.5 text-stone-400" />
              <span>Private Repo</span>
            </span>
          )}

          {/* Live Demo Action */}
          {project.liveDemo ? (
            <a
              id={`project-demo-${project.id}`}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-md transition-colors"
            >
              <span>Live Preview / Docs</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
            </a>
          ) : (
            <span 
              className="inline-flex items-center text-xs font-mono text-stone-400 px-2 py-1"
              title="Backend REST API service tested via Swagger / Postman"
            >
              REST Service / API
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
