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
    threeTodosChckd,
    threeTodos,
    fourTodosPartly,
} from '../../support/variables';

describe('Cypress demo tests- filtering and checking todos', () => {
    it('It should be possible to check todo, counter should be updated', () => {
        cy.storageTodo(threeTodos);
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
    it('It should be possible to uncheck todo, counter should be updated', () => {
        cy.storageTodo(threeTodosChckd);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(todoCounter).should('have.text', todoCounter0).then(($counter1) => {
            const text1 = $counter1.text();
            cy.checkTodo(test1String);
            cy.get(todoCounter).then(($counter2) =>{
                const text2 = $counter2.text();
                expect(text1).not.to.eq(text2);
            })
        });
        });
    it('It should be possible to check all todos, counter should be updated', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(todoCounter).should('have.text', todoCounter3).then(($counter1) => {
            const text1 = $counter1.text();
            cy.checkTodo(test1String);
            cy.checkTodo(test2String);
            cy.checkTodo(test3String);
            cy.get(todoCounter).then(($counter2) =>{
                const text2 = $counter2.text();
                expect(text1).not.to.eq(text2);
            })
        });
        });
    it('It should be possible to uncheck all todos, counter should be updated', () => {
        cy.storageTodo(threeTodosChckd);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(todoCounter).should('have.text', todoCounter0).then(($counter1) => {
            const text1 = $counter1.text();
            cy.checkTodo(test1String);
            cy.checkTodo(test2String);
            cy.checkTodo(test3String);
            cy.get(todoCounter).then(($counter2) =>{
                const text2 = $counter2.text();
                expect(text1).not.to.eq(text2);
            })
        });
        });
    it('Hide completed should work', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(hideCompleted).click();
        cy.validateTodo(test3String);
        cy.validateTodo(test3String);
        cy.get(todoTest1).should('not.exist');
        cy.get(todoTest2).should('not.exist');
        cy.get(hideCompleted).click();
        cy.get(todoTest1).should('exist');
        });
    it('Completed only should work', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(completedOnly).click();
        cy.validateTodo(test1String);
        cy.validateTodo(test2String);
        cy.get(todoTest3).should('not.exist');
        cy.get(completedOnly).click();
        cy.get(todoTest3).should('exist');
        });
    it('It should be possible to swap views', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(hideCompleted).click();
        cy.validateTodo(test3String);
        cy.get(todoTest1).should('not.exist');
        cy.get(completedOnly).click();
        cy.get(todoTest1).should('exist');
        cy.validateTodo(test1String);
        });
    it('It should be possible to filter todos by text', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(filterInput).type(test1String);
        cy.validateTodo(test1String);
        cy.get(todoTest3).should('not.exist');
        cy.get(filterInput).clear();
        cy.get(filterInput).type(test3String);
        cy.validateTodo(test3String);
        cy.get(todoTest1).should('not.exist');
        });
    it('Deleting input from filter should show all todos', () => {
        cy.storageTodo(threeTodos);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(filterInput).type(test1String);
        cy.validateTodo(test1String);
        cy.get(todoTest3).should('not.exist');
        cy.get(filterInput).clear();
        cy.validateTodo(test3String);
        cy.validateTodo(test2String);
        cy.validateTodo(test1String);
        });
    it('It should be possible to filter todos by text when hide completed selected', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(hideCompleted).click();
        cy.get(filterInput).type(test4String);
        cy.validateTodo(test4String);
        cy.get(todoTest3).should('not.exist');
        cy.get(filterInput).clear();
        cy.validateTodo(test3String);
        cy.get(todoTest1).should('not.exist');
        });
    it('It should be possible to filter todos by text when completed only selected', () => {
        cy.storageTodo(fourTodosPartly);
        cy.visit('/');
        cy.validateTodo(test1String);
        cy.get(completedOnly).click();
        cy.get(filterInput).type(test1String);
        cy.validateTodo(test1String);
        cy.get(todoTest2).should('not.exist');
        cy.get(filterInput).clear();
        cy.validateTodo(test2String);
        cy.get(todoTest3).should('not.exist');
        });
    });