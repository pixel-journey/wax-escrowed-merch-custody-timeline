import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Steps a transfer does not prove',
  description: 'paid, shipped, delivered, released. A skip is refused. The sample payment is unsigned.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
