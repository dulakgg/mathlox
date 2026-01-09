import { useLayoutEffect } from "react";
import { getSeoForPath } from "./routeSeo";

function upsertMetaByName(name: string, content: string) {
  const selector = `meta[name="${CSS.escape(name)}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  const selector = `meta[property="${CSS.escape(property)}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${CSS.escape(rel)}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo(pathname: string) {
  useLayoutEffect(() => {
    const seo = getSeoForPath(pathname);

    document.documentElement.setAttribute("lang", "pl");
    document.title = seo.title;

    upsertMetaByName("description", seo.description);
    upsertMetaByName("keywords", seo.keywords);
    upsertMetaByName(
      "robots",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    upsertMetaByName(
      "googlebot",
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );

    upsertMetaByProperty("og:site_name", "MathLOX");
    upsertMetaByProperty("og:locale", "pl_PL");
    upsertMetaByProperty("og:type", seo.ogType ?? "website");
    upsertMetaByProperty("og:title", seo.title);
    upsertMetaByProperty("og:description", seo.description);

    const ORIGIN = "https://mathlox.pl";
    const canonical = new URL(pathname, ORIGIN).toString();

    upsertMetaByProperty("og:url", canonical);
    upsertLink("canonical", canonical);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", seo.title);
    upsertMetaByName("twitter:description", seo.description);
    const defaultImage = new URL("/mathLox_icon.png", ORIGIN).toString();
    upsertMetaByProperty("og:image", defaultImage);
    upsertMetaByProperty("og:image:alt", "MathLOX — matematyka, sofizmaty i paradoksy");
    upsertMetaByName("twitter:image", defaultImage);
    upsertMetaByName("twitter:image:alt", "MathLOX — matematyka, sofizmaty i paradoksy");
  }, [pathname]);
}
