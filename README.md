# 🎯 Know Your Fan

**Know Your Fan** é uma plataforma que conecta fãs de esports a suas organizações favoritas, como a FURIA. Através da verificação de identidade, análise de redes sociais e coleta de dados, oferece experiências personalizadas com base no perfil do usuário.

---

## 📌 Visão Geral

O projeto foi desenvolvido para aproximar ainda mais os fãs das organizações, criando perfis detalhados, validando a autenticidade do engajamento e gerando recomendações exclusivas.

---

## 🧠 Funcionalidades Principais

- Criação de perfil com informações pessoais e preferências em esports
- Upload de documentos e selfie para verificação via IA
- Conexão com redes sociais para análise de comportamento
- Validação de perfis de esports
- Dashboard personalizado com estatísticas e recomendações

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **UI**: Tailwind CSS, shadcn/ui
- **IA & Análise**: OpenAI API, AI SDK
- **Armazenamento**: Vercel Blob Storage
- **Autenticação**: (planejado) NextAuth.js
- **Hospedagem**: Vercel

---

## 📁 Estrutura do Projeto

```
know-your-fan/
├── app/               # Rotas e páginas (App Router)
├── components/        # Componentes reutilizáveis
├── lib/               # Lógicas e integrações (Blob, IA)
├── public/            # Recursos estáticos (imagens)
├── .env.example       # Variáveis de ambiente
└── tailwind.config.js # Configuração do Tailwind
```

---

## ⚙️ Requisitos

- Node.js 18+
- npm 8+
- Conta na Vercel (para Blob)
- API Key da OpenAI

---

## 🚀 Instalação

```bash
git clone https://github.com/seu-usuario/know-your-fan.git
cd know-your-fan
npm install
cp .env.example .env.local
npm run dev
```



---

## 🔍 Roadmap

### ✅ Fase Atual
- Frontend com fluxo de cadastro e dashboard
- Verificação de identidade com IA

### 🧩 Próximos Passos
- Banco de dados (MongoDB/Supabase)
- Autenticação com NextAuth.js
- Integração com redes sociais reais

### 🚀 Futuro
- Sistema de gamificação para fãs
- Marketplace de produtos
- App mobile
- Integração com eventos ao vivo

---

## 🧪 Testes

```bash
npm test
npm test -- -t "nome-do-componente"
```

---

## 👨‍💻 Sobre o Desenvolvedor

Fã da FURIA desde sua criação e apaixonado por tecnologia, desenvolvi este projeto unindo minha experiência com software ao universo dos esports para entregar algo útil para organizações e fãs.

---
