import { getAllPosts } from "@/_lib/api";

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      {heroPost.title}
      <br />
      {heroPost.tags.join(", ")}
      <br />
      {heroPost.date}
      <br />
      {heroPost.excerpt}
    </main>
  );
}
