import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { getSeoForPath } from "./seo/routeSeo";

type PrerenderData = {
  url: string;
};

export async function prerender(data: PrerenderData) {
  const url = data?.url ?? "/";
  const seo = getSeoForPath(url);

  const ORIGIN = "https://mathlox.pl";
  const canonical = new URL(url, ORIGIN).toString();
  const ogImage = new URL("/mathLox_icon.png", ORIGIN).toString();

  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );

  type HeadElement = { type: string; props: Record<string, string> };

  const elements = new Set<HeadElement>([
    { type: "meta", props: { name: "description", content: seo.description } },
    { type: "meta", props: { name: "keywords", content: seo.keywords } },
    {
      type: "meta",
      props: {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
    },
    {
      type: "meta",
      props: {
        name: "googlebot",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
    },
    { type: "meta", props: { property: "og:site_name", content: "MathLOX" } },
    { type: "meta", props: { property: "og:locale", content: "pl_PL" } },
    { type: "meta", props: { property: "og:type", content: seo.ogType ?? "website" } },
    { type: "meta", props: { property: "og:title", content: seo.title } },
    { type: "meta", props: { property: "og:description", content: seo.description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "link", props: { rel: "canonical", href: canonical } },
    { type: "meta", props: { property: "og:image", content: ogImage } },
    { type: "meta", props: { property: "og:image:alt", content: "MathLOX — matematyka, sofizmaty i paradoksy" } },
    { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
    { type: "meta", props: { name: "twitter:title", content: seo.title } },
    { type: "meta", props: { name: "twitter:description", content: seo.description } },
    { type: "meta", props: { name: "twitter:image", content: ogImage } },
    { type: "meta", props: { name: "twitter:image:alt", content: "MathLOX — matematyka, sofizmaty i paradoksy" } },
  ]);

  return {
    html,
    head: {
      lang: "pl",
      title: seo.title,
      elements,
    },
  };
}
