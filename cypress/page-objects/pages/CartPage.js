export class Cart{
    placeOrder(orderData){
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type(orderData.name)
        cy.get('#country').type(orderData.country)
        cy.get('#city').type(orderData.city)
        cy.get('#card').type(orderData.card)
        cy.get('#month').type(orderData.month)
        cy.get('#year').type(orderData.year)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.confirm').click()
    }
    
    checkCartItems(items){
        items.forEach(element => {
            cy.contains(element)
        });
    }
}