import { getAllPosts, getPostBySlug } from '../../_libs/repository';

describe('getPostBySlug', () => {
  it('should return a Post object with correct data', async () => {
    const slug = 'hello-world';
    const expectedPost = {
      title: 'Hello-World!',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.',
      tags: ['hello', 'lorem'],
      coverImagePath: '/posts/hello-world/cover.jpeg',
      dateCreated: '2020-06-16T05:35:07.322Z',
      dateLastModified: '2020-03-16T05:35:07.322Z',
      slugAuthors: ['gaviao', 'capivara'],
      layout: 'default',
      slug: 'hello-world',
      sumary: [
        { title: 'Lorem Ipsum 1', id: 'lorem-ipsum-1' },
        { title: 'Lorem Ipsum 2', id: 'lorem-ipsum-2' },
      ],
      content: '',
    };

    const result = await getPostBySlug(slug);

    expect(result.title).toBe(expectedPost.title);
    expect(result.descriptionUI).toBe(expectedPost.excerpt);
    expect(result.descriptionMeta).toBe(expectedPost.excerpt);
    expect(result.tags).toStrictEqual(expectedPost.tags);
    expect(result.coverImagePath).toBe(expectedPost.coverImagePath);
    expect(result.dateCreated).toBe(expectedPost.dateCreated);
    expect(result.dateLastModified).toBe(expectedPost.dateLastModified);
    expect(result.layout).toBe(expectedPost.layout);
    expect(result.slug).toBe(expectedPost.slug);
  });

  it('should return an error if the post does not exist', () => {
    const slug = 'non-existent-post';

    expect(async () => await getPostBySlug(slug)).toThrow();
  });
});

describe('getAllPosts', () => {
  it('should return an array of Post objects', async () => {
    const result = await getAllPosts();

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('should return the correct number of posts', async () => {
    const result = await getAllPosts(0, 2);

    expect(result.length).toBe(2);
  });
});