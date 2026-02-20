import { Link, NavLink } from "react-router-dom";

const PHONE_TEL = "tel:+16893127408";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-semibold transition ${
          isActive ? "text-white" : "text-white/70 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-bold tracking-tight">
          ALLSTARS <span className="text-white/70">Mobile Detailing</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavItem to="/services" label="Services" />
          <NavItem to="/service-areas" label="Service Areas" />
          <NavItem to="/gallery" label="Gallery" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Get a Quote" />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex"
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