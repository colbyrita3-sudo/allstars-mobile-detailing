import { Link } from "react-router-dom";

const PHONE_DISPLAY = "(689) 312-7408";
const PHONE_TEL = "tel:+16893127408";
const ADDRESS = "2346 Roberts Blvd, Orlando, FL 32812";
const HOURS = "8am–6pm";
const GOOGLE_REVIEWS_URL = "https://share.google/1za8xvX2LShuePDiG";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold">ALLSTARS Mobile Detailing</div>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Premium mobile car detailing within 25 miles of Orlando. We come to your
            home or workplace.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-white/80 underline hover:text-white"
          >
            Google Reviews
          </a>
        </div>

        <div className="grid gap-2 text-sm">
          <div className="font-semibold text-white/85">Quick Links</div>
          <Link className="text-white/70 hover:text-white" to="/services">
            Services
          </Link>
          <Link className="text-white/70 hover:text-white" to="/service-areas">
            Service Areas
          </Link>
          <Link className="text-white/70 hover:text-white" to="/gallery">
            Gallery
          </Link>
          <Link className="text-white/70 hover:text-white" to="/contact">
            Get a Quote
          </Link>
        </div>

        <div className="grid gap-2 text-sm">
          <div className="font-semibold text-white/85">Contact</div>
          <a className="text-white/70 hover:text-white" href={PHONE_TEL}>
            Phone: {PHONE_DISPLAY}
          </a>
          <div className="text-white/70">Address: {ADDRESS}</div>
          <div className="text-white/70">Hours: {HOURS}</div>
          <div className="text-white/70">Service Area: Within 25 miles of Orlando</div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ALLSTARS Mobile Detailing. All rights reserved.
      </div>
    </footer>
  );
}