"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeHash, setActiveHash] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "policy", "positions", "apply"];
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Account for the sticky header height (approx 130px) + some buffer
          if (rect.top <= 140) {
            current = section;
          }
        }
      }
      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* Prominent Top Bar */}
      <div
        style={{
          background: "#0d1117",
          padding: "0.75rem 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4"
          style={{ maxWidth: 1200 }}
        >
          {/* Logo in Top Bar as per image (Optional but matches image requested earlier) */}
          <div className="flex items-center gap-2">
            <div style={{ fontSize: "2rem", color: "#f5a623", lineHeight: 1 }}>
              🦅
            </div>
            <div
              style={{
                color: "#f5a623",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: "1px",
              }}
            >
              GO GROUP
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-start gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5a623"
                strokeWidth="2"
                className="mt-0.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.9)" }}>
                  Trụ sở tại:
                </span>{" "}
                Số 45, đường An Dương Vương,
                <br />
                Phường Trường Thi, TP Vinh, Nghệ An.
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f5a623"
                  strokeWidth="2"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>
                    Số điện thoại:
                  </span>{" "}
                  0983439381
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f5a623"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Email:</span>{" "}
                  contact@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="#apply"
              onClick={() => setActiveHash("apply")}
              style={{
                background: "#f5a623",
                color: "#0d1117",
                fontWeight: 700,
                fontSize: "0.875rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(245,166,35,0.25)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              Ứng Tuyển Ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Main header - Reverted to ORIGINAL styling */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a1f3c 0%, #3b4fa8 60%, #5b6ec8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "20%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(245,166,35,0.12)",
            pointerEvents: "none",
          }}
        />

        <div
          className="container mx-auto px-6 flex items-center justify-between py-4"
          style={{ maxWidth: 1200 }}
        >
          {/* Logo Original */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#f5a623" opacity="0.9" />
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="800"
                  fontFamily="system-ui"
                >
                  G
                </text>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                GO GROUP
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Công Nghệ GOG Việt Nam
              </div>
            </div>
          </div>

          {/* Nav Original Styling */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              "Trang Chủ",
              "Giới Thiệu",
              "Chính Sách",
              "Vị Trí Tuyển Dụng",
              "Ứng Tuyển",
            ].map((item, i) => {
              const hash = ["home", "about", "policy", "positions", "apply"][i];
              const isActive = activeHash === hash;
              return (
                <Link
                  key={i}
                  href={`#${hash}`}
                  onClick={() => setActiveHash(hash)}
                  style={{
                    color: isActive ? "#f5a623" : "rgba(255,255,255,0.85)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    padding: "0.5rem 0.875rem",
                    borderRadius: 8,
                    transition: "all 0.2s",
                    borderBottom: isActive
                      ? "2px solid #f5a623"
                      : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#f5a623";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      isActive ? "#f5a623" : "rgba(255,255,255,0.85)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu icon Original */}
          <button
            className="md:hidden"
            style={{
              color: "#fff",
              padding: 8,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
