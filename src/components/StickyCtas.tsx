import { Link } from "react-router-dom";

const PHONE_TEL = "tel:+16893127408";

export default function StickyCtas() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto flex max-w-6xl justify-end px-4">
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-zinc-950/70 p-2 backdrop-blur">
        <a
          href={PHONE_TEL}
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
        >
          Call
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}