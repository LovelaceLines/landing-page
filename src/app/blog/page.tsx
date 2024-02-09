import { Metadata } from 'next';

import { Pagination, PostFlatData, TagList } from '@/_components';
import { getAllPosts, getAllTags } from '@/_libs';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  abstract: 'Blog da Lovelace Lines. Artigos, tutoriais, dicas e truques sobre desenvolvimento de software, design e muito mais!',
  category: 'Blog de Desenvolvimento de Software',
  appLinks: {
    ios: {
      app_name: 'Lovelace Lines',
      url: 'https://loveacelines.com/blog'
    },
    web: {
      should_fallback: true,
      url: 'https://loveacelines.com/blog'
    },
    windows: {
      app_name: 'Lovelace Lines',
      url: 'https://loveacelines.com/blog'
    },
  }
};

export default function Blog() {
  const allPosts = getAllPosts();
  // const heroPost = allPosts[0];  
  // const morePosts = allPosts.slice(1);
  const tags = getAllTags();

  return (
    <>
      <TagList tags={tags} />
      {allPosts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
      <Pagination params={{ slug: 'blog', page: 0 }} />
    </>
  );
}