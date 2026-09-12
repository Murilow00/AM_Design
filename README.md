# AM Digital Studio

Site institucional da agência AM Digital Studio, desenvolvido com Next.js e React para apresentar serviços, valores, processos e canais de contato da marca.

## Visão geral

Este projeto foi transformado de um template inicial em uma landing page premium para uma agência que vende sites e presença digital. A proposta visual usa uma identidade forte com tons de amarelo, contraste com preto e elementos com bordas arredondadas, sombras suaves e micro-interações.

## Tecnologias

- Next.js 16
- React 19
- App Router
- JavaScript
- CSS Modules + CSS global
- Ant Design
- react-hot-toast
- Tailwind CSS
- Biome para lint/format

## Páginas principais

- Home: apresentação da agência, serviços, diferenciais e chamadas para ação
- Sobre: história, valores e proposta de valor
- Serviços: oferta de soluções e entregáveis
- Contato: canais de contato direto com a empresa
- Página 404 personalizada

## Estrutura do projeto

```bash
am/
├── public/
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   ├── media/
│   └── sounds/
├── src/
│   ├── app/
│   │   ├── contato/
│   │   ├── servicos/
│   │   ├── sobre/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   ├── page.jsx
│   │   └── page.module.css
│   └── components/
│       ├── PageBanner.jsx
│       ├── SectionHeading.jsx
│       ├── ServiceCard.jsx
│       ├── MetricCard.jsx
│       └── SiteHeader.jsx
├── package.json
├── next.config.mjs
├── jsconfig.json
├── biome.json
├── postcss.config.mjs
└── README.md
```

## Requisitos

- Node.js 18.17 ou superior
- npm

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```bash
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```
Executa a aplicação em modo de desenvolvimento.

```bash
npm run lint
```
Executa a validação do código com Biome.

```bash
npm run format
```
Formata os arquivos do projeto com Biome.

## Observações

- A marca da empresa é usada em elementos visuais e na aba do navegador.
- O projeto foi pensado para um visual premium e institucional.
- A navegação foi organizada em páginas separadas usando o App Router do Next.js.

## Deploy

O projeto pode ser implantado em plataformas como Vercel, Netlify ou qualquer ambiente capaz de hospedar aplicações Next.js.

## Autor

AM Digital Studio
