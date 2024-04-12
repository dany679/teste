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
          <main className="flex min-h-screen flex-col pt-20 md:px-20 px-4 dark:bg-stone-900  max-w-8xl mx-auto">
            {children}
          </main>
          <Footer />
        </ThemesProvider>
      </body>
    </html>
  );
}
