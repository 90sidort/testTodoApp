// This file contains so called cypress commands that are meant to replace Page Object Model
import { standardWait, standardBckgrnd, addInput, addButton } from './variables'

// This function (here as a command) deletes fetch method so all requests are handled as XHR.
// It was necessary to implement it as Cypress does not stub fetch requests
Cypress.Commands.add('polyfillFetch', () => {
    Cypress.log({});
    cy.readFile('cypress/support/unfetch.umd.js', { log: false })
        .as('unfetch')
        .then((unfetch) => {
            Cypress.on('window:before:load', (win) => {
                delete win.fetch;
                win.eval(unfetch);
                win.fetch = win.unfetch;
            });
        });
});

// This function (as a command) checks if a todo element with a given text content exists in the DOM
// It is not a perfect solution as there could be more than one todo with the same text content
Cypress.Commands.add("validateTodo", (name) => {
    cy.get(`label[data-test="todoApp_label_${name}"]`, { timeout: standardWait})
    .should('exist')
    .should('have.css', 'background-color', standardBckgrnd);
})

// This function (as a command) adds todo element with a given text content to the DOM
// It is not a perfect solution as there could be more than one todo with the same text content
Cypress.Commands.add("addTodo", (name) => {
    cy.get(addInput).type(name)
    cy.get(addButton).click();
})

// This function (as a command) deletes a todo element with a given text content and checks if it was done
// It is not a perfect solution as there could be more than one todo with the same text content
Cypress.Commands.add("deleteTodo", (name) => {
    cy.get(`label[data-test="todoApp_label_${name}"]`, { timeout: standardWait}).should('exist');
    cy.get('button[data-test="todoApp_remove_Test1"]').click();
    cy.get(`label[data-test="todoApp_label_${name}"]`, { timeout: standardWait}).should('not.exist');
})