export default function CompanyInfoSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f5a623 0%, #e09010 100%)",
        padding: "3.5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
      }} />

      <div
        className="container mx-auto px-6"
        style={{ maxWidth: 1200, position: "relative", zIndex: 1 }}
      >
        <div
          data-animate="fade-up"
          style={{ textAlign: "center", color: "#fff" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🦅</div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.375rem", letterSpacing: "0.04em" }}>
            GO GROUP
          </h3>
          <p style={{ fontSize: "0.9375rem", opacity: 0.9, marginBottom: "0.25rem", fontWeight: 600 }}>
            CÔNG TY CỔ PHẦN CÔNG NGHỆ GOG VIỆT NAM
          </p>
          <p style={{ fontSize: "0.875rem", opacity: 0.75, maxWidth: 600, margin: "0 auto" }}>
            Đơn vị công nghệ hàng đầu với 10 năm kinh nghiệm trong lĩnh vực tư vấn và đào tạo
          </p>
        </div>

        <div
          data-animate="fade-up"
          className="delay-200"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginTop: "2.5rem",
          }}
        >
          {[
            {
              icon: "📍",
              label: "Địa chỉ",
              value: "Số 45, đường An Dương Vương,\nPhường Trường Thi, TP Vinh, Nghệ An.",
            },
            {
              icon: "📞",
              label: "Điện thoại",
              value: "0983 439 381",
            },
            {
              icon: "📧",
              label: "Email tuyển dụng",
              value: "contact@gmail.com",
            },
            {
              icon: "🌐",
              label: "Website",
              value: "www.gogroup.vn",
            },
          ].map((info, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: 14,
                padding: "1.25rem",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "#fff",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.375rem" }}>{info.icon}</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.25rem" }}>
                {info.label}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, whiteSpace: "pre-line" }}>
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
