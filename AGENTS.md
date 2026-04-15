<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Dự Án: Trang Landing Page Tuyển Dụng

## Thông Tin Dự Án

- **Tên**: Tuyển Dụng GO GROUP - Công Ty Cổ Phần Công Nghệ GOG Việt Nam
- **Framework**: Next.js `16.2.3` với App Router
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` - KHÔNG dùng `tailwind.config.js`)
- **Language**: TypeScript, React 19
- **Package Manager**: pnpm

## Kiến Trúc Dự Án

```
src/app/
  ├── layout.tsx          # Root layout (fonts, metadata)
  ├── page.tsx            # Main landing page (server component)
  ├── globals.css         # Global styles, design tokens, animations
  └── components/
      ├── ScrollAnimationInit.tsx  # Client component: IntersectionObserver
      ├── Header.tsx               # Navigation header
      ├── HeroSection.tsx          # Hero banner
      ├── StatsBar.tsx             # Statistics metrics
      ├── AboutSection.tsx         # Gallery + Mission/Vision
      ├── PolicySection.tsx        # HR Policy cards
      ├── CTABanner.tsx            # Call-to-action banner
      ├── PositionsSection.tsx     # Job openings grid
      ├── ApplySection.tsx         # Application form (Client Component)
      ├── CompanyInfoSection.tsx   # Company info
      └── Footer.tsx               # Footer
```

## Quy Tắc Quan Trọng

### Next.js 16 App Router
- **Server Components by default**: Layout và page mặc định là Server Components
- **`'use client'`**: Chỉ dùng khi cần state, hooks, hoặc browser API
- **params là Promise**: `params: Promise<{ slug: string }>` - PHẢI dùng `await params`
- **Font**: Import từ `next/font/google`, KHÔNG dùng `next/font/local` nếu không có file font
- **Image**: Dùng `next/image` với `width/height` hoặc `fill` prop

### Tailwind CSS v4 (Breaking Change từ v3)
- Import: `@import "tailwindcss"` trong CSS file (KHÔNG phải `@tailwind base/components/utilities`)
- Custom theme: dùng `@theme inline { ... }` block trong CSS
- Không cần `tailwind.config.js` hay `tailwind.config.ts`
- PostCSS plugin: `@tailwindcss/postcss` (KHÔNG phải `tailwindcss`)

### Animation System
- Dùng `data-animate` attribute: `"fade-up"`, `"fade-left"`, `"fade-right"`, `"zoom"`
- Class delay: `delay-100` đến `delay-500`
- `ScrollAnimationInit.tsx` khởi động IntersectionObserver, thêm class `is-visible`
- CSS transition được định nghĩa trong `globals.css` dưới `[data-animate]` và `[data-animate].is-visible`

### Design System (CSS Variables)
```css
--primary: #3b4fa8
--primary-dark: #2c3d8f
--accent: #f5a623
--dark: #1a1f3c
--shadow: 0 4px 24px rgba(59, 79, 168, 0.12)
```

### Component Rules
- Server Components: Truyền dữ liệu qua props
- Client Components (`'use client'`): `ApplySection.tsx`, `ScrollAnimationInit.tsx`
- Event handlers (`onMouseEnter/Leave`) trong Server Components phải cast: `(e.currentTarget as HTMLElement)`

## Không Được Làm

- ❌ Không dùng `tailwind.config.js` hay `@tailwind` directives
- ❌ Không import `useState`/`useEffect` trong Server Components
- ❌ Không dùng `getServerSideProps` hay `getStaticProps` (Pages Router)
- ❌ Không xài `next/router` - dùng `next/navigation` thay thế
- ❌ Không để inline event handlers phức tạp trong Server Components (dùng Client Components)

## Sau Mỗi Thay Đổi Lớn

1. Chụp screenshot trang web đang chạy
2. So sánh với design gốc
3. Kiểm tra responsive trên mobile (375px), tablet (768px), desktop (1200px)
4. Kiểm tra animations khi scroll
