# 👨‍💻 Portfolio — Matheus Yukio Tamataya

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 📖 Sobre o projeto

Portfólio pessoal desenvolvido para apresentar minha trajetória como desenvolvedor web, meus projetos e formas de contato. O site é bilíngue (português e inglês) e conta com um design moderno, animações e layout responsivo.

O projeto foi criado para praticar Next.js, React e TypeScript, além de estilização com Tailwind CSS e integração com serviços externos.

---

## ✨ Funcionalidades

* 🌐 Seletor de idioma (Português/English) ao abrir o site, com todo o conteúdo traduzido.
* ⌨️ Animação de digitação do nome na seção inicial, respeitando a preferência de movimento reduzido do usuário.
* 🗂️ Carrossel de projetos com botões anterior/próximo, barra de progresso e lista para escolher o projeto.
* 👤 Seção "Sobre mim" com foto e download do currículo em PDF.
* 📬 Formulário de contato integrado ao Formspree, com estados de envio, sucesso e erro.
* 📱 Menu responsivo com versão para dispositivos móveis.
* 🔗 Links flutuantes para Instagram e LinkedIn.
* 🌗 Ícones e cores adaptados ao modo claro e escuro do sistema.
* 📈 Vercel Analytics ativado apenas em produção.

---

## 🛠️ Tecnologias utilizadas

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS 4
* shadcn/ui e Base UI
* Lucide React (ícones)
* Formspree (envio do formulário)
* Vercel Analytics
* pnpm
* Deploy na Vercel

---

## 📂 Estrutura do projeto

```text
📁 portfolio
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   └── ui/
│
├── lib/
│
├── public/
│   ├── projects/
│   │   ├── responsividade.png
│   │   ├── bootstrap.png
│   │   └── tailwind.png
│   ├── MatheusTamataya.png
│   ├── CurriculoMatheusTamataya.pdf
│   ├── myt-icon.svg
│   ├── apple-icon.png
│   ├── icon-light-32x32.png
│   └── icon-dark-32x32.png
│
├── components.json
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

* App Router e metadados do Next.js
* Client Components (`'use client'`)
* Hooks do React (`useState` e `useEffect`)
* Tipagem com TypeScript
* Internacionalização simples com objeto de textos por idioma
* Renderização condicional e listas dinâmicas
* Formulários com `fetch`, `FormData` e tratamento de erros
* Acessibilidade (`aria-label`, `role="dialog"`, `prefers-reduced-motion`)
* Estilização utility-first com Tailwind CSS
* Layout responsivo e suporte a tema claro/escuro
* Integração com serviços externos e deploy contínuo na Vercel

---

## 🚀 Melhorias futuras

* 💾 Lembrar o idioma escolhido e detectar o idioma do navegador.
* 🧩 Dividir a página em componentes menores (Hero, Projetos, Sobre, Contato) e mover os textos para arquivos de tradução.
* 📄 Criar páginas individuais para cada projeto, com detalhes e tecnologias usadas.
* ➕ Adicionar mais projetos, como o LojaGamer.
* 🌙 Alternância manual entre tema claro e escuro.
* 🖼️ Otimização das imagens com `next/image`.
* 🔍 Melhorias de SEO (Open Graph e sitemap).

---
