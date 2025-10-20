import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // Bold
  display: "swap",
});

export const metadata = {
  title: "HikiNeeto",
  description: "My Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
