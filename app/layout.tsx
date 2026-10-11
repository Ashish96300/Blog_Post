
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Rush for Government Jobs in India",
  description:
    "An article exploring the pursuit of government jobs, career security, and social expectations in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
