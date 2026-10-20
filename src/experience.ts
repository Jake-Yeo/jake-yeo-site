export type ExperienceFeature = { title: string; text: string; technologies: readonly string[] };
export type ExperienceLaunch = { category: string; title: string; description: string };
export type ExperienceLayer = { name: string; description: string; technologies: readonly string[] };
export type ExperienceMilestone = { when: string; title: string; description: string };
export type ExperienceLesson = { title: string; description: string };

export type ApprovedExperience = {
  slug: string;
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  product: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
  features: readonly ExperienceFeature[];
  launches: readonly ExperienceLaunch[];
  layers: readonly ExperienceLayer[];
  milestones: readonly ExperienceMilestone[];
  lessons: readonly ExperienceLesson[];
};

export const approvedExperiences: readonly ApprovedExperience[] = [
  {
    slug: 'ubc-faculty-of-medicine',
    company: 'UBC Faculty of Medicine',
    companyUrl: 'https://www.med.ubc.ca/',
    role: 'Software Developer Intern',
    period: 'May 2025 — Dec 2025',
    duration: 'Eight months',
    location: 'Vancouver, BC',
    product: 'Faculty360 / Faculty CV',
    summary:
      'Eight-month full-stack internship building a configurable document-authoring and generation platform for complex academic records.',
    highlights: [
      'Designed the core nested drag-and-drop builder for configurable 20–50-page academic documents.',
      'Built AWS Lambda and Docker workflows that generated PDF and editable DOCX output.',
      'Worked across React, GraphQL, PostgreSQL, institutional authentication, and cloud infrastructure in a three-developer team.',
    ],
    technologies: ['React', 'JavaScript', 'Python', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    features: [
      {
        title: 'Configurable document builder',
        text: 'Designed and built a deeply nested drag-and-drop editor for groups, tables, sections, attributes, and reusable attribute groups. Administrators could add, hide, rename, clone, sort, and reorganize document structures without hard-coding each template.',
        technologies: ['React', 'dnd-kit', 'JavaScript', 'CodeMirror'],
      },
      {
        title: 'Data transformation and preview',
        text: 'Created embedded query and transformation workflows for turning faculty records into template-ready structures, including mock-data generation and preview tools for exercising configurations before using real data.',
        technologies: ['GraphQL', 'PostgreSQL', 'SQL', 'AlaSQL'],
      },
      {
        title: 'PDF and DOCX generation',
        text: 'Built containerized document-generation workflows with AWS Lambda, Docker, Gotenberg, and Adobe PDF Services so large academic records could be produced as repeatable PDF and editable DOCX outputs.',
        technologies: ['AWS Lambda', 'Docker', 'Gotenberg', 'Adobe PDF Services'],
      },
      {
        title: 'Institutional authentication',
        text: 'Implemented and debugged the UBC OIDC path through Keycloak and Cognito, including environment-aware callbacks, redirects, logout behavior, roles, and application access.',
        technologies: ['OIDC', 'Keycloak', 'Amazon Cognito', 'AWS CDK'],
      },
    ],
    launches: [
      { category: 'Authoring', title: 'Nested template editing', description: 'Configurable groups, tables, sections, attributes, and arbitrary nesting.' },
      { category: 'Authoring', title: 'Document presentation modes', description: 'List, table, record-detail, narrative, SQL-result, and custom HTML layouts.' },
      { category: 'Preview', title: 'Mock-data generation', description: 'Let template authors exercise complex configurations before using faculty records.' },
      { category: 'Generation', title: 'One-click document output', description: 'Repeatable PDF and editable DOCX generation from stored faculty data.' },
      { category: 'Data', title: 'GraphQL workflows', description: 'Corrected and extended queries, mutations, resolvers, and data transformations.' },
      { category: 'Identity', title: 'UBC institutional login', description: 'Environment-aware OIDC and Cognito authentication with role-based access.' },
      { category: 'Frontend', title: 'Reusable application architecture', description: 'Refactored profile, tabs, accordions, sections, modals, and state ownership.' },
      { category: 'Product', title: 'Responsive feedback states', description: 'Improved loading, notifications, errors, navigation, and responsive behavior.' },
    ],
    layers: [
      { name: 'Client interfaces', description: 'Document authoring, faculty profiles, previews, modals, and application feedback.', technologies: ['React', 'JavaScript', 'HTML/CSS', 'dnd-kit', 'CodeMirror'] },
      { name: 'Data and APIs', description: 'Faculty records, configurable transformations, and application workflows.', technologies: ['GraphQL', 'AppSync', 'PostgreSQL', 'SQL', 'AlaSQL'] },
      { name: 'Document engine', description: 'Template parsing and generation of large PDF and DOCX artifacts.', technologies: ['Python', 'Docker', 'Gotenberg', 'Adobe PDF Services', 'LaTeX'] },
      { name: 'Cloud and identity', description: 'Authentication, storage, compute, deployment, and environment configuration.', technologies: ['AWS Lambda', 'S3', 'Cognito', 'Amplify', 'CDK', 'OIDC'] },
      { name: 'Delivery practice', description: 'Stakeholder translation, documentation, debugging, and hands-on acceptance testing.', technologies: ['GitHub', 'Jira', 'Miro', 'Manual QA'] },
    ],
    milestones: [
      { when: 'May 2025', title: 'Joined the Faculty360 team', description: 'Began contributing across the React application, GraphQL workflows, PostgreSQL-backed data, and AWS environment.' },
      { when: 'Summer 2025', title: 'Built the authoring foundation', description: 'Developed the nested template model and editing interactions needed to represent complex institutional documents.' },
      { when: 'Fall 2025', title: 'Connected data to generated documents', description: 'Expanded transformation, preview, and document-generation workflows across the application and cloud stack.' },
      { when: 'December 2025', title: 'Closed with a maintainable platform', description: 'Refined authentication, reusable frontend architecture, generated output, documentation, and real-template edge cases.' },
    ],
    lessons: [
      { title: 'Make complexity configurable.', description: 'The strongest solution was not another hard-coded document. It was a model that let administrators express changing institutional rules directly.' },
      { title: 'Generated output is part of the product.', description: 'A successful request was not enough; PDF and DOCX output had to be inspected for layout, structure, and data-transformation edge cases.' },
      { title: 'Prototype with representative data.', description: 'Mock-data and preview tools made deeply nested templates testable before they touched real faculty records.' },
      { title: 'Translate stakeholder language into systems.', description: 'Administrative rules became data structures, authoring controls, queries, and repeatable generation workflows.' },
    ],
  },
  {
    slug: 'invoke-media',
    company: 'Invoke Media',
    companyUrl: 'https://www.builtbyinvoke.ca/',
    role: 'Web Developer Intern',
    period: 'Jan 2025 — Apr 2025',
    duration: 'Four months',
    location: 'Vancouver, BC',
    product: 'Chunks Chunks Chunks · TrueLoyalty',
    summary:
      'Four-month internship delivering frontend, backend, and AWS infrastructure across a video platform and a restaurant-loyalty prototype.',
    highlights: [
      'Built direct-to-S3 multipart uploads and event-driven Lambda processing for large video files.',
      'Implemented an FFmpeg pipeline for HLS segmentation, parallel clip generation, streaming, and MP4 downloads.',
      'Recovered a drifted AWS environment independently before a CEO-led product demonstration.',
    ],
    technologies: ['TypeScript', 'Next.js', 'Python', 'GraphQL', 'AWS Lambda', 'FFmpeg'],
    features: [
      {
        title: 'Large-video upload pipeline',
        text: 'Implemented direct-to-S3 multipart uploads with expiring presigned URLs so large videos bypassed the application server and moved reliably into cloud processing.',
        technologies: ['Next.js', 'Amazon S3', 'Presigned URLs', 'TypeScript'],
      },
      {
        title: 'Video processing and delivery',
        text: 'Built an event-driven pipeline that normalized uploads, produced HLS segments, generated selected clips in parallel, and assembled downloadable MP4 files.',
        technologies: ['Python', 'FFmpeg', 'AWS Lambda', 'HLS'],
      },
      {
        title: 'TrueLoyalty service workflow',
        text: 'Translated supplied Figma designs into responsive guest and table interfaces with loyalty tiers, guest context, and sorting by priority and arrival time.',
        technologies: ['React', 'Next.js', 'GraphQL', 'Figma'],
      },
      {
        title: 'Production recovery',
        text: 'Recovered an AWS environment that had drifted before a CEO-led demonstration, redeploying affected services while preserving stateful resources such as databases.',
        technologies: ['AWS', 'YAML', 'CI/CD', 'Infrastructure debugging'],
      },
    ],
    launches: [
      { category: 'Upload', title: 'Multipart S3 delivery', description: 'Large files uploaded directly with expiring presigned URLs.' },
      { category: 'Media', title: 'Video normalization', description: 'Prepared uploads for consistent downstream analysis and playback.' },
      { category: 'Streaming', title: 'HLS segmentation', description: 'Produced one-second segments for analysis and browser playback.' },
      { category: 'Clipping', title: 'Parallel clip generation', description: 'Created selected social clips from candidate timestamps.' },
      { category: 'Download', title: 'MP4 assembly', description: 'Combined completed segments into downloadable video files.' },
      { category: 'API', title: 'AppSync and GraphQL workflows', description: 'Connected cloud processing state to the Next.js frontend.' },
      { category: 'Lifecycle', title: 'Auth-triggered email events', description: 'Handled signup, returning-login, and inactivity workflows through Auth0 events.' },
      { category: 'Frontend', title: 'TrueLoyalty prototype', description: 'Built responsive guest, table, loyalty-tier, and sorting interfaces.' },
    ],
    layers: [
      { name: 'Client interfaces', description: 'Upload, playback, guest, table, and loyalty interfaces.', technologies: ['React', 'Next.js', 'TypeScript', 'Figma'] },
      { name: 'APIs and events', description: 'Application workflows linking the browser to cloud processing.', technologies: ['GraphQL', 'AppSync', 'Auth0', 'S3 Events'] },
      { name: 'Media engine', description: 'Normalization, segmentation, parallel clipping, streaming, and downloads.', technologies: ['Python', 'FFmpeg', 'HLS', 'PyTest'] },
      { name: 'Infrastructure', description: 'Storage, Lambda processing, deployment configuration, and incident recovery.', technologies: ['AWS Lambda', 'Amazon S3', 'YAML', 'CI/CD'] },
      { name: 'Team practice', description: 'Daily scrum, code review, technical diagrams, and cross-functional delivery.', technologies: ['GitHub', 'Miro', 'Figma', 'Scrum'] },
    ],
    milestones: [
      { when: 'January 2025', title: 'Joined a five-person product team', description: 'Started contributing across two products and learning the media, GraphQL, and cloud architecture.' },
      { when: 'Early internship', title: 'Moved large uploads into S3', description: 'Built multipart uploads and event-driven processing around presigned URLs and object storage.' },
      { when: 'Mid-internship', title: 'Completed the video path', description: 'Connected FFmpeg processing, HLS playback, parallel clipping, APIs, and MP4 download.' },
      { when: 'April 2025', title: 'Delivered product and infrastructure work', description: 'Shipped TrueLoyalty interfaces, configuration tooling, lifecycle workflows, and a time-sensitive AWS recovery.' },
    ],
    lessons: [
      { title: 'Keep large files off the application server.', description: 'Presigned multipart uploads and object-storage events made the media path clearer and more reliable.' },
      { title: 'Preserve state while repairing infrastructure.', description: 'Recovering a demo environment required targeted redeployment rather than replacing stateful resources.' },
      { title: 'Document the path across services.', description: 'Miro diagrams and service-specific configuration made a cross-cloud media workflow easier to reason about.' },
      { title: 'Own the handoffs.', description: 'Working across upload, processing, APIs, playback, and download made it possible to trace failures end to end.' },
    ],
  },
];

const routeSafeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const validateApprovedExperiences = (experiences: readonly ApprovedExperience[]): string[] => {
  const slugs = new Set<string>();
  return experiences.flatMap((experience) => {
    const errors: string[] = [];
    const required = [experience.slug, experience.company, experience.role, experience.period, experience.summary];
    if (required.some((value) => !value.trim())) errors.push(`${experience.slug || 'experience'}: required fields are missing`);
    if (!routeSafeSlug.test(experience.slug)) errors.push(`${experience.slug}: slug is not route-safe`);
    if (slugs.has(experience.slug)) errors.push(`${experience.slug}: slug must be unique`);
    slugs.add(experience.slug);
    if (!experience.highlights.length || !experience.technologies.length) errors.push(`${experience.slug}: public detail is required`);
    return errors;
  });
};

const validationErrors = validateApprovedExperiences(approvedExperiences);
if (validationErrors.length) throw new Error(`Invalid approved experience data: ${validationErrors.join('; ')}`);

export const getExperienceBySlug = (slug: string | undefined): ApprovedExperience | undefined =>
  approvedExperiences.find((experience) => experience.slug === slug);
