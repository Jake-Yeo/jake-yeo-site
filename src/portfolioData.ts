export type PortfolioProject = {
  name: string;
  period: string;
  context: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  images?: readonly { src: string; alt: string }[];
  source?: string;
  demo?: string;
  visualLabel?: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    name: 'Nourish',
    period: '2026 · Private project',
    context: 'Independent product',
    description:
      'A photo-first nutrition PWA for capturing meals, reviewing AI-assisted estimates, and maintaining a durable food diary.',
    contribution:
      'Designed and built the React and TypeScript product, with SQLite-owned state, multi-angle meal capture, editable analysis, durable background jobs, trends, saved meals, and MyNetDiary imports.',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'PWA', 'AI workflows'],
    visualLabel: 'Photo-first nutrition, built for review',
  },
  {
    name: 'PullUp',
    period: '2026 · In development',
    context: 'Five-person team',
    description:
      'A social event platform for creating pullups, inviting friends and circles, managing RSVPs, finding locations, and sharing event photos.',
    contribution:
      'Built major parts of the MongoDB and Express API, Redux state architecture, Auth0 integration, friend and RSVP systems, maps, photo support, and event detail and editing flows.',
    technologies: ['React', 'TypeScript', 'Redux', 'Express', 'MongoDB', 'Auth0'],
    visualLabel: 'Make plans. Bring your people.',
  },
  {
    name: 'Sightline',
    period: 'Oct 2025',
    context: 'StormHacks 2025 · Three-person team',
    description:
      'An accessibility-first PWA that gives blind and low-vision users spoken descriptions of scenes captured with a phone camera.',
    contribution:
      'Built the iPhone and desktop camera flow, browser permission handling, photo capture, scene-description interface, and reusable frontend components under hackathon time constraints.',
    technologies: ['Next.js', 'TypeScript', 'MediaDevices', 'Gemini', 'ElevenLabs', 'PWA'],
    source: 'https://github.com/xuanhieu2611/Sightline',
    demo: 'https://sightline-xi.vercel.app/',
    visualLabel: 'A clearer view of what is around you',
  },
  {
    name: 'Sum-Up Sundae',
    period: 'Jan 2025',
    context: 'nwHacks 2025 · Sponsor Prize winner',
    description:
      'A weekly video-recap platform that helps friends stay connected by unlocking group updates after everyone contributes.',
    contribution:
      'Designed MongoDB models and Express APIs, integrated Livepeer upload and playback, tested endpoints with Postman, and connected group and video flows to the frontend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Livepeer', 'Firebase'],
    images: [
      { src: '/pics/sumUpSundae/sum-1.png', alt: 'Sum-Up Sundae weekly video dashboard' },
      { src: '/pics/sumUpSundae/sum-2.png', alt: 'Sum-Up Sundae group interface' },
      { src: '/pics/sumUpSundae/sum-3.jpg', alt: 'Sum-Up Sundae video experience' },
    ],
    source: 'https://github.com/tyin76/sum-up-sundae',
    demo: 'https://sum-up-sundae.web.app/',
  },
  {
    name: 'UBC Insights',
    period: '2024',
    context: 'CPSC 310 · Four-person team',
    description:
      'A TypeScript and Node.js application for ingesting, querying, and analyzing UBC course and room datasets.',
    contribution:
      'Implemented most core functionality across dataset ingestion, query validation and execution, grouping, aggregation, sorting, persistence, API endpoints, and tests.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'JSZip', 'Mocha', 'Chai'],
    images: [
      { src: '/pics/ubcInsights/Insight-1.png', alt: 'UBC Insights dataset query interface' },
      { src: '/pics/ubcInsights/Insight-2.png', alt: 'UBC Insights analytics dashboard' },
    ],
  },
  {
    name: 'Zen Café',
    period: '2024',
    context: 'Solo full-stack project',
    description:
      'A real-time social café combining live group messaging with a shared, curated music radio.',
    contribution:
      'Built the React and TypeScript frontend and Node, Express, and MongoDB backend, including authentication, chat rooms, playlists, and real-time updates with Server-Sent Events.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'SSE', 'Firebase'],
    images: [
      { src: '/pics/zenCafe/zc1.png', alt: 'Zen Café messaging and music interface' },
      { src: '/pics/zenCafe/zc2.png', alt: 'Zen Café chat room' },
      { src: '/pics/zenCafe/zc3.png', alt: 'Zen Café music experience' },
    ],
    source: 'https://github.com/Jake-Yeo/zen-cafe',
    demo: 'https://zen-cafe.vercel.app/',
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Product engineering',
    skills: ['React', 'Next.js', 'Redux Toolkit', 'Node.js', 'Express', 'GraphQL'],
  },
  {
    label: 'Cloud & data',
    skills: ['AWS', 'PostgreSQL', 'MongoDB', 'SQLite', 'Docker', 'Firebase'],
  },
] as const;
