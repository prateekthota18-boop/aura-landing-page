import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton, useFadeIn } from "@/components/SiteLayout";
import { useState, useEffect, useCallback, useRef } from "react";

export const Route = createFileRoute("/")(  {
  component: Index,
  head: () => ({
    meta: [
      { title: "Aura Interiors — Hyderabad Interior Design Studio" },
      { name: "description", content: "Aura Interiors crafts refined residential, commercial and turnkey interiors in Hyderabad." },
    ],
  }),
});

const HERO_IMG = "/images/hero.png";
const THUMB_IMG = "/images/kitchen.png";

const STATS = [
  { num: "120+", label: "Projects Delivered" },
  { num: "8+", label: "Years of Experience" },
  { num: "40+", label: "Design Awards" },
  { num: "98%", label: "Client Satisfaction" },
];

const FEATURED = [
  { img: "/images/bedroom.png", title: "Serene Bedroom", cat: "Residential" },
  { img: "/images/kitchen.png", title: "Modern Kitchen", cat: "Residential" },
  { img: "/images/office.png", title: "Executive Office", cat: "Commercial" },
];

const TESTIMONIALS = [
  {
    name: "Priya & Arvind Sharma",
    role: "Homeowners, Banjara Hills",
    initials: "PS",
    stars: 5,
    text: "Aura Interiors transformed our apartment into something we never imagined possible. Every corner feels intentional—the marble, the lighting, the textures. It's not just a home anymore, it's a sanctuary. We couldn't be happier.",
  },
  {
    name: "Ravi Teja Kondapalli",
    role: "CEO, NexGen Technologies",
    initials: "RK",
    stars: 5,
    text: "We needed an office that inspired creativity without sacrificing professionalism. Aura delivered beyond expectations. Our employees love the space, and clients are always impressed. The design pays for itself in morale alone.",
  },
  {
    name: "Ananya Reddy",
    role: "Founder, Bloom Café",
    initials: "AR",
    stars: 5,
    text: "The team understood our brand instantly. They created a café space that feels warm yet modern—exactly the vibe we wanted. Customers constantly compliment the interiors. It's become part of our identity.",
  },
  {
    name: "Vikram & Suhani Rao",
    role: "Homeowners, Jubilee Hills",
    initials: "VR",
    stars: 5,
    text: "From the first consultation to the final walkthrough, the Aura team was exceptional. They respected our budget while delivering luxury we didn't think was possible. The kitchen renovation alone was worth every rupee.",
  },
  {
    name: "Dr. Meera Joshi",
    role: "Director, Wellness Retreat Spa",
    initials: "MJ",
    stars: 5,
    text: "The spa design exceeded all expectations. Patients tell us they feel calmer the moment they walk in. Aura understood that our space needed to heal—not just look good. The attention to acoustics and lighting was remarkable.",
  },
  {
    name: "Karthik Nair",
    role: "Managing Partner, Atlas Law Firm",
    initials: "KN",
    stars: 4,
    text: "Our law firm needed to project authority and trust. Aura created an office that's both commanding and welcoming. The custom walnut paneling and brass details give us exactly the impression we needed. Outstanding work.",
  },
  {
    name: "Sneha Krishnamurthy",
    role: "Homeowner, Gachibowli",
    initials: "SK",
    stars: 5,
    text: "Living in an Aura-designed home feels different. There's a calmness to it—the way light moves through the rooms, the materials they chose. Two years later, it still feels brand new. They truly build things to last.",
  },
  {
    name: "Rahul Mehta",
    role: "Owner, The Silk Route Restaurant",
    initials: "RM",
    stars: 5,
    text: "Aura didn't just design our restaurant—they told our story through the space. The cultural motifs woven into a contemporary design have made us a landmark. Reviewers mention the interiors as much as the food!",
  },
];

