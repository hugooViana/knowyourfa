
## 📋 Descrição

Know Your Fan é uma plataforma inovadora que conecta fãs de esports com suas organizações favoritas. A plataforma permite que organizações como FURIA conheçam melhor seu público através de coleta de dados, verificação de identidade e análise de interações em redes sociais, oferecendo experiências personalizadas para cada fã.

## 🚀 Visão Geral

O projeto foi desenvolvido para resolver o desafio de criar conexões mais profundas entre organizações de esports e seus fãs. Através de uma abordagem centrada no usuário, a plataforma coleta dados relevantes, verifica a autenticidade dos fãs e oferece recomendações personalizadas de produtos, eventos e experiências.

### Principais Objetivos

- Criar perfis detalhados de fãs de esports
- Verificar a autenticidade dos fãs através de documentos e análise de redes sociais
- Oferecer recomendações personalizadas baseadas no perfil e interesses
- Proporcionar uma experiência exclusiva para fãs de organizações como FURIA

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Estilização**: Tailwind CSS, shadcn/ui
- **Autenticação**: (Implementação futura com NextAuth.js)
- **Armazenamento**: Vercel Blob Storage
- **IA e Análise**: OpenAI API, AI SDK
- **Implantação**: Vercel

## 📁 Estrutura do Projeto

know-your-fan/
├── app/                      # Diretório principal da aplicação (App Router)
│   ├── about/                # Página Sobre
│   ├── dashboard/            # Dashboard do usuário
│   ├── documents/            # Verificação de documentos
│   ├── login/                # Autenticação
│   ├── profile/              # Perfil do usuário
│   ├── register/             # Cadastro de usuários
│   ├── social/               # Conexão com redes sociais
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/               # Componentes reutilizáveis
│   ├── ui/                   # Componentes de UI (shadcn)
│   ├── header.tsx            # Cabeçalho da aplicação
│   └── theme-provider.tsx    # Provedor de tema
├── lib/                      # Funções e utilitários
│   ├── actions.ts            # Server Actions
│   └── utils.ts              # Funções utilitárias
├── public/                   # Arquivos estáticos
│   └── images/               # Imagens
├── .env.example              # Exemplo de variáveis de ambiente
├── next.config.js            # Configuração do Next.js
├── package.json              # Dependências
├── tailwind.config.js        # Configuração do Tailwind CSS
└── tsconfig.json             # Configuração do TypeScript

## ⚙️ Requisitos

- Node.js 18.x ou superior
- npm 8.x ou superior
- Conta na Vercel (para Blob Storage)
- Chave de API da OpenAI
