import { Author, Post, Tag } from "@/_types";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "public/posts");
const getPostSlugs = fs.readdirSync(postsDirectory);

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, slug, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs;
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

const authorsDirectory = join(process.cwd(), "public/authors");
const getAuthorSlugs = fs.readdirSync(authorsDirectory);

export function getAuthorBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(authorsDirectory, slug, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Author;
}

export function getAllAuthors(): Author[] {
  const slugs = getAuthorSlugs;
  const authors = slugs.map(slug => getAuthorBySlug(slug));

  return authors;
}

const tagsDirectory = join(process.cwd(), "public/tags");
const getTagSlugs = fs.readdirSync(tagsDirectory);

export function getTagBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(tagsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug } as Tag;
}

export function getAllTags(): Tag[] {
  const slugs = getTagSlugs;
  const tags = slugs.map(slug => getTagBySlug(slug));

  return tags;
}