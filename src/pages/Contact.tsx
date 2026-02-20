import { useState } from "react";
import Seo from "../components/Seo";

const FORM_ENDPOINT = "https://formspree.io/f/xreaakjk";
const PHONE_TEL = "tel:+16893127408";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Seo
        title="Free Mobile Detailing Quote Orlando | ALLSTARS Mobile Detailing"
        description="Request a fast free quote for mobile car detailing in Orlando, FL. We serve within 25 miles. Interior, exterior, and full detail packages."
        path="/contact"
      />

      <section className="bg-zinc-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold">Get a Free Quote</h1>
            <p className="mt-3 text-white/70">
              Tell us your vehicle and what you need. We’ll respond with pricing and
              the next available times.
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
              <div className="mt-2 text-sm text-white/70">
                Within 25 miles of Orlando
              </div>

              <div className="mt-5 text-sm font-semibold">Hours</div>
              <div className="mt-2 text-sm text-white/70">8am–6pm</div>

              <div className="mt-5 text-sm font-semibold">Address</div>
              <div className="mt-2 text-sm text-white/70">
                2346 Roberts Blvd, Orlando, FL 32812
              </div>

              <div className="mt-5 text-xs text-white/50">
                Quotes are sent to:{" "}
                <span className="text-white/70">Eliwatkins14@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            {status === "success" ? (
              <div>
                <div className="text-xl font-bold">Request sent ✅</div>
                <p className="mt-2 text-white/70">
                  Thanks! We’ll reach out shortly with pricing and availability.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
                  >
                    Call (689) 312-7408
                  </a>
                  <button
                    onClick={() => setStatus("idle")}
                    className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Send another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                {/* Hidden fields (helps Formspree) */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Quote Request - ALLSTARS Mobile Detailing"
                />
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="text-sm text-white/80">Name</label>
                  <input
                    name="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Phone</label>
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">
                    Vehicle (year/make/model)
                  </label>
                  <input
                    name="vehicle"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    placeholder="e.g., 2020 Honda Civic"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Service needed</label>
                  <select
                    name="service"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    required
                    defaultValue="Full Detail (Inside + Out)"
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
                    name="area"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    placeholder="Neighborhood / City"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-white/80">Details</label>
                  <textarea
                    name="details"
                    className="mt-2 min-h-[120px] w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
                    placeholder="Anything we should know? (pet hair, stains, etc.)"
                  />
                </div>

                <button
                  disabled={status === "sending"}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Request Quote"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-300">
                    Something went wrong. Please try again, or call/text{" "}
                    <a className="underline" href={PHONE_TEL}>
                      (689) 312-7408
                    </a>
                    .
                  </p>
                )}

                <p className="text-xs text-white/50">
                  By submitting, you agree to be contacted about your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}