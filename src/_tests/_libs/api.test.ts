import { getAllPosts, getPostBySlug } from '../../_libs/api';

describe('getPostBySlug', () => {
  it('should return a Post object with correct data', () => {
    const slug = 'hello-world';
    const expectedPost = {
      title: 'Hello-World!',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.',
      tags: ['hello', 'lorem'],
      coverImage: '/posts/hello-world/cover.jpeg',
      date: '2020-06-16T05:35:07.322Z',
      lastmod: '2020-03-16T05:35:07.322Z',
      slugAuthors: ['gaviao', 'capivara'],
      layout: 'default',
      slug: 'hello-world',
      slugRecommendedArticles: ['explorando-o-mundo-das-frutas-mais-saborosas', 'reportagem-especial-jornada-da-harmonia-na-natureza', 'reportagem-especial-descubra-os-melhores-companheiros-para-a-caca'],
      sumary: [
        { title: 'Lorem Ipsum 1', id: 'lorem-ipsum-1' },
        { title: 'Lorem Ipsum 2', id: 'lorem-ipsum-2' },
      ],
      content: '',
    };

    const result = getPostBySlug(slug);

    expect(result.title).toBe(expectedPost.title);
    expect(result.excerpt).toBe(expectedPost.excerpt);
    expect(result.tags).toStrictEqual(expectedPost.tags);
    expect(result.coverImage).toBe(expectedPost.coverImage);
    expect(result.date).toBe(expectedPost.date);
    expect(result.lastmod).toBe(expectedPost.lastmod);
    expect(result.slugAuthors).toStrictEqual(expectedPost.slugAuthors);
    expect(result.layout).toBe(expectedPost.layout);
    expect(result.slug).toBe(expectedPost.slug);
    expect(result.slugRecommendedArticles).toStrictEqual(expectedPost.slugRecommendedArticles);
  });

  it('should return an error if the post does not exist', () => {
    const slug = 'non-existent-post';

    expect(() => getPostBySlug(slug)).toThrow();
  });
});

describe('getAllPosts', () => {
  it('should return an array of Post objects', () => {
    const result = getAllPosts();

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('should return the correct number of posts', () => {
    const result = getAllPosts(0, 2);

    expect(result.length).toBe(2);
  });
});