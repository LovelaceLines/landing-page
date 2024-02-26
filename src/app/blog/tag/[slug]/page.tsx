import type { Metadata } from 'next';

import { PostFlatData, TagData } from '@/_components';
import { getTagBySlug } from '@/_libs';

export const metadata: Metadata = {
  title: 'Tag',
};

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const tag = await getTagBySlug(slug);

  return (
    <>
      <TagData tag={tag} />
      {tag.posts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
    </>
  );
}