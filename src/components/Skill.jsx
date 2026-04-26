import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const SKILLS = [
  {
    id: "languages",
    label: "Languages",
    accent: "#7C6FFF",
    glow: "rgba(124,111,255,0.18)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript",        level: 90 },
      { name: "Python",            level: 82 },
      { name: "Go",                level: 78 },
      { name: "Java",              level: 70 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    items: [
      { name: "React",       level: 94 },
      { name: "Next.js",     level: 88 },
      { name: "Tailwind CSS",level: 92 },
      { name: "HTML5/CSS3",  level: 96 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "#34D399",
    glow: "rgba(52,211,153,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3S3 13.66 3 12" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: [
      { name: "Node.js / Express", level: 93 },
      { name: "NestJS",            level: 85 },
      { name: "REST & GraphQL",    level: 90 },
      { name: "FastAPI",           level: 78 },
      { name: "Spring Boot",       level: 68 },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    accent: "#F472B6",
    glow: "rgba(244,114,182,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z" />
      </svg>
    ),
    items: [
      { name: "LangChain",      level: 88 },
      { name: "LangGraph",      level: 83 },
      { name: "RAG / Self-RAG", level: 85 },
      { name: "Hugging Face",   level: 75 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    accent: "#FBBF24",
    glow: "rgba(251,191,36,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M21 12c0 1.66-4 3-9 3S3 13.66 3 12" />
      </svg>
    ),
    items: [
      { name: "MongoDB",    level: 92 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL",      level: 82 },
      { name: "Redis",      level: 80 },
      { name: "Qdrant",     level: 78 },
    ],
  },
  {
    id: "devops",
    label: "DevOps / Cloud",
    accent: "#FB923C",
    glow: "rgba(251,146,60,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
      </svg>
    ),
    items: [
      { name: "AWS",                level: 80 },
      { name: "Docker",             level: 88 },
      { name: "Kubernetes",         level: 75 },
      { name: "GitHub Actions",     level: 85 },
      { name: "Terraform / ArgoCD", level: 70 },
    ],
  },
];

const TOOLS         = ["Git", "GitHub", "Jest", "Postman", "Linux", "npm"];
const METHODOLOGIES = [
  "Agile (Scrum)", "Microservices", "System Design",
  "OOP", "SOLID", "DSA", "Unit Testing", "CI/CD",
];

/* ─────────────────────────────────────────────
   SKILL BAR
───────────────────────────────────────────── */
function SkillBar({ name, level, accent, animate }) {
  return (
    <div style={{ marginBottom: 11 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 13, color: "#c9c7e8" }}>{name}</span>
        <span style={{ fontSize: 11, color: "#7a78a0", fontVariantNumeric: "tabular-nums" }}>
          {level}%
        </span>
      </div>
      <div style={{ height: 3, borderRadius: 100, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          borderRadius: 100,
          background: `linear-gradient(90deg, ${accent}99, ${accent})`,
          width: animate ? `${level}%` : "0%",
          transition: "width 1.1s cubic-bezier(.22,1,.36,1)",
          boxShadow: `0 0 8px ${accent}70`,
        }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SKILL CARD  — sits inside Bootstrap col-md-4
───────────────────────────────────────────── */
function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="col-md-4 mb-4">
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          height: "100%",
          background: "#111118",
          border: `1px solid ${hovered ? skill.accent + "55" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 20,
          padding: "26px 24px",
          position: "relative",
          overflow: "hidden",
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ${index * 0.1}s ease,
                       transform 0.6s ${index * 0.1}s ease,
                       border-color 0.3s,
                       box-shadow 0.35s`,
          boxShadow: hovered ? `0 20px 50px ${skill.glow}` : "none",
          cursor: "default",
        }}
      >
        {/* corner glow */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 160, height: 160, borderRadius: "50%",
          background: skill.glow, filter: "blur(40px)",
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        {/* icon + label */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: `${skill.accent}18`,
            border: `1px solid ${skill.accent}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: skill.accent,
            transform: hovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)",
            transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
          }}>
            {skill.icon}
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 16, fontWeight: 700,
            color: "#f0eeff", letterSpacing: "-0.01em",
          }}>
            {skill.label}
          </span>
        </div>

        {/* accent divider */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${skill.accent}60, transparent)`,
          marginBottom: 16, borderRadius: 1,
        }} />

        {/* bars */}
        {skill.items.map((item) => (
          <SkillBar
            key={item.name}
            name={item.name}
            level={item.level}
            accent={skill.accent}
            animate={visible}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Skill = () => {
  return (
    <div className="Skill">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        @keyframes skillShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes skillFadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Override banner card */
        .skill-banner.card {
          background: #111118 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 20px !important;
        }
        .skill-banner .card-title {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800 !important;
          letter-spacing: -0.03em !important;
          background: linear-gradient(90deg, #7C6FFF, #38BDF8, #34D399, #F472B6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: skillShimmer 4s linear infinite;
        }

        .skill-pill {
          display: inline-block;
          font-size: 12px; padding: 5px 13px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          color: #c9c7e8;
          background: rgba(255,255,255,0.04);
          transition: background 0.2s, transform 0.2s, border-color 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-2px);
        }

        .method-pill {
          display: inline-block;
          font-size: 13px; padding: 6px 15px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          color: #c9c7e8;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .method-pill:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── NAVBAR (unchanged) ── */}
      <Navbar />

      {/* ── BANNER (same structure, dark-themed via CSS override) ── */}
      <div className="skill-banner banner-card card my-5 pt-3 container">
        <div className="card-body">
          <h1 className="card-title fs-1 text-center">Skills</h1>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="container">
        <div className="row">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>

        {/* ── TOOLS ── */}
        <div
          className="row mt-2 mb-3"
          style={{ animation: "skillFadeUp 0.6s 0.8s ease both", opacity: 0 }}
        >
          <div className="col">
            <div style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18, padding: "22px 26px",
            }}>
              <div style={{
                fontSize: 11, fontWeight: 500, letterSpacing: "0.13em",
                textTransform: "uppercase", color: "#7a78a0", marginBottom: 12,
              }}>
                Tools
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TOOLS.map((t) => <span key={t} className="skill-pill">{t}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* ── METHODOLOGIES ── */}
        <div
          className="row mb-5"
          style={{ animation: "skillFadeUp 0.6s 1.0s ease both", opacity: 0 }}
        >
          <div className="col">
            <div style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18, padding: "22px 26px",
              display: "flex", alignItems: "center",
              gap: 20, flexWrap: "wrap",
            }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 14, fontWeight: 700,
                color: "#7a78a0", flexShrink: 0, whiteSpace: "nowrap",
              }}>
                Methodologies
              </span>
              <div style={{
                width: 1, height: 30,
                background: "rgba(255,255,255,0.08)", flexShrink: 0,
              }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {METHODOLOGIES.map((m) => <span key={m} className="method-pill">{m}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
