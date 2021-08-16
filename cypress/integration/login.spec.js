/// <reference types="cypress" />


context('Funcionalidade Login', () =>{


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should('contain' , 'Logout')
        cy.get('a > .hidden-xs').should('contain' , 'Welcome aluno_ebac !')
        
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-error').should('contain' , 'e-mail desconhecido.')
    })


    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()


        cy.get('.woocommerce-error').should('contain' , 'Perdeu a senha?')
    })
})