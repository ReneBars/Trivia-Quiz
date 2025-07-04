import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./UserContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const atmaRegular = Onest({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Trivia with AI",
  description: "Trivia with AI!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${atmaRegular.className} antialiased`}>
        <UserProvider children={children} />
      </body>
    </html>
  );
}
