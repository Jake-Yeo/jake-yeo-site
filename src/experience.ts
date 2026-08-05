export type ExperienceMedia = {
  src: string;
  alt: string;
};

export type ApprovedExperience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  product: string;
  summary: string;
  highlights: readonly string[];
  technologies: readonly string[];
  media?: ExperienceMedia;
};

export const approvedExperiences: readonly ApprovedExperience[] = [
  {
    slug: 'ubc-faculty-of-medicine',
    company: 'UBC Faculty of Medicine',
    role: 'Software Developer Intern',
    period: 'May - Dec 2025',
    product: 'Faculty360',
    summary:
      'Built the core document-authoring system for Faculty360 as part of a three-developer team, helping turn a small internal app into a full-stack platform for faculty data and academic document generation.',
    highlights: [
      'Designed a deeply nested drag-and-drop document builder for configurable 20-50 page academic documents.',
      'Built AWS Lambda and Docker pipelines using Gotenberg and Adobe APIs to generate PDF and DOCX files.',
      'Implemented UBC OIDC login, application authorization, PostgreSQL features, and GraphQL-backed workflows.',
    ],
    technologies: ['JavaScript', 'Python', 'PostgreSQL', 'GraphQL', 'AWS', 'Docker'],
  },
  {
    slug: 'invoke-media',
    company: 'Invoke Media',
    role: 'Web Developer Intern',
    period: 'Jan - Apr 2025',
    product: 'Chunks Chunks Chunks · TrueLoyalty',
    summary:
      'Worked across frontend, backend, and AWS infrastructure on production applications, with primary ownership across video upload, processing, clipping, and playback workflows.',
    highlights: [
      'Implemented direct-to-S3 multipart uploads using expiring presigned URLs and event-driven Lambda processing.',
      'Built an FFmpeg pipeline for HLS segmentation, parallel clip generation, streaming, and MP4 downloads.',
      'Recovered a drifted AWS environment as the only available engineer before a CEO-led product demonstration.',
    ],
    technologies: ['TypeScript', 'Next.js', 'Python', 'GraphQL', 'AWS Lambda', 'FFmpeg'],
  },
];

const routeSafeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const validateApprovedExperiences = (experiences: readonly ApprovedExperience[]): string[] => {
  const slugs = new Set<string>();

  return experiences.flatMap((experience) => {
    const errors: string[] = [];
    const requiredFields: Array<[string, string]> = [
      ['slug', experience.slug],
      ['company', experience.company],
      ['role', experience.role],
      ['period', experience.period],
      ['product', experience.product],
      ['summary', experience.summary],
    ];

    requiredFields.forEach(([field, value]) => {
      if (!value.trim()) errors.push(`${experience.slug || 'experience'}: ${field} is required`);
    });
    if (!routeSafeSlug.test(experience.slug)) errors.push(`${experience.slug}: slug is not route-safe`);
    if (slugs.has(experience.slug)) errors.push(`${experience.slug}: slug must be unique`);
    slugs.add(experience.slug);
    if (!experience.highlights.length) errors.push(`${experience.slug}: highlights are required`);
    if (!experience.technologies.length) errors.push(`${experience.slug}: technologies are required`);

    return errors;
  });
};

const validationErrors = validateApprovedExperiences(approvedExperiences);
if (validationErrors.length) throw new Error(`Invalid approved experience data: ${validationErrors.join('; ')}`);

export const getExperienceBySlug = (slug: string | undefined): ApprovedExperience | undefined =>
  approvedExperiences.find((experience) => experience.slug === slug);
