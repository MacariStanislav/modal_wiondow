"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import StoreProvider from "./storeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ backgroundColor: "white" }}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
