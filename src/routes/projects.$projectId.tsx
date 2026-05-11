import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton, useFadeIn } from "@/components/SiteLayout";
import { PROJECTS } from "@/lib/projects-data";
import { useState } from "react";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
  head: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.projectId);
    return {
      meta: [
        { title: `${project?.title ?? "Project"} — Aura Interiors` },
        { name: "description", content: project?.brief ?? "Interior design project by Aura Interiors." },
      ],
    };
  },
});

function ProjectDetailPage() {
  const { projectId } = Route.useParams();
  const project = PROJECTS.find((p) => p.id === projectId);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  useFadeIn();

  if (!project) {
    return (
      <SiteLayout>
        <section className="rk-page" style={{ textAlign: "center", padding: "120px 36px" }}>
          <h1 className="rk-h1">PROJECT NOT FOUND</h1>
          <p className="rk-lede" style={{ margin: "0 auto" }}>
            The project you're looking for doesn't exist.
          </p>
          <CTAButton to="/projects">Back to Projects</CTAButton>
        </section>
      </SiteLayout>
    );
  }

  const currentIdx = PROJECTS.findIndex((p) => p.id === projectId);
  const prevProject = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null;
  const nextProject = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null;

  return (
    <SiteLayout>
      {/* Hero Banner */}
      <section style={{
        position: "relative", height: "60vh", minHeight: 400, overflow: "hidden",
        marginTop: 14, background: "#000"
      }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.7
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 20%, rgba(0,0,0,.7))",
        }} />
        <div className="rk-fade-in" style={{
          position: "absolute", bottom: 48, left: 48, right: 48,
          color: "#fff", zIndex: 2
        }}>
          <div style={{
            fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
            color: "#C8A96E", fontWeight: 600, marginBottom: 12
          }}>
            Case Study
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 7vw, 90px)",
            lineHeight: .95, marginBottom: 14
          }}>
            {project.title.toUpperCase()}
          </h1>
          <div style={{
            display: "flex", gap: 28, fontSize: 13, color: "rgba(255,255,255,.75)",
            flexWrap: "wrap"
          }}>
            <span><strong style={{ color: "#fff" }}>Location:</strong> {project.location}</span>
            <span><strong style={{ color: "#fff" }}>Area:</strong> {project.area}</span>
            <span><strong style={{ color: "#fff" }}>Year:</strong> {project.year}</span>
            <span><strong style={{ color: "#fff" }}>Duration:</strong> {project.duration}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section style={{ padding: "64px 48px 40px" }}>
        <div className="rk-fade-in" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 64,
        }}>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
              color: "#888", marginBottom: 14
            }}>The Brief</div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#333" }}>
              {project.brief}
            </p>
          </div>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
              color: "#888", marginBottom: 14
            }}>The Challenge</div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#333" }}>
              {project.challenge}
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="rk-fade-in" style={{
          background: "#fff", padding: "48px", marginBottom: 64
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "start"
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", fontWeight: 300,
              fontSize: 80, color: "#C8A96E", lineHeight: 1
            }}>
              ※
            </div>
            <div>
              <div style={{
                fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
                color: "#888", marginBottom: 14
              }}>Our Solution</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#333", maxWidth: 720 }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="rk-fade-in" style={{
          padding: "36px 48px", borderLeft: "3px solid #C8A96E", marginBottom: 64
        }}>
          <div style={{
            fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
            color: "#888", marginBottom: 14
          }}>The Result</div>
          <p style={{
            fontSize: 18, lineHeight: 1.65, color: "#222",
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic"
          }}>
            {project.result}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: "0 48px 64px" }}>
        <div className="rk-fade-in">
          <div style={{
            fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
            color: "#888", marginBottom: 24
          }}>Project Gallery</div>

          <div
            style={{
              width: "100%", height: 500, overflow: "hidden", marginBottom: 14,
              cursor: "pointer", position: "relative"
            }}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={project.gallery[activeImage]}
              alt={`${project.title} gallery ${activeImage + 1}`}
              style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform .5s ease"
              }}
            />
            <div style={{
              position: "absolute", bottom: 16, right: 16,
              padding: "8px 16px", background: "rgba(0,0,0,.5)",
              color: "#fff", fontSize: 11, letterSpacing: ".1em",
              backdropFilter: "blur(4px)"
            }}>
              Click to expand
            </div>
          </div>

          <div style={{
            display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8
          }}>
            {project.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                style={{
                  width: 120, height: 80, flexShrink: 0,
                  overflow: "hidden", cursor: "pointer",
                  border: activeImage === i ? "2px solid #C8A96E" : "2px solid transparent",
                  opacity: activeImage === i ? 1 : 0.6,
                  transition: "all .25s ease"
                }}
              >
                <img
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,.92)", display: "flex",
            alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: 40,
            animation: "lbFadeIn .3s ease"
          }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
          `}} />
          <img
            src={project.gallery[activeImage]}
            alt={project.title}
            style={{
              maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain",
              boxShadow: "0 0 80px rgba(0,0,0,.5)"
            }}
          />
          <div style={{
            position: "absolute", top: 24, right: 32,
            color: "#fff", fontSize: 28, cursor: "pointer",
            fontWeight: 300, fontFamily: "'DM Sans', sans-serif"
          }}>
            ✕
          </div>
          {project.gallery.length > 1 && (
            <>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1));
                }}
                style={{
                  position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
                  color: "#fff", fontSize: 36, cursor: "pointer", padding: "16px",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 300
                }}
              >
                ‹
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0));
                }}
                style={{
                  position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
                  color: "#fff", fontSize: 36, cursor: "pointer", padding: "16px",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 300
                }}
              >
                ›
              </div>
            </>
          )}
        </div>
      )}

      {/* Navigation between projects */}
      <section style={{
        padding: "0 48px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      }}>
        {prevProject ? (
          <Link
            to="/projects/$projectId"
            params={{ projectId: prevProject.id }}
            className="rk-fade-in"
            style={{
              display: "block", padding: "28px 32px",
              background: "#fff", transition: "transform .25s ease, box-shadow .25s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
              color: "#888", marginBottom: 8
            }}>← Previous Project</div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: ".02em"
            }}>{prevProject.title.toUpperCase()}</div>
          </Link>
        ) : <div />}
        {nextProject ? (
          <Link
            to="/projects/$projectId"
            params={{ projectId: nextProject.id }}
            className="rk-fade-in"
            style={{
              display: "block", padding: "28px 32px",
              background: "#fff", textAlign: "right",
              transition: "transform .25s ease, box-shadow .25s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{
              fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
              color: "#888", marginBottom: 8
            }}>Next Project →</div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: ".02em"
            }}>{nextProject.title.toUpperCase()}</div>
          </Link>
        ) : <div />}
      </section>

      {/* CTA */}
      <section className="rk-fade-in" style={{
        padding: "56px 48px 64px", textAlign: "center",
        borderTop: "1px solid #e3ddd1"
      }}>
        <div style={{
          fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase",
          color: "#888", marginBottom: 14
        }}>Inspired?</div>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          lineHeight: .95, marginBottom: 20
        }}>LET'S CREATE SOMETHING BEAUTIFUL</h2>
        <CTAButton to="/contact">Start Your Project</CTAButton>
      </section>
    </SiteLayout>
  );
}
