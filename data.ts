import { Experience, Project, UserProfile } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Pratik Mahalle",
  username: "pratik-mahalle",
  avatarUrl: "https://github.com/pratik-mahalle.png",
  bio: "Developer Advocate | Cloud DevOps Engineer | Content Creator (YouTube & X). Passionate about Cloud Native, Go, and Infrastructure as Code.",
  email: "pratik.mahalle@outlook.com",
  phone: "+91 93223 38943",
  location: "Nagpur, India",
  website: "https://pratikmahalle.live",
  socials: {
    github: "https://github.com/pratik-mahalle",
    linkedin: "https://linkedin.com/in/mahalle-pratik",
    twitter: "https://x.com/pratikstwts"
  },
  stats: {
    followers: 128,
    following: 45
  },
  currentBuild: {
    name: "InfraAudit",
    description: "Cloud cost optimization platform identifying unused/misconfigured resources.",
    tags: ["Go", "Terraform", "AWS"],
    link: "https://github.com/pratik-mahalle/InfraAudit"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    role: "DevRel Intern",
    company: "Keploy",
    period: "June 2025 - Oct 2025",
    description: [
      "Engaging with developer communities by creating educational content including blogs, workshops, demos, and presentations focused on API testing and open source tools.",
      "Collected developer feedback that influenced product roadmap, improving onboarding time by 30%.",
      "Published 10+ blogs with 5K+ reads; created demos that gained 1K+ GitHub stars."
    ]
  },
  {
    role: "Cloud Infrastructure Intern",
    company: "Samyak Tech Lab",
    period: "Feb 2025 - March 2025",
    description: [
      "Monitored and managed AWS services (EC2, S3, IAM, VPC) ensuring secure and reliable cloud environments.",
      "Automated infrastructure provisioning using Terraform and shell scripts, reducing manual errors.",
      "Configured system monitoring and alerting with Prometheus and Grafana to ensure uptime and performance.",
      "Assisted in troubleshooting incidents and performance bottlenecks, reducing resolution time by 20%."
    ]
  },
  {
    role: "DevRel",
    company: "MusiTech",
    period: "Mar 2024 - August 2024",
    description: [
      "Automated deployments using GitHub Actions and ArgoCD, cutting release times by 40%.",
      "Optimized AWS infra with Terraform, cutting monthly cost by 15%.",
      "Supported incident response by monitoring build pipelines and cloud workloads."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "InfraAudit",
    description: "Cloud cost optimization platform identifying unused/misconfigured resources. Designed and deployed infra on AWS with Kubernetes, NeonDB, and Terraform.",
    tags: ["Go", "Terraform", "AWS", "React"],
    language: "Go",
    stars: 42,
    forks: 8,
    link: "https://github.com/pratik-mahalle/InfraAudit"
  },
  {
    name: "cluster-api",
    description: "Release Lead v1.12. Led release cycle, managed issue triage, bug fixes, and release notes for CNCF's Cluster API project.",
    tags: ["Kubernetes", "Cluster API", "CNCF"],
    language: "Go",
    stars: 2400,
    forks: 560,
    link: "https://github.com/kubernetes-sigs/cluster-api"
  },
  {
    name: "open-source-contributions",
    description: "Contributor to CNCF ecosystem projects including Kubestellar, Metal3, and Microcks. Documentation & Features.",
    tags: ["CNCF", "Open Source", "Docs"],
    language: "Markdown",
    stars: 156,
    forks: 23,
    link: "https://github.com/pratik-mahalle/open-source-contributions"
  },
  {
    name: "devops-config-demos",
    description: "Collection of configurations for Kubernetes, Docker, Helm, ArgoCD, Kyverno, Prometheus, and Grafana.",
    tags: ["DevOps", "Config", "Education"],
    language: "HCL",
    stars: 89,
    forks: 12,
    link: "https://github.com/pratik-mahalle/devops-config-demos"
  }
];

export const SKILLS = {
  languages: ["Go", "JavaScript", "SQL", "MongoDB", "HTML/CSS"],
  devops: ["Kubernetes", "Docker", "Prometheus", "ArgoCD", "Kyverno", "Helm", "Grafana", "Podman"],
  cloud: ["AWS", "GCP", "Azure", "GitHub", "Vercel"],
  cicd: ["GitHub Actions", "Jenkins"],
  other: ["Community Development", "Public Speaking", "Technical Writing", "Strategic Planning"]
};

export const CERTIFICATIONS = [
  "Google Cloud Certified – Professional Cloud DevOps Engineer",
  "AWS Community Builder",
  "Organizer, CNCF Nagpur",
  "President, Linux Club",
  "Microsoft Learn Student Ambassador"
];