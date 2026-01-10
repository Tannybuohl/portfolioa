import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/ui";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raji Dewebs | Portfolio",
  description:
    "Welcome to the portfolio of Raji Dewebs. Crafting beautiful digital experiences with clean code and thoughtful design.",
  keywords: ["portfolio", "developer", "web development", "Raji Dewebs"],
  authors: [{ name: "Raji Dewebs" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Raji Dewebs | Portfolio",
    description:
      "Welcome to the portfolio of Raji Dewebs. Crafting beautiful digital experiences.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const resolvedTheme = theme || systemTheme;
                document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
