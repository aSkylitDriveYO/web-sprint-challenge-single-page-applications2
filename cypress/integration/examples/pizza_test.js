describe('Pizza Ordering Menu', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    const orderName = () => cy.get('input[name="orderName"]');

    const peppCheckbox = () => cy.get("input[name='pepperoni']");
    const excheeseCheckbox = () => cy.get("input[name='extraCheese']");
    const submitBtn = () => cy.get("button[type='submit']");
    const size = () => cy.get("select[name='size']");
    const traditionalSauce = () => cy.get("input[datacy='traditional']");
    const whiteSauce = () => cy.get("input[datacy='white']");

    it('Sanity Test', () => {
        expect(1 + 1).to.equal(2);
    })

    it('Checks that Order Name input accepts text', () => {
        orderName()
        .should('have.value', '')
        .type('Testy')
        .should('have.value', 'Testy')
        .clear()
    });

    it('Ensure all toppings can be clicked at once', () => {
        peppCheckbox()
        .click()
        .should('have.value', 'on')

        excheeseCheckbox()
        .click()
        .should('have.value', 'on')
    })

    it('User can submit form', () => {
        size()
        .select('Small');

        traditionalSauce()
        .click();

        peppCheckbox()
        .click();

        orderName()
        .type('Lord Farquaad');

        submitBtn()
        .should('be.enabled')
        .click()

        cy.contains('Success')
        .should('exist')
    })
})