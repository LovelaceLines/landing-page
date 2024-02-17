import { About } from './about';
import { AboutOpenSource } from './aboutOpenSource';
import { Welcome } from './welcome';
import { Projects } from './projects';
import { Process } from './process';
import { InstagramFeed } from './instagramFeed';
import { Contact } from './contact';
import { MainTechnologies } from './mainTechnologies';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <AboutOpenSource />
      <MainTechnologies />
      <Projects />
      <Process />
      <InstagramFeed />
      <Contact />
    </>
  );
}