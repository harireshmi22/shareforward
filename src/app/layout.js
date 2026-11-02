import { Instrument_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});
const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
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
    <html lang="en" className={`${instrument.variable} ${schibsted.variable} h-full`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F8F8F2" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
