
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-white/70">Let’s get you back on track.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}