import type { Metadata, Viewport } from "next";

import './layout.scss';

export const metadata: Metadata = {
  title: "Catalogue | State Library of New South Wales",
  robots: {
    index: false,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
