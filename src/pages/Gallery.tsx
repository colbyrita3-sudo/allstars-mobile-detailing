import Seo from "../components/Seo";

const PHOTOS: { src: string; alt: string }[] = [
  { src: "/gallery/1.webp", alt: "Mobile detailing Orlando - exterior shine" },
  { src: "/gallery/2.webp", alt: "Interior detailing Orlando - clean seats and trim" },
  { src: "/gallery/3.webp", alt: "Car detailing near me - wheel and tire cleaning" },
  { src: "/gallery/4.webp", alt: "Full detail package - glossy paint finish" },
  { src: "/gallery/5.webp", alt: "Mobile car wash Orlando - foam and rinse" },
  { src: "/gallery/6.webp", alt: "Interior deep clean - carpets and mats" },
  { src: "/gallery/7.webp", alt: "Detailing results - reflections and paint gloss" },
  { src: "/gallery/8.webp", alt: "Orlando mobile detailing - door jamb cleaning" },
  { src: "/gallery/9.webp", alt: "Before and after detailing - premium finish" },
];

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Mobile Detailing Results Orlando | ALLSTARS"
        description="See real detailing results from ALLSTARS Mobile Detailing in Orlando, FL. Interior, exterior, and full detail transformations—delivered to your home or workplace."
        path="/gallery"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Real results from premium <span className="font-semibold text-white/85">mobile detailing in Orlando</span>.
            Want yours next? We come to your home or workplace within 25 miles.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((p) => (
              <figure
                key={p.src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <figcaption className="px-4 py-3 text-xs text-white/60">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-lg font-bold">Have photos or reviews?</div>
            <p className="mt-2 text-sm text-white/70">
              If you send me your best 6–12 photos (before/after is 🔥), I’ll plug them in,
              optimize them for speed, and make the gallery look even more premium.
            </p>
            <p className="mt-3 text-xs text-white/50">
              Tip: WebP images load fastest and help SEO.
            </p>
          </div>

          <div className="mt-10 text-sm text-white/60">
            <span className="text-white/80 font-semibold">Note:</span> Add your photos to{" "}
            <span className="text-white/80">/public/gallery</span> as{" "}
            <span className="text-white/80">1.webp, 2.webp, 3.webp...</span> to match this page.
          </div>
        </div>
      </section>
    </>
  );
}