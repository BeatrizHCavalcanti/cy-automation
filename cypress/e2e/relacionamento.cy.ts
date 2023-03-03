/// <reference path="../support/index.ts" />

///// <reference path="../support/index.ts" />

import RelacionamentoElements from "./relacionamento/page/relacionamentoEncarte.page";


describe('Login', { tags: ['hml', '@login'] }, () => {
    const user = Cypress.env('user');
    const password = Cypress.env('password');
    const descricao = Cypress.env('descricao');
    const data1 = Cypress.env('data1');
    const linkImagemEncarte = Cypress.env('linkImagemEncarte');
    const TextoTeste = Cypress.env('TextoTeste');
    const data2 = Cypress.env('data2');
    const horario = Cypress.env('horario');

// instruções

    it('Login + relacionamento > Encarte', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarEncarteEmRelacionamento(descricao,data1,linkImagemEncarte);
    })

    it('Login + relacionamento > Token', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarTokenEmRelacionamento();
    });

    it('Login + relacionamento > NPS', () => {
        RelacionamentoElements.accessarUrlLogin(user,password);
        RelacionamentoElements.AcessarNPSEmRelacionamento(descricao,TextoTeste,data1,data2,horario);

    });
    
})
