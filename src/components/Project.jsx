import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "origino",
    title: "Origino",
    subtitle: "Enterprise E-commerce Platform",
    accent: "#7C6FFF",
    glow: "rgba(124,111,255,0.18)",
    tag: "Enterprise",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    description: "Contributed to an enterprise-grade e-commerce platform with a full-featured storefront and a dedicated admin dashboard for inventory, orders, and analytics management.",
    achievements: [
      "Built and integrated scalable product catalogue and checkout flows",
      "Developed admin panel with real-time order tracking and analytics",
      "Implemented role-based access control for admin operations",
      "Optimised API performance for high-traffic enterprise usage",
    ],
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Admin Dashboard"],
    links: [
      { label: "Live Store", href: "https://origino.shop/", icon: "store" },
      { label: "Admin Panel", href: "https://admin.origino.shop/", icon: "admin" },
    ],
  },
  {
    id: "web3google",
    title: "Web3 Google",
    subtitle: "Custom Search Engine",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.15)",
    tag: "Search",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    description: "Built a search engine from scratch — primary contribution was designing and implementing a custom ranking algorithm using open-source datasets, with web scraping for data collection.",
    achievements: [
      "Designed and implemented a custom PageRank-style ranking algorithm",
      "Built data collection pipeline with web scraping + open-source datasets",
      "Published an npm package (@ervarunsharma/websee) used by the engine",
      "Deployed full search UI on Netlify with real-time result rendering",
    ],
    stack: ["React", "JavaScript", "Web Scraping", "Ranking Algorithm", "npm Package"],
    links: [
      { label: "Live Search", href: "https://web3google.netlify.app/", icon: "live" },
      { label: "npm Package", href: "https://www.npmjs.com/package/@ervarunsharma/webseee", icon: "npm" },
    ],
  },
  // {
  //   id: "weather",
  //   title: "Weather App",
  //   subtitle: "Real-time Weather Dashboard",
  //   accent: "#34D399",
  //   glow: "rgba(52,211,153,0.15)",
  //   tag: "Frontend",
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
  //     </svg>
  //   ),
  //   description: "Dynamic weather app with real-time data via RapidAPI — shows temperature, humidity, wind speed, hourly and daily forecasts with dynamic icons and unit customisation.",
  //   achievements: [
  //     "Real-time data: temperature, humidity, wind speed via RapidAPI",
  //     "Hourly & daily forecast views with dynamic weather icons",
  //     "Celsius / Fahrenheit toggle with local storage persistence",
  //     "Fully responsive layout built with Bootstrap",
  //   ],
  //   stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "RapidAPI"],
  //   links: [
  //     { label: "Live Demo", href: "https://weathervarun.netlify.app/", icon: "live" },
  //     { label: "GitHub", href: "https://github.com/VarunSharma3520/weather", icon: "github" },
  //   ],
  // },
  // {
  //   id: "googleclone",
  //   title: "Google Clone",
  //   subtitle: "Search UI Replica",
  //   accent: "#FBBF24",
  //   glow: "rgba(251,191,36,0.15)",
  //   tag: "React",
  //   icon: (
  //     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  //       <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  //     </svg>
  //   ),
  //   description: "Pixel-accurate Google UI clone built with React, integrating the Google Custom Search API with full state management and real-time results.",
  //   achievements: [
  //     "Pixel-accurate Google UI recreation in React",
  //     "Google Custom Search API integration with live results",
  //     "State management with React hooks",
  //     "Deployed on Netlify with CI/CD",
  //   ],
  //   stack: ["React", "JavaScript", "CSS", "Google Search API", "Netlify"],
  //   links: [
  //     { label: "Live Demo", href: "https://web3google.netlify.app/", icon: "live" },
  //     { label: "GitHub", href: "https://github.com/VarunSharma3520/GoogleClone", icon: "github" },
  //   ],
  // },
];

/* ─────────────────────────────────────────────
   LINK BUTTON
───────────────────────────────────────────── */
function LinkBtn({ href, label, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 12, padding: "6px 13px", borderRadius: 100,
        background: `${accent}18`,
        border: `1px solid ${accent}40`,
        color: accent,
        textDecoration: "none", fontWeight: 500,
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = `${accent}30`; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${accent}18`; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      {label}
    </a>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
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
          border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 20,
          padding: "26px 24px",
          position: "relative",
          overflow: "hidden",
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ${index * 0.12}s ease,
                       transform 0.6s ${index * 0.12}s ease,
                       border-color 0.3s, box-shadow 0.35s`,
          boxShadow: hovered ? `0 20px 50px ${project.glow}` : "none",
          cursor: "default",
        }}
      >
        {/* corner glow */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 180, height: 180, borderRadius: "50%",
          background: project.glow, filter: "blur(45px)",
          opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        {/* ── HEADER ── */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: `${project.accent}18`,
            border: `1px solid ${project.accent}35`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: project.accent,
            transform: hovered ? "rotate(-6deg) scale(1.1)" : "rotate(0) scale(1)",
            transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
            marginTop: 2,
          }}>
            {project.icon}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 16, fontWeight: 700,
                color: "#f0eeff", letterSpacing: "-0.01em",
              }}>
                {project.title}
              </span>
              <span style={{
                fontSize: 10, padding: "3px 8px", borderRadius: 100,
                background: `${project.accent}22`,
                border: `1px solid ${project.accent}40`,
                color: project.accent, fontWeight: 500,
              }}>
                {project.tag}
              </span>
            </div>
            <div style={{ fontSize: 13, color: "#7a78a0", marginTop: 2 }}>
              {project.subtitle}
            </div>
          </div>
        </div>

        {/* accent divider */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${project.accent}60, transparent)`,
          margin: "16px 0", borderRadius: 1,
        }} />

        {/* description */}
        <p style={{
          fontSize: 13, color: "#9997bb", lineHeight: 1.7,
          marginBottom: 16,
        }}>
          {project.description}
        </p>

        {/* achievements */}
        <div style={{ marginBottom: 18 }}>
          {project.achievements.map((a, i) => (
            <div key={i} style={{
              display: "flex", gap: 9, marginBottom: 8, alignItems: "flex-start",
            }}>
              <span style={{
                flexShrink: 0, marginTop: 5,
                width: 5, height: 5, borderRadius: "50%",
                background: project.accent,
                boxShadow: `0 0 6px ${project.accent}`,
                display: "inline-block",
              }} />
              <span style={{ fontSize: 13, color: "#c9c7e8", lineHeight: 1.65 }}>{a}</span>
            </div>
          ))}
        </div>

        {/* stack pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
          {project.stack.map((s) => (
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

        {/* link buttons */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.links.map((lnk) => (
            <LinkBtn key={lnk.href} href={lnk.href} label={lnk.label} accent={project.accent} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
const Project = () => {
  return (
    <div className="Project">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes projShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .proj-banner.card {
          background: #111118 !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 20px !important;
        }
        .proj-banner .card-title {
          font-family: 'Syne', sans-serif !important;
          font-weight: 800 !important;
          letter-spacing: -0.03em !important;
          background: linear-gradient(90deg, #7C6FFF, #38BDF8, #34D399, #FBBF24);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: projShimmer 4s linear infinite;
        }
      `}</style>

      <Navbar />

      {/* banner — identical structure to Skills & Experience pages */}
      <div className="proj-banner banner-card card my-5 pt-3 container">
        <div className="card-body">
          <h1 className="card-title fs-1 text-center">Projects</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
