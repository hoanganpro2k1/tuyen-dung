"use client";

const galleryImages = [
  { label: "Văn Phòng & Môi Trường", emoji: "🏢", color: "#3b4fa8" },
  { label: "Lãnh Đạo & Quản Lý", emoji: "👔", color: "#2d3561" },
  { label: "Team Building", emoji: "🤝", color: "#5b6ec8" },
  { label: "Đào Tạo & Phát Triển", emoji: "📚", color: "#f5a623" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ background: "#fff", padding: "5rem 0" }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1200 }}>
        <div
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left: Gallery grid */}
          <div
            data-animate="fade-left"
            className="flex-1"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              maxWidth: 520,
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${img.color}dd, ${img.color}88)`,
                  borderRadius: 14,
                  aspectRatio: "4/3",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  border: "2px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{img.emoji}</div>
                <span style={{
                  color: "#fff", fontSize: "0.8rem", fontWeight: 600,
                  textAlign: "center", padding: "0 0.75rem",
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}>
                  {img.label}
                </span>

                {/* Overlay gradient */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "50%",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.2))",
                  pointerEvents: "none",
                }} />
              </div>
            ))}
          </div>

          {/* Right: Mission & Vision */}
          <div className="flex-1">
            <div data-animate="fade-right">
              <span style={{
                color: "#f5a623", fontWeight: 700, fontSize: "0.875rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                Về Chúng Tôi
              </span>

              <h2 id="mission" style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "#1a1f3c",
                marginTop: "0.5rem",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
              }}>
                SỨ MỆNH &{" "}
                <span style={{ color: "#3b4fa8" }}>TẦM NHÌN</span>
              </h2>

              <div style={{
                width: 60, height: 4,
                background: "linear-gradient(90deg, #f5a623, transparent)",
                borderRadius: 2,
                marginBottom: "1.75rem",
              }} />
            </div>

            {/* Mission */}
            <div
              data-animate="fade-right"
              className="delay-100"
              style={{
                background: "linear-gradient(135deg, #f7f8fc, #eef0f8)",
                borderRadius: 16,
                padding: "1.75rem",
                marginBottom: "1.25rem",
                borderLeft: "4px solid #3b4fa8",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 80, height: 80,
                background: "rgba(59,79,168,0.06)",
                borderRadius: "0 0 0 80px",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  background: "#3b4fa8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#1a1f3c" }}>Sứ Mệnh</h3>
              </div>
              <p style={{ color: "#4a5568", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Cung cấp giải pháp công nghệ toàn diện, kết nối doanh nghiệp với khách hàng một cách hiệu quả và bền vững. Chúng tôi cam kết mang lại giá trị thực cho mọi đối tác.
              </p>
            </div>

            {/* Vision */}
            <div
              data-animate="fade-right"
              className="delay-200"
              style={{
                background: "linear-gradient(135deg, #fffaf0, #fff8e8)",
                borderRadius: 16,
                padding: "1.75rem",
                borderLeft: "4px solid #f5a623",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 80, height: 80,
                background: "rgba(245,166,35,0.06)",
                borderRadius: "0 0 0 80px",
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  background: "#f5a623",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#1a1f3c" }}>Tầm Nhìn</h3>
              </div>
              <p style={{ color: "#4a5568", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Trở thành công ty công nghệ hàng đầu Việt Nam vào năm 2030, với hơn 2.000 nhân viên và hiện diện tại 20 tỉnh thành. Xây dựng hệ sinh thái công nghệ bền vững và sáng tạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
