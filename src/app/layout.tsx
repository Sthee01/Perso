import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Stheeva",
  description: "Create by stheeva",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
      <html lang="en">
        <body className="">
          {children}
        </body>
      </html>
   </>
    
  );
}
