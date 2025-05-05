export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Know Your Fan</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p className="text-gray-700">
            O Know Your Fan é uma plataforma inovadora que conecta fãs de esports com suas organizações favoritas. Nossa
            missão é criar uma experiência personalizada para cada fã, permitindo que as organizações conheçam melhor
            seu público e ofereçam conteúdo, produtos e experiências exclusivas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Como Funciona</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">1. Crie seu Perfil</h3>
              <p className="text-gray-600">
                Cadastre seus dados básicos e compartilhe seus interesses em esports, eventos que participou e produtos
                que adquiriu no último ano.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">2. Verificação de Identidade</h3>
              <p className="text-gray-600">
                Faça upload de seus documentos para verificação de identidade utilizando nossa tecnologia de IA,
                garantindo a autenticidade do seu perfil.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">3. Conecte suas Redes Sociais</h3>
              <p className="text-gray-600">
                Vincule suas redes sociais para que possamos analisar suas interações com conteúdo de esports e
                organizações como a FURIA.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">4. Compartilhe seus Perfis de Esports</h3>
              <p className="text-gray-600">
                Adicione seus perfis em plataformas de jogos e esports para validação e análise do seu envolvimento com
                a comunidade.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">5. Receba Recomendações Personalizadas</h3>
              <p className="text-gray-600">
                Com base no seu perfil, oferecemos recomendações de produtos, eventos e programas exclusivos que
                combinam com seus interesses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Privacidade e Segurança</h2>
          <p className="text-gray-700 mb-4">
            Levamos sua privacidade muito a sério. Todos os dados coletados são protegidos e utilizados apenas para
            melhorar sua experiência como fã de esports.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Seus dados pessoais são criptografados e armazenados com segurança</li>
            <li>Você tem controle total sobre quais informações compartilha</li>
            <li>Não compartilhamos seus dados com terceiros sem sua autorização</li>
            <li>Nossa tecnologia de IA segue rigorosos padrões éticos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Parceiros</h2>
          <p className="text-gray-700 mb-4">
            Trabalhamos com as principais organizações de esports do Brasil e do mundo para oferecer a melhor
            experiência aos fãs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
              <span className="font-medium">FURIA</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
              <span className="font-medium">LOUD</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
              <span className="font-medium">paiN Gaming</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-24">
              <span className="font-medium">MIBR</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
