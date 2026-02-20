import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyCtas from "./StickyCtas";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyCtas />
    </div>
  );
}