//This file contains all data used in tests, such as selectors, mocks, text, urls etc. 

// general Selectors
export const filterInput = 'input[data-test="todoApp_filterInput"]';
export const labelTodos = 'div[data-test="todoApp_todosDiv"]';
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

// text:
export const noTodosText = 'There are no to-dos to show';
export const todoCounter0 = 'You have 0 todos left';
export const todoCounter1 = 'You have 1 todo left';
export const test1String = 'Test1';
export const test2String = 'Test2';
export const test3String = 'Test3';
export const testLocation = 'Your location: TestCity, PL. Your IP: 11.11.11.111';

// other:
export const standardWait = 10000;
export const standardBckgrnd = 'rgb(53, 50, 57)';

// mocks:
export const locationDataMock = {
    "ip": "11.11.11.111",
    "hostname": "11.11.11.11.your.provider.pl",
    "city": "TestCity",
    "region": "Greater Poland",
    "country": "PL",
    "loc": "11.1111,11.1111",
    "org": "Your provider",
    "postal": "00-000",
    "timezone": "Europe/Warsaw"
};
export const locationDataURL = 'http://ipinfo.io/json?token=1a11bd55cc8f9c';
