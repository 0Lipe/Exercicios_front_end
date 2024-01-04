/// <reference types="cypress" />

describe('Teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve renderizar mais de 3 contatos', () => {
        cy.get('div.sc-beqWaB.eQdhbg.contato')
            .should('have.length', 3);
        cy.get('input').should('have.length', 3);
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('felipe');
        cy.get('input[type="email"]').type('felipe@gmail.com');
        cy.get('input[type="tel"]').type('99999999');
        cy.get('.adicionar').click();

        cy.get('div.sc-beqWaB.eQdhbg.contato').should('have.length.greaterThan', 3);
    });

    it('Deve editar o contato', () => {
        cy.get('.edit').first().click();
        cy.get('input[type="text"]').clear().type('Lena');
        cy.get('input[type="email"]').clear().type('Lena@gmail.com');
        cy.get('input[type="tel"]').clear().type('88888888');
        cy.get('.alterar').click();

        cy.get('.sc-beqWaB.eQdhbg.contato').should('contain', 'Lena@gmail.com');
    });

    it('Deve remover um contato', () => {
        cy.get('.delete').last().click();
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length.greaterThan', 2);
    });
});
