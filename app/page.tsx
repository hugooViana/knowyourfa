import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image src="/images/furia-logo.png" alt="FURIA Esports Logo" fill className="object-contain" priority />
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Know Your Fan</h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl">
                Conheça melhor seu perfil como fã de esports e receba experiências personalizadas das suas organizações
                favoritas.
              </p>
              <div className="space-x-4">
                <Link href="/register">
                  <Button className="bg-[#00a859] hover:bg-[#008a4a] text-white">Começar Agora</Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-white text-black bg-white hover:bg-transparent hover:text-white"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-2 bg-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Perfil Completo</h3>
                <p className="text-gray-500 text-center">
                  Crie seu perfil detalhado como fã de esports, incluindo seus interesses e histórico.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-2 bg-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Verificação por IA</h3>
                <p className="text-gray-500 text-center">
                  Validação de identidade e documentos utilizando inteligência artificial.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
                <div className="p-2 bg-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integração Social</h3>
                <p className="text-gray-500 text-center">
                  Conecte suas redes sociais e perfis de esports para uma experiência personalizada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                Termos
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Privacidade
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Contato
              </Link>
            </div>
            <p className="text-sm text-gray-400">© 2025 Know Your Fan. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