function Index() {
  useFadeIn();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="rk-hero">
        <img src={HERO_IMG} alt="Crafted interior space by Aura Interiors" />
        <h1 className="rk-title">AURA INTERIORS</h1>
        <div className="rk-bottom">
          <div className="rk-blurb">
            <p>We shape interiors through clean design, premium materials, and carefully crafted details—creating spaces that feel personal, refined, and built to last.</p>
            <div className="rk-actions">
              <CTAButton to="/contact">Start Your Project</CTAButton>
              <Link to="/projects" className="rk-link-btn">See Our Work <span>↗</span></Link>
            </div>
          </div>
          <div className="rk-hero-extras">
            <div className="rk-thumb">
              <img src={THUMB_IMG} alt="Featured project" />
            </div>
            <div className="rk-play">
              <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        marginTop: 0, borderTop: "1px solid #e3ddd1", borderBottom: "1px solid #e3ddd1"
      }}>
        {STATS.map((s, i) => (
          <div key={i} className="rk-fade-in" style={{
            padding: "36px 28px", textAlign: "center",
            borderRight: i < 3 ? "1px solid #e3ddd1" : "none"
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(32px, 4vw, 56px)",
              color: "#C8A96E", lineHeight: 1
            }}>{s.num}</div>
            <div style={{
              fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase" as const,
              color: "#888", marginTop: 8
            }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section style={{ padding: "64px 36px 48px" }}>
        <div className="rk-fade-in" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <div className="rk-eyebrow">Selected work</div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: .95
            }}>FEATURED PROJECTS</h2>
          </div>
          <Link to="/projects" className="rk-link-btn" style={{
            color: "#0D0D0D", borderColor: "#0D0D0D", fontSize: 11
          }}>
            View All <span>↗</span>
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {FEATURED.map((p, i) => (
            <Link
              key={i}
              to="/projects"
              className="rk-fade-in"
              style={{
                display: "block", position: "relative", overflow: "hidden",
                height: 420, background: "#000", cursor: "pointer"
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform .6s ease, filter .4s ease"
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "40px 22px 22px",
                background: "linear-gradient(transparent, rgba(0,0,0,.7))",
                color: "#fff"
              }}>
                <div style={{ fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,.7)", marginBottom: 6 }}>{p.cat}</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: ".02em" }}>{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <TestimonialsSection />

      {/* WHY AURA */}
      <section style={{ padding: "48px 36px 80px" }}>
        <div className="rk-fade-in" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="rk-eyebrow">Why choose us</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: .95, marginBottom: 16
          }}>CRAFTED WITH INTENTION</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#666", maxWidth: 600, margin: "0 auto" }}>
            Every space we design is a reflection of its people—calm, intentional, and built to age beautifully.
          </p>
        </div>

        <div className="rk-grid3">
          {[
            { icon: "◇", t: "Bespoke Design", d: "Every project is tailored from scratch. No templates, no shortcuts—just design that fits your life." },
            { icon: "◈", t: "Premium Materials", d: "We source the finest materials—Italian marble, solid wood, artisan brass—for interiors that endure." },
            { icon: "◆", t: "End-to-End Service", d: "From the initial sketch to final styling, we manage every detail so you don't have to." },
          ].map((item, i) => (
            <div key={i} className="rk-card rk-fade-in">
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 48,
                color: "#C8A96E", marginBottom: 12
              }}>{item.icon}</div>
              <div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

/* ─── Testimonials Carousel Component ─── */

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // How many cards visible at once (3 on desktop)
  const cardsPerView = 3;
  const totalSlides = Math.ceil(TESTIMONIALS.length / cardsPerView);

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentSlide(clamped);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Calculate the translation for the track
  // Each slide moves by (cardsPerView cards + gaps)
  const cardWidthPercent = 100 / cardsPerView;
  const translateX = -(currentSlide * cardsPerView * cardWidthPercent);

  return (
    <section
      className="rk-testimonials"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Header */}
      <div className="rk-testimonials-header rk-fade-in">
        <div>
          <div className="rk-eyebrow">Client voices</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: .95,
          }}>
            WHAT OUR CLIENTS SAY
          </h2>
          <p style={{
            fontSize: 15, lineHeight: 1.6, color: "#666",
            maxWidth: 520, marginTop: 14,
          }}>
            Real stories from homeowners, businesses, and organisations who trusted us with their spaces.
          </p>
        </div>
        <div className="rk-testimonials-nav">
          <button onClick={prevSlide} aria-label="Previous testimonials">‹</button>
          <button onClick={nextSlide} aria-label="Next testimonials">›</button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="rk-testimonials-track-wrapper">
        <div
          ref={trackRef}
          className="rk-testimonials-track"
          style={{
            transform: `translateX(calc(${translateX}% - ${currentSlide * 24}px))`,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rk-testimonial-card">
              <div>
                <div className="rk-testimonial-quote-icon">"</div>
                <div className="rk-testimonial-stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span
                      key={si}
                      className="rk-testimonial-star"
                      style={{ opacity: si < t.stars ? 1 : 0.25 }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="rk-testimonial-text">{t.text}</p>
              </div>
              <div className="rk-testimonial-author">
                <div className="rk-testimonial-avatar">
                  <span>{t.initials}</span>
                </div>
                <div>
                  <div className="rk-testimonial-name">{t.name}</div>
                  <div className="rk-testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="rk-testimonials-dots">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={currentSlide === i ? "active" : ""}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="rk-testimonials-counter">
        {currentSlide + 1} / {totalSlides}
      </div>
    </section>
  );
}

