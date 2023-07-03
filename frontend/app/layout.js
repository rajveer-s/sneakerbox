import Header from "@/components/Header";
import "./globals.css";
// import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SneakerBox FL",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
