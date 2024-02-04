// https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/

import { Feed } from "@/_types";

const revalidate = 24 * 60 * 60; // 24 hours

export async function GET() {
  if (!process.env.INSTAGRAM_TOKEN) throw new Error('Token not found');

  const token = process.env.INSTAGRAM_TOKEN;
  const fields = 'id,caption,is_shared_to_feed,media_type,media_url,permalink,username,children';
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;

  try {
    const response = await fetch(url, { next: { revalidate } })
      .then(res => res.json() as Promise<{ data: Feed[] }>)
      .then(res => res.data);
    return Response.json(response);
  } catch (e) {
    if (process.env.NODE_ENV === 'development') console.log(e);
    return Response.error();
  }
}
