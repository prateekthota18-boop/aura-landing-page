import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aura Interiors — Hyderabad Interior Design Studio" },
      { name: "description", content: "Aura Interiors crafts refined residential, commercial and turnkey interiors in Hyderabad." },
    ],
  }),
});

const HERO_IMG = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80";

function Index() {
  return (
    <SiteLayout>
      <section className="rk-hero">
        <img src={HERO_IMG} alt="Crafted interior space by Aura Interiors" />
        <h1 className="rk-title">AURA INTERIORS</h1>
        <div className="rk-bottom">
          <div className="rk-blurb">
            <p>We shape interiors through clean design, premium materials, and carefully crafted details—creating spaces that feel personal, refined, and built to last.</p>
            <div className="rk-actions">
              <CTAButton to="/contact">Start Your Project</CTAButton>
              <Link to="/services" className="rk-link-btn">See Our Work <span>↗</span></Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
