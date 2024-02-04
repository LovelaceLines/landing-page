import { Author } from '@/_types';

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

export type ProjectsData = Project[]