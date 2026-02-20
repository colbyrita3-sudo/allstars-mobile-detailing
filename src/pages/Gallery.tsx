import React from "react";

export default function Gallery() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="mt-2 text-white/70">
          We’ll add your photos next. For now, these are placeholders.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-2xl border border-white/10 bg-white/[0.03]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}