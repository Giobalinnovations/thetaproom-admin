export type BlogsType = {
  _id: string;
  category: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  focusKeyword: string;
  imageCoverAlt: string;
  imageCoverCaption: string;
  imageCoverDescription: string;
  slug: string;
  imageCover: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  heading: string;
  keywords: string;
};
