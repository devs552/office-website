'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Menu, Code2, X } from "lucide-react"

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Courses", href: "/courses" },
    { name: "Careers", href: "/careers" },
     { name: "Contact Us", href: "/contact" }
  ]

  const getLinkClasses = (href: string) =>
    `font-medium transition-colors ${
      pathname === href
        ? "text-cyan-400"
        : "text-gray-300 hover:text-cyan-400"
    }`

  return (
    <div>
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-300">KA's Tech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={getLinkClasses(link.href)}>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className=" h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4 border-t border-gray-700">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={getLinkClasses(link.href)}>
                  {link.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Get Quote
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Page
