import { getPostBySlug } from '@/_libs';
import { Post } from '@prisma/client';

// localhost:3000/api/post?query=Hello%20World!
describe('GET', () => {
  it('should return search results when query is provided', async () => {
    const expectedResults = await getPostBySlug('hello-world');

    const url = 'http://example.com?query=Hello%20World!';
    const response = await fetch(url).then(res => res.json()).then(data => data as Post[]);

    expect(response).toContain(expectedResults);
  });

  it('should return 400 status when no query is provided', async () => {
    const url = 'http://example.com';

    expect(await fetch(url)).toThrow();
  });
});