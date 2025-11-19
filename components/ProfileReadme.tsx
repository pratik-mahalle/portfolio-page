import React from 'react';
import { EXPERIENCES, SKILLS, USER_PROFILE } from '../data';
import { BookOpen, Code, Server, Cloud, Mail } from 'lucide-react';

const ProfileReadme: React.FC = () => {
  return (
    <div className="mt-8 border border-gh-border rounded-md bg-gh-bg">
      <div className="flex items-center justify-between px-4 py-2 bg-gh-card border-b border-gh-border rounded-t-md">
        <span className="text-xs font-mono text-gh-text">pratik-mahalle / README.md</span>
        <div className="p-1 hover:bg-gh-border rounded-md cursor-pointer">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-gh-text">
                <path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
            </svg>
        </div>
      </div>
      <div className="p-6 md:p-8 font-sans text-gh-text">
        <h2 className="text-2xl font-bold border-b border-gh-border pb-2 mb-6 text-gh-text">Hi there, I'm Pratik 👋</h2>
        
        <div className="prose prose-invert max-w-none">
            <p className="mb-6 text-gh-text">
                I'm a <b>Cloud DevOps Engineer</b> and <b>Open Source Enthusiast</b> based in Nagpur, India. 
                I specialize in building scalable cloud infrastructure using Go, Terraform, and Kubernetes.
            </p>

            <h3 className="text-lg font-bold text-gh-text flex items-center gap-2 mb-4">
                <Server size={20} className="text-gh-muted" /> Work Experience
            </h3>
            <div className="space-y-6 mb-8 border-l-2 border-gh-border ml-2 pl-6 relative">
                {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="relative">
                         <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-gh-border border-2 border-gh-bg"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                            <h4 className="font-bold text-gh-text text-base">{exp.role}</h4>
                            <span className="text-xs text-gh-muted font-mono bg-gh-card px-2 py-1 rounded border border-gh-border">{exp.period}</span>
                        </div>
                        <div className="text-sm text-gh-link mb-2 font-medium hover:underline cursor-pointer">{exp.company}</div>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gh-text">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h3 className="text-lg font-bold text-gh-text flex items-center gap-2 mb-4">
                <Code size={20} className="text-gh-muted" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-semibold text-gh-text mb-2 border-b border-gh-border pb-1">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {SKILLS.languages.map(s => (
                            <span key={s} className="text-xs px-2 py-1 bg-gh-card border border-gh-border rounded-md text-gh-text hover:border-gh-muted transition-colors cursor-default">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-gh-text mb-2 border-b border-gh-border pb-1">DevOps & Cloud</h4>
                     <div className="flex flex-wrap gap-2">
                        {[...SKILLS.devops, ...SKILLS.cloud].map(s => (
                            <span key={s} className="text-xs px-2 py-1 bg-gh-card border border-gh-border rounded-md text-gh-text hover:border-gh-muted transition-colors cursor-default">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-gh-text mb-2 border-b border-gh-border pb-1">CI/CD & Tools</h4>
                     <div className="flex flex-wrap gap-2">
                        {SKILLS.cicd.map(s => (
                            <span key={s} className="text-xs px-2 py-1 bg-gh-card border border-gh-border rounded-md text-gh-text hover:border-gh-muted transition-colors cursor-default">{s}</span>
                        ))}
                    </div>
                </div>
                 <div>
                    <h4 className="text-sm font-semibold text-gh-text mb-2 border-b border-gh-border pb-1">Others</h4>
                     <div className="flex flex-wrap gap-2">
                        {SKILLS.other.map(s => (
                            <span key={s} className="text-xs px-2 py-1 bg-gh-card border border-gh-border rounded-md text-gh-text hover:border-gh-muted transition-colors cursor-default">{s}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <a 
                    href={`mailto:${USER_PROFILE.email}`} 
                    className="flex items-center gap-2 px-5 py-2 bg-gh-btn border border-gh-border rounded-md font-semibold text-sm text-gh-text hover:bg-gh-btnHover transition-colors shadow-sm"
                >
                    <Mail size={16} />
                    Contact Me
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReadme;