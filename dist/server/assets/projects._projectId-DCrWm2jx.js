import { r as reactExports, V as jsxRuntimeExports } from "./server-V38PSzxu.js";
import { R as Route, P as PROJECTS, L as Link } from "./router-BOnm97EV.js";
import { u as useFadeIn, S as SiteLayout, C as CTAButton } from "./SiteLayout-CYVjkX4y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProjectDetailPage() {
  const {
    projectId
  } = Route.useParams();
  const project = PROJECTS.find((p) => p.id === projectId);
  const [activeImage, setActiveImage] = reactExports.useState(0);
  const [lightboxOpen, setLightboxOpen] = reactExports.useState(false);
  useFadeIn();
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-page", style: {
      textAlign: "center",
      padding: "120px 36px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "rk-h1", children: "PROJECT NOT FOUND" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rk-lede", style: {
        margin: "0 auto"
      }, children: "The project you're looking for doesn't exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { to: "/projects", children: "Back to Projects" })
    ] }) });
  }
  const currentIdx = PROJECTS.findIndex((p) => p.id === projectId);
  const prevProject = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null;
  const nextProject = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      position: "relative",
      height: "60vh",
      minHeight: 400,
      overflow: "hidden",
      marginTop: 14,
      background: "#000"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.img, alt: project.title, style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.7
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(transparent 20%, rgba(0,0,0,.7))"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
        position: "absolute",
        bottom: 48,
        left: 48,
        right: 48,
        color: "#fff",
        zIndex: 2
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 10,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "#C8A96E",
          fontWeight: 600,
          marginBottom: 12
        }, children: "Case Study" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(40px, 7vw, 90px)",
          lineHeight: 0.95,
          marginBottom: 14
        }, children: project.title.toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 28,
          fontSize: 13,
          color: "rgba(255,255,255,.75)",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#fff"
            }, children: "Location:" }),
            " ",
            project.location
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#fff"
            }, children: "Area:" }),
            " ",
            project.area
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#fff"
            }, children: "Year:" }),
            " ",
            project.year
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
              color: "#fff"
            }, children: "Duration:" }),
            " ",
            project.duration
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "64px 48px 40px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        marginBottom: 64
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: 14
          }, children: "The Brief" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 16,
            lineHeight: 1.7,
            color: "#333"
          }, children: project.brief })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: 14
          }, children: "The Challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 16,
            lineHeight: 1.7,
            color: "#333"
          }, children: project.challenge })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-fade-in", style: {
        background: "#fff",
        padding: "48px",
        marginBottom: 64
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 36,
        alignItems: "start"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 80,
          color: "#C8A96E",
          lineHeight: 1
        }, children: "※" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: 14
          }, children: "Our Solution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: 16,
            lineHeight: 1.7,
            color: "#333",
            maxWidth: 720
          }, children: project.solution })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", style: {
        padding: "36px 48px",
        borderLeft: "3px solid #C8A96E",
        marginBottom: 64
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 11,
          letterSpacing: ".28em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: 14
        }, children: "The Result" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: 18,
          lineHeight: 1.65,
          color: "#222",
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic"
        }, children: project.result })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: {
      padding: "0 48px 64px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 11,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "#888",
        marginBottom: 24
      }, children: "Project Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        width: "100%",
        height: 500,
        overflow: "hidden",
        marginBottom: 14,
        cursor: "pointer",
        position: "relative"
      }, onClick: () => setLightboxOpen(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.gallery[activeImage], alt: `${project.title} gallery ${activeImage + 1}`, style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .5s ease"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          bottom: 16,
          right: 16,
          padding: "8px 16px",
          background: "rgba(0,0,0,.5)",
          color: "#fff",
          fontSize: 11,
          letterSpacing: ".1em",
          backdropFilter: "blur(4px)"
        }, children: "Click to expand" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        gap: 10,
        overflowX: "auto",
        paddingBottom: 8
      }, children: project.gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setActiveImage(i), style: {
        width: 120,
        height: 80,
        flexShrink: 0,
        overflow: "hidden",
        cursor: "pointer",
        border: activeImage === i ? "2px solid #C8A96E" : "2px solid transparent",
        opacity: activeImage === i ? 1 : 0.6,
        transition: "all .25s ease"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `Thumb ${i + 1}`, style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      } }) }, i)) })
    ] }) }),
    lightboxOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setLightboxOpen(false), style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(0,0,0,.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "zoom-out",
      padding: 40,
      animation: "lbFadeIn .3s ease"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
        __html: `
            @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
          `
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.gallery[activeImage], alt: project.title, style: {
        maxWidth: "90vw",
        maxHeight: "85vh",
        objectFit: "contain",
        boxShadow: "0 0 80px rgba(0,0,0,.5)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        top: 24,
        right: 32,
        color: "#fff",
        fontSize: 28,
        cursor: "pointer",
        fontWeight: 300,
        fontFamily: "'DM Sans', sans-serif"
      }, children: "✕" }),
      project.gallery.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => {
          e.stopPropagation();
          setActiveImage((prev) => prev > 0 ? prev - 1 : project.gallery.length - 1);
        }, style: {
          position: "absolute",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#fff",
          fontSize: 36,
          cursor: "pointer",
          padding: "16px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300
        }, children: "‹" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => {
          e.stopPropagation();
          setActiveImage((prev) => prev < project.gallery.length - 1 ? prev + 1 : 0);
        }, style: {
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#fff",
          fontSize: 36,
          cursor: "pointer",
          padding: "16px",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300
        }, children: "›" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      padding: "0 48px 80px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }, children: [
      prevProject ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$projectId", params: {
        projectId: prevProject.id
      }, className: "rk-fade-in", style: {
        display: "block",
        padding: "28px 32px",
        background: "#fff",
        transition: "transform .25s ease, box-shadow .25s ease"
      }, onMouseOver: (e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
      }, onMouseOut: (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 10,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: 8
        }, children: "← Previous Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 24,
          letterSpacing: ".02em"
        }, children: prevProject.title.toUpperCase() })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      nextProject ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$projectId", params: {
        projectId: nextProject.id
      }, className: "rk-fade-in", style: {
        display: "block",
        padding: "28px 32px",
        background: "#fff",
        textAlign: "right",
        transition: "transform .25s ease, box-shadow .25s ease"
      }, onMouseOver: (e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
      }, onMouseOut: (e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontSize: 10,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: 8
        }, children: "Next Project →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 24,
          letterSpacing: ".02em"
        }, children: nextProject.title.toUpperCase() })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-fade-in", style: {
      padding: "56px 48px 64px",
      textAlign: "center",
      borderTop: "1px solid #e3ddd1"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 11,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "#888",
        marginBottom: 14
      }, children: "Inspired?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(32px, 5vw, 56px)",
        lineHeight: 0.95,
        marginBottom: 20
      }, children: "LET'S CREATE SOMETHING BEAUTIFUL" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { to: "/contact", children: "Start Your Project" })
    ] })
  ] });
}
export {
  ProjectDetailPage as component
};
