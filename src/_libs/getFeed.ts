import { Feed } from '@/_types';
import env from '@/env';

// TODO: move to _services
export const getFeed = async (): Promise<Feed> => {
  try {
    const res = await fetch('http://localhost:3000/api/instagram-feed', { next: { revalidate: env.HOURS_REVALIDARE * 60 * 60 }, method: 'GET' });
    const data = await res.json() as Feed;
    return data;
  } catch { return []; }
};