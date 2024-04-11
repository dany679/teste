import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemesProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemesProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemesProvider>
      </body>
    </html>
  );
}
