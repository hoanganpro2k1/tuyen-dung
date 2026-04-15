export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        background: "linear-gradient(135deg, #1a1f3c 0%, #2d3561 40%, #3b4fa8 75%, #5b6ec8 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 0 7rem",
        minHeight: "520px",
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: 400, height: 400,
        borderRadius: "50%",
        background: "rgba(245,166,35,0.06)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", left: "-60px",
        width: 300, height: 300,
        borderRadius: "50%",
        background: "rgba(91,110,200,0.15)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "8%",
        width: 120, height: 120,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.04)",
        pointerEvents: "none",
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
        style={{ maxWidth: 1200, position: "relative", zIndex: 1 }}
      >
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <div
            data-animate="fade-left"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(245,166,35,0.15)",
              border: "1px solid rgba(245,166,35,0.3)",
              borderRadius: 50,
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5a623", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#f5a623", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.06em" }}>
              ĐANG TUYỂN DỤNG
            </span>
          </div>

          <h1
            data-animate="fade-left"
            className="delay-100"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "0.5rem",
              letterSpacing: "-0.025em",
            }}
          >
            CÔNG TY<br />
            <span style={{ color: "#f5a623" }}>GO GROUP</span>
          </h1>

          <div
            data-animate="fade-left"
            className="delay-200"
            style={{
              display: "inline-block",
              background: "rgba(59,79,168,0.5)",
              border: "2px solid rgba(91,110,200,0.5)",
              borderRadius: 8,
              padding: "0.5rem 1.5rem",
              marginBottom: "1.5rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ color: "#f5a623", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "0.04em" }}>
              TUYỂN DỤNG NHÂN SỰ
            </span>
          </div>

          <p
            data-animate="fade-left"
            className="delay-300"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.0625rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: 480,
            }}
          >
            Hỗ trợ bởi bộ phận chuyên trách. Cùng chúng tôi xây dựng tương lai nghề nghiệp vững chắc với môi trường làm việc năng động, chuyên nghiệp và thu nhập hấp dẫn.
          </p>

          <div
            data-animate="fade-left"
            className="delay-400 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a href="#positions" className="btn btn-primary" style={{ minWidth: 180 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Xem Vị Trí Tuyển Dụng
            </a>
            <a href="#apply" className="btn btn-outline" style={{ minWidth: 160 }}>
              Ứng Tuyển Ngay
            </a>
          </div>
        </div>

        {/* Right - Hero image/illustration */}
        <div
          data-animate="fade-right"
          className="flex-1 flex justify-center items-center"
          style={{ maxWidth: 480 }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
            {/* Main image card */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.15)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/* Professional team illustration */}
              <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", padding: "1rem" }}>
                {/* Background */}
                <rect width="320" height="240" fill="rgba(59,79,168,0.1)" rx="12"/>
                
                {/* Desk / table */}
                <rect x="30" y="150" width="260" height="10" rx="4" fill="rgba(255,255,255,0.15)"/>
                
                {/* Person 1 - left */}
                <circle cx="85" cy="100" r="28" fill="rgba(91,110,200,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="85" cy="90" r="14" fill="rgba(245,166,35,0.6)"/>
                <path d="M55 148 Q85 125 115 148" stroke="rgba(255,255,255,0.4)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                
                {/* Person 2 - center */}
                <circle cx="160" cy="90" r="30" fill="rgba(59,79,168,0.7)" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"/>
                <circle cx="160" cy="78" r="15" fill="rgba(245,166,35,0.8)"/>
                <path d="M128 148 Q160 122 192 148" stroke="rgba(255,255,255,0.5)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                
                {/* Person 3 - right */}
                <circle cx="235" cy="100" r="28" fill="rgba(91,110,200,0.5)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <circle cx="235" cy="90" r="14" fill="rgba(245,166,35,0.6)"/>
                <path d="M205 148 Q235 125 265 148" stroke="rgba(255,255,255,0.4)" strokeWidth="8" fill="none" strokeLinecap="round"/>
                
                {/* Documents/briefcase symbols */}
                <rect x="70" y="110" width="22" height="16" rx="3" fill="rgba(255,255,255,0.25)"/>
                <rect x="145" y="100" width="26" height="18" rx="3" fill="rgba(245,166,35,0.5)"/>
                <rect x="220" y="110" width="22" height="16" rx="3" fill="rgba(255,255,255,0.25)"/>
                
                {/* Stars / sparkles */}
                <circle cx="50" cy="50" r="4" fill="rgba(245,166,35,0.7)"/>
                <circle cx="270" cy="40" r="3" fill="rgba(245,166,35,0.5)"/>
                <circle cx="300" cy="180" r="5" fill="rgba(91,110,200,0.5)"/>
                
                {/* Text */}
                <text x="160" y="210" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="12" fontFamily="system-ui" fontWeight="600">
                  Đội ngũ chuyên nghiệp
                </text>
              </svg>
            </div>

            {/* Floating badge 1 */}
            <div style={{
              position: "absolute", top: -16, left: -16,
              background: "#fff",
              borderRadius: 12,
              padding: "0.625rem 1rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              display: "flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.8125rem", fontWeight: 700, color: "#1a1f3c",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5a623">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Top Employer 2025
            </div>

            {/* Floating badge 2 */}
            <div style={{
              position: "absolute", bottom: -16, right: -16,
              background: "linear-gradient(135deg, #f5a623, #e09010)",
              borderRadius: 12,
              padding: "0.625rem 1rem",
              boxShadow: "0 8px 24px rgba(245,166,35,0.4)",
              display: "flex", alignItems: "center", gap: "0.5rem",
              color: "#fff", fontSize: "0.8125rem", fontWeight: 700,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
              500+ Nhân Viên
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
          <path d="M0 80L48 66.7C96 53.3 192 26.7 288 20C384 13.3 480 26.7 576 33.3C672 40 768 40 864 36.7C960 33.3 1056 26.7 1152 26.7C1248 26.7 1344 33.3 1392 36.7L1440 40V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#f7f8fc"/>
        </svg>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
