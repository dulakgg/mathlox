import { getSeoForPath } from "./routeSeo";

export function StructuredData({ pathname }: { pathname: string }) {
  const seo = getSeoForPath(pathname);

  const ORIGIN = "https://mathlox.pl";
  const url = new URL(pathname, ORIGIN).toString();
  const image = new URL("/mathLox_icon.png", ORIGIN).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url,
    image,
    inLanguage: "pl-PL",
    isPartOf: {
      "@type": "WebSite",
      name: "MathLOX",
      url: ORIGIN,
      image,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
