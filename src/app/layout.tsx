import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wahuu Screen",
  description: "The ultimate job portal, resource hub & personal branding platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
