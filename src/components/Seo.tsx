import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  path?: string; // like "/contact"
};

const SITE_NAME = "ALLSTARS Mobile Detailing";
const PHONE = "+16893127408";

export default function Seo({ title, description, path = "/" }: Props) {
  // Works on Vercel + locally without you hardcoding a URL
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://example.com";

  const url = `${origin}${path}`;

  return (
    <Helmet>
      {/* Basics */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_NAME,
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2346 Roberts Blvd",
            addressLocality: "Orlando",
            addressRegion: "FL",
            postalCode: "32812",
            addressCountry: "US",
          },
          areaServed: "Within 25 miles of Orlando, FL",
          description:
            "Premium mobile car detailing in Orlando, FL. Interior deep cleans, exterior wash, and full detail packages delivered to your home or workplace.",
          openingHours: "Mo-Su 08:00-18:00",
        })}
      </script>
    </Helmet>
  );
}