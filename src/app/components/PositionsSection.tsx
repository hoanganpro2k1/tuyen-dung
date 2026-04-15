"use client";

import Link from "next/link";

const positions = [
  {
    id: "telesales",
    title: "NHÂN VIÊN TELESALES",
    department: "Kinh Doanh",
    type: "Toàn thời gian",
    salary: "10 - 25 triệu/tháng",
    location: "TP. Hồ Chí Minh",
    icon: "📞",
    color: "#3b4fa8",
    slots: 20,
    requirements: [
      "Tốt nghiệp THPT trở lên",
      "Ưu tiên có kinh nghiệm telesales",
      "Giọng nói rõ ràng, thuyết phục tốt",
    ],
    highlights: ["Thu nhập hấp dẫn", "Thưởng KPI cao", "Đào tạo bài bản"],
  },
  {
    id: "marketing",
    title: "NHÂN VIÊN MARKETING",
    department: "Marketing",
    type: "Toàn thời gian",
    salary: "12 - 22 triệu/tháng",
    location: "TP. Hồ Chí Minh",
    icon: "📱",
    color: "#f5a623",
    slots: 5,
    requirements: [
      "Tốt nghiệp Đại học, chuyên ngành Marketing",
      "Biết dùng công cụ digital marketing",
      "Tư duy sáng tạo, yêu thích data",
    ],
    highlights: ["Môi trường sáng tạo", "Thưởng dự án", "Học bổng đào tạo"],
  },
  {
    id: "developer",
    title: "LẬP TRÌNH VIÊN FULLSTACK",
    department: "Công Nghệ",
    type: "Toàn thời gian",
    salary: "20 - 45 triệu/tháng",
    location: "TP. Hồ Chí Minh",
    icon: "💻",
    color: "#2d8a5e",
    slots: 8,
    requirements: [
      "Thành thạo React, Node.js hoặc tương đương",
      "2+ năm kinh nghiệm lập trình",
      "Tư duy logic, chú trọng chất lượng code",
    ],
    highlights: ["Remote working", "Thiết bị cao cấp", "Stock options"],
  },
  {
    id: "hr",
    title: "NHÂN VIÊN NHÂN SỰ",
    department: "Nhân Sự",
    type: "Toàn thời gian",
    salary: "8 - 15 triệu/tháng",
    location: "TP. Hồ Chí Minh",
    icon: "👥",
    color: "#6b3fa8",
    slots: 3,
    requirements: [
      "Tốt nghiệp chuyên ngành Quản trị nhân lực",
      "Biết sử dụng phần mềm HRM",
      "Kỹ năng giao tiếp tốt, đồng cảm",
    ],
    highlights: ["Nội bộ thân thiện", "Hỗ trợ học thêm", "Cân bằng cuộc sống"],
  },
];

export default function PositionsSection() {
  return (
    <section
      id="positions"
      style={{ background: "#fff", padding: "5rem 0" }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <div data-animate="fade-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(59,79,168,0.1)",
            border: "1px solid rgba(59,79,168,0.2)",
            borderRadius: 50,
            padding: "0.375rem 1.25rem",
            marginBottom: "1rem",
          }}>
            <span style={{ color: "#3b4fa8", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              🎯 Cơ Hội Nghề Nghiệp
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a1f3c",
            lineHeight: 1.2,
          }}>
            VỊ TRÍ{" "}
            <span style={{ color: "#3b4fa8" }}>ĐANG TUYỂN DỤNG</span>
          </h2>
          <p style={{
            color: "#4a5568", maxWidth: 560, margin: "1rem auto 0",
            fontSize: "1.0625rem", lineHeight: 1.7,
          }}>
            Khám phá các vị trí phù hợp với kỹ năng và đam mê của bạn. Chúng tôi đang tìm kiếm những tài năng xuất sắc!
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {positions.map((pos, i) => (
            <div
              key={pos.id}
              data-animate="fade-up"
              className={`delay-${(i % 4 + 1) * 100}`}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(59,79,168,0.08)",
                border: "1.5px solid rgba(59,79,168,0.08)",
                transition: "all 0.35s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 48px rgba(59,79,168,0.18)";
                (e.currentTarget as HTMLElement).style.borderColor = pos.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(59,79,168,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,79,168,0.08)";
              }}
            >
              {/* Card header */}
              <div style={{
                background: `linear-gradient(135deg, ${pos.color}ee, ${pos.color}88)`,
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: -20, right: -20,
                  width: 80, height: 80,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2.25rem" }}>{pos.icon}</span>
                  <span style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "0.25rem 0.75rem",
                    borderRadius: 50,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}>
                    {pos.slots} chỗ
                  </span>
                </div>
                <h3 style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.0625rem",
                  marginTop: "0.75rem",
                  lineHeight: 1.3,
                }}>
                  {pos.title}
                </h3>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
                  {pos.department} · {pos.type}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Salary & Location */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={pos.color} strokeWidth="2.5">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                    <span style={{ fontWeight: 700, color: pos.color, fontSize: "0.9375rem" }}>{pos.salary}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{ color: "#718096", fontSize: "0.875rem" }}>{pos.location}</span>
                  </div>
                </div>

                {/* Requirements */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.8125rem", color: "#1a1f3c", marginBottom: "0.625rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Yêu Cầu
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    {pos.requirements.map((req, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <div style={{
                          width: 6, height: 6,
                          borderRadius: "50%",
                          background: pos.color,
                          marginTop: 6,
                          flexShrink: 0,
                        }} />
                        <span style={{ color: "#4a5568", fontSize: "0.875rem", lineHeight: 1.5 }}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem", marginTop: "auto" }}>
                  {pos.highlights.map((h, j) => (
                    <span key={j} style={{
                      background: `${pos.color}14`,
                      color: pos.color,
                      padding: "0.25rem 0.75rem",
                      borderRadius: 50,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}>
                      {h}
                    </span>
                  ))}
                </div>

                {/* Apply button */}
                <Link
                  href="#apply"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    background: pos.color,
                    color: "#fff",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  }}
                >
                  Ứng Tuyển Vị Trí Này
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
