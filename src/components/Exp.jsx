import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const EXPERIENCES = [
  {
    id: "bala2",
    company: "Bala Aatral Solutions Pvt. Ltd",
    role: "Software Engineer Intern – AI/ML",
    period: "Oct 2025 – Jan 2026",
    location: "Chennai, India",
    accent: "#F472B6",
    glow: "rgba(244,114,182,0.15)",
    tag: "AI / ML",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
      </svg>
    ),
    bullets: [
      { metric: "40%", text: "Built a multi-modal Self-RAG system (Python, LangChain, FastAPI) supporting voice, text, and image inputs, reducing API response time by 40%." },
      { metric: "60%", text: "Automated ETL workflows using Python and REST APIs, reducing engineering effort from 4 hrs to 1.5 hrs — a 60% improvement in pipeline efficiency." },
      { metric: "10K+", text: "Developed CI/CD-integrated image processing pipelines using OpenCV, processing 10K+ images/day for real-time object detection and analysis." },
    ],
    stack: ["Python", "LangChain", "FastAPI", "OpenCV", "CI/CD"],
  },
  {
    id: "repsoft",
    company: "Repsoft Global",
    role: "Software Developer Intern – Full Stack",
    period: "Jun 2025 – Sep 2025",
    location: "Hyderabad, India",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    tag: "Full Stack",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    bullets: [
      { metric: "Agile", text: "Developed client-facing features using React, Node.js, and Express in an Agile (Scrum) environment with bi-weekly sprints and Git-based version control." },
      { metric: "Jest", text: "Designed and documented REST APIs with Express.js; wrote unit tests using Jest, improving code coverage and reducing production bugs." },
      { metric: "SOLID", text: "Optimised frontend modules following SOLID principles and code review best practices, improving component reusability across the codebase." },
    ],
    stack: ["React", "Node.js", "Express", "Jest", "REST APIs", "Git"],
  },
  {
    id: "bala1",
    company: "Bala Aatral Solutions Pvt. Ltd",
    role: "Software Engineer Intern – AR/VR",
    period: "Mar 2025 – May 2025",
    location: "Chennai, India",
    accent: "#34D399",
    glow: "rgba(52,211,153,0.15)",
    tag: "AR / VR",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    bullets: [
      { metric: "76%", text: "Designed interactive 3D training environments (Unity, WebGL) improving user engagement by 76% over static training materials." },
      { metric: "Live", text: "Built real-time simulation workflows with event-driven state updates, enabling live instructor control without session interruption." },
    ],
    stack: ["Unity", "WebGL", "C#", "3D Simulation"],
  },
  {
    id: "iaf",
    company: "Indian Air Force",
    role: "Software Engineer Intern",
    period: "Mar 2024 – Jan 2025",
    location: "Gwalior, India",
    accent: "#FBBF24",
    glow: "rgba(251,191,36,0.15)",
    tag: "Defence",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    bullets: [
      { metric: "46%", text: "Built scalable training management systems (Node.js, MongoDB, REST APIs) for the Indian Air Force, improving training workflow efficiency by 46%." },
      { metric: "Cat A", text: "Received Category A Project Recognition — the highest internal grade — and presented the solution directly to the Defence Minister of India." },
    ],
    stack: ["Node.js", "MongoDB", "REST APIs"],
    badge: "Category A Recognition",
  },
];

/* ─────────────────────────────────────────────
   EXP CARD
───────────────────────────────────────────── */
function ExpCard({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="col-md-6 mb-4">
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "100%",
          background: "#111118",
          border: `1px solid ${hovered ? exp.accent + "55" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 20,
          padding: "26px 24px",
          position: "relative",
          overflow: "hidden",
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ${index * 0.12}s ease,
                       transform 0.6s ${index * 0.12}s ease,
                       border-color 0.3s, box-shadow 0.35s`,
          boxShadow: hovered ? `0 20px 50px ${exp.glow}` : "none",
          cursor: "default",
        }}
      >
        {/* corner glow */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 180, height: 180, borderRadius: "50%",
          background: exp.glow, filter: "blur(45px)",
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        {/* ── HEADER ── */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
          {/* icon */}
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: `${exp.accent}18`,
            border: `1px solid ${exp.accent}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: exp.accent,
            transform: hovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)",
            transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
            marginTop: 2,
          }}>
            {exp.icon}
          </div>

          {/* company + role */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 16, fontWeight: 700,
                color: "#f0eeff", letterSpacing: "-0.01em",
              }}>
                {exp.company}
              </span>
              {exp.badge && (
                <span style={{
                  fontSize: 10, padding: "3px 8px", borderRadius: 100,
                  background: `${exp.accent}22`,
                  border: `1px solid ${exp.accent}40`,
                  color: exp.accent, fontWeight: 500, letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}>
                  {exp.badge}
                </span>
              )}
            </div>
            <div style={{ fontSize: 13, color: exp.accent, marginTop: 2, fontWeight: 500 }}>
              {exp.role}
            </div>
          </div>
        </div>

        {/* period + location */}
        <div style={{
          display: "flex", gap: 16, marginBottom: 16,
          paddingLeft: 54,
        }}>
          <span style={{ fontSize: 12, color: "#7a78a0", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {exp.period}
          </span>
          <span style={{ fontSize: 12, color: "#7a78a0", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {exp.location}
          </span>
        </div>

        {/* accent divider */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${exp.accent}60, transparent)`,
          marginBottom: 16, borderRadius: 1,
        }} />

        {/* bullet points */}
        <div style={{ marginBottom: 18 }}>
          {exp.bullets.map((b, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start",
            }}>
              <span style={{
                flexShrink: 0, marginTop: 1,
                minWidth: 44, height: 20,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.03em",
                background: `${exp.accent}20`,
                border: `1px solid ${exp.accent}35`,
                color: exp.accent,
                borderRadius: 6, padding: "0 6px",
              }}>
                {b.metric}
              </span>
              <span style={{ fontSize: 13, color: "#c9c7e8", lineHeight: 1.65 }}>
                {b.text}
              </span>
            </div>
          ))}
        </div>

        {/* stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {exp.stack.map((s) => (
            <span key={s} style={{
              fontSize: 11, padding: "4px 10px", borderRadius: 100,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c9c7e8",
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Exp = () => {
  return (
    <div className="Exp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        @keyframes expShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .exp-banner.card {
          background: #111118 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 20px !important;
        }
        .exp-banner .card-title {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800 !important;
          letter-spacing: -0.03em !important;
          background: linear-gradient(90deg, #7C6FFF, #38BDF8, #34D399, #FBBF24);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: expShimmer 4s linear infinite;
        }
      `}</style>

      <Navbar />

      {/* banner — same structure as Skill page */}
      <div className="exp-banner banner-card card my-5 pt-3 container">
        <div className="card-body">
          <h1 className="card-title fs-1 text-center">Experience</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {EXPERIENCES.map((exp, i) => (
            <ExpCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;
