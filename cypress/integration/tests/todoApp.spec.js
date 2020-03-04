import {
    noTodos,
    filterInput, 
    hideCompleted,
    completedOnly,
    locationHeader,
    todoCounter,
    addInput,
    addButton,
    deleteButton,
    noTodosText,
    todoCounter0,
    test1String,
    locationDataMock,
    locationDataURL,
    testLocation,
    todoCounter1,
} from '../../support/variables';

describe('Cypress demo tests for Todo App', () => {
    it('When there are no todos, message should be displayed and counter shoud equal 0', () => {
        cy.visit('/');
        cy.get(noTodos).should('have.text', noTodosText)
        cy.get(todoCounter).should('have.text', todoCounter0)
        });
    it('Location and IP should be displayed correctly', () => {
        cy.polyfillFetch();
        cy.server();
        cy.route('GET', locationDataURL, locationDataMock);
        cy.visit('/');
        cy.get(locationHeader).should('have.text', testLocation);
        });
    it('It should be possible to add new to-do, counter should equal 1 afterwards', () => {
        cy.visit('/');
        cy.get(addInput).type(test1String)
        cy.get(todoCounter).should('have.text', todoCounter0).then(() => {
            cy.get(addButton).click();
            cy.validateTodo(test1String);
            cy.get(todoCounter).should('have.text', todoCounter1);
        });
        });
    it('It should be possible to delete newly added to-do, counter should equal 0 afterwards', () => {
        cy.visit('/');
        cy.get(addInput).type(test1String)
        cy.get(addButton).click();
        cy.validateTodo(test1String);
        cy.deleteTodo(test1String);
        cy.get(todoCounter).should('have.text', todoCounter0)
        });
    it('It should be possible to add new to-do to existing ones, counter should be updated', () => {
        cy.visit('/');
        cy.get(addInput).type(test1String)
        cy.get(addButton).click();
        cy.validateTodo(test1String);
        });
    });