import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { Filter, Search, Terminal, AlertCircle } from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    'All',
    'ASP.NET Core',
    'SQL Server',
    'Clean Architecture',
    'REST APIs',
    'Angular'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by category/skill
      const matchesFilter =
        selectedFilter === 'All' ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(selectedFilter.toLowerCase())
        );

      // Filter by search query
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-700 font-semibold uppercase tracking-wider mb-1">
          <Terminal className="w-3.5 h-3.5" />
          <span>Dynamic Dataset Loaded from JSON</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
          Backend &amp; Full-Stack Projects
        </h1>
        <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-2xl">
          A collection of backend services, REST APIs, and database solutions built with C#, ASP.NET Core, EF Core, and SQL Server.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-stone-200">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Project filter categories">
          <span className="text-xs font-mono text-stone-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {filterOptions.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-md text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-lg border border-dashed border-stone-300 p-8">
          <AlertCircle className="w-10 h-10 text-stone-400 mx-auto mb-3" />
          <h3 className="font-bold text-stone-800 text-base">No matching projects found</h3>
          <p className="text-stone-500 text-xs sm:text-sm mt-1 mb-4">
            Try adjusting your search query or selecting &quot;All&quot; from the filter list.
          </p>
          <button
            onClick={() => {
              setSelectedFilter('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* GitHub Repository Banner */}
      <div className="p-6 bg-stone-900 text-stone-200 rounded-lg border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-base">Looking for more code samples?</h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-0.5">
            Visit my GitHub profile to explore active repositories, algorithmic problem-solving in C++, and ongoing C# studies.
          </p>
        </div>
        <a
          href="https://github.com/Yousef-Alaa-Mohamed-Y11D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-stone-950 rounded-md transition-colors shrink-0"
        >
          Open GitHub Profile
        </a>
      </div>
    </div>
  );
};
