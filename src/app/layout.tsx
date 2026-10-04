import type { Metadata } from "next";
import { Luckiest_Guy, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Luckiest_Guy({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Soy-San | The Star of Club Bento",
    template: "%s | Soy-San",
  },
  description:
    "The official (unofficial) chronicle of Soy-San, the singing fish who took 1950s New York by the fin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
