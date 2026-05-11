import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Aura Interiors" },
      { name: "description", content: "Aura Interiors is a Hyderabad-based design studio crafting refined, lasting interiors." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="rk-page">
        <div className="rk-eyebrow">Our story</div>
        <h1 className="rk-h1">ABOUT US</h1>

        <div className="rk-split">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80" alt="Aura Interiors studio" />
          <div>
            <p className="rk-lede" style={{ marginBottom: 18 }}>
              Aura Interiors is a Hyderabad-based design studio shaping homes and workspaces with a quiet confidence. We believe great interiors aren't loud—they are calm, intentional, and built to age beautifully.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#555", marginBottom: 18 }}>
              From the first sketch to the final styled detail, our team works closely with each client to translate the way they live, work and gather into spaces that feel genuinely theirs.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#555", marginBottom: 28 }}>
              We work across residential, commercial and turnkey projects—anchored by craftsmanship, premium materials, and a deep respect for proportion and light.
            </p>
            <CTAButton to="/contact">Work With Us</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
