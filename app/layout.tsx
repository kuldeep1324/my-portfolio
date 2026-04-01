import "./globals.css";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuldeep | Full Stack Developer",
  description:
    "Professional portfolio showcasing Full Stack, AI-integrated, and modern web development projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative antialiased selection:bg-blue-300/50 selection:text-blue-950">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}