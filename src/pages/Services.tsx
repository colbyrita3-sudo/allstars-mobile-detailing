import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Mobile Detailing Services Orlando | Packages & Add-Ons | ALLSTARS"
        description="Explore ALLSTARS Mobile Detailing services in Orlando, FL. Choose exterior, interior, or full detail packages plus popular add-ons like pet hair removal, shampoo, and headlight restoration."
        path="/services"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">Services & Pricing</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            Premium <span className="text-white/85 font-semibold">mobile car detailing in Orlando</span>{" "}
            (within 25 miles). Starting prices shown — final quotes depend on vehicle size and condition.
          </p>

          {/* Packages */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Express Exterior Wash",
                price: "Starting at $49",
                blurb:
                  "Perfect for weekly/bi-weekly maintenance. Clean, glossy, and quick.",
                items: [
                  "Hand wash & rinse",
                  "Wheels & tires cleaned",
                  "Windows (exterior)",
                  "Tire shine",
                ],
              },
              {
                name: "Interior Refresh",
                price: "Starting at $129",
                blurb:
                  "A fresh, clean interior — ideal for daily drivers and ride-share.",
                items: [
                  "Vacuum seats/carpets/trunk",
                  "Wipe down & dusting",
                  "Interior windows",
                  "Light spot treatment",
                ],
              },
              {
                name: "Full Detail (Inside + Out)",
                price: "Starting at $199",
                blurb:
                  "The signature reset. Deep clean + protection for a showroom finish.",
                items: [
                  "Interior deep clean",
                  "Exterior wash + dry",
                  "Door jambs",
                  "Spray wax/sealant",
                ],
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-lg font-bold">{p.name}</div>
                <div className="mt-1 text-sm font-semibold text-white/80">
                  {p.price}
                </div>
                <p className="mt-3 text-sm text-white/70">{p.blurb}</p>
                <ul className="mt-4 grid gap-2 text-sm text-white/70">
                  {p.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Get a Free Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">Popular Add-ons</h2>
              <p className="mt-2 text-sm text-white/70">
                Add these to any package. We’ll confirm exact pricing in your quote.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  { name: "Pet hair removal", price: "$25+" },
                  { name: "Shampoo seats/carpets", price: "$50+" },
                  { name: "Headlight restoration", price: "$60" },
                  { name: "Engine bay cleaning", price: "$40" },
                  { name: "Clay bar decontamination", price: "$50+" },
                  { name: "Paint sealant", price: "$40+" },
                  { name: "Ceramic spray protection", price: "$60+" },
                ].map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-white/85">
                      {a.name}
                    </div>
                    <div className="text-sm text-white/70">{a.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">What affects pricing?</h2>
              <p className="mt-2 text-sm text-white/70">
                Quotes vary based on vehicle size and condition. Here’s what we usually ask:
              </p>

              <ul className="mt-5 grid gap-2 text-sm text-white/70">
                <li>• Vehicle size (sedan/SUV/truck)</li>
                <li>• Interior condition (pet hair, stains, sand)</li>
                <li>• Exterior condition (sap, bugs, tar)</li>
                <li>• Desired protection level (sealant/ceramic)</li>
                <li>• Location within our 25-mile service area</li>
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Request a Quote
              </Link>

              <p className="mt-3 text-xs text-white/50">
                Tip: include your vehicle year/make/model for the fastest response.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}