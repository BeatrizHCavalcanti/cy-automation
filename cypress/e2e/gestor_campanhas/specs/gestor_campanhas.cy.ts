/// <reference path="../../../support/index.ts" />

import basePage from "page/base/base,page";
import loginPage from "page/login/login.page";
import gestor_campanhasPage from "../page/gestor_campanhas.page";
beforeEach(() =>{
    basePage.loginLoyalt();
})

describe('Gestor Campanhas',{ tags: ['@html', '@gestor_campanhas'] }, () => {

    it('Número da Sorte', () => {
        loginPage.validarHomePage();
    });
})
