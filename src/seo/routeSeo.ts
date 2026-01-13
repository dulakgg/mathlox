export type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
};

export const DEFAULT_SEO: SeoMeta = {
  title: "MathLOX",
  description:
    "MathLOX to interaktywna platforma edukacyjna wyjaśniająca fascynujące zagadnienia matematyczne. Zobacz słynne sofizmaty (błędne dowody) oraz paradoksy, które rzucają wyzwanie intuicji. Nauka matematyki w przystępnej formie.",
  keywords:
    "matematyka, edukacja, sofizmaty, paradoksy, zagadki logiczne, dowody matematyczne, błędne rozumowanie, fraktale, nieskończoność, geometria, algebra, matura z matematyki, ciekawostki matematyczne, paradoks galileusza, paradoks wybrzeża, 1=2, dzielenie przez zero",
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
          "MathLOX: Zrozum matematykę poprzez intrygujące sofizmaty i paradoksy. Odkryj błędy w logicznym myśleniu, fascynujące zagadki nieskończoności i dowiedz się, dlaczego intucja czasem zawodzi.",
      };

    case "/sofizmaty":
      return {
        ...DEFAULT_SEO,
        title: "MathLOX",
        description:
          "Zbiór najciekawszych sofizmatów matematycznych. Dowiedz się, jak udowodnić, że 1=2 lub 2+2=5 i znajdź błąd w rozumowaniu. Ćwicz logiczne myślenie i analizę dowodów.",
        keywords:
          "sofizmaty, sofizmaty matematyczne, fałszywe dowody, błędne rozumowanie, 1=2, 0=1, dzielenie przez zero, pierwiastek arytmetyczny, logika matematyczna, zagadki matematyczne, błąd w dowodzie",
        ogType: "article",
      };

    case "/paradoksy":
      return {
        ...DEFAULT_SEO,
        title: "MathLOX",
        description:
          "Poznaj słynne paradoksy matematyczne, które zmieniają postrzeganie rzeczywistości. Paradoks wybrzeża (fraktale) oraz Paradoks Galileusza (zbiory nieskończone).",
        keywords:
          "paradoksy, paradoksy matematyczne, paradoks wybrzeża, długość wybrzeża, fraktale, mandelbrot, paradoks Galileusza, nieskończoność, zbiory liczalne, Cantor, intuicja matematyczna, paradoksy geometryczne",
        ogType: "article",
      };

    default:
      return DEFAULT_SEO;
  }
}
