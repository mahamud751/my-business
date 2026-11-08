import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "আপন — ছোট ছোট যত্নে, আরও আপন",
  description:
    "স্কিনকেয়ার — বডি ক্রিম, ফেসিয়াল ফোম ও সাবান, হোম ডেলিভারিতে।",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      {/* Grammarly can inject body attributes before React hydrates. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
