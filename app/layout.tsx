import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ScrollMandatoryComp from "./components/ScrollMandatoryComp";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolNSol",
  description: "Property rental",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollMandatoryComp>{children}</ScrollMandatoryComp>
      <Toaster />
      </body>
    </html>
  );
}
