import {
  approvedExperiences,
  getExperienceBySlug,
  validateApprovedExperiences,
} from './experience';

describe('approved experience data', () => {
  it('contains route-safe unique slugs and all required public fields', () => {
    expect(validateApprovedExperiences(approvedExperiences)).toEqual([]);
    expect(approvedExperiences.map((experience) => experience.slug)).toEqual([
      'ubc-faculty-of-medicine',
      'invoke-media',
    ]);
  });

  it('retrieves an approved experience by slug and returns undefined for an unknown slug', () => {
    expect(getExperienceBySlug('invoke-media')?.company).toBe('Invoke Media');
    expect(getExperienceBySlug('missing-experience')).toBeUndefined();
  });

  it('keeps scope facts in prose and exposes only approved public fields', () => {
    const approvedFields = [
      'company', 'companyUrl', 'duration', 'features', 'highlights', 'launches', 'layers', 'lessons',
      'location', 'milestones', 'period', 'product', 'role', 'slug', 'summary', 'technologies',
    ];
    approvedExperiences.forEach((experience) => {
      expect(Object.keys(experience).sort()).toEqual(approvedFields);
    });
    expect(getExperienceBySlug('ubc-faculty-of-medicine')?.highlights.join(' ')).toMatch(/20–50-page/);
    expect(getExperienceBySlug('ubc-faculty-of-medicine')?.highlights.join(' ')).toMatch(/three-developer team/);
  });
});
