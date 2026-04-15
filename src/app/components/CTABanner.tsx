"use client";

import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1f3c 0%, #3b4fa8 60%, #5b6ec8 100%)",
        padding: "4.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 200, height: 200,
        borderRadius: "50%",
        background: "rgba(245,166,35,0.1)",
      }} />
      <div style={{
        position: "absolute", bottom: -40, left: "10%",
        width: 120, height: 120,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
      }} />

      <div
        className="container mx-auto px-6 text-center"
        style={{ maxWidth: 1200, position: "relative", zIndex: 1 }}
      >
        <div data-animate="fade-up">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}>
            <div style={{
              width: 40, height: 2,
              background: "rgba(245,166,35,0.6)",
              borderRadius: 2,
            }} />
            <span style={{
              color: "#f5a623",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              Cơ Hội Của Bạn
            </span>
            <div style={{
              width: 40, height: 2,
              background: "rgba(245,166,35,0.6)",
              borderRadius: 2,
            }} />
          </div>

          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}>
            ĐẾN VỚI NHAU LÀ{" "}
            <span style={{ color: "#f5a623" }}>MỘT SỰ KHỞI ĐẦU</span>
          </h2>

          <p style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 2.5rem",
          }}>
            Làm việc cùng là sự tiến bộ, cùng làm việc mọi thứ là sự thành công. Hãy bắt đầu hành trình sự nghiệp ý nghĩa cùng chúng tôi.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link
              href="#positions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.875rem 2.25rem",
                background: "#f5a623",
                color: "#fff",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 6px 20px rgba(245,166,35,0.5)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 30px rgba(245,166,35,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(245,166,35,0.5)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Xem Vị Trí Tuyển Dụng
            </Link>

            <Link
              href="#apply"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.875rem 2.25rem",
                background: "transparent",
                color: "#fff",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: "1rem",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
              }}
            >
              Ứng Tuyển Ngay
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
