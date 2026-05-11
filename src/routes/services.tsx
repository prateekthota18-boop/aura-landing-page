import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Aura Interiors" },
      { name: "description", content: "Residential, commercial and turnkey interior design services by Aura Interiors." },
    ],
  }),
});

const SERVICES = [
  { n: "01", t: "Residential", d: "Homes shaped around the way you actually live—warm, considered, and quietly luxurious." },
  { n: "02", t: "Commercial", d: "Workspaces, retail and hospitality interiors that elevate your brand and the people in it." },
  { n: "03", t: "Turnkey", d: "End-to-end execution from concept to handover—design, build, styling, finished and ready." },
  { n: "04", t: "Renovation", d: "Thoughtful transformations of existing spaces with minimal disruption and maximum impact." },
  { n: "05", t: "Consultation", d: "Strategic design guidance for layouts, materials, lighting and furniture selections." },
  { n: "06", t: "Styling", d: "Final-layer styling and art curation that brings every room into sharp focus." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="rk-page">
        <div className="rk-eyebrow">What we do</div>
        <h1 className="rk-h1">SERVICES</h1>
        <p className="rk-lede">A full-service interior design studio offering everything from single-room refreshes to complete turnkey builds across residential and commercial spaces.</p>

        <div className="rk-grid3">
          {SERVICES.map((s) => (
            <div key={s.n} className="rk-card">
              <div className="num">{s.n}</div>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <CTAButton to="/contact">Start Your Project</CTAButton>
        </div>
      </section>
    </SiteLayout>
  );
}
