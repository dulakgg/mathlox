import { getSeoForPath } from "./routeSeo";

export function StructuredData({ pathname }: { pathname: string }) {
  const seo = getSeoForPath(pathname);

  const ORIGIN = "https://mathlox.pl";
  const url = new URL(pathname, ORIGIN).toString();
  const image = new URL("/mathLox_icon.png", ORIGIN).toString();

  // 1. BreadcrumbList Schema
  // Build breadcrumb items based on path segments
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "MathLOX",
        "item": ORIGIN
      },
      ...segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`;
        // Capitalize first letter
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": new URL(path, ORIGIN).toString()
        };
      })
    ]
  };

  // 2. Main Entity Schema (WebPage or Article)
  let mainEntity;
  
  if (seo.ogType === 'article') {
    mainEntity = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: seo.title,
      description: seo.description,
      image: image,
      author: {
        "@type": "Organization",
        name: "MathLOX"
      },
      publisher: {
        "@type": "Organization",
        name: "MathLOX",
        logo: {
            "@type": "ImageObject",
            url: image
        }
      },
      url: url,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url
      },
      datePublished: "2024-01-01", // Placeholder or dynamic if available
      dateModified: new Date().toISOString().split('T')[0] // Always fresh
    };
  } else {
    mainEntity = {
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainEntity) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
