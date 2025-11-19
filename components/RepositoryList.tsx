import React from 'react';
import { PROJECTS } from '../data';
import { Star, GitFork, Scale } from 'lucide-react';

const RepositoryList: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4 border-b border-gh-border pb-4">
         <div className="flex-1">
             <input 
                type="text" 
                placeholder="Find a repository..." 
                className="w-full bg-gh-input border border-gh-border rounded-md px-3 py-1.5 text-sm text-gh-text outline-none focus:ring-1 focus:ring-gh-link focus:border-gh-link"
             />
         </div>
         <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-gh-btn border border-gh-border rounded-md text-sm font-medium text-gh-text hover:bg-gh-btnHover">Type</button>
            <button className="px-4 py-1.5 bg-gh-btn border border-gh-border rounded-md text-sm font-medium text-gh-text hover:bg-gh-btnHover">Language</button>
            <button className="px-4 py-1.5 bg-gh-btn border border-gh-border rounded-md text-sm font-medium text-gh-text hover:bg-gh-btnHover">Sort</button>
            <button className="px-4 py-1.5 bg-gh-green text-white rounded-md text-sm font-medium hover:bg-gh-greenHover flex items-center gap-2">
                 <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8ZM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.249.249 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25Z"></path></svg>
                 New
            </button>
         </div>
      </div>

      <div className="space-y-6">
          {PROJECTS.map((repo, idx) => (
            <div key={idx} className="flex items-start justify-between border-b border-gh-border pb-6 last:border-none">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <a href="#" className="text-xl font-bold text-gh-link hover:underline">{repo.name}</a>
                        <span className="border border-gh-border text-gh-muted rounded-full px-2 text-xs py-0.5">Public</span>
                    </div>
                    <p className="text-gh-muted text-sm mb-4 max-w-xl">
                        {repo.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gh-muted">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-[#00ADD8]"></span> 
                            <span>{repo.language}</span>
                        </div>
                        {repo.stars && (
                            <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer">
                                <Star size={14} /> {repo.stars}
                            </div>
                        )}
                        {repo.forks && (
                             <div className="flex items-center gap-1 hover:text-gh-link cursor-pointer">
                                <GitFork size={14} /> {repo.forks}
                            </div>
                        )}
                         <div className="flex items-center gap-1">
                             Updated 4 days ago
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center">
                     <button className="bg-gh-card border border-gh-border rounded-md px-3 py-1 text-xs font-medium text-gh-text hover:bg-gh-border flex items-center gap-1">
                         <Star size={14} /> Star
                     </button>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RepositoryList;