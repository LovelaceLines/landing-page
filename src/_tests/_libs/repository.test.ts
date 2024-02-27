import { getAllPosts, getPostBySlug } from '@/_libs';

test('getPostBySlug', () => {
  it('should return a Post object with correct data', async () => {
    const slug = 'hello-world';

    const expectedPost = {
      id: 'hello-world',
      title: 'Hello-World!',
      slug: 'hello-world',
      descriptionUI: 'Olá mundo! Este é o primeiro post do blog Lovelace Lines. Aqui você encontrará muitas histórias e aventuras sobre a natureza e o mundo animal. Fique ligado!',
      descriptionMeta: 'Olá mundo! Este é o primeiro post do blog Lovelace Lines. Aqui você encontrará muitas histórias e aventuras sobre a natureza e o mundo animal. Fique ligado!',
      coverImagePath: '/posts/hello-world/cover.jpeg',
      dateCreated: '2020-06-16T05:35:07.322Z',
      dateLastModified: '2020-03-16T05:35:07.322Z',
      layout: 'default',
      nextPostId: 'reportagem-especial-jornada-da-harmonia-na-natureza',
      prevPostId: 'explorando-o-mundo-das-frutas-mais-saborosas',
      content: '',
      authors: {
        connect: [
          {
            id: 'capivara',
          },
          {
            id: 'gaviao',
          },
        ],
      },
      tags: {
        connect: [
          {
            id: 'hello',
          },
          {
            id: 'lorem',
          },
        ],
      },
      summaries: {
        connect: [
          {
            title: 'Título 1 no sumário',
            to: 'título-1',
          },
          {
            title: 'Título 2 no sumário nome extra grande extra grande extra grande extra grande extra grande',
            to: 'título-2',
          }
        ],
      },
    };

    const result = await getPostBySlug(slug);

    expect(result.id).toBe(expectedPost.id);
    expect(result.title).toBe(expectedPost.title);
    expect(result.slug).toBe(expectedPost.slug);
    expect(result.descriptionUI).toBe(expectedPost.descriptionUI);
    expect(result.descriptionMeta).toBe(expectedPost.descriptionMeta);
    expect(result.coverImagePath).toBe(expectedPost.coverImagePath);
    expect(result.dateCreated).toBe(expectedPost.dateCreated);
    expect(result.dateLastModified).toBe(expectedPost.dateLastModified);
    expect(result.layout).toBe(expectedPost.layout);
    expect(result.nextPostId).toBe(expectedPost.nextPostId);
    expect(result.prevPostId).toBe(expectedPost.prevPostId);

    const resultAuthors = result.authors.map(author => author.name);
    const expectedAuthors = expectedPost.authors.connect.map(author => author.id);

    expect(resultAuthors).toEqual(expectedAuthors);

    const resultTags = result.tags.map(tag => tag.id);
    const expectedTags = expectedPost.tags.connect.map(tag => tag.id);

    expect(resultTags).toEqual(expectedTags);

    const resultSummaries = result.summaries.map(summary => summary.title);
    const expectedSummaries = expectedPost.summaries.connect.map(summary => summary.title);

    expect(resultSummaries).toEqual(expectedSummaries);
  });

  it('should return an error if the post does not exist', () => {
    const slug = 'non-existent-post';

    expect(async () => await getPostBySlug(slug)).toThrow();
  });
});

test('getAllPosts', () => {
  it('should return an array of Post objects', async () => {
    const result = await getAllPosts();

    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toBeInstanceOf(Object);
  });

  it('should return the correct number of posts', async () => {
    const result = await getAllPosts(1, 2);

    expect(result.length).toBe(2);
  });
});