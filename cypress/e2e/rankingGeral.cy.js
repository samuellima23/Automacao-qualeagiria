import rankingPage from './pages/rankingPage';

describe('Acesso à classificação geral', () => {
  beforeEach(() => {
    cy.visit('https://qualeagiria.com.br');
  });

  it('deve acessar a aba Geral dentro da classificação completa', () => {
    rankingPage.acessarClassificacaoCompleta();

    // Aguarda a nova página carregar
    cy.url().should('include', '/galera/podio/semanal');

    // Agora interage com a aba
    rankingPage.clicarAbaGeral();

    // Espera a aba "Geral" ficar visível/ativa
    rankingPage.validarAbaGeralAtiva();
  });
});
