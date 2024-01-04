/// <reference types="cypress" />

describe('Teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar mais de  3 contatos', () => {
        cy.get('div.sc-beqWaB.eQdhbg.contato')
            .should('have.lengthOf.greaterThan', 3)
        cy.get('input').should('have.length', 3)
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('felipe')
        cy.get('input[type="email"]').type('felipe@gmail.com')
        cy.get('input[type="tel"]').type('99999999')
        cy.get('.adicionar').click()
    }) 
})
