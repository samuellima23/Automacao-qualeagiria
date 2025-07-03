# Automação - Qual é a Gíria

Projeto de automação de testes end-to-end utilizando [Cypress](https://www.cypress.io/) e [Mochawesome](https://github.com/adamgruber/mochawesome) para gerar relatórios HTML.

## 🧪 Tecnologias utilizadas

- ✅ Cypress — Framework de testes E2E com JavaScript
- ✅ Mochawesome — Gerador de relatórios em HTML via Mocha

## 🚀 Como executar os testes

1. Instale as dependências do projeto:

```bash
npm install

Execute os testes com a interface gráfica do Cypress:
npx cypress open

Execute os testes em modo headless com relatório Mochawesome:
npx cypress run --reporter mochawesome

Estrutura do projeto
cypress/
├── e2e/
│   ├── pages/                 # Page Objects (ex: loginPage.js, rankingPage.js)
│   └── rankingGeral.spec.js   # Testes automatizados
│
└── support/
    └── e2e.js                 # Arquivo de suporte global

