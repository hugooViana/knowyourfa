"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full bg-black text-white">
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image src="/images/furia-logo.png" alt="FURIA Esports Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">Know Your Fan</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-[#00a859]" : "text-gray-300 hover:text-white"}`}
            >
              Início
            </Link>
            <Link
              href="/register"
              className={`text-sm font-medium ${isActive("/register") ? "text-[#00a859]" : "text-gray-300 hover:text-white"}`}
            >
              Cadastro
            </Link>
            <Link
              href="/profile"
              className={`text-sm font-medium ${isActive("/profile") ? "text-[#00a859]" : "text-gray-300 hover:text-white"}`}
            >
              Perfil
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-medium ${isActive("/dashboard") ? "text-[#00a859]" : "text-gray-300 hover:text-white"}`}
            >
              Dashboard
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-black"
              >
                Login
              </Button>
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-gray-300 hover:text-white">
              Início
            </Link>
            <Link href="/register" className="block text-sm font-medium text-gray-300 hover:text-white">
              Cadastro
            </Link>
            <Link href="/profile" className="block text-sm font-medium text-gray-300 hover:text-white">
              Perfil
            </Link>
            <Link href="/dashboard" className="block text-sm font-medium text-gray-300 hover:text-white">
              Dashboard
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="w-full border-white text-white bg-transparent hover:bg-white hover:text-black"
              >
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
