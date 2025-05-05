import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          My App
        </Link>
        <nav>
          <Link href="/login">
            <Button
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-black"
            >
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
