"use client";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div
        style={{
          background: "#1a1f3c",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2 text-xs"
          style={{ maxWidth: 1200, color: "rgba(255,255,255,0.75)" }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:hr@gogroup.vn" className="hover:text-white transition-colors">hr@gogroup.vn</a>
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:0387474747" className="hover:text-white transition-colors">0387 474 747</a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Giờ làm việc: T2 - T7 &nbsp;|&nbsp; 8:00 - 17:30</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1f3c 0%, #3b4fa8 60%, #5b6ec8 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-30px", right: "-30px",
          width: 160, height: 160,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20px", left: "20%",
          width: 80, height: 80,
          borderRadius: "50%",
          background: "rgba(245,166,35,0.12)",
          pointerEvents: "none",
        }} />

        <div
          className="container mx-auto px-6 flex items-center justify-between py-4"
          style={{ maxWidth: 1200 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 12,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="#f5a623" opacity="0.9"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
                  fill="white" fontSize="16" fontWeight="800" fontFamily="system-ui">G</text>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                GO GROUP
              </div>
              <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Công Nghệ GOG Việt Nam
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {["Trang Chủ", "Giới Thiệu", "Sứ Mệnh", "Chính Sách", "Vị Trí Tuyển Dụng", "Ứng Tuyển"].map((item, i) => (
              <a
                key={i}
                href={`#${["home", "about", "mission", "policy", "positions", "apply"][i]}`}
                style={{
                  color: i === 0 ? "#f5a623" : "rgba(255,255,255,0.85)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  padding: "0.5rem 0.875rem",
                  borderRadius: 8,
                  transition: "all 0.2s",
                  borderBottom: i === 0 ? "2px solid #f5a623" : "2px solid transparent",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f5a623";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = i === 0 ? "#f5a623" : "rgba(255,255,255,0.85)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu icon */}
          <button className="md:hidden" style={{ color: "#fff", padding: 8, background: "rgba(255,255,255,0.1)", borderRadius: 8, border: "none", cursor: "pointer" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
