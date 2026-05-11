import { V as jsxRuntimeExports } from "./server-V38PSzxu.js";
import { S as SiteLayout, C as CTAButton } from "./SiteLayout-CYVjkX4y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BOnm97EV.js";
const SERVICES = [{
  n: "01",
  t: "Residential",
  d: "Homes shaped around the way you actually live—warm, considered, and quietly luxurious."
}, {
  n: "02",
  t: "Commercial",
  d: "Workspaces, retail and hospitality interiors that elevate your brand and the people in it."
}, {
  n: "03",
  t: "Turnkey",
  d: "End-to-end execution from concept to handover—design, build, styling, finished and ready."
}, {
  n: "04",
  t: "Renovation",
  d: "Thoughtful transformations of existing spaces with minimal disruption and maximum impact."
}, {
  n: "05",
  t: "Consultation",
  d: "Strategic design guidance for layouts, materials, lighting and furniture selections."
}, {
  n: "06",
  t: "Styling",
  d: "Final-layer styling and art curation that brings every room into sharp focus."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "What we do" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "rk-h1", children: "SERVICES" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rk-lede", children: "A full-service interior design studio offering everything from single-room refreshes to complete turnkey builds across residential and commercial spaces." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-grid3", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: s.d })
      ] })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      marginTop: 56
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CTAButton, { to: "/contact", children: "Start Your Project" }) })
  ] }) });
}
export {
  ServicesPage as component
};
