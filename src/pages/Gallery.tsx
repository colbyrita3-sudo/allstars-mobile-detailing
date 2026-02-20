import Seo from "../components/Seo";

const PHOTOS: { src: string; alt: string }[] = [
  { src: "/gallery/1.webp", alt: "Mobile detailing Orlando - exterior shine" },
  { src: "/gallery/2.webp", alt: "Interior detailing Orlando - clean seats and trim" },
  { src: "/gallery/3.webp", alt: "Car detailing Orlando - wheel and tire cleaning" },
  { src: "/gallery/4.webp", alt: "Full detail package - glossy paint finish" },
  { src: "/gallery/5.webp", alt: "Mobile car wash Orlando - foam and rinse" },
  { src: "/gallery/6.webp", alt: "Interior deep clean - carpets and mats" },
  { src: "/gallery/7.webp", alt: "Before and after detailing - premium finish" },
];

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'%3E%3Crect width='100%25' height='100%25' fill='%23090a0b'/%3E%3Ctext x='50%25' y='50%25' fill='%23ffffff' fill-opacity='0.55' font-family='Arial' font-size='42' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E";
      }}
    />
  );
}

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Mobile Detailing Results Orlando | ALLSTARS"
        description="See real detailing results from ALLSTARS Mobile Detailing in Orlando, FL. Interior, exterior, and full detail transformations."
        path="/gallery"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Real results from premium mobile detailing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((p) => (
              <div
                key={p.src}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <GalleryImage src={p.src} alt={p.alt} />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="translate-y-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}