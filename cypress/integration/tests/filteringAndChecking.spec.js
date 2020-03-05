// Filtering and Checking spec
// import {
//     noTodos,
//     filterInput, 
//     hideCompleted,
//     completedOnly,
//     locationHeader,
//     todoCounter,
//     addInput,
//     addButton,
//     deleteButton,
//     noTodosText,
//     todoCounter0,
//     test1String,
//     locationDataMock,
//     locationDataURL,
//     testLocation,
//     todoCounter1,
//     test2String,
//     test3String,
//     labelTodos,
//     todoTest1, 
//     todoTest2,
//     todoTest3,
//     todoCounter4,
//     test4String,
//     actionWait,
//     deleteText,
// } from '../../support/variables';

// describe('Cypress demo tests- saving and deleting todos', () => {
//     it('When there are no todos, message should be displayed and counter shoud equal 0', () => {
//         cy.visit('/');
//         cy.get(noTodos).should('have.text', noTodosText)
//         cy.get(todoCounter).should('have.text', todoCounter0)
//         });
//     it('Location and IP should be displayed correctly', () => {
//         cy.polyfillFetch();
//         cy.server();
//         cy.route('GET', locationDataURL, locationDataMock);
//         cy.visit('/');
//         cy.get(locationHeader).should('have.text', testLocation);
//         });
//     it('It should be possible to add new to-do, counter should equal 1 afterwards', () => {
//         cy.visit('/');
//         cy.get(todoCounter).should('have.text', todoCounter0).then(() => {
//             cy.addTodo(test1String);
//             cy.validateTodo(test1String);
//             cy.get(todoCounter).should('have.text', todoCounter1);
//             });
//         });
//     it('It should be possible to add new to-do by clicking enter in input field, counter should equal 1 afterwards', () => {
//         cy.visit('/');
//         cy.get(todoCounter).should('have.text', todoCounter0).then(() => {
//             cy.get(addInput).type(`${test1String}{enter}`);
//             cy.validateTodo(test1String);
//             cy.get(todoCounter).should('have.text', todoCounter1);
//             });
//         });
//     it('It should be possible to delete newly added to-do, counter should equal 0 afterwards', () => {
//         cy.visit('/');
//         cy.addTodo(test1String);
//         cy.validateTodo(test1String);
//         cy.deleteTodo(1);
//         cy.get(todoCounter).should('have.text', todoCounter0)
//         });
//     it('It should be possible to add multiple to-dos, to-dos should be sorted from oldest to newest', () => {
//         cy.visit('/');
//         cy.addTodo(test1String);
//         cy.validateTodo(test1String);
//         cy.addTodo(test2String);
//         cy.validateTodo(test2String);
//         cy.addTodo(test3String);
//         cy.validateTodo(test2String);
//         cy.get(labelTodos)
//             .children(todoTest1)
//             .next(todoTest2)
//             .next(todoTest3);
//         });
//     it('It should be possible to add new todo when there are existing ones already, cunter should be updated', () => {
//         cy.visit('/');
//         cy.storageTodo();
//         cy.validateTodo(test1String);
//         cy.addTodo(test4String);
//         cy.validateTodo(test4String);
//         cy.get(todoCounter).should('have.text', todoCounter4);
//         });
//     it('It should be possible to delete all todos one by one, cunter should be updated', () => {
//         cy.visit('/');
//         cy.storageTodo();
//         cy.validateTodo(test1String);
//         cy.deleteTodo(3);
//         cy.get(todoCounter).should('have.text', todoCounter0);
//         });
//     it('It should be possible to delete all todos by clicking delete all, cunter should be updated', () => {
//         cy.visit('/');
//         cy.storageTodo();
//         cy.validateTodo(test1String);
//         cy.get(deleteButton).click();
//         cy.get(todoCounter).should('have.text', todoCounter0);
//         });
//     });