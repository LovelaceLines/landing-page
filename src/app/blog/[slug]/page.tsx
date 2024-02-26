import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { Facebook, LinkedIn, WhatsApp, X } from '@mui/icons-material';

import { PostData, PostContent, PostsRecommended, ContentSummary, AuthorLinkCard, PrevNextPage, RouterBack } from '@/_components';
import { getPostBySlug, getRecommendedPosts, markdownToHtmlBySlug } from '@/_libs';
import { Params } from '@/_types';
import env from '@/env';
import { metadata as baseMetadata } from './document';

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = await fetchPost(slug);
  const authors = post.authors;
  return baseMetadata(post, authors);
}

const fetchPost = async (slug: string) => {
  try { return await getPostBySlug(slug); }
  catch (error: unknown) { return notFound(); }
};

export default async function Page({ params }: Params) {
  const post = await fetchPost(params.slug);
  post.content = await markdownToHtmlBySlug(post.slug, 'post');
  const prevPost = post.prevPostId ? await getPostBySlug(post.prevPostId) : undefined;
  const nextPost = post.nextPostId ? await getPostBySlug(post.nextPostId) : undefined;
  const authors = post.authors;
  const postsRecommended = await getRecommendedPosts(undefined, post);

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
      <ContentSummary summary={post.summaries} />
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