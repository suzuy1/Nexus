
import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const ArrowLongRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);


export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.056c4.502 0 8.294-2.292 9.999-5.381a12.02 12.02 0 00-4.382-10.608z" />
  </svg>
);

export const CpuChipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-4m4 4v-4m-4-12V4M14 8V4M6 16H4m16 0h-2M6 8H4m16 0h-2m-5 8h-2v-4h2v4z" />
    </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const CloudArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 11v6m0 0l-3-3m3 3l3-3" />
  </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
  </svg>
);

export const BuildingOffice2Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

export const HomeModernIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.47 2.118a2.25 2.25 0 01-2.47-2.118c0-.62.28-1.22.754-1.614m13.048-5.32c.474-.394.754-1 .754-1.614a2.25 2.25 0 00-2.47-2.118a2.25 2.25 0 00-2.47 2.118c0 .62.28 1.22.754 1.614m-4.896-5.02c.378.32.624.79.624 1.31a2.25 2.25 0 01-2.25 2.25 2.25 2.25 0 01-2.25-2.25c0-.52.246-.99.624-1.31m9.675 7.632c.414.343.675.85.675 1.4a2.25 2.25 0 01-2.25 2.25 2.25 2.25 0 01-2.25-2.25c0-.55.26-1.057.675-1.4m-4.85-2.422a3 3 0 00-5.78-1.128 2.25 2.25 0 00-2.47-2.118 2.25 2.25 0 00-2.47 2.118c0 .62.28 1.22.754 1.614" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v2.25m0 13.5V21" />
  </svg>
);

export const QuantumLockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l1.5 1.5 3-3" />
    <circle cx="6" cy="6" r="1.5" />
    <circle cx="18" cy="6" r="1.5" />
    <circle cx="6" cy="18" r="1.5" />
    <circle cx="18" cy="18" r="1.5" />
  </svg>
);

export const HyperScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v18M17.25 3v18M3 6.75h18M3 17.25h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M21 3L3 21" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .266.18.577.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M5 11v4M3 13h4M11 5v4M9 7h4M11 15v4M9 17h4M17 5v4M15 7h4M17 15v4M15 17h4" />
    </svg>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0114 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

export const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const Bars3Icon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


// Generic placeholder logos for Integrations section
export const LogoFigma: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>;
export const LogoGitHub: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577 0-.285-.01-1.233-.015-2.234-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.222.687.825.57A12.009 12.009 0 0024 12c0-6.627-5.373-12-12-12z" /></svg>;
export const LogoStripe: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M14.375 14.375c0 .345-.28.625-.625.625h-5.5a.625.625 0 110-1.25h5.5c.345 0 .625.28.625.625zm-6.75-2.5h8.75a.625.625 0 010 1.25H7.625a.625.625 0 010-1.25zm.625-3.125h10.5a.625.625 0 110 1.25H8.25a.625.625 0 010-1.25zm-2.5-1.875C4.545 6.875 3.5 7.92 3.5 9.125c0 1.205 1.045 2.25 2.25 2.25H7V6.875H5.75zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" /></svg>;
export const LogoVercel: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.78h20L12 2z" /></svg>;
export const LogoCloudflare: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 6H22L12 18 2 6h4.5l5.5 6.5L17.5 6z" /></svg>;
export const LogoNotion: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21 21H3V3h18v18zM9.5 9.125V17H7.75V7H12l3.5 5.25V7H17v10h-1.75v-6.25L12 17H9.5z" /></svg>;
export const LogoSlack: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M8.25 14.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5-4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4.5-4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>;
export const LogoFramer: React.FC<{}> = () => <svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v8H4V4zm4 16h8V12H8v8z" /></svg>;