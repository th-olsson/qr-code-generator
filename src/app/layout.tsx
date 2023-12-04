import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QrCodeProvider } from "@/context/qr-context";
import { OptionsProvider } from "@/context/options-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZQR.se - QR Code Generator",
  description: "Create QR codes for free. Save as PNG or SVG",
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
            <OptionsProvider>
              {children}
              <Analytics />
            </OptionsProvider>
          </QrCodeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
