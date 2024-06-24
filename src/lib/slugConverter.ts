export const slugConverter = (slug: string) =>
  slug.toLowerCase().replaceAll(' ', '-');
