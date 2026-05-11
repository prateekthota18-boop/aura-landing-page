import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

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
.rk-nav { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; gap:24px; }
.rk-brand { font-family:'DM Sans', sans-serif; font-weight:600; font-size:13px; letter-spacing:.18em; text-transform:uppercase; }
.rk-navgroup { display:flex; align-items:center; gap:6px; }
.rk-navgroup a { font-size:13px; padding:8px 14px; color:#222; border-radius:6px; }
.rk-navgroup a[data-status="active"] { background:#0D0D0D; color:#fff; }
.rk-navright { display:flex; align-items:center; gap:22px; }
.rk-navright a { font-size:13px; color:#222; }
.rk-quote { background:#0D0D0D; color:#fff; padding:10px 18px; font-size:13px; font-weight:500; cursor:pointer; border:none; }
.rk-quote:hover { background:#222; }

/* HERO */
.rk-hero { margin-top:14px; position:relative; overflow:hidden; height: calc(100vh - 160px); min-height: 520px; background:#000; }
.rk-hero > img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
.rk-hero::after { content:""; position:absolute; inset:0; background:linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,.6) 100%); pointer-events:none; }
.rk-title { position:absolute; left:0; right:0; top:50%; transform:translateY(-58%); text-align:center; padding:0 4%; font-family:'Bebas Neue', sans-serif; color:#fff; font-size:clamp(60px, 11vw, 170px); letter-spacing:.01em; line-height:.95; text-shadow:0 6px 30px rgba(0,0,0,.35); z-index:2; }
.rk-bottom { position:absolute; left:36px; right:36px; bottom:32px; display:flex; align-items:flex-end; justify-content:space-between; gap:24px; z-index:2; }
.rk-blurb { color:#fff; max-width:480px; }
.rk-blurb p { font-size:13.5px; line-height:1.55; color:rgba(255,255,255,.92); }
.rk-actions { display:flex; align-items:center; gap:14px; margin-top:20px; flex-wrap:wrap; }

/* CTA buttons */
.rk-cta {
  position:relative; display:inline-flex; align-items:center; gap:10px;
  background:#C8A96E; color:#0D0D0D; padding:16px 28px;
  font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase;
  border:none; cursor:pointer; overflow:hidden; isolation:isolate;
  box-shadow:0 12px 30px rgba(200,169,110,.35);
  transition: transform .25s ease, box-shadow .25s ease;
}
.rk-cta::before { content:""; position:absolute; inset:0; background:#0D0D0D; transform:translateX(-101%); transition:transform .35s ease; z-index:-1; }
.rk-cta:hover { color:#C8A96E; transform:translateY(-2px); box-shadow:0 16px 36px rgba(0,0,0,.35); }
.rk-cta:hover::before { transform:translateX(0); }
.rk-cta .arr { transition: transform .25s ease; }
.rk-cta:hover .arr { transform: translateX(4px); }

.rk-link-btn {
  color:#fff; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase;
  display:inline-flex; align-items:center; gap:8px;
  padding:16px 22px; border:1px solid rgba(255,255,255,.7); transition:background .2s ease;
}
.rk-link-btn:hover { background:rgba(255,255,255,.12); }

/* PAGE (interior pages) */
.rk-page { padding:60px 48px 80px; }
.rk-eyebrow { font-size:11px; letter-spacing:.32em; text-transform:uppercase; color:#888; margin-bottom:14px; }
.rk-h1 { font-family:'Bebas Neue', sans-serif; font-size:clamp(48px, 8vw, 110px); line-height:.95; margin-bottom:18px; }
.rk-lede { font-size:16px; line-height:1.6; color:#444; max-width:680px; margin-bottom:48px; }

.rk-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.rk-card { background:#fff; padding:28px; min-height:260px; display:flex; flex-direction:column; justify-content:space-between; }
.rk-card h3 { font-family:'Bebas Neue', sans-serif; font-size:30px; letter-spacing:.02em; }
.rk-card p { font-size:14px; line-height:1.55; color:#555; margin-top:10px; }
.rk-card .num { font-family:'Cormorant Garamond', serif; font-style:italic; font-weight:300; font-size:42px; color:#C8A96E; }

.rk-split { display:grid; grid-template-columns:1.1fr 1fr; gap:36px; align-items:center; }
.rk-split img { width:100%; height:480px; object-fit:cover; }

.rk-form { display:grid; grid-template-columns:1fr 1fr; gap:14px; max-width:720px; }
.rk-form .full { grid-column:1/-1; }
.rk-form input, .rk-form textarea {
  width:100%; padding:14px 16px; background:#fff; border:1px solid #e3ddd1;
  font-family:inherit; font-size:14px; color:#0D0D0D;
}
.rk-form textarea { min-height:140px; resize:vertical; }
.rk-form input:focus, .rk-form textarea:focus { outline:none; border-color:#C8A96E; }

.rk-info { display:flex; flex-direction:column; gap:18px; margin-top:36px; }
.rk-info-item .label { font-size:11px; letter-spacing:.24em; text-transform:uppercase; color:#888; margin-bottom:4px; }
.rk-info-item .val { font-size:15px; color:#0D0D0D; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .rk { padding:14px; }
  .rk-shell { padding:10px; }
  .rk-navgroup, .rk-navright a { display:none; }
  .rk-navright { gap:10px; }
  .rk-hero { height: 70vh; }
  .rk-bottom { flex-direction:column; align-items:flex-start; left:20px; right:20px; bottom:20px; }
  .rk-page { padding:40px 18px 60px; }
  .rk-grid3 { grid-template-columns:1fr; }
  .rk-split { grid-template-columns:1fr; }
  .rk-split img { height:280px; }
  .rk-form { grid-template-columns:1fr; }
}
`;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="rk">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rk-shell">
        <nav className="rk-nav">
          <Link to="/" className="rk-brand">AURA INTERIORS</Link>
          <div className="rk-navgroup">
            <Link to="/" activeOptions={{ exact: true }}>Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About us</Link>
          </div>
          <div className="rk-navright">
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="rk-quote">Get a Quote</Link>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}

export function CTAButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="rk-cta">
      <span>{children}</span>
      <span className="arr">↗</span>
    </Link>
  );
}
