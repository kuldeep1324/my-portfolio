import "./globals.css";
import Navbar from "./components/Navbar";
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
      <body className="antialiased selection:bg-blue-300/50 selection:text-blue-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}