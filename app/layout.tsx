
import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Code2, Mail, Phone, MapPin, X } from "lucide-react"
import Header from "../app/header/page"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KA's Tech - Professional Web Development Services",
   icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
  description:
    "Transform your ideas into digital reality with KA's Tech. We provide comprehensive web development, mobile apps, and custom software solutions.",
  keywords: "web development, mobile apps, custom software, React, Next.js, Node.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
       <Header />
        {/* Mobile Dropdown Menu */}
      
        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">KA's Tech</span>
                </div>
                <p className="text-gray-400">
                  Transforming ideas into digital reality with cutting-edge web development solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-4 w-4" />
                    <span>info@kastech.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>+92 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Islamabad, ISB</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Cloud Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                 
                  <li>
                    <Link href="/portfolio" className="hover:text-white transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="hover:text-white transition-colors">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                 
                  <li>
                    <Link href="contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
             Subscription available soon<br>
             </br>
             Stay Tuned.
              </div>
              <div className="hidden">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest tech insights and company updates.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-600"
                  />
                  <Button  className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} KA's Tech. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
