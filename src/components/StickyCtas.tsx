import React from "react";
import { Link } from "react-router-dom";

const PHONE_TEL = "tel:+16893127408";

export default function StickyCtas() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4">
      <div className="flex gap-3 rounded-2xl border border-white/10 bg-zinc-950/75 p-3 backdrop-blur">
        <a
          href={PHONE_TEL}
          className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/15"
        >
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black hover:bg-white/90"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}