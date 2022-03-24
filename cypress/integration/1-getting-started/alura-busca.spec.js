describe('alura busca casos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br'); // visitar nosso site com o comando.
        // Como queremos visitar o mesmo URL no início de todos os nossos testes,
        // nós o incluímos em nossa função beforeEach para que ele seja executado antes de cada teste.
    })

    it('Buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
    })
})