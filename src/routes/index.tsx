import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aura Interiors — Hyderabad Interior Design Studio" },
      { name: "description", content: "Aura Interiors crafts refined residential, commercial and turnkey interiors in Hyderabad. Spaces that feel personal, refined, and built to last." },
    ],
  }),
});

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

.aura * { box-sizing: border-box; margin: 0; padding: 0; }
.aura {
  --bg:#0D0D0D; --cream:#FAF7F2; --gold:#C8A96E; --white:#FFFFFF; --muted:rgba(255,255,255,0.6);
  background:var(--bg); color:var(--white);
  font-family:'DM Sans', sans-serif;
  min-height:100vh;
}
.aura a { text-decoration:none; color:inherit; }
.aura img { display:block; max-width:100%; }

/* NAVBAR */
.aura-nav {
  position:fixed; top:0; left:0; right:0; height:72px;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 5%; z-index:100; background:transparent;
  transition:background .3s ease;
}
.aura-nav.scrolled { background:#0D0D0D; }
.aura-logo { display:flex; align-items:baseline; gap:8px; }
.aura-logo .a { font-family:'Bebas Neue'; font-size:28px; color:#fff; letter-spacing:1px; }
.aura-logo .i { font-family:'Cormorant Garamond'; font-style:italic; font-size:14px; color:var(--gold); }
.aura-links { display:flex; gap:36px; }
.aura-links a { font-size:12px; letter-spacing:.15em; text-transform:uppercase; color:rgba(255,255,255,.7); }
.aura-links a:hover { color:#fff; }
.aura-cta {
  border:1px solid var(--gold); color:var(--gold);
  padding:10px 24px; font-size:12px; letter-spacing:.1em; text-transform:uppercase;
  background:transparent; transition:all .25s ease; cursor:pointer;
}
.aura-cta:hover { background:var(--gold); color:#0D0D0D; }

/* HERO */
.aura-hero { display:flex; min-height:100vh; position:relative; }
.aura-hero-left {
  width:50%; background:#0D0D0D; position:relative; overflow:hidden;
  background-image: radial-gradient(circle at 30% 50%, rgba(200,169,110,0.08) 0%, transparent 60%);
}
.aura-est {
  position:absolute; top:100px; left:5%;
  font-size:10px; color:rgba(255,255,255,.3); letter-spacing:.2em; text-transform:uppercase;
}
.aura-headline { position:absolute; top:50%; left:5%; transform:translateY(-50%); }
.aura-headline .l1 {
  font-family:'Bebas Neue'; font-size:clamp(100px,16vw,180px);
  color:#fff; letter-spacing:-2px; line-height:.85;
  opacity:0; animation:auraUp .8s ease-out .2s both;
}
.aura-headline .l2 {
  font-family:'Cormorant Garamond'; font-style:italic;
  font-size:clamp(40px,6vw,72px); color:transparent;
  -webkit-text-stroke:1.5px var(--gold); letter-spacing:12px;
  opacity:0; animation:auraUp .8s ease-out .4s both;
}
.aura-headline .l3 {
  font-family:'Bebas Neue'; font-size:clamp(80px,13vw,150px);
  color:#fff; opacity:.08; letter-spacing:-2px; line-height:.85;
  animation:auraUp .8s ease-out .6s both;
}
.aura-hero-bottom { position:absolute; bottom:60px; left:5%; opacity:0; animation:auraUp .8s ease-out .8s both; }
.aura-hero-bottom p { font-size:13px; color:rgba(255,255,255,.6); max-width:280px; line-height:1.8; }
.aura-hero-actions { display:flex; gap:20px; margin-top:24px; align-items:center; }
.aura-btn-primary {
  background:var(--gold); color:#0D0D0D; padding:14px 24px;
  font-size:12px; font-weight:500; letter-spacing:.1em; text-transform:uppercase;
  border:none; cursor:pointer; display:inline-block;
}
.aura-btn-primary:hover { background:#d8b97e; }
.aura-btn-ghost { background:none; border:none; color:rgba(255,255,255,.6); font-size:12px; letter-spacing:.1em; text-transform:uppercase; cursor:pointer; }
.aura-btn-ghost:hover { color:#fff; }

.aura-hero-right { width:50%; position:relative; overflow:hidden; }
.aura-hero-right > img { width:100%; height:100%; object-fit:cover; object-position:center; position:absolute; inset:0; }
.aura-hero-right::after { content:""; position:absolute; inset:0; background:linear-gradient(to right, rgba(13,13,13,0.4) 0%, transparent 40%); pointer-events:none; }
.aura-reel { position:absolute; bottom:40px; right:5%; z-index:2; }
.aura-reel-thumb {
  width:180px; height:110px; position:relative;
  background:url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400') center/cover;
  border:1px solid rgba(255,255,255,.2);
}
.aura-play {
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  width:40px; height:40px; border-radius:50%; background:#fff;
  display:flex; align-items:center; justify-content:center;
}
.aura-play::before { content:""; width:0; height:0; border-left:10px solid #0D0D0D; border-top:6px solid transparent; border-bottom:6px solid transparent; margin-left:3px; }
.aura-reel-label { font-size:9px; letter-spacing:.2em; color:rgba(255,255,255,.5); margin-top:8px; text-align:right; text-transform:uppercase; }

.aura-divider {
  position:absolute; left:50%; top:15%; width:1px; height:70%;
  background:linear-gradient(to bottom, transparent, var(--gold), transparent);
  z-index:3;
}

@keyframes auraUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }

/* SERVICES */
.aura-section { padding:100px 5%; }
.aura-services { background:var(--cream); color:#0D0D0D; }
.aura-label { font-size:11px; letter-spacing:.3em; color:var(--gold); text-transform:uppercase; margin-bottom:16px; }
.aura-h2 { font-family:'Cormorant Garamond'; font-style:italic; font-size:52px; color:#0D0D0D; }
.aura-projects .aura-h2 { color:var(--cream); }
.aura-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:60px; }
.aura-card { background:#0D0D0D; padding:48px 36px; min-height:380px; display:flex; flex-direction:column; }
.aura-card .num { font-family:'Bebas Neue'; font-size:14px; color:var(--gold); letter-spacing:.2em; }
.aura-card h3 { font-family:'Cormorant Garamond'; font-style:italic; font-size:36px; color:var(--cream); margin-top:40px; font-weight:300; }
.aura-card p { font-size:13px; color:rgba(255,255,255,.5); line-height:1.8; margin-top:16px; }
.aura-card .more { font-size:12px; color:var(--gold); margin-top:auto; padding-top:40px; letter-spacing:.05em; }

/* PROJECTS */
.aura-projects { background:#0D0D0D; }
.aura-grid {
  display:grid; grid-template-columns:2fr 1fr 1fr;
  grid-template-rows:auto auto; gap:2px; margin-top:60px;
}
.aura-tile { position:relative; overflow:hidden; }
.aura-tile img { width:100%; height:300px; object-fit:cover; transition:transform .6s ease; }
.aura-tile.big { grid-row:span 2; }
.aura-tile.big img { height:602px; }
.aura-tile .ovr {
  position:absolute; inset:0; background:rgba(200,169,110,0.15);
  display:flex; align-items:center; justify-content:center;
  opacity:0; transition:opacity .3s ease;
  font-family:'Cormorant Garamond'; font-style:italic; font-size:24px; color:#fff; text-align:center; padding:16px;
}
.aura-tile:hover .ovr { opacity:1; }
.aura-tile:hover img { transform:scale(1.05); }

/* TESTIMONIALS */
.aura-testi { background:var(--cream); color:#0D0D0D; }
.aura-quotes { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
.aura-quote .mark { font-family:'Cormorant Garamond'; font-size:80px; color:var(--gold); line-height:0; display:block; height:30px; }
.aura-quote .text { font-size:14px; color:#0D0D0D; line-height:1.8; }
.aura-quote .who { font-size:11px; color:var(--gold); letter-spacing:.15em; margin-top:24px; text-transform:uppercase; }

/* FOOTER */
.aura-footer { background:#0D0D0D; padding:60px 5%; }
.aura-footer-row { display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
.aura-footer-mid { font-family:'Cormorant Garamond'; font-style:italic; font-size:28px; color:#fff; text-align:center; flex:1; min-width:240px; }
.aura-footer-bottom {
  margin-top:40px; border-top:1px solid rgba(255,255,255,.08); padding-top:24px;
  display:flex; justify-content:space-between; gap:16px; font-size:11px; color:rgba(255,255,255,.3);
}
.aura-footer-bottom a { margin-left:18px; color:rgba(255,255,255,.3); }
.aura-footer-bottom a:hover { color:var(--gold); }

/* WhatsApp float */
.aura-wa {
  position:fixed; bottom:24px; right:24px; z-index:999;
  width:52px; height:52px; border-radius:50%; background:#25D366;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 8px 24px rgba(0,0,0,.3);
}
.aura-wa svg { width:28px; height:28px; fill:#fff; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .aura-links { display:none; }
  .aura-hero { flex-direction:column; }
  .aura-hero-left { width:100%; min-height:100vh; }
  .aura-hero-right { display:none; }
  .aura-divider { display:none; }
  .aura-cards { grid-template-columns:1fr; }
  .aura-grid { grid-template-columns:1fr 1fr; }
  .aura-tile.big { grid-row:span 1; grid-column:span 2; }
  .aura-tile.big img { height:300px; }
  .aura-quotes { grid-template-columns:1fr; gap:40px; }
  .aura-h2 { font-size:38px; }
  .aura-footer-row { flex-direction:column; text-align:center; }
  .aura-footer-bottom { flex-direction:column; text-align:center; }
}
`;

const WA = "https://wa.me/919999999999?text=Hi%20I%20want%20to%20book%20a%20consultation";

function Index() {
  useEffect(() => {
    const nav = document.getElementById("aura-nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="aura">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav id="aura-nav" className="aura-nav">
        <a className="aura-logo" href="#top">
          <span className="a">AURA</span>
          <span className="i">Interiors</span>
        </a>
        <div className="aura-links">
          <a href="#top">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="aura-cta" href={WA} target="_blank" rel="noopener noreferrer">Get a Quote</a>
      </nav>

      <section className="aura-hero" id="top">
        <div className="aura-hero-left">
          <div className="aura-est">Established 2019 · Hyderabad</div>
          <div className="aura-headline">
            <div className="l1">AURA</div>
            <div className="l2">INTERIORS</div>
            <div className="l3">STUDIO</div>
          </div>
          <div className="aura-hero-bottom">
            <p>We craft spaces that feel personal, refined, and built to last. Every detail intentional. Every room, a statement.</p>
            <div className="aura-hero-actions">
              <a className="aura-btn-primary" href={WA} target="_blank" rel="noopener noreferrer">Start Your Project ↗</a>
              <a className="aura-btn-ghost" href="#projects">See Our Work ↗</a>
            </div>
          </div>
        </div>
        <div className="aura-divider" />
        <div className="aura-hero-right">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400" alt="Refined interior space designed by Aura Interiors" />
          <div className="aura-reel">
            <div className="aura-reel-thumb"><div className="aura-play" /></div>
            <div className="aura-reel-label">View Project Reel</div>
          </div>
        </div>
      </section>

      <section className="aura-section aura-services" id="services">
        <div className="aura-label">Our Expertise</div>
        <h2 className="aura-h2">What We Do</h2>
        <div className="aura-cards">
          <div className="aura-card">
            <div className="num">01</div>
            <h3>Residential Design</h3>
            <p>Full home transformations — from concept to completion. We handle every detail so you don't have to.</p>
            <div className="more">→ Explore</div>
          </div>
          <div className="aura-card">
            <div className="num">02</div>
            <h3>Commercial Spaces</h3>
            <p>Offices, studios, and showrooms designed to impress clients and energize teams.</p>
            <div className="more">→ Explore</div>
          </div>
          <div className="aura-card">
            <div className="num">03</div>
            <h3>Turnkey Interiors</h3>
            <p>End-to-end execution. Furniture, lighting, finishes — delivered on time, on budget.</p>
            <div className="more">→ Explore</div>
          </div>
        </div>
      </section>

      <section className="aura-section aura-projects" id="projects">
        <div className="aura-label">Portfolio</div>
        <h2 className="aura-h2">Selected Work</h2>
        <div className="aura-grid">
          <div className="aura-tile big">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" alt="Aura signature residence" />
            <div className="ovr">Banjara Hills Residence</div>
          </div>
          <div className="aura-tile">
            <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600" alt="Modern living room" />
            <div className="ovr">Jubilee Penthouse</div>
          </div>
          <div className="aura-tile">
            <img src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600" alt="Studio workspace" />
            <div className="ovr">Studio Workspace</div>
          </div>
          <div className="aura-tile">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" alt="Designer kitchen" />
            <div className="ovr">Sculpted Kitchen</div>
          </div>
          <div className="aura-tile">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600" alt="Boutique office interior" />
            <div className="ovr">Boutique Office</div>
          </div>
          <div className="aura-tile">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" alt="Elegant lounge" />
            <div className="ovr">Twilight Lounge</div>
          </div>
        </div>
      </section>

      <section className="aura-section aura-testi" id="about">
        <div className="aura-label">Client Voices</div>
        <h2 className="aura-h2">Kind Words</h2>
        <div className="aura-quotes" style={{ marginTop: 60 }}>
          <div className="aura-quote">
            <span className="mark">&ldquo;</span>
            <p className="text">Working with Aura was effortless. They understood our vision from day one and delivered beyond expectations.</p>
            <div className="who">Priya Mehta, Banjara Hills</div>
          </div>
          <div className="aura-quote">
            <span className="mark">&ldquo;</span>
            <p className="text">The attention to detail is unmatched. Our office now feels like a space people actually want to work in.</p>
            <div className="who">Rohan Kapoor, Jubilee Hills</div>
          </div>
        </div>
      </section>

      <footer className="aura-footer" id="contact">
        <div className="aura-footer-row">
          <a className="aura-logo" href="#top">
            <span className="a">AURA</span>
            <span className="i">Interiors</span>
          </a>
          <div className="aura-footer-mid">Ready to transform your space?</div>
          <a className="aura-cta" href={WA} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
        <div className="aura-footer-bottom">
          <div>© 2025 Aura Interiors. Hyderabad.</div>
          <div>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </footer>

      <a className="aura-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.39-1.67a11.83 11.83 0 0 0 5.65 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.45zM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.79.99 1.01-3.69-.23-.38a9.45 9.45 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.78a9.43 9.43 0 0 1 2.78 6.72c0 5.23-4.26 9.49-9.5 9.49zm5.49-7.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.53.07-.81.38-.28.3-1.07 1.04-1.07 2.54s1.1 2.94 1.25 3.14c.15.2 2.16 3.3 5.24 4.62.73.32 1.3.51 1.75.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </div>
  );
}
