import React from "react";
import { NavLink, Link } from "react-router-dom";

const PHONE_TEL = "tel:+16893127408";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Get a Quote" },
];

function linkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "text-white" : "text-white/70 hover:text-white transition";
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 font-bold">
            A★
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              ALLSTARS Mobile Detailing
            </div>
            <div className="text-xs text-white/60">Orlando, FL • We come to you</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 sm:inline-flex"
          >
            Call
          </a>
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}