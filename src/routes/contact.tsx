import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Aura Interiors" },
      { name: "description", content: "Get in touch with Aura Interiors to start your next project." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="rk-page">
        <div className="rk-eyebrow">Say hello</div>
        <h1 className="rk-h1">CONTACT</h1>
        <p className="rk-lede">Tell us a little about your space and what you're hoping to create. We'll get back to you within two working days.</p>

        <div className="rk-split" style={{ alignItems: "flex-start" }}>
          <form
            className="rk-form"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <input placeholder="Your name" required />
            <input type="email" placeholder="Email" required />
            <input className="full" placeholder="Phone (optional)" />
            <input className="full" placeholder="Project location" />
            <textarea className="full" placeholder="Tell us about your project" required />
            <div className="full">
              <button type="submit" className="rk-cta">
                <span>{sent ? "Message Sent" : "Send Message"}</span>
                <span className="arr">↗</span>
              </button>
            </div>
          </form>

          <div className="rk-info">
            <div className="rk-info-item">
              <div className="label">Studio</div>
              <div className="val">Jubilee Hills, Hyderabad, India</div>
            </div>
            <div className="rk-info-item">
              <div className="label">Email</div>
              <div className="val">hello@aurainteriors.in</div>
            </div>
            <div className="rk-info-item">
              <div className="label">Phone</div>
              <div className="val">+91 98765 43210</div>
            </div>
            <div className="rk-info-item">
              <div className="label">Hours</div>
              <div className="val">Mon–Sat, 10:00 – 19:00</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
