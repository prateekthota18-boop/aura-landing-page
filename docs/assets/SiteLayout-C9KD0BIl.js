import{j as e,L as r,r as i}from"./index-DwZ0V8r6.js";const n=`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

.rk * { box-sizing: border-box; margin: 0; padding: 0; }
.rk {
  --bg:#EDEDED; --panel:#F6F4EF; --ink:#0D0D0D; --muted:#6B6B6B; --gold:#C8A96E; --gold-light:#D4B87E;
  background:var(--bg); min-height:100vh; font-family:'DM Sans', sans-serif; color:var(--ink);
  padding:28px;
}
.rk a { text-decoration:none; color:inherit; }
.rk img { display:block; max-width:100%; }
.rk-shell { background:var(--panel); padding:18px; }

/* NAV */
.rk-nav {
  display:flex; align-items:center; justify-content:space-between; padding:10px 14px; gap:24px;
  position:sticky; top:0; z-index:100; background:var(--panel);
}
.rk-brand { font-family:'DM Sans', sans-serif; font-weight:600; font-size:13px; letter-spacing:.18em; text-transform:uppercase; }
.rk-navgroup { display:flex; align-items:center; gap:6px; }
.rk-navgroup a {
  font-size:13px; padding:8px 14px; color:#222; border-radius:6px;
  transition: background .2s ease, color .2s ease;
}
.rk-navgroup a:hover { background:rgba(13,13,13,.06); }
.rk-navgroup a[data-status="active"] { background:#0D0D0D; color:#fff; }
.rk-navright { display:flex; align-items:center; gap:22px; }
.rk-navright a { font-size:13px; color:#222; transition: color .2s ease; }
.rk-navright a:hover { color:var(--gold); }
.rk-quote {
  background:#0D0D0D; color:#fff; padding:10px 18px; font-size:13px; font-weight:500;
  cursor:pointer; border:none; transition: background .25s ease, transform .2s ease;
}
.rk-quote:hover { background:#222; transform:translateY(-1px); }

/* HERO */
.rk-hero {
  margin-top:14px; position:relative; overflow:hidden;
  height: calc(100vh - 160px); min-height: 520px; background:#000;
}
.rk-hero > img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center;
  transition: transform 8s ease-out;
}
.rk-hero:hover > img { transform: scale(1.03); }
.rk-hero::after {
  content:""; position:absolute; inset:0;
  background:linear-gradient(to bottom, rgba(0,0,0,.12) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.65) 100%);
  pointer-events:none;
}
.rk-title {
  position:absolute; left:0; right:0; top:50%; transform:translateY(-58%);
  text-align:center; padding:0 4%;
  font-family:'Bebas Neue', sans-serif; color:#fff;
  font-size:clamp(60px, 11vw, 170px); letter-spacing:.01em; line-height:.95;
  text-shadow:0 6px 30px rgba(0,0,0,.35);
  z-index:2;
  opacity:0; animation: heroTitleIn .9s ease forwards .3s;
}
@keyframes heroTitleIn {
  from { opacity:0; transform:translateY(-48%); letter-spacing:.06em; }
  to { opacity:1; transform:translateY(-58%); letter-spacing:.01em; }
}
.rk-bottom {
  position:absolute; left:36px; right:36px; bottom:32px;
  display:flex; align-items:flex-end; justify-content:space-between; gap:24px;
  z-index:2;
  opacity:0; animation: fadeUp .7s ease forwards .7s;
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(20px); }
  to { opacity:1; transform:translateY(0); }
}
.rk-blurb { color:#fff; max-width:480px; }
.rk-blurb p { font-size:13.5px; line-height:1.55; color:rgba(255,255,255,.92); }
.rk-actions { display:flex; align-items:center; gap:14px; margin-top:20px; flex-wrap:wrap; }

/* Play button (bottom-right) */
.rk-play {
  width:64px; height:64px; border-radius:50%; border:2px solid rgba(255,255,255,.7);
  background:rgba(255,255,255,.1); backdrop-filter:blur(8px);
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; transition: background .3s ease, transform .3s ease, border-color .3s ease;
  flex-shrink:0;
}
.rk-play:hover { background:rgba(255,255,255,.25); transform:scale(1.08); border-color:#fff; }
.rk-play svg { fill:#fff; width:20px; height:20px; margin-left:3px; }

/* Small thumbnail preview */
.rk-thumb {
  width:120px; height:80px; border-radius:6px; overflow:hidden; position:relative;
  cursor:pointer; transition: transform .3s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,.35);
}
.rk-thumb:hover { transform:scale(1.05); }
.rk-thumb img { width:100%; height:100%; object-fit:cover; }
.rk-hero-extras {
  display:flex; align-items:flex-end; gap:14px;
  opacity:0; animation: fadeUp .7s ease forwards .9s;
}

/* CTA buttons */
.rk-cta {
  position:relative; display:inline-flex; align-items:center; gap:10px;
  background:var(--gold); color:#0D0D0D; padding:16px 28px;
  font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase;
  border:none; cursor:pointer; overflow:hidden; isolation:isolate;
  box-shadow:0 12px 30px rgba(200,169,110,.35);
  transition: transform .25s ease, box-shadow .25s ease;
}
.rk-cta::before {
  content:""; position:absolute; inset:0; background:#0D0D0D;
  transform:translateX(-101%); transition:transform .35s ease; z-index:-1;
}
.rk-cta:hover { color:var(--gold); transform:translateY(-2px); box-shadow:0 16px 36px rgba(0,0,0,.35); }
.rk-cta:hover::before { transform:translateX(0); }
.rk-cta .arr { transition: transform .25s ease; }
.rk-cta:hover .arr { transform: translateX(4px); }

.rk-link-btn {
  color:#fff; font-size:12px; font-weight:500; letter-spacing:.08em; text-transform:uppercase;
  display:inline-flex; align-items:center; gap:8px;
  padding:16px 22px; border:1px solid rgba(255,255,255,.7); transition:background .2s ease, border-color .2s ease;
}
.rk-link-btn:hover { background:rgba(255,255,255,.12); border-color:#fff; }

/* PAGE (interior pages) */
.rk-page { padding:60px 48px 80px; }
.rk-eyebrow { font-size:11px; letter-spacing:.32em; text-transform:uppercase; color:#888; margin-bottom:14px; }
.rk-h1 { font-family:'Bebas Neue', sans-serif; font-size:clamp(48px, 8vw, 110px); line-height:.95; margin-bottom:18px; }
.rk-lede { font-size:16px; line-height:1.6; color:#444; max-width:680px; margin-bottom:48px; }

.rk-grid3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.rk-card {
  background:#fff; padding:28px; min-height:260px; display:flex; flex-direction:column; justify-content:space-between;
  transition: transform .3s ease, box-shadow .3s ease;
}
.rk-card:hover { transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,.08); }
.rk-card h3 { font-family:'Bebas Neue', sans-serif; font-size:30px; letter-spacing:.02em; }
.rk-card p { font-size:14px; line-height:1.55; color:#555; margin-top:10px; }
.rk-card .num { font-family:'Cormorant Garamond', serif; font-style:italic; font-weight:300; font-size:42px; color:var(--gold); }

.rk-split { display:grid; grid-template-columns:1.1fr 1fr; gap:36px; align-items:center; }
.rk-split img { width:100%; height:480px; object-fit:cover; }

.rk-form { display:grid; grid-template-columns:1fr 1fr; gap:14px; max-width:720px; }
.rk-form .full { grid-column:1/-1; }
.rk-form input, .rk-form textarea {
  width:100%; padding:14px 16px; background:#fff; border:1px solid #e3ddd1;
  font-family:inherit; font-size:14px; color:#0D0D0D;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.rk-form textarea { min-height:140px; resize:vertical; }
.rk-form input:focus, .rk-form textarea:focus { outline:none; border-color:var(--gold); box-shadow:0 0 0 3px rgba(200,169,110,.15); }

.rk-info { display:flex; flex-direction:column; gap:18px; margin-top:36px; }
.rk-info-item .label { font-size:11px; letter-spacing:.24em; text-transform:uppercase; color:#888; margin-bottom:4px; }
.rk-info-item .val { font-size:15px; color:#0D0D0D; }

/* FOOTER */
.rk-footer {
  margin-top:0; padding:48px 36px 28px; border-top:1px solid #e3ddd1;
  display:grid; grid-template-columns:1.2fr 1fr 1fr 1fr; gap:36px;
}
.rk-footer-brand { font-family:'DM Sans', sans-serif; font-weight:600; font-size:13px; letter-spacing:.18em; text-transform:uppercase; margin-bottom:12px; }
.rk-footer-desc { font-size:13px; line-height:1.6; color:#888; max-width:280px; }
.rk-footer-col h4 {
  font-size:11px; letter-spacing:.24em; text-transform:uppercase; color:#888; margin-bottom:14px;
}
.rk-footer-col a {
  display:block; font-size:13.5px; color:#444; padding:4px 0;
  transition: color .2s ease, padding-left .2s ease;
}
.rk-footer-col a:hover { color:var(--gold); padding-left:4px; }
.rk-footer-bottom {
  grid-column:1/-1; padding-top:24px; border-top:1px solid #e3ddd1;
  display:flex; justify-content:space-between; align-items:center;
  font-size:12px; color:#aaa;
}

/* TESTIMONIALS */
.rk-testimonials {
  padding:72px 36px 80px; overflow:hidden; position:relative;
  background:linear-gradient(180deg, var(--panel) 0%, #f0ece4 100%);
}
.rk-testimonials-header {
  display:flex; justify-content:space-between; align-items:flex-end;
  margin-bottom:48px;
}
.rk-testimonials-nav {
  display:flex; gap:10px;
}
.rk-testimonials-nav button {
  width:48px; height:48px; border-radius:50%;
  border:1px solid #ccc; background:transparent;
  cursor:pointer; display:flex; align-items:center; justify-content:center;
  font-size:20px; color:#555; font-family:'DM Sans', sans-serif;
  transition: all .25s ease;
}
.rk-testimonials-nav button:hover {
  background:#0D0D0D; color:#fff; border-color:#0D0D0D;
}
.rk-testimonials-track-wrapper {
  overflow:hidden; position:relative;
}
.rk-testimonials-track {
  display:flex; gap:24px;
  transition: transform .6s cubic-bezier(.25,.46,.45,.94);
}
.rk-testimonial-card {
  flex:0 0 calc(33.333% - 16px); min-width:320px;
  background:#fff; padding:36px 32px 32px;
  display:flex; flex-direction:column; justify-content:space-between;
  position:relative; overflow:hidden;
  transition: transform .3s ease, box-shadow .3s ease;
}
.rk-testimonial-card:hover {
  transform:translateY(-4px);
  box-shadow:0 16px 40px rgba(0,0,0,.08);
}
.rk-testimonial-card::before {
  content:""; position:absolute; top:0; left:0; right:0;
  height:3px; background:linear-gradient(90deg, var(--gold), var(--gold-light));
  transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
}
.rk-testimonial-card:hover::before { transform:scaleX(1); }
.rk-testimonial-quote-icon {
  font-family:'Cormorant Garamond', serif; font-size:64px;
  color:var(--gold); line-height:1; margin-bottom:4px; opacity:.6;
  user-select:none;
}
.rk-testimonial-text {
  font-size:15px; line-height:1.7; color:#444;
  font-style:italic; margin-bottom:24px; flex:1;
}
.rk-testimonial-stars {
  display:flex; gap:3px; margin-bottom:18px;
}
.rk-testimonial-star {
  color:var(--gold); font-size:16px;
}
.rk-testimonial-author {
  display:flex; align-items:center; gap:14px;
  padding-top:18px; border-top:1px solid #f0ece4;
}
.rk-testimonial-avatar {
  width:48px; height:48px; border-radius:50%; overflow:hidden;
  background:linear-gradient(135deg, var(--gold), var(--gold-light));
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0;
}
.rk-testimonial-avatar span {
  font-family:'Bebas Neue', sans-serif; font-size:20px;
  color:#fff; letter-spacing:.02em;
}
.rk-testimonial-name {
  font-size:14px; font-weight:600; color:#0D0D0D;
}
.rk-testimonial-role {
  font-size:12px; color:#888; margin-top:2px;
  letter-spacing:.04em;
}
.rk-testimonials-dots {
  display:flex; gap:8px; justify-content:center; margin-top:36px;
}
.rk-testimonials-dots button {
  width:10px; height:10px; border-radius:50%; border:none;
  background:#ccc; cursor:pointer; padding:0;
  transition: all .3s ease;
}
.rk-testimonials-dots button.active {
  background:var(--gold); width:28px; border-radius:5px;
}
.rk-testimonials-counter {
  text-align:center; margin-top:18px;
  font-size:12px; letter-spacing:.16em; text-transform:uppercase; color:#888;
}

/* SCROLL ANIMATIONS */
.rk-fade-in {
  opacity:0; transform:translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}
.rk-fade-in.visible { opacity:1; transform:translateY(0); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .rk { padding:14px; }
  .rk-shell { padding:10px; }
  .rk-navgroup, .rk-navright a:not(.rk-quote) { display:none; }
  .rk-navright { gap:10px; }
  .rk-hero { height: 70vh; }
  .rk-bottom { flex-direction:column; align-items:flex-start; left:20px; right:20px; bottom:20px; }
  .rk-hero-extras { display:none; }
  .rk-page { padding:40px 18px 60px; }
  .rk-grid3 { grid-template-columns:1fr; }
  .rk-split { grid-template-columns:1fr; }
  .rk-split img { height:280px; }
  .rk-form { grid-template-columns:1fr; }
  .rk-footer { grid-template-columns:1fr 1fr; gap:28px; padding:36px 20px 20px; }
  .rk-footer-bottom { flex-direction:column; gap:8px; text-align:center; }
  .rk-testimonials { padding:48px 18px 56px; }
  .rk-testimonials-header { flex-direction:column; align-items:flex-start; gap:18px; }
  .rk-testimonial-card { flex:0 0 calc(100% - 8px); min-width:280px; }
}
`;function p({children:t}){return e.jsxs("div",{className:"rk",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:n}}),e.jsxs("div",{className:"rk-shell",children:[e.jsxs("nav",{className:"rk-nav",children:[e.jsx(r,{to:"/",className:"rk-brand",children:"AURA INTERIORS"}),e.jsxs("div",{className:"rk-navgroup",children:[e.jsx(r,{to:"/",activeOptions:{exact:!0},children:"Home"}),e.jsx(r,{to:"/services",children:"Services"}),e.jsx(r,{to:"/about",children:"About us"})]}),e.jsxs("div",{className:"rk-navright",children:[e.jsx(r,{to:"/projects",children:"Projects"}),e.jsx(r,{to:"/contact",children:"Contact"}),e.jsx(r,{to:"/contact",className:"rk-quote",children:"Get a Quote"})]})]}),t,e.jsx(s,{})]})]})}function s(){return e.jsxs("footer",{className:"rk-footer",children:[e.jsxs("div",{children:[e.jsx("div",{className:"rk-footer-brand",children:"AURA INTERIORS"}),e.jsx("p",{className:"rk-footer-desc",children:"Crafting refined, lasting interiors across Hyderabad. Every space we design is personal, considered, and built to endure."})]}),e.jsxs("div",{className:"rk-footer-col",children:[e.jsx("h4",{children:"Navigate"}),e.jsx(r,{to:"/",children:"Home"}),e.jsx(r,{to:"/services",children:"Services"}),e.jsx(r,{to:"/projects",children:"Projects"}),e.jsx(r,{to:"/about",children:"About Us"}),e.jsx(r,{to:"/contact",children:"Contact"})]}),e.jsxs("div",{className:"rk-footer-col",children:[e.jsx("h4",{children:"Services"}),e.jsx(r,{to:"/services",children:"Residential"}),e.jsx(r,{to:"/services",children:"Commercial"}),e.jsx(r,{to:"/services",children:"Turnkey"}),e.jsx(r,{to:"/services",children:"Renovation"})]}),e.jsxs("div",{className:"rk-footer-col",children:[e.jsx("h4",{children:"Contact"}),e.jsx("a",{href:"mailto:hello@aurainteriors.in",children:"hello@aurainteriors.in"}),e.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"}),e.jsx("span",{style:{display:"block",fontSize:13.5,color:"#444",padding:"4px 0"},children:"Jubilee Hills, Hyderabad"})]}),e.jsxs("div",{className:"rk-footer-bottom",children:[e.jsxs("span",{children:["© ",new Date().getFullYear()," Aura Interiors. All rights reserved."]}),e.jsx("span",{children:"Designed with precision."})]})]})}function d({to:t,children:o}){return e.jsxs(r,{to:t,className:"rk-cta",children:[e.jsx("span",{children:o}),e.jsx("span",{className:"arr",children:"↗"})]})}function c(){i.useEffect(()=>{const t=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".rk-fade-in").forEach(o=>t.observe(o)),()=>t.disconnect()},[])}export{d as C,p as S,c as u};
