import { Inconsolata } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inconsolata = Inconsolata({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FAI3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
