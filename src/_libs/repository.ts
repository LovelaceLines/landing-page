import { Author, Post, Summary, Tag } from '@prisma/client';
import { prisma } from '@/_libs';

export const getPostBySlug = async (slug: string): Promise<Post & { authors: Author[], summaries: Summary[], tags: Tag[] }> =>
  await prisma.post.findUnique({ where: { slug: slug }, include: { authors: true, summaries: true, tags: true } }) as Post & { authors: Author[], summaries: Summary[], tags: Tag[] };

export const getAllPosts = async (page: number = 1, limit: number = Number.MAX_SAFE_INTEGER): Promise<Post[]> =>
  await prisma.post.findMany({ take: limit, skip: (page - 1) * limit, orderBy: { dateCreated: 'desc' } }) as Post[];

export const getCountPosts = async (): Promise<number> =>
  await prisma.post.count();

export const getAuthorBySlug = async (slug: string): Promise<Author> =>
  await prisma.author.findUnique({ where: { slug: slug } }) as Author;

export const getAllAuthors = async (page: number = 0, limit: number = Number.MAX_SAFE_INTEGER): Promise<Author[]> =>
  await prisma.author.findMany({ take: limit, skip: page * limit }) as Author[];

export const getTagBySlug = async (slug: string): Promise<Tag & { posts: Post[] }> =>
  await prisma.tag.findUnique({ where: { slug: slug }, include: { posts: true } }) as Tag & { posts: Post[] };

export const getAllTags = async (): Promise<Tag[]> =>
  await prisma.tag.findMany() as Tag[];