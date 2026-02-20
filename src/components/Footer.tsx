
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">ALLSTARS Mobile Detailing</div>
            <p className="mt-2 text-sm text-white/70">
              Premium mobile car detailing within 25 miles of Orlando. Clean car, zero
              hassle — we come to your home or workplace.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/service-areas" className="hover:text-white">Service Areas</Link>
              <Link to="/gallery" className="hover:text-white">Gallery</Link>
              <Link to="/contact" className="hover:text-white">Get a Quote</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <div>Phone: (689) 312-7408</div>
              <div>Address: 2346 Roberts Blvd, Orlando, FL 32812</div>
              <div>Hours: 8am–6pm</div>
              <div>Service Area: Within 25 miles of Orlando</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/40">
          © {new Date().getFullYear()} ALLSTARS Mobile Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}