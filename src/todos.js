import uuidv4 from 'uuid/v4'
import { renderTodos } from './views'

let todos = []

// Fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false,
        priority: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const setPriority = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo.priority) {
        todo.priority = false
    } else {
        todo.priority = true
    }
    saveTodos()
}

const editTodo = (id) => {
    const getTodoSpan = document.querySelector(`span[id="${id}"]`)
    const getDivWrap = document.querySelector(`div[id="div_${id}"]`)
    const getBtnWrap = document.querySelector(`div[id="buttons_${id}"]`)
    const getEditButton = document.querySelector(`button[id="${id}"]`)
    const getPrrtButton = document.querySelector(`button[id="priority_${id}"]`)
    getTodoSpan.remove()
    getEditButton.disabled = true
    getPrrtButton.disabled = true
    const editTodoField = document.createElement('input')
    const editTodoSave = document.createElement('button')
    editTodoSave.setAttribute('id', `save_${id}`)
    editTodoSave.textContent = 'save'
    editTodoSave.classList.add('button', 'button--text')
    editTodoField.setAttribute('style', 'background:#3d3941; color:#fafafa; width:98%;')
    editTodoField.setAttribute('id', id)
    getDivWrap.appendChild(editTodoField)
    getBtnWrap.appendChild(editTodoSave)
    editTodoSave.addEventListener('click', () => {
        const todo = todos.find((todo) => todo.id === id)
        if (!editTodoField.value.replace(/\s/g, '').length) {
            todo.text = 'MUST CONTAIN TEXT'
        } else {
            todo.text = editTodoField.value
        }
        saveTodos()
        getEditButton.disabled = false
        getPrrtButton.disabled = false
        renderTodos()
    })
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}


loadTodos()

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo, editTodo, setPriority }