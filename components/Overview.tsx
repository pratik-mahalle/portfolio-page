import React from 'react';
import { PROJECTS } from '../data';
import RepoCard from './RepoCard';
import ContributionGraph from './ContributionGraph';
import ProfileReadme from './ProfileReadme';

const Overview: React.FC = () => {
  // Slice top 4 or 6 projects for Pinned
  const pinnedProjects = PROJECTS; 

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gh-text">Pinned</h2>
        <button className="text-xs text-gh-muted hover:text-gh-link">Customize your pins</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {pinnedProjects.map((project, idx) => (
          <RepoCard key={idx} project={project} />
        ))}
      </div>

      <div className="mb-8">
        <ProfileReadme />
      </div>

      <h2 className="text-sm font-semibold text-gh-text mb-2">1,234 contributions in the last year</h2>
      <ContributionGraph />
    </div>
  );
};

export default Overview;