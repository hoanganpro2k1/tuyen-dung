"use client";

const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    value: "500+",
    label: "Nhân Viên",
    sub: "Đang làm việc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    value: "5",
    label: "Chi Nhánh",
    sub: "Trên toàn quốc",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    value: "50+",
    label: "Vị Trí Tuyển Dụng",
    sub: "Đang mở tuyển",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    value: "2015",
    label: "Năm Thành Lập",
    sub: "10 năm kinh nghiệm",
  },
];

export default function StatsBar() {
  return (
    <section
      style={{
        background: "#f7f8fc",
        padding: "0 0 4rem",
        marginTop: "-1px",
      }}
    >
      <div
        className="container mx-auto px-6"
        style={{ maxWidth: 1200 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              data-animate="fade-up"
              className={`delay-${(i + 1) * 100}`}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "1.75rem 1.5rem",
                boxShadow: "0 4px 24px rgba(59,79,168,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                border: "1.5px solid rgba(59,79,168,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(59,79,168,0.16)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(59,79,168,0.08)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 56, height: 56,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #3b4fa8, #5b6ec8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(59,79,168,0.3)",
                }}
              >
                {stat.icon}
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                  <span style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#1a1f3c",
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </span>
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "#2d3561", marginTop: "0.25rem" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "#718096", marginTop: "0.125rem" }}>
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
