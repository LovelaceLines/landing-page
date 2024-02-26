<div style="background-color: #212121; padding: 20px;">
  <p align="center" style="background-color: #212121; padding: 20px;">
    <img src="./docs/icons/lovelace-lines.png" width="76px" align="center" alt="Lovelace Lines" />
    <h1 style="color: #ffffff;" align="center">Lovelace Lines</h1>
  </p>
</div>

Este repositório abriga a landing page e o blog da Lovelace Lines. Desenvolvido com uma combinação de tecnologias modernas, o projeto oferece uma experiência dinâmica e eficiente aos usuários com componentes SSR, CSR e Api de consulta. 

## Tecnologias

| [Next.js](https://nextjs.org/) | [React](https://react.dev/) | [MUI](https://www.npmjs.com/package/@mui/material) | [rehype](https://www.npmjs.com/package/rehype) | [remark](https://www.npmjs.com/package/remark) | [Fuse.js](https://www.fusejs.io/) | [Prisma](https://www.prisma.io/) | [ESLint](https://www.npmjs.com/package/eslint) | [Zod](https://zod.dev/) | [Jest](https://jestjs.io/) | [Babel](https://babeljs.io/) |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| ![Next.js](./docs/icons/nextjs.png) | ![React](./docs/icons/react.png) | ![MUI](./docs/icons/mui.png) | ![rehype](./docs/icons/rehype.png) | ![remark](./docs/icons/remark.png) | ![Fuse.js](./docs/icons/fusejs.png) | ![Prisma](./docs/icons/prisma.png) | ![ESLint](./docs/icons/eslint.png) | ![Zod](./docs/icons/zod.png) | ![Jest](./docs/icons/jestjs.png) | ![Babel](./docs/icons/babel.png) |

## Funcionalidades

* Explore postagens e perfis dos autores com facilidade.
* Refine sua busca por postagens usando tags pré-definidas.
* Navegue por uma lista vasta de conteúdo relacionados.
* Configure postagens comuns para uma experiência personalizada.
* Estabeleça conexões entre postagens, autores e tags para uma compreensão mais profunda.

## Getting Started

O blog foi desenvolvido com base em Markdown, usando `rehype` e `remark` para a conversão `.md -> .html`. Caso queira utilizar o código, fique a vontade. Abaixo sequem algumas dicas e restrições quanto ao uso e flexibilidade dos arquivos Markdown:

* Arquivos markdown (authos/posts/tags) devem ser salvos em [`/public`](./public). Caso deseje alterar a rota, pode fazer isso em [`/src/_libs/api.ts`](./src/_libs/api.ts).
* Nem todas as propriedades são obrigatórias. Você pode verificar os tipo de dados em [`/src/_types`](./src/_types).

Detalhes sobre a inicialização do projeto estão em [`/docs/Next.README.md`](./docs/Next.README.md)

## Créditos

Agradecimentos especiais aos projetos que inspiraram e forneceram recursos:

* https://github.com/timlrx/tailwind-nextjs-starter-blog
* https://github.com/vercel/next.js/tree/canary/examples/blog-starter

## Licença

Este projeto é distribuído sob a licença [MIT](./LICENSE), o que significa que você é livre para explorar, modificar e compartilhar o código conforme sua necessidade.