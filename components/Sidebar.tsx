import React from 'react';
import { Users, MapPin, Link as LinkIcon, Mail, Building2, Github, Linkedin, Twitter, Globe, Youtube } from 'lucide-react';
import { USER_PROFILE, CERTIFICATIONS } from '../data';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col gap-4 md:-mt-1">
      <div className="relative group">
        <div className="w-[296px] h-[296px] md:w-[296px] md:h-[296px] rounded-full border border-gh-border overflow-hidden bg-gh-card relative z-10 mx-auto md:mx-0">
          <img 
            src={USER_PROFILE.avatarUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Status bubble */}
        <div className="absolute bottom-10 right-0 md:right-auto md:left-[220px] z-20 bg-gh-card border border-gh-border rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md hover:text-blue-400 cursor-pointer group-hover:w-auto group-hover:px-3 group-hover:h-auto group-hover:py-1 transition-all duration-200">
           <span className="group-hover:hidden">🚀</span>
           <span className="hidden group-hover:inline text-xs text-gh-text truncate">Open to work!</span>
        </div>
      </div>

      <div className="px-2 md:px-0 text-center md:text-left">
        <h1 className="text-2xl font-bold text-gh-text leading-tight">
          {USER_PROFILE.name}
        </h1>
        <h2 className="text-xl text-gh-muted font-light">
          {USER_PROFILE.username}
        </h2>
      </div>

      <div className="text-gh-text text-base px-2 md:px-0 text-center md:text-left">
        {USER_PROFILE.bio}
      </div>

      <div className="w-full px-2 md:px-0">
        <button className="w-full bg-gh-btn border border-gh-border text-gh-text rounded-md py-1.5 font-medium text-sm hover:bg-gh-btnHover transition-colors mb-4">
          Edit profile
        </button>
        
        {USER_PROFILE.currentBuild && (
          <div className="mb-4 border border-gh-border rounded-md p-3 bg-gh-bg shadow-sm">
            <h3 className="text-xs font-bold text-gh-muted mb-2 uppercase tracking-wider">Currently building</h3>
            <div className="flex flex-col gap-2">
               <a href={USER_PROFILE.currentBuild.link} target="_blank" rel="noreferrer" className="font-semibold text-gh-text hover:text-gh-link hover:underline flex items-center gap-1">
                 <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                 {USER_PROFILE.currentBuild.name}
               </a>
               <p className="text-xs text-gh-text">
                 {USER_PROFILE.currentBuild.description}
               </p>
               <div className="flex flex-wrap gap-1 mt-1">
                  {USER_PROFILE.currentBuild.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-gh-card border border-gh-border rounded-full text-gh-muted font-medium">{tag}</span>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center md:justify-start gap-1 text-gh-muted text-sm px-2 md:px-0 mb-4">
        <Users size={16} />
        <span className="font-bold text-gh-text hover:text-gh-link cursor-pointer">{USER_PROFILE.stats.followers}</span> followers
        <span>·</span>
        <span className="font-bold text-gh-text hover:text-gh-link cursor-pointer">{USER_PROFILE.stats.following}</span> following
      </div>

      <div className="flex flex-col gap-2 text-sm text-gh-text px-2 md:px-0">
        {USER_PROFILE.company && (
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-gh-muted" />
            <span>{USER_PROFILE.company}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gh-muted" />
          <span>{USER_PROFILE.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gh-muted" />
          <a href={`mailto:${USER_PROFILE.email}`} className="hover:text-gh-link hover:underline truncate">{USER_PROFILE.email}</a>
        </div>
        {USER_PROFILE.website && (
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-gh-muted" />
            <a href={USER_PROFILE.website} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
              {USER_PROFILE.website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Linkedin size={16} className="text-gh-muted" />
          <a href={USER_PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
            in/mahalle-pratik
          </a>
        </div>
         <div className="flex items-center gap-2">
          <Github size={16} className="text-gh-muted" />
          <a href={USER_PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
            {USER_PROFILE.username}
          </a>
        </div>
        {USER_PROFILE.socials.twitter && (
          <div className="flex items-center gap-2">
            <Twitter size={16} className="text-gh-muted" />
            <a href={USER_PROFILE.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
              @pratikstwts
            </a>
          </div>
        )}
        {USER_PROFILE.socials.youtube && (
          <div className="flex items-center gap-2">
            <Youtube size={16} className="text-gh-muted" />
            <a href={USER_PROFILE.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-gh-link hover:underline truncate">
              YouTube Channel
            </a>
          </div>
        )}
      </div>

      <div className="border-t border-gh-border my-2 mx-2 md:mx-0"></div>

      <div className="px-2 md:px-0">
        <h3 className="font-semibold text-gh-text mb-2">Achievements</h3>
        <div className="flex flex-wrap gap-2">
           {/* Simulated Badges */}
           <div className="group relative">
             <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" className="w-16 h-16" alt="Pull Shark" />
           </div>
           <div className="group relative">
             <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" className="w-16 h-16" alt="YOLO" />
           </div>
           <div className="group relative">
             <img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" className="w-16 h-16" alt="Quickdraw" />
           </div>
        </div>
      </div>
      
      <div className="border-t border-gh-border my-2 mx-2 md:mx-0"></div>

      <div className="px-2 md:px-0">
        <h3 className="font-semibold text-gh-text mb-2 text-sm">Certifications & Roles</h3>
        <ul className="text-xs text-gh-text space-y-2">
            {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1 min-w-[10px] h-[10px] rounded-full border border-gh-green bg-gh-bg"></div>
                    <span>{cert}</span>
                </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;