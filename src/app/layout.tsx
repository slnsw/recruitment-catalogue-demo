import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue | State Library of New South Wales",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
