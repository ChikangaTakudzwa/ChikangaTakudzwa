import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/app/components/jsPreloader";
import Head from 'next/head'
import Nav from "@/app/components/layout/nav";
import Footer from "@/app/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Takudzwa Chikanga | Home",
  description: "Takudzwa Chikanga is a Professional Full stack software developer with over 4 years of experiene in the IT Software Industry working with clients and companies across the SADC region and beyond. Currently he is based in Harare, Zimbabwe call/whatsapp: +263 771 034 920",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Takudzwa Chikanga | Home </title>

      </Head>

      <body className={inter.className}>
        <div className="flex flex-col min-h-[100vh]">
            <Nav />
              <main className="flex-grow">
                  {children}
              </main>
            <Footer />
          <script src="./node_modules/preline/dist/preline.js"></script>
          <PrelineScript />
        </div>
      </body>
    </html>
  );
}
