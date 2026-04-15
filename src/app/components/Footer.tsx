"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a1f3c 0%, #0f1226 100%)",
        color: "#fff",
        padding: "4rem 0 0",
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div
          className="flex flex-col lg:flex-row gap-10"
          data-animate="fade-up"
        >
          {/* Brand column */}
          <div style={{ flex: 1.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: 12,
                background: "rgba(245,166,35,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid rgba(245,166,35,0.3)",
                fontSize: "1.5rem",
              }}>
                🦅
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>GO GROUP</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Công Nghệ GOG Việt Nam
                </div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 340, marginBottom: "1.5rem" }}>
              Công ty Cổ phần Công Nghệ GOG Việt Nam - đơn vị hàng đầu trong lĩnh vực tuyển dụng và phát triển nhân lực chất lượng cao.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { label: "Facebook", icon: "f", href: "#", color: "#1877f2" },
                { label: "LinkedIn", icon: "in", href: "#", color: "#0a66c2" },
                { label: "Zalo", icon: "Z", href: "#", color: "#0068ff" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  style={{
                    width: 38, height: 38,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    transition: "all 0.2s ease",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = social.color;
                    (e.currentTarget as HTMLElement).style.borderColor = social.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "#f5a623" }}>
              Điều Hướng
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none" }}>
              {[
                { label: "Trang Chủ", href: "#home" },
                { label: "Giới Thiệu", href: "#about" },
                { label: "Sứ Mệnh & Tầm Nhìn", href: "#mission" },
                { label: "Chính Sách Nhân Sự", href: "#policy" },
                { label: "Vị Trí Tuyển Dụng", href: "#positions" },
                { label: "Ứng Tuyển Online", href: "#apply" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: 1 }}>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", color: "#f5a623" }}>
              Liên Hệ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                  text: "Số 123 Đường Lê Lợi, Q.1, TP.HCM",
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
                  text: "0387 474 747",
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
                  text: "hr@gogroup.vn",
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
                  text: "www.gogroup.vn",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ color: "#f5a623", marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: "3rem",
          padding: "1.5rem 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.8125rem",
          color: "rgba(255,255,255,0.4)",
        }}>
          <span>© {currentYear} GO GROUP - Công Ty Cổ Phần Công Nghệ GOG Việt Nam. Bảo lưu mọi quyền.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
               onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
               onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}>
              Chính Sách Bảo Mật
            </a>
            <a href="#" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
               onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
               onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}>
              Điều Khoản Sử Dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
