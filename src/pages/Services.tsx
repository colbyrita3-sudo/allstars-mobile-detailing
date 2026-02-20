import Seo from "../components/Seo";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Seo
        title="Services & Pricing | ALLSTARS Mobile Detailing Orlando"
        description="Explore mobile detailing packages and add-ons from ALLSTARS Mobile Detailing in Orlando, FL. Interior, exterior, and full detail options with starting prices."
        path="/services"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">Services & Pricing</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Mobile detailing within 25 miles of Orlando. Starting prices shown. Final quote depends on
            vehicle size & condition.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Express Exterior Wash",
                price: "Starting at $49",
                desc: "Quick refresh to bring back a clean shine.",
                items: ["Hand wash", "Wheels/tires cleaned", "Exterior windows", "Tire shine"],
              },
              {
                name: "Interior Refresh",
                price: "Starting at $129",
                desc: "Clean, comfortable, and ready for daily driving.",
                items: ["Vacuum + wipe down", "Interior windows", "Light spot treatment", "Trunk included"],
              },
              {
                name: "Full Detail (Inside + Out)",
                price: "Starting at $199",
                desc: "The complete reset—inside and out.",
                items: ["Interior deep clean", "Exterior wash", "Door jambs", "Spray wax/sealant"],
              },
            ].map((p) => (
              <div key={p.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-lg font-bold">{p.name}</div>
                <div className="mt-1 text-sm font-semibold text-white/80">{p.price}</div>
                <p className="mt-3 text-sm text-white/70">{p.desc}</p>
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

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-bold">Common Add-Ons</h2>
            <div className="mt-4 grid gap-3 text-sm text-white/70 md:grid-cols-2">
              <div>• Pet hair removal</div>
              <div>• Deep stain extraction</div>
              <div>• Odor treatment</div>
              <div>• Headlight restoration</div>
              <div>• Engine bay wipe-down</div>
              <div>• Spray wax / sealant upgrade</div>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Ask About Add-Ons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}