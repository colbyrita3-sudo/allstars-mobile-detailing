

const PHONE_TEL = "tel:+16893127408";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Get a Free Quote</h1>
          <p className="mt-3 text-white/70">
            Tell us your vehicle and what you need. We’ll respond with pricing and the next available times.
          </p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-semibold">Call/Text</div>
            <a
              href={PHONE_TEL}
              className="mt-2 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              (689) 312-7408
            </a>

            <div className="mt-5 text-sm font-semibold">Service Area</div>
            <div className="mt-2 text-sm text-white/70">Within 25 miles of Orlando</div>

            <div className="mt-5 text-sm font-semibold">Hours</div>
            <div className="mt-2 text-sm text-white/70">8am–6pm</div>

            <div className="mt-5 text-sm font-semibold">Address</div>
            <div className="mt-2 text-sm text-white/70">2346 Roberts Blvd, Orlando, FL 32812</div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-4"
            >
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Phone</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Vehicle (year/make/model)</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  placeholder="e.g., 2020 Honda Civic"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Service needed</label>
                <select
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  required
                >
                  <option>Express Exterior Wash</option>
                  <option>Interior Refresh</option>
                  <option>Full Detail (Inside + Out)</option>
                  <option>Add-ons / Not sure</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-white/80">Your area</label>
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  placeholder="Neighborhood / City"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Details</label>
                <textarea
                  className="mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                  placeholder="Anything we should know? (pet hair, stains, etc.)"
                />
              </div>

              <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90">
                Request Quote
              </button>

              <p className="text-xs text-white/50">
                (Next step: we’ll connect this form to email or a free backend so it actually sends.)
              </p>
            </form>
          ) : (
            <div>
              <div className="text-xl font-bold">Quote request received ✅</div>
              <p className="mt-2 text-white/70">
                Demo confirmation for now. Next we’ll wire it so messages go to you.
              </p>
              <a
                href={PHONE_TEL}
                className="mt-5 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Call (689) 312-7408
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}