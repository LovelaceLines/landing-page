import { About } from './about';
import { Welcome } from './welcome';
import { Projects } from './projects';
import { Process } from './process';
import { InstagramFeed } from './instagramFeed';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Process />
      <InstagramFeed />
    </>
  );
}