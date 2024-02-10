export type Post = {
  title: string;
  excerpt: string;
  tags?: string[];
  coverImage: string;
  date: Date;
  lastmod?: Date;
  slugAuthors: string[];
  layout: string;
  slug: string;
  slugRecommendedArticles?: string[];
  summary: Summary[];
  content: string;
};

export type Summary = {
  id: string;
  title: string;
};

export type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

export type ProjectsData = Project[]