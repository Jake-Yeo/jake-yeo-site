export type ProjectLink = { label: string; href: string };
export type PortfolioProject = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  technologies: readonly string[];
  images: readonly string[];
  links: readonly ProjectLink[];
  award?: string;
  featured?: boolean;
  coverPosition?: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    name: 'Sum-Up Sundae',
    year: '2025',
    tagline: 'Weekly video check-ins that keep groups of friends connected.',
    description:
      'Every Sunday, each member uploads a short video update before watching the rest of the group. I owned much of the backend structure and video integration: MongoDB models, Express APIs, Livepeer upload and playback, API testing, and frontend group and video flows.',
    technologies: ['React', 'JavaScript', 'Tailwind', 'Material UI', 'Express', 'MongoDB', 'Livepeer'],
    images: ['/pics/sumUpSundae/sum-1.webp', '/pics/sumUpSundae/sum-2.webp', '/pics/sumUpSundae/sum-3.webp', '/pics/sumUpSundae/sum-4.webp'],
    links: [
      { label: 'Live site', href: 'https://sum-up-sundae.web.app/' },
      { label: 'Source', href: 'https://github.com/tyin76/sum-up-sundae' },
      { label: 'Devpost', href: 'https://devpost.com/software/sum-up-sundae' },
    ],
    award: 'Aquareum.tv Sponsor Prize',
    featured: true,
    coverPosition: 'left center',
  },
  {
    name: 'UBC Insights',
    year: '2025',
    tagline: 'Query, validate, and analyze complex UBC course datasets.',
    description:
      'A four-person TypeScript and Node.js course project for ingesting, querying, and analyzing UBC datasets. I implemented most core functionality across dataset processing, recursive query validation and execution, grouping, aggregation, sorting, persistence, APIs, and tests.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'JSZip', 'parse5', 'Mocha', 'Chai'],
    images: ['/pics/ubcInsights/insight-1.webp', '/pics/ubcInsights/insight-2.webp', '/pics/ubcInsights/insight-3.webp', '/pics/ubcInsights/insight-4.webp', '/pics/ubcInsights/insight-5.webp', '/pics/ubcInsights/insight-6.webp'],
    links: [{ label: 'Source', href: 'https://github.com/tyin76/UBC-Insights' }],
  },
  {
    name: 'Zen Café',
    year: '2024',
    tagline: 'A real-time messaging space with a shared music radio.',
    description:
      'A solo full-stack application with Firebase login, application JWT authorization, chat rooms, messages, playlists, and real-time updates through MongoDB Change Streams and Server-Sent Events.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'SSE'],
    images: ['/pics/zenCafe/zc1.png', '/pics/zenCafe/zc2.png', '/pics/zenCafe/zc3.png', '/pics/zenCafe/zc4.png'],
    links: [
      { label: 'Live site', href: 'https://zen-cafe.vercel.app/' },
      { label: 'Source', href: 'https://github.com/Jake-Yeo/zen-cafe' },
    ],
  },
  {
    name: 'Nova-Type',
    year: '2024',
    tagline: 'Customizable typing practice with cloud-saved progress.',
    description:
      'A solo typing platform with configurable sessions, live accuracy and speed, visual finger cues, accounts, responsive animated scenery, and cloud-saved history and settings.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Firebase', 'React Router'],
    images: ['/pics/novaType/nt1.png', '/pics/novaType/nt2.png', '/pics/novaType/nt3.png', '/pics/novaType/nt4.png', '/pics/novaType/nt5.png', '/pics/novaType/nt6.png'],
    links: [
      { label: 'Live site', href: 'https://nova-type.web.app/' },
      { label: 'Source', href: 'https://github.com/Jake-Yeo/nova-type' },
    ],
  },
  {
    name: 'GorillaType',
    year: '2024',
    tagline: 'A test-driven desktop typing application built in Java.',
    description:
      'An individual Java Swing course project with accounts, generated prompts, WPM results, settings, event logs, filtering, JSON persistence, and JUnit coverage across the core typing experience.',
    technologies: ['Java', 'Swing', 'JUnit', 'JSON', 'TDD'],
    images: ['/pics/gorillaType/gt00.png', '/pics/gorillaType/gt0.png', '/pics/gorillaType/gt1.png', '/pics/gorillaType/gt2.png', '/pics/gorillaType/gt3.png', '/pics/gorillaType/gt4.png'],
    links: [{ label: 'Source', href: 'https://github.com/Jake-Yeo/GorillaType' }],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    blurb: 'What I use to build and reason about systems.',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & libraries',
    blurb: 'Frontend, backend, testing, and product building blocks.',
    skills: ['React', 'Next.js', 'Redux Toolkit', 'Node.js', 'Express', 'Material UI', 'Tailwind', 'GraphQL', 'PyTest', 'Mocha'],
  },
  {
    title: 'Tools & platforms',
    blurb: 'Cloud, data, media, deployment, and day-to-day workflow.',
    skills: ['AWS', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'FFmpeg', 'Git', 'GitHub', 'Auth0', 'Figma'],
  },
] as const;
