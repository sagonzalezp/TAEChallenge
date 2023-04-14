export class Home{
    navigate(){
        cy.visit('https://www.demoblaze.com/index.html')
    }

    navigateTo(option){
        cy.contains(option).click()
    }
    
    selectProductByLinkText(text){
        cy.contains(text).click()
    }

}