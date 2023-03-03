/// <reference path="../../../support/index.ts" />

import { delay } from 'cypress/types/bluebird';
import RelacionamentoElements from './relacionamentoEncarte.elements';
//import loginElements from './login.elements';

class RelacionamentoPage {
    accessarUrlLogin(user, password) {
        cy.visit('/');
        cy.get(RelacionamentoElements.txt_user).type(user);
        cy.get(RelacionamentoElements.txt_password).type(password, { log: false });
        cy.get(RelacionamentoElements.btn_log_in).click();
    }
    //acessos em relacionamento
    AcessarEncarteEmRelacionamento(descricao, data1, linkImagemEncarte) {
        cy.get('span').contains('Relacionamento').click();
        cy.get('span').contains('Encarte').click();
        cy.get('button').contains('Novo Encarte').click();
        cy.get(RelacionamentoElements.txt_descricao).type(descricao);
        cy.get(RelacionamentoElements.txt_inicio).type(data1);
        cy.get(RelacionamentoElements.txt_final).click();
        cy.get('span').contains('MAR 2023').click();
        cy.get('button').contains('2023').click();
        cy.get('button').contains('JUL').click();
        cy.get('button').contains('28').click();
        cy.get(RelacionamentoElements.ativarCheckbox).click();
        cy.get('span').contains('Selecione um Filtro').click();
        cy.get('span').contains('POR LOJA').click();
        cy.get('span').contains('Selecione as Lojas Participantes').click();
        cy.get('span').contains('#ApuNroSorte').click();
        cy.get(RelacionamentoElements.btn_novaImg).click({ force: true });
        cy.get(RelacionamentoElements.txt_linkImg).type(linkImagemEncarte);
        cy.get(RelacionamentoElements.btn_salvarImg).click({ force: true });
        cy.get(RelacionamentoElements.txt_descricao).click({ force: true });
        cy.get(RelacionamentoElements.btn_salvarEncarte).click({ force: true });
        cy.get('button').contains('OK').click();

        //edicaoImg(){
        //cy.get(RelacionamentoElements.edit_Img).click();
        //cy.get('mat-icon').contains('close').click();
        // parte da edição aq
        //}
        //excluirImg(){
        //cy.get(RelacionamentoElements.excluir_Img).click();
        //cy.get(RelacionamentoElements.btn_cancelarExcluirImg).click({force: true});
        //cy.get(RelacionamentoElements.excluir_Img).click();
        //cy.get(RelacionamentoElements.btn_confirmarExcluirImg).contains('Confirmar').click({force: true});
        //}


    }
    AcessarTokenEmRelacionamento() {
        cy.get('span').contains('Relacionamento').click();
        cy.get('span').contains('Token').click();
        cy.get('button').contains('Atualizar').click();
    }
    AcessarNPSEmRelacionamento(descricao, TextoTeste, data1, data2, horario) {
        cy.get('span').contains('Relacionamento').click();
        cy.get('span').contains('NPS').click();
        cy.get('button').contains('Novo Questionário').click();
        cy.get(RelacionamentoElements.txt_nomePesquisa).type(descricao);
        cy.get(RelacionamentoElements.txt_objetivoPesquisa).type(TextoTeste);
        cy.get(RelacionamentoElements.txt_inicio).type(data1);
        cy.get(RelacionamentoElements.txt_final).click();
        cy.get('button').contains('MAR 2023').click();
        cy.get('button').contains('2023').click();
        cy.get('button').contains('28').click();
        cy.get('button').contains('Próximo').click();
        cy.get(RelacionamentoElements.seletor_pesquisa).click();
        cy.get('span').contains('o lab').click();
        cy.get(RelacionamentoElements.txt_coment_pesquisa).type(descricao);
        cy.get(RelacionamentoElements.btn_proximo).click();
        cy.get(RelacionamentoElements.icon_azul_pesquisa).click();
        cy.get(RelacionamentoElements.icon_cinza_pesquisa).click();
        cy.get(RelacionamentoElements.txt_cad_inicial).type(data1);
        cy.get(RelacionamentoElements.txt_cad_final).type(data2);
        cy.get(RelacionamentoElements.text_genero_pesquisa).click({ force: true });
        cy.get('span').contains('Masculino').click();
        cy.get(RelacionamentoElements.text_personas_pesquisa).click({ force: true });
        cy.get('span').contains(' TODA À BASE (Atualização Diária) ').click();
        cy.get(RelacionamentoElements.text_lojas_pesquisa).click({ force: true });
        cy.get('span').contains('Avanco').click();
        cy.get(RelacionamentoElements.ativarCheckbox).click();
        cy.get(RelacionamentoElements.check_comunicarSMS_pesquisa).click({ force: true });
        cy.get('span').contains('Filtrar').click();
        cy.get(RelacionamentoElements.btn_proximo_pesquisa).click();
        //cy.get(RelacionamentoElements.text_hr_envio).click();
        cy.get(RelacionamentoElements.text_hr_envio).type(horario);
        cy.get('span').contains('Salvar como rascunho').click();
        cy.get('span').contains('Agendar envio').click();
        cy.get('button').contains('Sim').click();
        //final ok
    }




}

export default new RelacionamentoPage();
