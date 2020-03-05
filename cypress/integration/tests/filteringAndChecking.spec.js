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
    test2String,
    test3String,
    labelTodos,
    todoTest1, 
    todoTest2,
    todoTest3,
    todoCounter4,
    test4String,
    actionWait,
    deleteText,
    todoCounter3,
} from '../../support/variables';

describe('Cypress demo tests- filtering and checking todos', () => {
    it('It should be possible to check todo, counter should be updated', () => {
        cy.storageTodo();
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(todoCounter).should('have.text', todoCounter3).then(($counter1) => {
            const text1 = $counter1.text();
            cy.checkTodo(test1String);
            cy.get(todoCounter).then(($counter2) =>{
                const text2 = $counter2.text();
                expect(text1).not.to.eq(text2);
            })
        });
        });
    });