import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aura Interiors — Hyderabad Interior Design Studio" },
      { name: "description", content: "Aura Interiors crafts refined residential, commercial and turnkey interiors in Hyderabad." },
    ],
  }),
});

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@1,300;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

.rk * { box-sizing: border-box; margin: 0; padding: 0; }
.rk {
  --bg:#EDEDED; --panel:#F6F4EF; --ink:#0D0D0D; --muted:#6B6B6B;
  background:var(--bg); min-height:100vh; font-family:'DM Sans', sans-serif; color:var(--ink);
  padding:28px;
}
.rk a { text-decoration:none; color:inherit; }
.rk img { display:block; max-width:100%; }

.rk-shell { background:var(--panel); padding:18px; }

/* NAV */
.rk-nav {
  display:flex; align-items:center; justify-content:space-between;
  padding:10px 14px; gap:24px;
}
.rk-brand {
  font-family:'DM Sans', sans-serif; font-weight:600;
  font-size:13px; letter-spacing:.18em; text-transform:uppercase;
}
.rk-navgroup { display:flex; align-items:center; gap:6px; }
.rk-navgroup a {
  font-size:13px; padding:8px 14px; color:#222; border-radius:6px;
}
.rk-navgroup a.active { background:#0D0D0D; color:#fff; }
.rk-navright { display:flex; align-items:center; gap:22px; }
.rk-navright a { font-size:13px; color:#222; }
.rk-quote {
  background:#0D0D0D; color:#fff; padding:10px 18px;
  font-size:13px; font-weight:500; cursor:pointer; border:none;
}
.rk-quote:hover { background:#222; }

/* HERO */
.rk-hero {
  margin-top:14px; position:relative; overflow:hidden;
  height: calc(100vh - 160px); min-height: 520px;
  background:#000;
}
.rk-hero > img {
  position:absolute; inset:0; width:100%; height:100%;
  object-fit:cover; object-position:center;
}
.rk-hero::after {
  content:""; position:absolute; inset:0;
  background:linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,.55) 100%);
  pointer-events:none;
}

.rk-title {
  position:absolute; left:0; right:0; top:50%;
  transform:translateY(-58%);
  text-align:center; padding:0 4%;
  font-family:'Bebas Neue', sans-serif; color:#fff;
  font-size:clamp(60px, 11vw, 170px);
  letter-spacing:.01em; line-height:.95;
  text-shadow:0 6px 30px rgba(0,0,0,.35);
  z-index:2;
}

.rk-bottom {
  position:absolute; left:36px; right:36px; bottom:32px;
  display:flex; align-items:flex-end; justify-content:space-between; gap:24px;
  z-index:2;
}
.rk-blurb { color:#fff; max-width:380px; }
.rk-blurb p { font-size:13.5px; line-height:1.55; color:rgba(255,255,255,.92); }
.rk-actions { display:flex; align-items:center; gap:18px; margin-top:18px; }
.rk-btn {
  background:#fff; color:#0D0D0D; padding:12px 22px;
  font-size:13px; display:inline-flex; align-items:center; gap:8px;
  border:none; cursor:pointer;
}
.rk-btn:hover { background:#f1f1f1; }
.rk-link { color:#fff; font-size:13px; display:inline-flex; align-items:center; gap:6px; }

.rk-reel {
  width:170px; height:104px; position:relative;
  border:2px solid #fff; overflow:hidden; flex-shrink:0;
}
.rk-reel img { width:100%; height:100%; object-fit:cover; }
.rk-play {
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,.92);
  display:flex; align-items:center; justify-content:center;
}
.rk-play::before {
  content:""; width:0; height:0;
  border-left:9px solid #0D0D0D;
  border-top:6px solid transparent; border-bottom:6px solid transparent;
  margin-left:3px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .rk { padding:14px; }
  .rk-shell { padding:10px; }
  .rk-navgroup, .rk-navright a { display:none; }
  .rk-navright { gap:10px; }
  .rk-hero { height: 70vh; }
  .rk-bottom { flex-direction:column; align-items:flex-start; left:20px; right:20px; bottom:20px; }
  .rk-reel { width:130px; height:80px; align-self:flex-end; }
}
`;

const HERO_IMG = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80";

function Index() {
  return (
    <div className="rk">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rk-shell">
        <nav className="rk-nav">
          <div className="rk-brand">AURA INTERIORS</div>
          <div className="rk-navgroup">
            <a href="#" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About us</a>
          </div>
          <div className="rk-navright">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="rk-quote">Get a Quote</button>
          </div>
        </nav>

        <section className="rk-hero">
          <img src={HERO_IMG} alt="Crafted interior space by Aura Interiors" />
          <h1 className="rk-title">AURA INTERIORS</h1>
          <div className="rk-bottom">
            <div className="rk-blurb">
              <p>We shape interiors through clean design, premium materials, and carefully crafted details—creating spaces that feel personal, refined, and built to last.</p>
              <div className="rk-actions">
                <a className="rk-btn" href="#contact">Start Your Project <span>↗</span></a>
                <a className="rk-link" href="#projects">See Our Work <span>↗</span></a>
              </div>
            </div>
            <div className="rk-reel">
              <img src={HERO_IMG} alt="Project reel preview" />
              <div className="rk-play" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
