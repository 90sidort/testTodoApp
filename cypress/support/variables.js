//This file contains all data used in tests, such as selectors, mocks, text, urls etc. 

import {
    fourTodosPartlyMockData,
    locationDataMockData,
    threeTodosChckdMockData,
    threeTodosMockData,
    threeTodosPrrtMockData
} from './mocks'

// general Selectors
export const filterInput = 'input[data-test="todoApp_filterInput"]';
export const editInput = 'input[data-test="todoApp_editInput"]';
export const labelTodos = 'div[data-test="todoApp_todosDiv"]';
export const saveEditInput = 'button[data-test="todoApp_saveBtn"]';
export const hideCompleted = 'input[data-test="todoApp_hideCompleted"]';
export const completedOnly = 'input[data-test="todoApp_completedOnly"]';
export const locationHeader = 'h2[data-test="todoApp_locationHeader"]';
export const todoCounter = 'h2[data-test="todoApp_counter"]';
export const addInput = 'input[data-test="todoApp_addInput"]';
export const addButton = 'button[data-test="todoApp_addButton"]';
export const deleteButton = 'button[data-test="todoApp_deleteButton"]';
export const noTodos = 'p[data-test="todoApp_noTodos"]';
export const todoTest1 = 'label[data-test="todoApp_label_Test1"]'
export const todoTest2 = 'label[data-test="todoApp_label_Test2"]'
export const todoTest3 = 'label[data-test="todoApp_label_Test3"]'
export const todoTest4 = 'label[data-test="todoApp_label_Test4"]'
export const priorityBttn = 'button[data-test="todoApp_priority"]';

// text:
export const noTodosText = 'There are no to-dos to show';
export const todoCounter0 = 'You have 0 todos left';
export const todoCounter1 = 'You have 1 todo left';
export const todoCounter4 = 'You have 4 todos left';
export const todoCounter3 = 'You have 3 todos left';
export const test1String = 'Test1';
export const test2String = 'Test2';
export const test3String = 'Test3';
export const test4String = 'Test4';
export const testLocation = 'Your location: TestCity, PL. Your IP: 11.11.11.111';
export const deleteText = 'remove';
export const mCText = 'MUST CONTAIN TEXT';

// other:
export const standardWait = 10000;
export const actionWait = 500;
export const standardBckgrnd = 'rgb(53, 50, 57)';
export const priorityBckgrnd = 'rgb(157, 99, 129)';

// mocks:
export const locationDataURL = 'http://ipinfo.io/json?token=1a11bd55cc8f9c';
export const fourTodosPartly = fourTodosPartlyMockData;
export const locationDataMock = locationDataMockData;
export const threeTodosChckd = threeTodosChckdMockData;
export const threeTodos = threeTodosMockData;
export const threeTodosPrrt = threeTodosPrrtMockData;