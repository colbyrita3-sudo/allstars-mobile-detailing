import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";

const PHONE_DISPLAY = "(689) 312-7408";
const PHONE_TEL = "tel:+16893127408";
const GOOGLE_REVIEWS_URL = "https://share.google/1za8xvX2LShuePDiG";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreaakjk";

type Review = {
  name: string;
  text: string;
  stars?: number;
};

const REVIEWS: Review[] = [
  {
    name: "Tawny Peedin",
    stars: 5,
    text:
      "Elijah is a very timely, communicative, and professional young man! He worked HARD to make my 2010 Mazda look like NEW again! And he offers a VERY reasonable price! Highly recommend!",
  },
  {
    name: "Judy Sztuk",
    stars: 5,
    text:
      "Elijah is very courteous and professional. My 6 year old vehicle looks brand new! Excellent work! So happy he comes to my home!",
  },
  {
    name: "Diana McCarthy",
    stars: 5,
    text:
      "If I could give ten stars, I would! We needed someone to come out and make our truck look great before a sale. Elijah responded right away, came on time, and kept us updated. He paid attention to the littlest details. Prices were fair and the service was great — we’re happy with the result!",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  const safe = Math.max(0, Math.min(5, count));
  return (
    <div className="flex items-center gap-1" aria-label={`${safe} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < safe ? "text-white" : "text-white/30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950">
        {/* Video background */}
        <div className="pointer-events-none absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="relative">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              Orlando • Mobile detailing • Within 25 miles
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Showroom Shine
              <br />
              Delivered to You
            </h1>

            <p className="mt-4 max-w-xl text-white/80">
              Interior deep cleans, exterior hand washes, and full detail packages — done at your home
              or workplace. Fast quotes. Easy scheduling.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
              >
                Get a Free Quote
              </Link>

              <a
                href={PHONE_TEL}
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/85">
              <p className="mb-3 text-sm font-semibold text-white">What you get</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Mobile service — we come to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Pro products & careful hand work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Clear starting prices + fast quotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Interior & exterior packages for any vehicle</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right hero card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Same-day availability</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">★★★★★ 5.0</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">(reviews)</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                Premium Mobile Detailing
                <br />
                at Your Location
              </h2>

              <p className="mt-3 text-white/75">
                Send your vehicle + your area. We’ll reply with pricing and the next available times.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Exterior</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Interior</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Full Detail</span>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={PHONE_TEL}
                  className="block rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:opacity-90"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <Link
                  to="/contact"
                  className="block rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
                >
                  Get a Free Quote
                </Link>
              </div>

              <p className="mt-4 text-xs text-white/60">
                Serving within 25 miles of Orlando • Hours 8am–6pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-zinc-950 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-white">Popular Packages</h2>
            <p className="text-white/70">
              Starting prices shown. Final quote depends on vehicle size & condition.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Express Exterior Wash",
                price: "Starting at $49",
                items: ["Hand wash", "Wheels/tires cleaned", "Windows exterior", "Tire shine"],
              },
              {
                title: "Interior Refresh",
                price: "Starting at $129",
                items: ["Vacuum + wipe down", "Interior windows", "Light spot treatment", "Trunk included"],
              },
              {
                title: "Full Detail (Inside + Out)",
                price: "Starting at $199",
                items: ["Interior deep clean", "Exterior wash", "Door jambs", "Spray wax/sealant"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
              >
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {p.items.map((it) => (
                    <li key={it}>• {it}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="block rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-900 hover:opacity-90"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-zinc-950 px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">What customers say</h2>
                <p className="mt-2 text-white/70">
                  Real reviews focused on professionalism, convenience, and results.
                </p>
              </div>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-fit items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
              >
                Read Google Reviews
              </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="rounded-3xl border border-white/10 bg-zinc-950/50 p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold">{r.name}</p>
                    <Stars count={r.stars ?? 5} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">“{r.text}”</p>
                </div>
              ))}
            </div>

            {/* NOTE REMOVED ON PURPOSE (no more messages to visitors) */}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_TEL}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white hover:bg-white/10"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="flex-1 rounded-xl bg-white px-6 py-4 text-center text-sm font-semibold text-zinc-900 hover:opacity-90"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-zinc-950 px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
            <h2 className="text-3xl font-bold">Get a Free Quote</h2>
            <p className="mt-2 text-white/70">
              Tell us what you drive and where you’re located. We’ll respond ASAP.
            </p>

            <form className="mt-8 grid gap-4 md:grid-cols-2" action={FORMSPREE_ENDPOINT} method="POST">
              <input
                name="name"
                placeholder="Name"
                className="rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                className="rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25 md:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Vehicle + desired service + your area"
                className="min-h-[120px] rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/25 md:col-span-2"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90 md:col-span-2"
              >
                Send Request
              </button>
            </form>

            <p className="mt-4 text-xs text-white/50">
              Business address: 2346 Roberts Blvd, Orlando, FL 32812 • Hours: 8am–6pm • Service area: within 25 miles of Orlando
            </p>
          </div>
        </div>
      </section>
    </>
  );
}