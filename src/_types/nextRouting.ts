// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export type Params = {
  params: {
    slug: string;
    page: number;
  };
};