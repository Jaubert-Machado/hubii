# Hubii - Teste Técnico

Projeto desenvolvido como teste técnico para a Hubii, com o objetivo de desenvolver uma plataforma de listagem
de pedidos.

O projeto também encontrasse disponível em deploy, [aqui](https://hubii.vercel.app/).

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação

Primeiro, clone o repositório:

```bash
git clone https://github.com/Jaubert-Machado/hubii.git
cd hubii
```

## Uso
Depois, instale as dependências:

O projeto foi desenvolvido utilizando PNPM, mas você pode utilizar NPM ou Yarn.

```bash
npm install
# ou
yarn install
# ou
pnpm install
```
Abra http://localhost:3000 no seu navegador para ver o resultado.

## Scripts Disponíveis

No diretório do projeto, você pode rodar:


`npm run dev`

Roda o aplicativo em modo de desenvolvimento.
Abra http://localhost:3000 para ver no navegador.


`npm run build`

Compila o aplicativo para produção na pasta build.
Ele corretamente empacota o React no modo de produção e otimiza a construção para o melhor desempenho.


`npm run start`

Roda o aplicativo no modo de produção.
Certifique-se de rodar npm run build primeiro.


`npm run test`

Roda os testes usando Jest.

## Estrutura de Pastas

```
hubii/
├── public/
├── src/
│   ├── api/
│   ├── app/
│   │   ├── configuracoes/
│   │   └── pedidos/
│   ├── assets/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── configs/
│   ├── database/
│   ├── hooks/
│   ├── messages/
│   ├── providers/
│   ├── schemas/
│   ├── types/
│   ├── utils/
└── README.md
```

## Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Styled-Components
- Jest