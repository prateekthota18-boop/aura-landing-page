import { V as jsxRuntimeExports, r as reactExports } from "./server-V38PSzxu.js";
import { L as Link } from "./router-BOnm97EV.js";
import { u as useFadeIn, S as SiteLayout, C as CTAButton } from "./SiteLayout-CYVjkX4y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const HERO_IMG = "/images/hero.png";
const THUMB_IMG = "/images/kitchen.png";
const STATS = [{
  num: "120+",
  label: "Projects Delivered"
}, {
  num: "8+",
  label: "Years of Experience"
}, {
  num: "40+",
  label: "Design Awards"
}, {
  num: "98%",
  label: "Client Satisfaction"
}];
const FEATURED = [{
  img: "/images/bedroom.png",
  title: "Serene Bedroom",
  cat: "Residential"
}, {
  img: "/images/kitchen.png",
  title: "Modern Kitchen",
  cat: "Residential"
}, {
  img: "/images/office.png",
  title: "Executive Office",
  cat: "Commercial"
}];
const TESTIMONIALS = [{
  name: "Priya & Arvind Sharma",
  role: "Homeowners, Banjara Hills",
  initials: "PS",
  stars: 5,
  text: "Aura Interiors transformed our apartment into something we never imagined possible. Every corner feels intentional—the marble, the lighting, the textures. It's not just a home anymore, it's a sanctuary. We couldn't be happier."
}, {
  name: "Ravi Teja Kondapalli",
  role: "CEO, NexGen Technologies",
  initials: "RK",
  stars: 5,
  text: "We needed an office that inspired creativity without sacrificing professionalism. Aura delivered beyond expectations. Our employees love the space, and clients are always impressed. The design pays for itself in morale alone."
}, {
  name: "Ananya Reddy",
  role: "Founder, Bloom Café",
  initials: "AR",
  stars: 5,
  text: "The team understood our brand instantly. They created a café space that feels warm yet modern—exactly the vibe we wanted. Customers constantly compliment the interiors. It's become part of our identity."
}, {
  name: "Vikram & Suhani Rao",
  role: "Homeowners, Jubilee Hills",
  initials: "VR",
  stars: 5,
  text: "From the first consultation to the final walkthrough, the Aura team was exceptional. They respected our budget while delivering luxury we didn't think was possible. The kitchen renovation alone was worth every rupee."
}, {
  name: "Dr. Meera Joshi",
  role: "Director, Wellness Retreat Spa",
  initials: "MJ",
  stars: 5,
  text: "The spa design exceeded all expectations. Patients tell us they feel calmer the moment they walk in. Aura understood that our space needed to heal—not just look good. The attention to acoustics and lighting was remarkable."
}, {
  name: "Karthik Nair",
  role: "Managing Partner, Atlas Law Firm",
  initials: "KN",
  stars: 4,
  text: "Our law firm needed to project authority and trust. Aura created an office that's both commanding and welcoming. The custom walnut paneling and brass details give us exactly the impression we needed. Outstanding work."
}, {
  name: "Sneha Krishnamurthy",
  role: "Homeowner, Gachibowli",
  initials: "SK",
  stars: 5,
  text: "Living in an Aura-designed home feels different. There's a calmness to it—the way light moves through the rooms, the materials they chose. Two years later, it still feels brand new. They truly build things to last."
}, {
  name: "Rahul Mehta",
  role: "Owner, The Silk Route Restaurant",
  initials: "RM",
  stars: 5,
  text: "Aura didn't just design our restaurant—they told our story through the space. The cultural motifs woven into a contemporary design have made us a landmark. Reviewers mention the interiors as much as the food!"
}];
function Index() {
  useFadeIn();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: HERO_IMG, alt: "Crafted interior space by Aura Interiors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "rk-title", children: "AURA INTERIORS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-bottom", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-blurb", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We shape interiors through clean design, premium materials, and carefully crafted details—creating spaces that feel personal, refined, and built to last." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { to: "/contact", children: "Start Your Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "rk-link-btn", children: [
              "See Our Work ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↗" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-hero-extras", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-thumb", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: THUMB_IMG, alt: "Featured project" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-play", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "5,3 19,12 5,21" }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      marginTop: 0,
      borderTop: "1px solid #e3ddd1",
      borderBottom: "1px solid #e3ddd1"
    }, children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
      padding: "36px 28px",
      textAlign: "center",
      borderRight: i < 3 ? "1px solid #e3ddd1" : "none"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(32px, 4vw, 56px)",
        color: "#C8A96E",
        lineHeight: 1
      }, children: s.num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 12,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        color: "#888",
        marginTop: 8
      }, children: s.label })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "64px 36px 48px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 32
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "Selected work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 0.95
          }, children: "FEATURED PROJECTS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "rk-link-btn", style: {
          color: "#0D0D0D",
          borderColor: "#0D0D0D",
          fontSize: 11
        }, children: [
          "View All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↗" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 18
      }, children: FEATURED.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "rk-fade-in", style: {
        display: "block",
        position: "relative",
        overflow: "hidden",
        height: 420,
        background: "#000",
        cursor: "pointer"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .6s ease, filter .4s ease"
        }, onMouseOver: (e) => {
          e.currentTarget.style.transform = "scale(1.06)";
        }, onMouseOut: (e) => {
          e.currentTarget.style.transform = "scale(1)";
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "40px 22px 22px",
          background: "linear-gradient(transparent, rgba(0,0,0,.7))",
          color: "#fff"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 10,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.7)",
            marginBottom: 6
          }, children: p.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 26,
            letterSpacing: ".02em"
          }, children: p.title })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "48px 36px 80px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
        textAlign: "center",
        marginBottom: 48
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "Why choose us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 0.95,
          marginBottom: 16
        }, children: "CRAFTED WITH INTENTION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 15,
          lineHeight: 1.6,
          color: "#666",
          maxWidth: 600,
          margin: "0 auto"
        }, children: "Every space we design is a reflection of its people—calm, intentional, and built to age beautifully." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-grid3", children: [{
        icon: "◇",
        t: "Bespoke Design",
        d: "Every project is tailored from scratch. No templates, no shortcuts—just design that fits your life."
      }, {
        icon: "◈",
        t: "Premium Materials",
        d: "We source the finest materials—Italian marble, solid wood, artisan brass—for interiors that endure."
      }, {
        icon: "◆",
        t: "End-to-End Service",
        d: "From the initial sketch to final styling, we manage every detail so you don't have to."
      }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-card rk-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 48,
          color: "#C8A96E",
          marginBottom: 12
        }, children: item.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: item.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: item.d })
        ] })
      ] }, i)) })
    ] })
  ] });
}
function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = reactExports.useState(true);
  const trackRef = reactExports.useRef(null);
  const cardsPerView = 3;
  const totalSlides = Math.ceil(TESTIMONIALS.length / cardsPerView);
  const goToSlide = reactExports.useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentSlide(clamped);
  }, [totalSlides]);
  const nextSlide = reactExports.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);
  const prevSlide = reactExports.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);
  reactExports.useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5e3);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);
  const cardWidthPercent = 100 / cardsPerView;
  const translateX = -(currentSlide * cardsPerView * cardWidthPercent);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-testimonials", onMouseEnter: () => setIsAutoPlaying(false), onMouseLeave: () => setIsAutoPlaying(true), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-testimonials-header rk-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "Client voices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          lineHeight: 0.95
        }, children: "WHAT OUR CLIENTS SAY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 15,
          lineHeight: 1.6,
          color: "#666",
          maxWidth: 520,
          marginTop: 14
        }, children: "Real stories from homeowners, businesses, and organisations who trusted us with their spaces." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-testimonials-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevSlide, "aria-label": "Previous testimonials", children: "‹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextSlide, "aria-label": "Next testimonials", children: "›" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonials-track-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: trackRef, className: "rk-testimonials-track", style: {
      transform: `translateX(calc(${translateX}% - ${currentSlide * 24}px))`
    }, children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-testimonial-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonial-quote-icon", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonial-stars", children: Array.from({
          length: 5
        }).map((_, si) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rk-testimonial-star", style: {
          opacity: si < t.stars ? 1 : 0.25
        }, children: "★" }, si)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rk-testimonial-text", children: t.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-testimonial-author", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonial-avatar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonial-name", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonial-role", children: t.role })
        ] })
      ] })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-testimonials-dots", children: Array.from({
      length: totalSlides
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: currentSlide === i ? "active" : "", onClick: () => goToSlide(i), "aria-label": `Go to slide ${i + 1}` }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-testimonials-counter", children: [
      currentSlide + 1,
      " / ",
      totalSlides
    ] })
  ] });
}
export {
  Index as component
};
