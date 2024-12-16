
describe('Testar Triagem', () => {
    before(() => {
      // Acesse o site e faça o login antes dos testes
      cy.visit('https://energyadvisor.acessoenergia.com.br/auth/login');
      
      // Preenche o campo de email e senha
      cy.get('input[name="email"]').type('admin@admin.com');  
      cy.get('input[name="password"]').type('aTRoACktOrDO222');  
  
      // Clica no botão de login
      cy.get(':nth-child(4) > .w-full').click();
  
      // Espera até que a URL da página de dashboard seja carregada
      cy.url().should('include', '/home');
      cy.contains('Dashboard').should('be.visible'); // Verifica que o dashboard está visível
    });
  
    it('Deve preencher os dados na triagem corretamente', () => {
      // Aguardar até que a página de triagem esteja visível
      cy.contains('Triagem').should('be.visible').click();  // Clique no botão/menú de triagem
  
      // Espera até que os campos do formulário estejam visíveis
      cy.get('.grid > :nth-child(1) > :nth-child(1) > div > .w-full').should('be.visible');
      
      // Preencher o formulário
      cy.get('.grid > :nth-child(1) > :nth-child(1) > div > .w-full').type('Empresa XYZ');
      cy.get(':nth-child(2) > .flex > :nth-child(1) > div > .border').select('Pessoa Jurídica');  // Se for Jurídica
      cy.get(':nth-child(3) > :nth-child(1) > div > .w-full').type('12.345.678/0001-95');  // Exemplo de CNPJ
      cy.get('.grid > :nth-child(4) > :nth-child(1) > :nth-child(2) > .w-full').type('cliente@empresa.com');
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .w-full').type('(11) 98765-4321');
      cy.get(':nth-child(6) > .flex > :nth-child(1) > :nth-child(2) > .border').select('São Paulo');
      cy.get(':nth-child(7) > .flex > :nth-child(1) > :nth-child(2) > .border').select('ENEL São Paulo');
  
      // Submeter o formulário
      cy.get('.bg-blue-600').click();
      
      // Espera até que a página de sucesso ou a URL esperada seja carregada
      cy.get('.h-full > .flex > .text-sm').should('be.visible', {timeout: 7000});


      // 2º Passo: Clicar em "Não tenho fatura"
      cy.get('.bg-blue-600').click();  // Clica no botão/link de "Não tenho fatura"
    
    // Aguardar até que o segundo formulário seja exibido
    cy.get(':nth-child(1) > .flex > :nth-child(1) > .text-gray-500').should('be.visible');  // Espera o campo "Grupo Tarifário" ser visível
    
    // Preencher o segundo formulário
    cy.get(':nth-child(1) > .flex > :nth-child(1) > div > .border').select('Grupo A');  // Selecione o Grupo Tarifário desejado
    cy.get('.grid > :nth-child(2) > .flex > :nth-child(1) > div > .border').select('Sim');  // Se o cliente já está no Mercado Livre (ACL)
    cy.get(':nth-child(8) > .flex > :nth-child(1) > div > .border').select('Time interno do cliente');  // Como é feita a gestão da compra de energia
    cy.get(':nth-child(9) > .mt-2 > .rmsc > .dropdown-container > .dropdown-heading > .dropdown-heading-value').click();
    cy.findByLabelText('Select All').click(); 
    // Agora, selecione a opção desejada
   

    
    // Submeter o segundo formulário
    cy.get('.bg-blue-600').click();
    
    // 3º Passo: Verificar se a triagem foi concluída
    //cy.url().should('include', '/triagem/concluida');
    //cy.contains('Triagem concluída').should('be.visible');
  });
});
  
  