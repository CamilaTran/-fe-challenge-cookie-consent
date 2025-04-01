import type { Metadata } from "next";
import "./globals.css";
import { notoFont } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Cookie consent",
  description: "FE challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${notoFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
