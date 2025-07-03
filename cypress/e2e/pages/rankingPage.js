class RankingPage {
  acessarClassificacaoCompleta() {
    cy.contains('Ver classificação completa').click({ force: true });
  }

  clicarAbaGeral() {
    cy.contains('Geral').click();
  }

  validarAbaGeralAtiva() {
    cy.get('div.c_ranking_selector a.highlighted').should('contain.text', 'Geral');
  }
}

export default new RankingPage();
