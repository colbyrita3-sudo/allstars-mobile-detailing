import Seo from "../components/Seo";

const PHONE_DISPLAY = "(689) 312-7408";
const PHONE_TEL = "tel:+16893127408";
const ADDRESS = "2346 Roberts Blvd, Orlando, FL 32812";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreaakjk";

export default function Contact() {
  return (
    <>
      <Seo
        title="Get a Quote | ALLSTARS Mobile Detailing"
        description="Request a fast quote for mobile detailing in Orlando, FL. Send your vehicle details, location, and service needs."
        path="/contact"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Get a Quote</h1>
            <p className="mt-2 max-w-md text-white/70">
              Send your vehicle details and location. We’ll reply with pricing and availability.
            </p>

            <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70">
              <a className="text-white hover:text-white/90" href={PHONE_TEL}>
                Phone: {PHONE_DISPLAY}
              </a>
              <div>Address: {ADDRESS}</div>
              <div>Hours: 8am–6pm</div>
              <div>Service Area: Within 25 miles of Orlando</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <form action={FORMSPREE_ENDPOINT} method="POST" className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Name</label>
                <input
                  name="name"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Phone</label>
                <input
                  name="phone"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  placeholder="(###) ###-####"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Vehicle</label>
                <input
                  name="vehicle"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  placeholder="Year / Make / Model"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Location (ZIP or City)</label>
                <input
                  name="location"
                  required
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  placeholder="ZIP code or city"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Service</label>
                <select
                  name="service"
                  required
                  className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-white/25"
                >
                  <option>Express Exterior Wash</option>
                  <option>Interior Refresh</option>
                  <option>Full Detail (Inside + Out)</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/85">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/25"
                  placeholder="Tell us what you want done (pet hair, stains, odor, etc.)"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}