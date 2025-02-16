import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.css';



import type { Metadata } from "next";
import { Playfair, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight:['400','500','600','700','800','900']

});


export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable}`}>
        <TopBar />
        <Header />
        {children}
      </body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    </html>
  );
}
