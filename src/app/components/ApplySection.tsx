"use client";

import { useState } from "react";

const positions = [
  "Nhân Viên Telesales",
  "Nhân Viên Marketing",
  "Lập Trình Viên Fullstack",
  "Nhân Viên Nhân Sự",
  "Vị Trí Khác",
];

const steps = [
  {
    step: "01",
    title: "Nộp Hồ Sơ Online",
    desc: "Điền form ứng tuyển hoặc gửi CV qua email hr@gogroup.vn",
    icon: "📋",
  },
  {
    step: "02",
    title: "HR Liên Hệ",
    desc: "Bộ phận nhân sự sẽ liên hệ xác nhận trong vòng 24-48 giờ làm việc",
    icon: "📞",
  },
  {
    step: "03",
    title: "Phỏng Vấn",
    desc: "Tham gia phỏng vấn trực tiếp hoặc online với quản lý bộ phận",
    icon: "🤝",
  },
  {
    step: "04",
    title: "Nhận Kết Quả",
    desc: "Nhận thông báo kết quả và ký hợp đồng lao động nếu được chọn",
    icon: "🎉",
  },
];

export default function ApplySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      style={{
        background: "linear-gradient(180deg, #eef0f8 0%, #f7f8fc 100%)",
        padding: "5rem 0",
      }}
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
              📩 Ứng Tuyển Ngay
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a1f3c",
            lineHeight: 1.2,
          }}>
            ỨNG TUYỂN{" "}
            <span style={{ color: "#3b4fa8" }}>ONLINE</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Form */}
          <div
            data-animate="fade-left"
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 20,
              padding: "2.5rem",
              boxShadow: "0 4px 32px rgba(59,79,168,0.1)",
              border: "1.5px solid rgba(59,79,168,0.08)",
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1a1f3c", marginBottom: "1.75rem" }}>
                  Thông Tin Ứng Viên
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#4a5568", marginBottom: "0.375rem" }}>
                      Họ và tên *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nguyễn Văn A"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1.5px solid #e2e8f0",
                        borderRadius: 10,
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        color: "#1a1f3c",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b4fa8")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#4a5568", marginBottom: "0.375rem" }}>
                      Số điện thoại *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0901 234 567"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "1.5px solid #e2e8f0",
                        borderRadius: 10,
                        fontSize: "0.9375rem",
                        fontFamily: "inherit",
                        color: "#1a1f3c",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#3b4fa8")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#4a5568", marginBottom: "0.375rem" }}>
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: 10,
                      fontSize: "0.9375rem",
                      fontFamily: "inherit",
                      color: "#1a1f3c",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b4fa8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#4a5568", marginBottom: "0.375rem" }}>
                    Vị trí ứng tuyển *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: 10,
                      fontSize: "0.9375rem",
                      fontFamily: "inherit",
                      color: formData.position ? "#1a1f3c" : "#a0aec0",
                      outline: "none",
                      background: "#fff",
                      cursor: "pointer",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a5568'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.25rem",
                      paddingRight: "3rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b4fa8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">-- Chọn vị trí --</option>
                    {positions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#4a5568", marginBottom: "0.375rem" }}>
                    Giới thiệu bản thân
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Kinh nghiệm, kỹ năng nổi bật, mong muốn công việc..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "1.5px solid #e2e8f0",
                      borderRadius: 10,
                      fontSize: "0.9375rem",
                      fontFamily: "inherit",
                      color: "#1a1f3c",
                      outline: "none",
                      resize: "vertical",
                      lineHeight: 1.6,
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#3b4fa8")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "0.9375rem",
                    background: loading
                      ? "#a0aec0"
                      : "linear-gradient(135deg, #3b4fa8, #5b6ec8)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 12,
                    fontSize: "1rem",
                    fontWeight: 700,
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: loading ? "none" : "0 4px 16px rgba(59,79,168,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {loading ? (
                    <>
                      <svg style={{ animation: "spin 1s linear infinite" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                      Gửi Đơn Ứng Tuyển
                    </>
                  )}
                </button>

                <p style={{ textAlign: "center", fontSize: "0.8125rem", color: "#718096", marginTop: "1rem" }}>
                  Hoặc gửi CV trực tiếp qua email:{" "}
                  <strong style={{ color: "#3b4fa8" }}>hr@gogroup.vn</strong>
                </p>

                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1.25rem" }}>🎉</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1a1f3c", marginBottom: "0.75rem" }}>
                  Hồ Sơ Đã Gửi Thành Công!
                </h3>
                <p style={{ color: "#4a5568", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Cảm ơn bạn đã ứng tuyển vào GO GROUP. Chúng tôi sẽ liên hệ với bạn trong vòng <strong>24-48 giờ</strong> làm việc.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", position: "", message: "" }); }}
                  style={{
                    padding: "0.75rem 2rem",
                    background: "#3b4fa8",
                    color: "#fff",
                    border: "none",
                    borderRadius: 50,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.9375rem",
                  }}
                >
                  Gửi Hồ Sơ Khác
                </button>
              </div>
            )}
          </div>

          {/* Guide steps */}
          <div
            data-animate="fade-right"
            style={{ flex: 1, maxWidth: 480 }}
          >
            <div style={{
              background: "linear-gradient(135deg, #1a1f3c, #2d3561)",
              borderRadius: 20,
              padding: "2.5rem",
              color: "#fff",
              marginBottom: "1.5rem",
            }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                🗺️ HƯỚNG DẪN NỘP HỒ SƠ
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                Quy trình tuyển dụng nhanh chóng và minh bạch
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{
                        width: 48, height: 48,
                        borderRadius: "50%",
                        background: i === 0 ? "#f5a623" : "rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.25rem",
                        border: "2px solid",
                        borderColor: i === 0 ? "#f5a623" : "rgba(255,255,255,0.2)",
                      }}>
                        {step.icon}
                      </div>
                      {i < steps.length - 1 && (
                        <div style={{
                          position: "absolute",
                          top: 48, left: "50%",
                          width: 2, height: 24,
                          background: "rgba(255,255,255,0.15)",
                          transform: "translateX(-50%)",
                        }} />
                      )}
                    </div>
                    <div style={{ paddingTop: "0.5rem" }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                        <span style={{ color: "#f5a623" }}>Bước {step.step}: </span>
                        {step.title}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div style={{
              background: "#fff",
              borderRadius: 16,
              padding: "1.5rem",
              boxShadow: "0 4px 24px rgba(59,79,168,0.08)",
              border: "1.5px solid rgba(59,79,168,0.08)",
            }}>
              <h4 style={{ fontWeight: 700, color: "#1a1f3c", marginBottom: "1rem" }}>📬 Liên Hệ Trực Tiếp</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: "📞", label: "Hotline", value: "0387 474 747" },
                  { icon: "📧", label: "Email", value: "hr@gogroup.vn" },
                  { icon: "🕐", label: "Giờ tiếp nhận", value: "T2-T7: 8:00 - 17:30" },
                ].map((contact, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>{contact.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#718096" }}>{contact.label}</div>
                      <div style={{ fontWeight: 600, color: "#1a1f3c", fontSize: "0.9375rem" }}>{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
