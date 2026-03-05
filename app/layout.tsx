// ensure FontAwesome setup is executed once for the entire app
import "@/lib/fontawesome";
// when autoAddCss is disabled the core stylesheet must be imported manually
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Zerone Global Solution",
  description: "Digital Solution Company Indonesia",
}

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
