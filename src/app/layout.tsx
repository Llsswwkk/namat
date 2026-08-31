import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namat | اكتشف شخصيتك",
  description: "اختبار شخصية بسيط وممتع يساعدك على اكتشاف نمط شخصيتك."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
