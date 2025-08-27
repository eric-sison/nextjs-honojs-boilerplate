import { type Metadata } from "next";
import { type PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "../components/ReactQueryProvider";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Boilerplate",
};

export type PageProps<T, K> = {
  params: Promise<T>;
  searchParams: Promise<K>;
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
          {/* prettier-ignore */}
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
