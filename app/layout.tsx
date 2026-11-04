import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/footer";


export const metadata = {
  title: "Bakholokoe Heritage",
  description:
    "Preserving the history, culture and legacy of the Bakholokoe people.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>

  );

}