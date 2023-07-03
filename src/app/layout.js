import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import BottomNav from "@/components/BottomNav/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} over bg-gray-100 relative`} id="root">
            <header>
               <Navbar></Navbar>
            </header>
            {children}
            <BottomNav></BottomNav>
         </body>
      </html>
   );
}
