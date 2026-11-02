import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ShareForward — Don't Waste, Share Forward",
  description:
    "A community platform connecting donors with verified NGOs and volunteers to reduce waste and distribute surplus food, clothes, and books to people in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#193d2d" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
