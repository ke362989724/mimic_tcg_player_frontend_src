import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import QueryProviders from "@/providers/react.query.provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <QueryProviders>
            <Header />
            {children}
            <Footer />
          </QueryProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
