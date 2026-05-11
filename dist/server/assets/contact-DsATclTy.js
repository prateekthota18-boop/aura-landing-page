import { r as reactExports, V as jsxRuntimeExports } from "./server-V38PSzxu.js";
import { S as SiteLayout } from "./SiteLayout-CYVjkX4y.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BOnm97EV.js";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rk-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rk-eyebrow", children: "Say hello" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "rk-h1", children: "CONTACT" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rk-lede", children: "Tell us a little about your space and what you're hoping to create. We'll get back to you within two working days." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-split", style: {
      alignItems: "flex-start"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rk-form", onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Your name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "full", placeholder: "Phone (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "full", placeholder: "Project location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "full", placeholder: "Tell us about your project", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "rk-cta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sent ? "Message Sent" : "Send Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arr", children: "↗" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-info-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "val", children: "Jubilee Hills, Hyderabad, India" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-info-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "val", children: "hello@aurainteriors.in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-info-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "val", children: "+91 98765 43210" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rk-info-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "val", children: "Mon–Sat, 10:00 – 19:00" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
