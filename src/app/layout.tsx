import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QrCodeProvider } from "@/context/qr-context";
import { DownloadOptionsProvider } from "@/context/download-options-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Create QR codes for free - download as PNG or SVG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QrCodeProvider>
            <DownloadOptionsProvider>
              {children}
              <Analytics />
            </DownloadOptionsProvider>
          </QrCodeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
