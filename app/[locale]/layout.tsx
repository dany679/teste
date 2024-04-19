import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";
const ThemesProvider = dynamic(() => import("./provider"));

const inter = Inter({ subsets: ["latin"] });
const locales = ["pt-br", "en"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  if (!locales.includes(locale)) {
    return notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemesProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex min-h-screen flex-col pt-20 md:px-20 px-4 dark:bg-stone-900  max-w-8xl mx-auto">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemesProvider>
      </body>
    </html>
  );
}
