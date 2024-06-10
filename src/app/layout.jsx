import { Mukta, Poppins } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const fontDisplay = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  preload: true,
});
export const fontBody = Mukta({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

export const metadata = {
  title: "Braces & Smile Orthodontics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(fontDisplay.variable, fontBody.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
