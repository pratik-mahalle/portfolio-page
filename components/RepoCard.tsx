import React from 'react';
import { Star, GitFork } from 'lucide-react';
import { Project } from '../types';

const RepoCard: React.FC<{ project: Project }> = ({ project }) => {
  // Helper to determine language color
  const getLangColor = (lang: string) => {
    const colors: Record<string, string> = {
      Go: '#00ADD8',
      TypeScript: '#3178c6',
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      HCL: '#844FBA',
      Shell: '#89e051',
      Markdown: '#083fa1',
      Vue: '#41b883',
      Java: '#b07219',
      C: '#555555',
      'C++': '#f34b7d',
    };
    return colors[lang] || '#8b949e'; // Default gray
  };

  return (
    <div className="border border-gh-border rounded-md p-4 bg-gh-bg flex flex-col justify-between text-sm h-full transition-all duration-200 hover:shadow-md hover:border-gh-text-secondary/30 group cursor-pointer">
      <div>
        <div className="flex items-center gap-2 mb-2">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-gh-muted group-hover:fill-gh-text transition-colors">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.249.249 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"></path>
            </svg>
            <a href={project.link || "#"} className="font-bold text-gh-link hover:underline truncate text-[14px]">
              {project.name}
            </a>
            <span className="border border-gh-border text-gh-muted rounded-full px-2 py-0.5 text-xs font-medium">Public</span>
        </div>
        <p className="text-gh-text-secondary text-xs mb-4 line-clamp-3 min-h-[2.5em] leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-gh-muted mt-auto">
        <div className="flex items-center gap-1">
          <span 
            className="w-3 h-3 rounded-full border border-black/10 dark:border-white/10" 
            style={{ backgroundColor: getLangColor(project.language) }}
          ></span>
          <span className="text-gh-text-secondary">{project.language}</span>
        </div>
        {(project.stars !== undefined && project.stars > 0) && (
            <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer transition-colors">
            <Star size={14} />
            <span>{project.stars}</span>
            </div>
        )}
        {(project.forks !== undefined && project.forks > 0) && (
            <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer transition-colors">
            <GitFork size={14} />
            <span>{project.forks}</span>
            </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;