import {
    test1String,
    todoTest1, 
    todoTest2,
    todoTest3,
    test4String,
    threeTodos,
    priorityBckgrnd,
    threeTodosPrrt,
    standardBckgrnd,
    editInput,
    saveEditInput,
    todoTest4,
    priorityBttn,
    mCText,
} from '../../support/variables';
describe('Cypress demo tests- editing todos', () => {
    it('It should be possible to mark todo as high priority', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.prioritizeTodo(1);
        cy.get(todoTest1).should('have.css', 'background-color', priorityBckgrnd);
    });
    it('It should be possible to mark all todos as high priority', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.prioritizeTodo(3);
        cy.get(todoTest1).should('have.css', 'background-color', priorityBckgrnd);
        cy.get(todoTest2).should('have.css', 'background-color', priorityBckgrnd);
        cy.get(todoTest3).should('have.css', 'background-color', priorityBckgrnd);
    });
    it('It should be possible to unmark todo as high priority', () => {
        cy.storageTodo(threeTodosPrrt);
        cy.visit('/');
        cy.prioritizeTodo(1);
        cy.get(todoTest1).should('have.css', 'background-color', standardBckgrnd);
    });
    it('It should be possible to unmark all todos as high priority', () => {
        cy.storageTodo(threeTodosPrrt);
        cy.visit('/');
        cy.prioritizeTodo(3);
        cy.get(todoTest1).should('have.css', 'background-color', standardBckgrnd);
        cy.get(todoTest2).should('have.css', 'background-color', standardBckgrnd);
        cy.get(todoTest3).should('have.css', 'background-color', standardBckgrnd);
    });
    it('It should be possible to edit todo text', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.get(todoTest1)
            .children('div')
            .children('button')
            .contains('edit')
            .click();
        cy.get(editInput).type(test4String);
        cy.get(saveEditInput).click();
        cy.get(todoTest4).should('exist');
        cy.get(todoTest1).should('not.exist');
    });
    it('When editing, priority and edit button should be disabled', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.get(todoTest1)
            .children('div')
            .children('button')
            .contains('edit')
            .click();
        cy.get(priorityBttn).eq(0).should('have.attr', 'disabled');
        cy.get(todoTest1)
            .children('div')
            .children('button')
            .contains('edit')
            .should('have.attr', 'disabled');
    });
    it('If edited todo is saved with no text info should be displayed', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.get(todoTest1)
            .children('div')
            .children('button')
            .contains('edit')
            .click();
        cy.get(editInput).clear();
        cy.get(saveEditInput).click();
        cy.get(todoTest1).should('not.exist');
        cy.get('span').contains(mCText).should('exist');
    });
    it('Should be able to edit high priority todo', () => {
        cy.storageTodo(threeTodosPrrt);
        cy.visit('/');
        cy.get(todoTest1)
            .children('div')
            .children('button')
            .contains('edit')
            .click();
        cy.get(editInput).type(test4String);
        cy.get(saveEditInput).click();
        cy.get(todoTest4).should('exist');
        cy.get(todoTest4).should('have.css', 'background-color', priorityBckgrnd);
        cy.get(todoTest1).should('not.exist');
    });
});