import { r as reactExports, V as jsxRuntimeExports } from "./server-V38PSzxu.js";
import { P as PROJECTS, L as Link } from "./router-BOnm97EV.js";
import { u as useFadeIn, S as SiteLayout } from "./SiteLayout-CYVjkX4y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "Retail"];
function ProjectsIndexPage() {
  useFadeIn();
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "Our portfolio" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "rk-h1", children: "PROJECTS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rk-lede", children: "A curated collection of our finest work—each project a collaboration between vision, craft, and the people who will live and work within these spaces." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-fade-in", style: {
      display: "flex",
      gap: 8,
      marginBottom: 36,
      flexWrap: "wrap"
    }, children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveFilter(cat), style: {
      padding: "10px 20px",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      border: activeFilter === cat ? "none" : "1px solid #ccc",
      background: activeFilter === cat ? "#0D0D0D" : "transparent",
      color: activeFilter === cat ? "#fff" : "#555",
      cursor: "pointer",
      fontFamily: "'DM Sans', sans-serif",
      transition: "all .25s ease"
    }, children: cat }, cat)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
      gap: 18
    }, children: filtered.map((project, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project, index: idx }, project.id)) })
  ] }) });
}
function ProjectCard({
  project,
  index
}) {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const isLarge = index % 5 === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$projectId", params: {
    projectId: project.id
  }, className: "rk-fade-in", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), style: {
    display: "block",
    position: "relative",
    overflow: "hidden",
    height: isLarge ? 520 : 380,
    background: "#000",
    cursor: "pointer"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.img, alt: project.title, style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .7s ease",
      transform: isHovered ? "scale(1.06)" : "scale(1)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      inset: 0,
      background: isHovered ? "linear-gradient(transparent 30%, rgba(0,0,0,.8))" : "linear-gradient(transparent 50%, rgba(0,0,0,.65))",
      transition: "background .4s ease"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      top: 20,
      left: 20,
      padding: "6px 14px",
      background: "rgba(255,255,255,.12)",
      backdropFilter: "blur(8px)",
      color: "#fff",
      fontSize: 10,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      fontWeight: 500
    }, children: project.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "24px",
      color: "#fff",
      transform: isHovered ? "translateY(0)" : "translateY(8px)",
      transition: "transform .4s ease"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isLarge ? 32 : 26,
        letterSpacing: ".02em",
        lineHeight: 1.1,
        marginBottom: 8
      }, children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 18,
        alignItems: "center",
        fontSize: 12,
        color: "rgba(255,255,255,.7)",
        letterSpacing: ".06em"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.location.split(",")[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: project.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 16,
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? "translateY(0)" : "translateY(10px)",
        transition: "all .35s ease .1s",
        fontSize: 13,
        color: "rgba(255,255,255,.85)",
        lineHeight: 1.5,
        maxHeight: isHovered ? 60 : 0,
        overflow: "hidden"
      }, children: [
        project.brief.substring(0, 120),
        "..."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 12,
        opacity: isHovered ? 1 : 0,
        transition: "opacity .3s ease .15s",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: "#C8A96E",
        fontWeight: 600
      }, children: [
        "View Case Study ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↗" })
      ] })
    ] })
  ] });
}
export {
  ProjectsIndexPage as component
};
