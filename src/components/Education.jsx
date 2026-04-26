import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const EDUCATION = [
  {
    id: "secondary",
    level: "Secondary Education",
    grade: "82.8%",
    gradeLabel: "Percentage",
    institution: "S.T. Paul's School",
    location: "Morar, Gwalior",
    meta: [
      { label: "Board", value: "CBSE" },
      { label: "Medium", value: "English" },
    ],
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: "higher",
    level: "Higher Secondary Education",
    grade: "80.2%",
    gradeLabel: "Percentage",
    institution: "S.T. Paul's School",
    location: "Morar, Gwalior",
    meta: [
      { label: "Board", value: "CBSE" },
      { label: "Medium", value: "English" },
    ],
    accent: "#34D399",
    glow: "rgba(52,211,153,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "professional",
    level: "Professional Education",
    grade: "8.18",
    gradeLabel: "CGPA",
    institution: "Madhav Institute of Technology and Science",
    location: "Gwalior",
    meta: [
      { label: "University", value: "Rajiv Gandhi Technological University, Bhopal" },
    ],
    accent: "#7C6FFF",
    glow: "rgba(124,111,255,0.18)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   EDUCATION CARD
───────────────────────────────────────────── */
function EduCard({ edu, index }) {
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
          border: `1px solid ${hovered ? edu.accent + "55" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 20,
          padding: "26px 24px",
          position: "relative",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ${index * 0.12}s ease,
                       transform 0.6s ${index * 0.12}s ease,
                       border-color 0.3s, box-shadow 0.35s`,
          boxShadow: hovered ? `0 20px 50px ${edu.glow}` : "none",
          cursor: "default",
        }}
      >
        {/* corner glow */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 160, height: 160, borderRadius: "50%",
          background: edu.glow, filter: "blur(40px)",
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        {/* ── icon + level ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: `${edu.accent}18`,
            border: `1px solid ${edu.accent}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: edu.accent,
            transform: hovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)",
            transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
          }}>
            {edu.icon}
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 15, fontWeight: 700,
            color: "#f0eeff", letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}>
            {edu.level}
          </span>
        </div>

        {/* accent divider */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${edu.accent}60, transparent)`,
          marginBottom: 20, borderRadius: 1,
        }} />

        {/* ── big grade display ── */}
        <div style={{
          display: "flex", alignItems: "baseline", gap: 8,
          marginBottom: 20,
        }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 38, fontWeight: 800, lineHeight: 1,
            color: edu.accent,
            textShadow: `0 0 30px ${edu.accent}60`,
          }}>
            {edu.grade}
          </span>
          <span style={{ fontSize: 12, color: "#7a78a0", fontWeight: 500 }}>
            {edu.gradeLabel}
          </span>
        </div>

        {/* institution */}
        <div style={{ marginBottom: 4 }}>
          <div style={{ fontSize: 14, color: "#f0eeff", fontWeight: 500 }}>
            {edu.institution}
          </div>
          <div style={{
            fontSize: 12, color: "#7a78a0", marginTop: 3,
            display: "flex", alignItems: "center", gap: 4,
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {edu.location}
          </div>
        </div>

        {/* meta rows */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          {edu.meta.map((m) => (
            <div key={m.label} style={{
              display: "flex", alignItems: "flex-start", gap: 8,
            }}>
              <span style={{
                flexShrink: 0,
                fontSize: 10, padding: "3px 8px", borderRadius: 6,
                background: `${edu.accent}18`,
                border: `1px solid ${edu.accent}30`,
                color: edu.accent, fontWeight: 600,
                letterSpacing: "0.04em", textTransform: "uppercase",
                marginTop: 1,
              }}>
                {m.label}
              </span>
              <span style={{ fontSize: 13, color: "#c9c7e8", lineHeight: 1.5 }}>
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Education = () => {
  const handleResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1BR57zYP8Da2GvDn2bxDPY0Hk8e7YHqaN?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="Education">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes eduShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes eduFadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .edu-banner.card {
          background: #111118 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 20px !important;
        }
        .edu-banner .card-title {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800 !important;
          letter-spacing: -0.03em !important;
          background: linear-gradient(90deg, #38BDF8, #34D399, #7C6FFF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: eduShimmer 4s linear infinite;
        }
        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 100px;
          border: 1px solid rgba(124,111,255,0.45);
          background: rgba(124,111,255,0.12);
          color: #7C6FFF;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .resume-btn:hover {
          background: rgba(124,111,255,0.24);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(124,111,255,0.2);
          color: #7C6FFF;
        }
      `}</style>

      <Navbar />

      {/* banner */}
      <div className="edu-banner banner-card card my-5 pt-3 container">
        <div className="card-body">
          <h1 className="card-title fs-1 text-center">Education</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {EDUCATION.map((edu, i) => (
            <EduCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>

        {/* resume download row */}
        <div
          className="row mt-2 mb-5"
          style={{ animation: "eduFadeUp 0.6s 0.55s ease both", opacity: 0 }}
        >
          <div className="col">
            <div style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 18,
              padding: "22px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div>
                <div style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 15, fontWeight: 700, color: "#f0eeff",
                  marginBottom: 4,
                }}>
                  Want the full picture?
                </div>
                <div style={{ fontSize: 13, color: "#7a78a0" }}>
                  Download my resume for a complete overview of skills, experience and education.
                </div>
              </div>
              <button onClick={handleResume} className="resume-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
