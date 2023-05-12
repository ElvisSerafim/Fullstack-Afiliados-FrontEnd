import "../styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";
import StyledComponentsRegistry from "@/styles/registry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afiliados App",
  description: "App for Coodesh Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
