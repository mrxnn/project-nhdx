import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/modules/nav-bar";
import initTranslations from "../i18n";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEHR Client Application",
  description: "NEHR Client Application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <div className="min-h-screen">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
