import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import heroVideo from "../assets/hero.mp4";

const PHONE_TEL = "tel:+16893127408";
const GOOGLE_REVIEWS_URL = "https://share.google/1za8xvX2LShuePDiG";

const REVIEWS = [
  {
    name: "Tawny Peedin",
    rating: 5,
    text: "Elijah is a very timely, communicative, and professional young man! He worked HARD to make my 2010 Mazda look like NEW again! And he offers a VERY reasonable price! Highly recommend!",
  },
  {
    name: "Judy Sztuk",
    rating: 5,
    text: "Elijah is Very Courteous and Professional. My 6 year old vehicle Looks Brand New! Excellent work! So Happy he comes to my home!",
  },
  {
    name: "Diana McCarthy",
    rating: 5,
    text: "If I could give ten stars, I would! We are selling our Dodge Ram 3500 and needed someone to come out and make it look great before the sale. Elijah responded to my texts right away, came on time, was so friendly and knowledgeable, and kept us up to date on the progress throughout. We used this truck to RV around the country for three years with two little boys in the back and the truck definitely looked lived in! He spent hours on it and paid attention to the littlest details. Once he was done, I didn't want to sell it anymore, I wanted to keep it for myself! I would 100% use Allstars Mobile Detailing again and would tell our friends to do the same. Prices were fair, service was great, and we're happy with the end result! Thanks guys!",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-white/90" aria-label={`${count} out of 5 stars`}>
      {"★★★★★"}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Mobile Car Detailing Orlando, FL | ALLSTARS Mobile Detailing"
        description="Premium mobile car detailing within 25 miles of Orlando. Interior deep cleans, exterior hand washes, and full detail packages. Get a fast free quote today."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="pointer-events-none absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.webp"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.22),transparent_55%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="relative">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold text-white/80">
              Orlando • Mobile detailing • Within 25 miles
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Showroom Shine Delivered to You
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Interior deep cleans, exterior hand washes, and full detail packages — done
              at your home or workplace. Fast quotes. Easy scheduling.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Get a Free Quote
              </Link>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Call (689) 312-7408
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-white/90">What you get</div>
              <ul className="mt-3 grid gap-2 text-sm text-white/75">
                <li>✅ Mobile service — we come to you</li>
                <li>✅ Pro products & careful hand work</li>
                <li>✅ Clear starting prices + fast quotes</li>
                <li>✅ Interior & exterior packages for any vehicle</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
              <div className="aspect-[4/3] w-full p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                    Same-day availability
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                    ★★★★★ <span className="text-white/70">5.0</span>
                  </span>
                </div>

                <div className="mt-4 text-3xl font-bold leading-tight">
                  Premium Mobile Detailing
                  <br />
                  at Your Location
                </div>

                <p className="mt-3 max-w-sm text-sm text-white/75">
                  Send your vehicle + your area. We’ll reply with pricing and available times.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                    Exterior
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                    Interior
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                    Full Detail
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Call (689) 312-7408
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Get a Free Quote
                  </Link>
                </div>

                <div className="mt-5 text-xs text-white/55">
                  Serving within 25 miles of Orlando • Hours 8am–6pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Popular Packages</h2>
            <p className="mt-2 text-white/70">
              Starting prices shown. Final quote depends on vehicle size & condition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Express Exterior Wash",
                price: "Starting at $49",
                items: ["Hand wash", "Wheels/tires cleaned", "Windows exterior", "Tire shine"],
              },
              {
                name: "Interior Refresh",
                price: "Starting at $129",
                items: ["Vacuum + wipe down", "Interior windows", "Light spot treatment", "Trunk included"],
              },
              {
                name: "Full Detail (Inside + Out)",
                price: "Starting at $199",
                items: ["Interior deep clean", "Exterior wash", "Door jambs", "Spray wax/sealant"],
              },
            ].map((p) => (
              <div key={p.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-bold">{p.name}</div>
                <div className="mt-1 text-sm font-semibold text-white/80">{p.price}</div>
                <ul className="mt-4 grid gap-2 text-sm text-white/70">
                  {p.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <p className="mt-2 max-w-2xl text-white/70">
                  Trusted for quality work, great communication, and convenience.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Read Google Reviews
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/85">{r.name}</div>
                    <div className="text-xs">
                      <Stars count={r.rating} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    “{r.text}”
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white/80 underline hover:text-white"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}