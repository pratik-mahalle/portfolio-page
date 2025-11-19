import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import RepositoryList from './components/RepositoryList';
import { Tab } from './types';
import { BookOpen, Package, Star, Table, Book } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 20); // Sticky threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.OVERVIEW: return <Overview />;
      case Tab.REPOSITORIES: return <RepositoryList />;
      default: return <div className="text-center py-20 text-gh-muted">Work in progress...</div>;
    }
  };

  const TabButton: React.FC<{ tab: Tab, icon: React.ReactNode, count?: number }> = ({ tab, icon, count }) => (
    <button 
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors relative top-[1px] ${
        activeTab === tab 
        ? 'border-[#f78166] text-gh-text font-semibold' 
        : 'border-transparent text-gh-text hover:text-gh-muted hover:border-gh-border'
      }`}
    >
      {icon}
      <span>{tab}</span>
      {count !== undefined && (
        <span className="bg-gh-muted/20 text-gh-text text-xs px-2 py-0.5 rounded-full">{count}</span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gh-bg flex flex-col font-sans transition-colors duration-300">
      <Header />
      
      <main className="flex-1 container max-w-[1280px] mx-auto md:px-6 md:py-8 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full md:w-[296px] shrink-0">
           <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
           {/* Sticky Tab Nav for Mobile */}
           <div className={`sticky top-0 z-40 bg-gh-bg md:static border-b border-gh-border mb-6 overflow-x-auto no-scrollbar ${isSticky ? 'pt-2' : ''} transition-colors duration-300`}>
              <nav className="flex min-w-max px-4 md:px-0">
                <TabButton tab={Tab.OVERVIEW} icon={<BookOpen size={16} />} />
                <TabButton tab={Tab.REPOSITORIES} icon={<Book size={16} />} count={12} />
                <TabButton tab={Tab.PROJECTS} icon={<Table size={16} />} />
                <TabButton tab={Tab.PACKAGES} icon={<Package size={16} />} />
                <TabButton tab={Tab.STARS} icon={<Star size={16} />} count={24} />
              </nav>
           </div>

           <div className="px-4 md:px-0">
             {renderContent()}
           </div>

           <footer className="mt-20 py-8 border-t border-gh-border text-xs text-gh-muted px-4 md:px-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="flex items-center gap-2">
                    <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" className="fill-gh-border hover:fill-gh-muted transition-colors cursor-pointer">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <span>© 2025 Pratik Mahalle Resume.</span>
                 </div>
                 <div className="flex flex-wrap justify-center gap-4 text-blue-500">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Security</a>
                    <a href="#" className="hover:underline">Status</a>
                    <a href="#" className="hover:underline">Docs</a>
                    <a href="#" className="hover:underline">Contact</a>
                 </div>
              </div>
           </footer>
        </div>
      </main>
    </div>
  );
};

export default App;