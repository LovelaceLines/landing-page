import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { Facebook, LinkedIn, WhatsApp, X } from '@mui/icons-material';

import { PostData, PostContent, PostsRecommended, ContentSummary, AuthorLinkCard, PrevNextPage, RouterBack } from '@/_components';
import { getAuthorBySlug, getPostBySlug, markdownToHtml } from '@/_libs';
import { Params } from '@/_types';
import env from '@/env';
import { metadata as baseMetadata } from './document';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = fetchPost(slug);
  const authors = post.slugAuthors.map(author => getAuthorBySlug(author));
  return baseMetadata(post, authors);
}

const fetchPost = (slug: string) => {
  try { return getPostBySlug(slug); }
  catch (error: unknown) { return notFound(); }
};

export default async function Page({ params }: Params) {
  const post = fetchPost(params.slug);
  post.content = await markdownToHtml(post.content || '');
  const prevPost = post.prevPost ? getPostBySlug(post.prevPost) : undefined;
  const nextPost = post.nextPost ? getPostBySlug(post.nextPost) : undefined;
  const authors = post.slugAuthors.map(author => getAuthorBySlug(author));
  const postsRecommended = post.slugRecommendedArticles ?
    post.slugRecommendedArticles.map(slug => getPostBySlug(slug)) :
    null;

  const AuthorsSection = () => (
    <>
      <Typography variant='subtitle1'>{authors.length > 1 ? 'Autores:' : 'Autor:'}</Typography>
      <Box display='flex' flexDirection='column' gap={2}>
        {authors.map(author =>
          <AuthorLinkCard key={author.slug} author={author} />)}
      </Box>
    </>
  );

  const SharePost = () => (
    <Box display='flex' flexDirection='column' gap={2}>
      <Typography variant='subtitle1'>Compartilhe:</Typography>
      <Box display='flex' gap={2}>
        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${env.APP_URL}/blog/${post.slug}&title=${post.title}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <LinkedIn fontSize='medium' />
        </Link>
        <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <X fontSize='medium' />
        </Link>
        <Link href={`whatsapp://send?text=${post.title} ${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <WhatsApp fontSize='medium' />
        </Link>
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${env.APP_URL}/blog/${post.slug}`} rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }}>
          <Facebook fontSize='medium' />
        </Link>
      </Box>
    </Box>
  );

  const SideContent = () => (
    <Box display='flex' flexDirection='column' gap={2} position={{ xs: 'static', lg: 'absolute' }} sx={{ paddingTop: 2 }} >
      <ContentSummary summary={post.summary} />
      <AuthorsSection />
      <SharePost />
    </Box>
  );

  return (
    <Box display='flex' flexDirection='column' alignItems='center' position='relative'>
      <RouterBack />
      <PostData post={post} />

      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} justifySelf='center' position={{ xs: 'static', lg: 'relative' }} sx={{ width: '-webkit-fill-available' }}>
        <SideContent />
        <PostContent content={post.content} />
      </Box >

      <PrevNextPage prevPost={prevPost} nextPost={nextPost} />

      {postsRecommended && <PostsRecommended posts={postsRecommended} />}
    </Box>
  );
}