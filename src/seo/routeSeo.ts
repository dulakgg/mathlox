export type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
};

export const DEFAULT_SEO: SeoMeta = {
  title: "MathLOX",
  description:
    "MathLOX: krótkie, zrozumiałe wyjaśnienia z matematyki — sofizmaty matematyczne i paradoksy matematyczne.",
  keywords:
    "matematyka, sofizmaty, sofizmaty matematyczne, paradoksy, paradoksy matematyczne, logika, dowody, błędne rozumowanie, fraktale, nieskończoność, Galileusz",
  ogType: "website",
};

export function getSeoForPath(pathname: string): SeoMeta {
  const path = pathname.split("?")[0].split("#")[0];

  switch (path) {
    case "/":
      return {
        ...DEFAULT_SEO,
        title: "MathLOX",
        description:
          "MathLOX: krótkie, zrozumiałe wyjaśnienia z matematyki — sofizmaty matematyczne i paradoksy matematyczne.",
      };

    case "/sofizmaty":
      return {
        ...DEFAULT_SEO,
        title: "MathLOX - Sofizmaty",
        description:
          "Sofizmaty matematyczne: przykłady błędnych dowodów (np. 1=2, 0=1) i dokładne wskazanie, gdzie jest błąd rozumowania.",
        keywords:
          "sofizmaty, sofizmaty matematyczne, błędne dowody, 1=2, 0=1, dzielenie przez zero, logika matematyczna, matematyka",
        ogType: "article",
      };

    case "/paradoksy":
      return {
        ...DEFAULT_SEO,
        title: "MathLOX - Paradoksy",
        description:
          "Paradoksy matematyczne: m.in. paradoks wybrzeża i paradoks Galileusza — intuicja kontra nieskończoność i skala pomiaru.",
        keywords:
          "paradoksy, paradoksy matematyczne, paradoks wybrzeża, fraktale, skala pomiaru, paradoks Galileusza, nieskończoność, Cantor, matematyka",
        ogType: "article",
      };

    default:
      return DEFAULT_SEO;
  }
}
