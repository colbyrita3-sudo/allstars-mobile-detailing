import React from "react";
import { Link } from "react-router-dom";

export default function ServiceAreas() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold">Service Areas</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          We serve Orlando and travel up to <span className="font-semibold text-white/85">25 miles</span> for mobile detailing.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-bold">Common areas we cover</h2>
          <p className="mt-2 text-white/70 text-sm">
            Orlando • Winter Park • Maitland • Altamonte Springs • Casselberry • Lake Mary • Sanford • Kissimmee • Winter Garden • Ocoee • Apopka
          </p>
          <p className="mt-4 text-sm text-white/60">
            Not sure if you’re in range? Request a quote and include your address — we’ll confirm.
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}