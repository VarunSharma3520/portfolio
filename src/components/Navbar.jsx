import React, { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Skills",      to: "/Skill"     },
  { label: "Projects",    to: "/Project"   },
  { label: "Experience",  to: "/Exp"       },
  { label: "Education",   to: "/Education" },
];

const SOCIAL_LINKS = [
  {
    icon: <SiGmail size={16} />,
    href: "mailto:sv279508@gmail.com",
    label: "Email",
    title: "sv279508@gmail.com",
  },
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/VarunSharma3520/",
    label: "GitHub",
    title: "GitHub",
    external: true,
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://www.linkedin.com/in/varun3520",
    label: "LinkedIn",
    title: "LinkedIn",
    external: true,
  },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  const isActive = (to) =>
    location.pathname === to || location.pathname.startsWith(to + "#");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

        .vs-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;
        }
        .vs-nav.scrolled {
          background: rgba(10,10,16,0.85) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .vs-nav.top {
          background: rgba(10,10,16,0.6) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .vs-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .vs-brand-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,111,255,0.5);
          overflow: hidden;
          flex-shrink: 0;
        }
        .vs-brand-avatar img {
          width: 100%; height: 100%; object-fit: cover;
        }
        .vs-brand-text {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #f0eeff;
        }
        .vs-brand-text span {
          color: #7C6FFF;
        }

        .vs-nav-link {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          color: #7a78a0 !important;
          text-decoration: none;
          padding: 6px 0 !important;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .vs-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1.5px;
          background: #7C6FFF;
          border-radius: 100px;
          transition: width 0.25s ease;
        }
        .vs-nav-link:hover {
          color: #f0eeff !important;
        }
        .vs-nav-link:hover::after,
        .vs-nav-link.active::after {
          width: 100%;
        }
        .vs-nav-link.active {
          color: #f0eeff !important;
        }

        .vs-social-btn {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          color: #7a78a0;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .vs-social-btn:hover {
          background: rgba(124,111,255,0.15);
          border-color: rgba(124,111,255,0.4);
          color: #7C6FFF;
          transform: translateY(-2px);
        }

        /* hamburger */
        .vs-hamburger {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-direction: column; gap: 5px;
          transition: background 0.2s;
        }
        .vs-hamburger:hover { background: rgba(255,255,255,0.08); }
        .vs-hamburger span {
          display: block;
          width: 18px; height: 1.5px;
          background: #c9c7e8;
          border-radius: 100px;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
        }
        .vs-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .vs-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .vs-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* mobile drawer */
        .vs-mobile-drawer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(.22,1,.36,1), opacity 0.3s;
          opacity: 0;
          background: rgba(10,10,16,0.97);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .vs-mobile-drawer.open {
          max-height: 400px;
          opacity: 1;
        }
        .vs-mobile-link {
          display: flex;
          align-items: center;
          padding: 13px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #7a78a0;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
          gap: 10px;
        }
        .vs-mobile-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #7a78a0;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .vs-mobile-link:hover,
        .vs-mobile-link.active {
          color: #f0eeff;
          background: rgba(124,111,255,0.06);
          padding-left: 26px;
        }
        .vs-mobile-link:hover::before,
        .vs-mobile-link.active::before {
          background: #7C6FFF;
        }
      `}</style>

      <div className={`vs-nav ${scrolled ? "scrolled" : "top"}`}>
        {/* ── MAIN BAR ── */}
        <div style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}>

          {/* brand */}
          <Link className="vs-brand" to="/">
            <div className="vs-brand-avatar">
              <img
                src="https://res.cloudinary.com/dlfuvp7oc/image/upload/v1705546638/djsieqzgrp4irrfphs0l.png"
                alt="VS Logo"
              />
            </div>
            <span className="vs-brand-text">V<span>S</span></span>
          </Link>

          {/* desktop nav links */}
          <ul style={{
            display: "flex", alignItems: "center", gap: 28,
            listStyle: "none", margin: 0, padding: 0,
          }} className="d-none d-lg-flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  className={`vs-nav-link ${isActive(l.to) ? "active" : ""}`}
                  to={l.to}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* right side — socials + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* social icons — always visible */}
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                className="vs-social-btn"
                href={s.href}
                title={s.title}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {s.icon}
              </a>
            ))}

            {/* hamburger — mobile only */}
            <button
              className={`vs-hamburger d-lg-none ${open ? "open" : ""}`}
              onClick={() => setOpen((p) => !p)}
              aria-label="Toggle menu"
              style={{ marginLeft: 4 }}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        <div className={`vs-mobile-drawer d-lg-none ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              className={`vs-mobile-link ${isActive(l.to) ? "active" : ""}`}
              to={l.to}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
