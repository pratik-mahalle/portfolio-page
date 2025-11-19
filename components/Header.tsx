import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, Plus, User, Github, Sun, Moon } from 'lucide-react';
import { USER_PROFILE } from '../data';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-gh-header text-gh-headerText border-b border-gh-border py-3 px-4 md:px-6 flex items-center justify-between sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <button 
          className="md:hidden p-1 border border-gh-border rounded-md text-gh-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={20} />
        </button>
        
        <a href="#" className="text-gh-headerText hover:text-gh-muted transition-colors">
          <Github size={32} fill="currentColor" />
        </a>

        <div className="hidden md:flex flex-col md:flex-row gap-4 text-sm font-semibold text-gh-headerText ml-2">
          <span className="cursor-pointer hover:text-gh-muted">Dashboard</span>
        </div>
      </div>

      {/* Desktop Search & Actions */}
      <div className="hidden md:flex items-center gap-3">
        <div className="relative">
          <div className="flex items-center border border-gh-border bg-gh-input rounded-md px-2 py-1 w-64 focus-within:border-gh-link focus-within:ring-1 focus-within:ring-gh-link">
            <Search size={14} className="text-gh-muted mr-2" />
            <input 
              type="text" 
              placeholder="Type / to search" 
              className="bg-transparent border-none outline-none text-sm text-gh-text w-full placeholder-gh-muted"
            />
            <span className="border border-gh-border rounded px-1 text-[10px] text-gh-muted">/</span>
          </div>
        </div>

        <div className="flex items-center border border-gh-border rounded-md divide-x divide-gh-border">
          <button className="px-2 py-1 hover:bg-gh-border"><Plus size={16} className="text-gh-headerText" /></button>
          <button className="px-2 py-1 hover:bg-gh-border"><span className="text-gh-headerText text-xs font-bold">▼</span></button>
        </div>

        <button 
          className="text-gh-headerText p-1 hover:text-gh-muted" 
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="text-gh-headerText p-1 hover:text-gh-muted relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-gh-header"></span>
        </button>

        <button className="ml-1">
           <img src={USER_PROFILE.avatarUrl} alt="Profile" className="w-5 h-5 rounded-full border border-gh-border" />
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gh-header border-b border-gh-border p-4 flex flex-col gap-4 md:hidden shadow-xl">
             <div className="relative">
              <input 
                type="text" 
                placeholder="Search GitHub" 
                className="bg-gh-input border border-gh-border rounded-md px-3 py-2 w-full text-gh-text outline-none focus:border-gh-link"
              />
            </div>
            <a href="#" className="font-bold text-gh-headerText">Dashboard</a>
            <a href="#" className="font-bold text-gh-headerText">Pull requests</a>
            <a href="#" className="font-bold text-gh-headerText">Issues</a>
            <a href="#" className="font-bold text-gh-headerText">Codespaces</a>
            <a href="#" className="font-bold text-gh-headerText">Marketplace</a>
            <a href="#" className="font-bold text-gh-headerText">Explore</a>
            
            <div className="flex items-center justify-between">
                <span className="font-bold text-gh-headerText">Theme</span>
                <button 
                  className="text-gh-headerText p-2 border border-gh-border rounded-md" 
                  onClick={toggleTheme}
                >
                   {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>

            <div className="border-t border-gh-border my-1"></div>
            <div className="flex items-center gap-2 py-2">
              <img src={USER_PROFILE.avatarUrl} className="rounded-full w-5 h-5 border border-gh-border" alt="Avatar" />
              <span className="text-gh-text font-semibold">{USER_PROFILE.username}</span>
            </div>
            <button className="flex items-center gap-2 text-gh-text">
              <User size={16} /> Your Profile
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;