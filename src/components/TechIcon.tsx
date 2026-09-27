import type { CSSProperties } from 'react';
import {
  siAuth0,
  siCss,
  siDocker,
  siExpress,
  siFfmpeg,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGraphql,
  siHtml5,
  siJavascript,
  siMocha,
  siMongodb,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siRedux,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

type IconData = { path: string; hex: string; title: string };

const iconBySkill: Record<string, IconData> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  Java: siOpenjdk,
  HTML: siHtml5,
  CSS: siCss,
  React: siReact,
  'Next.js': siNextdotjs,
  'Redux Toolkit': siRedux,
  'Node.js': siNodedotjs,
  Express: siExpress,
  'Material UI': siMui,
  Tailwind: siTailwindcss,
  GraphQL: siGraphql,
  PyTest: siPytest,
  Mocha: siMocha,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Firebase: siFirebase,
  Docker: siDocker,
  FFmpeg: siFfmpeg,
  Git: siGit,
  GitHub: siGithub,
  Auth0: siAuth0,
  Figma: siFigma,
};

const brightOnDark = new Set(['Java', 'Next.js', 'Express', 'GitHub']);

const TechIcon = ({ skill }: { skill: string }) => {
  if (skill === 'AWS') {
    return (
      <svg className="tech-logo" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" style={{ '--brand': '#FF9900' } as CSSProperties}>
        <path d="M7.2 18.3h10.5a4.3 4.3 0 0 0 .4-8.6 6.4 6.4 0 0 0-12.3-1.4A5 5 0 0 0 7.2 18.3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (skill === 'SQL') {
    return (
      <svg className="tech-logo" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" style={{ '--brand': '#4FD1FF' } as CSSProperties}>
        <ellipse cx="12" cy="5" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  const icon = iconBySkill[skill];
  if (!icon) return <span className="tech-logo tech-logo--fallback" aria-hidden="true">{skill.slice(0, 1)}</span>;
  const brand = brightOnDark.has(skill) ? '#e8ecf3' : `#${icon.hex}`;
  return (
    <svg className="tech-logo" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" style={{ '--brand': brand } as CSSProperties}>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
};

export default TechIcon;
