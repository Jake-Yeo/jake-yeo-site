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
});
