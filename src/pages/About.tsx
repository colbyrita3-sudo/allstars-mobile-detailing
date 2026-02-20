import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Seo
        title="About | ALLSTARS Mobile Detailing"
        description="ALLSTARS Mobile Detailing provides premium mobile car detailing in Orlando, FL. Professional service, clear communication, and high-quality results."
        path="/about"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">About ALLSTARS</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            We focus on quality work, clear communication, and convenience — mobile detailing at your location.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Mobile Convenience",
                text: "We come to your home or workplace within 25 miles of Orlando.",
              },
              {
                title: "Careful Hand Work",
                text: "Professional products and attention to detail on every vehicle.",
              },
              {
                title: "Fast Quotes",
                text: "Send your vehicle + area and we’ll reply with pricing and availability.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-bold">{c.title}</div>
                <p className="mt-2 text-sm text-white/70">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-bold">How it works</h2>
            <ol className="mt-4 grid gap-3 text-sm text-white/70">
              <li>1) Request a quote (vehicle + location + service).</li>
              <li>2) We confirm pricing and a time window.</li>
              <li>3) We arrive and complete your detail at your location.</li>
              <li>4) Final walkthrough to make sure you’re happy with the result.</li>
            </ol>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}