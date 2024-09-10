import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '700'] });

export const metadata: Metadata = {
  title: "AK Brain Tumor CNNs",
  description: "Brain tumor detection using CNN",
  icons: {
    icon: '/braintumorcnn/public/favicon.ico',
    // Add more sizes/formats if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-thin antialiased`}>
        {children}
      </body>
    </html>
  );
}
