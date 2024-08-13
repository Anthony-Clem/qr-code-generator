import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "QR Code Generator",
  description: "Generate and download custom qr codes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-slate-200 h-screen flex items-center justify-center text-sky-950`}
      >
        {children}
      </body>
    </html>
  );
}
