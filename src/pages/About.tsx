import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold">About ALLSTARS</h1>
        <p className="mt-4 max-w-2xl text-white/70">
          ALLSTARS Mobile Detailing is based in Orlando, focused on careful hand work,
          quality products, and a smooth customer experience. Whether you need a quick
          refresh or a full detail, we bring the tools and the shine to you.
        </p>

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