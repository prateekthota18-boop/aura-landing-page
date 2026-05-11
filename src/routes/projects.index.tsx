import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, useFadeIn } from "@/components/SiteLayout";
import { PROJECTS } from "@/lib/projects-data";
import type { Project } from "@/lib/projects-data";
import { useState } from "react";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndexPage,
  head: () => ({
    meta: [
      { title: "Projects — Aura Interiors" },
      { name: "description", content: "Explore our portfolio of refined residential, commercial and turnkey interior projects in Hyderabad." },
    ],
  }),
});

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "Retail"];

function ProjectsIndexPage() {
  useFadeIn();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <SiteLayout>
      <section className="rk-page">
        <div className="rk-eyebrow">Our portfolio</div>
        <h1 className="rk-h1">PROJECTS</h1>
        <p className="rk-lede">
          A curated collection of our finest work—each project a collaboration between vision, craft, and the people who will live and work within these spaces.
        </p>

        {/* Filter Bar */}
        <div className="rk-fade-in" style={{
          display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap"
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
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
                transition: "all .25s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 18,
        }}>
          {filtered.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isLarge = index % 5 === 0;

  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.id }}
      className="rk-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        height: isLarge ? 520 : 380,
        background: "#000",
        cursor: "pointer",
      }}
    >
      <img
        src={project.img}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .7s ease",
          transform: isHovered ? "scale(1.06)" : "scale(1)",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isHovered
            ? "linear-gradient(transparent 30%, rgba(0,0,0,.8))"
            : "linear-gradient(transparent 50%, rgba(0,0,0,.65))",
          transition: "background .4s ease",
        }}
      />
      {/* Category Badge */}
      <div style={{
        position: "absolute", top: 20, left: 20,
        padding: "6px 14px",
        background: "rgba(255,255,255,.12)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        fontSize: 10,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>
        {project.category}
      </div>
      {/* Info */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "24px",
        color: "#fff",
        transform: isHovered ? "translateY(0)" : "translateY(8px)",
        transition: "transform .4s ease",
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isLarge ? 32 : 26,
          letterSpacing: ".02em",
          lineHeight: 1.1,
          marginBottom: 8,
        }}>
          {project.title}
        </div>
        <div style={{
          display: "flex", gap: 18, alignItems: "center",
          fontSize: 12, color: "rgba(255,255,255,.7)",
          letterSpacing: ".06em",
        }}>
          <span>{project.location.split(",")[0]}</span>
          <span>·</span>
          <span>{project.area}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <div style={{
          marginTop: 16,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(10px)",
          transition: "all .35s ease .1s",
          fontSize: 13,
          color: "rgba(255,255,255,.85)",
          lineHeight: 1.5,
          maxHeight: isHovered ? 60 : 0,
          overflow: "hidden",
        }}>
          {project.brief.substring(0, 120)}...
        </div>
        <div style={{
          marginTop: 12,
          opacity: isHovered ? 1 : 0,
          transition: "opacity .3s ease .15s",
          display: "inline-flex", alignItems: "center", gap: 6,
          fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
          color: "#C8A96E", fontWeight: 600,
        }}>
          View Case Study <span>↗</span>
        </div>
      </div>
    </Link>
  );
}
