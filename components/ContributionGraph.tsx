import React from 'react';

const ContributionGraph: React.FC = () => {
  // Generate a static grid of contributions
  // 52 weeks (columns) x 7 days (rows)
  const weeks = 52;
  const days = 7;
  
  const getLevel = () => {
    const rand = Math.random();
    if (rand > 0.8) return 'bg-gh-contrib-4'; // High
    if (rand > 0.6) return 'bg-gh-contrib-3'; // Med
    if (rand > 0.4) return 'bg-gh-contrib-2'; // Low
    if (rand > 0.2) return 'bg-gh-contrib-1'; // Very Low
    return 'bg-gh-contrib-0'; // None
  };

  return (
    <div className="border border-gh-border rounded-md p-4 bg-gh-bg mt-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gh-text">1,234 contributions in the last year</span>
        <div className="text-xs text-gh-muted">Contribution settings</div>
      </div>
      
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-[3px] min-w-max">
            {Array.from({ length: weeks }).map((_, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                    {Array.from({ length: days }).map((_, dIndex) => (
                        <div 
                            key={`${wIndex}-${dIndex}`} 
                            className={`w-[10px] h-[10px] rounded-[2px] ${getLevel()}`}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gh-muted mt-2">
        <a href="#" className="hover:text-gh-link">Learn how we count contributions</a>
        <div className="flex items-center gap-1">
            <span>Less</span>
            <div className="w-[10px] h-[10px] bg-gh-contrib-0 rounded-[2px]"></div>
            <div className="w-[10px] h-[10px] bg-gh-contrib-1 rounded-[2px]"></div>
            <div className="w-[10px] h-[10px] bg-gh-contrib-2 rounded-[2px]"></div>
            <div className="w-[10px] h-[10px] bg-gh-contrib-3 rounded-[2px]"></div>
            <div className="w-[10px] h-[10px] bg-gh-contrib-4 rounded-[2px]"></div>
            <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;