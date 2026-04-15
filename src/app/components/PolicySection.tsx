"use client";

import Link from "next/link";

const policies = [
  {
    id: "training",
    icon: "🎓",
    iconBg: "#3b4fa8",
    title: "ĐÀO TẠO & PHÁT TRIỂN",
    description:
      "Khóa học nội bộ, chuyên sâu nghiệp vụ, kỹ năng mềm và lãnh đạo. Công ty GO GROUP tạo điều kiện tối đa để mỗi nhân viên phát triển năng lực cá nhân, đạt được mục tiêu nghề nghiệp.",
    cta: "Xem chương trình đào tạo",
    highlights: ["Đào tạo hội nhập tuần đầu", "Mentoring 1-1 từ chuyên gia", "Chứng chỉ chuyên nghiệp được hỗ trợ"],
    reverse: false,
  },
  {
    id: "environment",
    icon: "🌿",
    iconBg: "#2d8a5e",
    title: "MÔI TRƯỜNG LÀM VIỆC",
    description:
      "Văn phòng hiện đại, không gian mở khuyến khích sáng tạo và cộng tác. Đội ngũ trẻ trung, năng động, luôn hỗ trợ nhau phát triển cùng với văn hóa làm việc minh bạch.",
    highlights: [
      "Văn phòng chuẩn mực, thiết bị hiện đại",
      "Flex-time và remote working",
      "Team building & sự kiện thường niên",
    ],
    cta: undefined,
    reverse: true,
  },
  {
    id: "benefits",
    icon: "💎",
    iconBg: "#f5a623",
    title: "CHÍNH SÁCH PHÚC LỢI",
    description:
      "Chế độ lương thưởng cạnh tranh, thưởng hiệu suất hàng tháng/quý/năm. Bảo hiểm đầy đủ theo quy định pháp luật và nhiều phúc lợi hấp dẫn cho nhân viên.",
    highlights: [
      "Lương thưởng cạnh tranh top đầu ngành",
      "Thưởng KPI hàng tháng & lương tháng 13",
      "BHXH, BHYT đầy đủ từ ngày đầu làm việc",
      "Phụ cấp ăn trưa, đi lại, điện thoại",
    ],
    cta: undefined,
    reverse: false,
  },
];

export default function PolicySection() {
  return (
    <section
      id="policy"
      style={{
        background: "#f7f8fc",
        padding: "5rem 0",
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: 1200 }}>
        {/* Section header */}
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
              ✅ Chính Sách Nhân Sự
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a1f3c",
            lineHeight: 1.2,
          }}>
            CHÍNH SÁCH{" "}
            <span style={{ color: "#3b4fa8" }}>NHÂN SỰ</span>
          </h2>
          <p style={{
            color: "#4a5568", maxWidth: 560, margin: "1rem auto 0",
            fontSize: "1.0625rem", lineHeight: 1.7,
          }}>
            Chúng tôi tin rằng con người là tài sản quý nhất. Mọi chính sách được thiết kế để bạn phát triển tốt nhất.
          </p>
        </div>

        {/* Policy cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {policies.map((policy, idx) => (
            <div
              key={policy.id}
              data-animate={policy.reverse ? "fade-left" : "fade-right"}
              className={`delay-${(idx + 1) * 100} flex flex-col ${policy.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
              style={{
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 32px rgba(59,79,168,0.08)",
                border: "1.5px solid rgba(59,79,168,0.06)",
              }}
            >
              {/* Accent side */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${policy.iconBg}ee, ${policy.iconBg}88)`,
                  padding: "2.5rem",
                  minWidth: 240,
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                className="hidden md:flex flex-col justify-center items-center"
              >
                {/* Background pattern */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />

                <div style={{ fontSize: "4rem", position: "relative", zIndex: 1 }}>{policy.icon}</div>
                <div style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textAlign: "center",
                  marginTop: "1rem",
                  position: "relative",
                  zIndex: 1,
                  letterSpacing: "0.04em",
                }}>
                  {policy.title}
                </div>

                {/* Decorative circle */}
                <div style={{
                  position: "absolute",
                  bottom: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: "2.5rem", flex: 1 }}>
                {/* Mobile icon */}
                <div className="flex md:hidden items-center gap-3 mb-4">
                  <span style={{ fontSize: "2rem" }}>{policy.icon}</span>
                  <h3 style={{ fontWeight: 800, fontSize: "1.125rem", color: "#1a1f3c" }}>{policy.title}</h3>
                </div>

                <h3 className="hidden md:block" style={{ fontWeight: 800, fontSize: "1.25rem", color: "#1a1f3c", marginBottom: "1rem" }}>
                  {policy.title}
                </h3>

                <p style={{ color: "#4a5568", lineHeight: 1.8, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                  {policy.description}
                </p>

                {/* Highlights */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {policy.highlights.map((h, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                      <div style={{
                        width: 20, height: 20,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${policy.iconBg}, ${policy.iconBg}aa)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span style={{ color: "#2d3561", fontSize: "0.9375rem", lineHeight: 1.6 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {policy.cta && (
                  <div style={{ marginTop: "1.75rem" }}>
                    <Link
                      href="#apply"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: policy.iconBg,
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        borderBottom: `2px solid ${policy.iconBg}`,
                        paddingBottom: "2px",
                        transition: "gap 0.2s ease",
                      }}
                    >
                      {policy.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
