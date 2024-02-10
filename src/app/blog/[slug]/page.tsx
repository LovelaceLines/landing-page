import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Box, Typography } from '@mui/material';

import Link from 'next/link';
import { Facebook, LinkedIn, WhatsApp, X } from '@mui/icons-material';

import { PostData, PostContent, PostsRecommended, ContentSummary, AuthorLinkCard, PrevNextPage } from '@/_components';
import { getAuthorBySlug, getPostBySlug, markdownToHtml } from '@/_libs';
import { Params } from '@/_types';
import env from '@/env';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = fetchPost(slug);

  return {
    title: post.title,
    description: post.excerpt.substring(0, 160),
    abstract: post.excerpt.substring(0, 160),
    authors: [...post.slugAuthors.map(author => { return { name: getAuthorBySlug(author).name, url: getAuthorBySlug(author).instagram } })],
    category: 'Blog de Desenvolvimento de Software' + (post.tags ? ` - ${post.tags.join(', ')}` : ''),
    openGraph: {
      images: [
        {
          url: post.coverImage,
          width: 500,
          height: 500,
          alt: post.title,
        },
      ],
    },
  } as Metadata;
}

const fetchPost = (slug: string) => {
  try { return getPostBySlug(slug); }
  catch (error: unknown) { return notFound(); }
};

export default async function Page({ params }: Params) {
  const post = fetchPost(params.slug);
  post.content = await markdownToHtml(post.content || '');
  const authors = post.slugAuthors.map(author => getAuthorBySlug(author));
  const postsRecommended = post.slugRecommendedArticles ?
    post.slugRecommendedArticles.map(slug => getPostBySlug(slug)) :
    [];

  const AuthorsSection = () => (
    <>
      <Typography variant='h6'>Autores:</Typography>
      <Box display='flex' flexDirection='column' gap={2}>
        {authors.map(author =>
          <AuthorLinkCard key={author.slug} author={author} />)}
      </Box>
    </>
  );

  const SharePost = () => (
    <Box display='flex' flexDirection='column' gap={2}>
      <Typography variant='h6'>Compartilhe:</Typography>
      <Box display='flex' gap={2}>
        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${env.APP_URL}/blog/${post.slug}&title=${post.title}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <LinkedIn fontSize='large' />
        </Link>
        <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <X fontSize='large' />
        </Link>
        <Link href={`whatsapp://send?text=${post.title} ${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <WhatsApp fontSize='large' />
        </Link>
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <Facebook fontSize='large' />
        </Link>
      </Box>
    </Box>
  );

  const SideContent = () => (
    <Box display='flex' flexDirection='column' gap={2} sx={{ paddingTop: 2 }} >
      <ContentSummary summary={post.summary} />
      <AuthorsSection />
      <SharePost />
    </Box>
  );

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <PostData post={post} />

      <Box display='flex' gap={4} flexDirection={{ xs: 'column', md: 'row' }} sx={{ width: { xs: 'auto', sm: 'max-content' }, mx: 'auto' }}>
        <SideContent />
        <PostContent content={post.content} />
      </Box >

      <PrevNextPage prev={post.prevPost || ''} next={post.nextPost || ''} />

      <PostsRecommended posts={postsRecommended} />
    </Box>
  );
}