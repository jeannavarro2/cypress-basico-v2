/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function()  {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })



    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Jean')
        cy.get('#lastName').type('Navarro')
        cy.get('#email').type('jeanmatheonavarro@gmail.com')
        cy.get('#open-text-area').type('Eu quero que esse texto seja digitado grandemente', {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    
  })
  })