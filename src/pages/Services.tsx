import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Choose a package and add-ons. Starting prices are shown — final quotes depend on vehicle size and condition.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">Packages</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li><span className="font-semibold text-white/85">Express Exterior Wash</span> — Starting at $49</li>
              <li><span className="font-semibold text-white/85">Interior Refresh</span> — Starting at $129</li>
              <li><span className="font-semibold text-white/85">Full Detail (Inside + Out)</span> — Starting at $199</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">Popular Add-ons</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li>• Pet hair removal — $25+</li>
              <li>• Shampoo seats/carpets — $50+</li>
              <li>• Headlight restoration — $60</li>
              <li>• Engine bay cleaning — $40</li>
              <li>• Clay bar decontamination — $50+</li>
              <li>• Paint sealant — $40+</li>
              <li>• Ceramic spray protection — $60+</li>
            </ul>
          </div>
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