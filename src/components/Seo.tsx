import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  canonicalBase?: string; // set in one place if you want later
  jsonLd?: Record<string, unknown>;
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path,
  canonicalBase,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");

    // Canonical (optional – add your final domain later)
    const canonicalUrl =
      canonicalBase && canonicalBase.startsWith("http")
        ? `${canonicalBase.replace(/\/$/, "")}${path}`
        : "";

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    if (canonicalUrl) link.href = canonicalUrl;

    // JSON-LD (optional)
    const existing = document.getElementById("jsonld") as HTMLScriptElement | null;
    if (jsonLd) {
      const script = existing ?? document.createElement("script");
      script.id = "jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      if (!existing) document.head.appendChild(script);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, path, canonicalBase, jsonLd]);

  return null;
}