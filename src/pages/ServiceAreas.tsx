import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const CITIES = [
  "Orlando",
  "Conway",
  "Belle Isle",
  "Edgewood",
  "Winter Park",
  "Maitland",
  "Casselberry",
  "Altamonte Springs",
  "Fern Park",
  "Apopka",
  "Ocoee",
  "Winter Garden",
  "Windermere",
  "Lake Buena Vista",
  "Doctor Phillips",
  "Union Park",
  "Azalea Park",
  "Goldenrod",
  "Pine Hills",
  "Williamsburg",
];

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service Areas | Mobile Detailing Near Orlando, FL | ALLSTARS"
        description="ALLSTARS Mobile Detailing serves Orlando, FL and nearby areas within 25 miles. Mobile detailing near you—interior, exterior, and full detail packages delivered to your location."
        path="/service-areas"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold">Service Areas</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            We provide <span className="font-semibold text-white/85">mobile car detailing near Orlando</span>{" "}
            and travel to homes and workplaces within about <span className="font-semibold text-white/85">25 miles</span>.
            Not sure if you’re in range? Send your area and we’ll confirm fast.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">Primary Coverage</h2>
              <p className="mt-2 text-sm text-white/70">
                Based in Orlando, FL — most appointments are scheduled around these areas:
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/75 sm:grid-cols-3">
                {CITIES.map((c) => (
                  <div
                    key={c}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-2"
                  >
                    {c}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Check My Area / Get a Quote
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-bold">What to send for a fast quote</h2>
              <p className="mt-2 text-sm text-white/70">
                The faster we get these details, the faster you get pricing and times:
              </p>

              <ul className="mt-5 grid gap-2 text-sm text-white/70">
                <li>• Your vehicle (year / make / model)</li>
                <li>• Your area (neighborhood or nearby landmark)</li>
                <li>• What you want (Exterior / Interior / Full Detail)</li>
                <li>• Anything extra (pet hair, stains, sand, etc.)</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-sm font-semibold text-white/85">
                  Popular searches we cover:
                </div>
                <div className="mt-2 text-sm text-white/70">
                  “mobile detailing near me”, “mobile detailing Orlando FL”, “interior detailing Orlando”,
                  “car detailing at home Orlando”
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Request a Quote
                </Link>
              </div>

              <p className="mt-3 text-xs text-white/50">
                Tip: if you’re slightly outside 25 miles, ask anyway — we may be able to fit you in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}