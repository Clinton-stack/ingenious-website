import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ingenious",
  description:
    "Ingenious Tech is a fast-growing IT Company in Nigeria. We are a Managed Service Provider and Internet Service Provider expertly delivering unified technology solutions for network communications, cloud infrastructure and technical support. We work to efficiently deliver services that can help our customers innovate, grow, and enjoy their businesses and livelihood.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
