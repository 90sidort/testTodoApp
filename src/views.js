import { getTodos, toggleTodo, removeTodo, editTodo, setPriority } from './todos'
import { getFilters } from './filters'

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const { searchText, hideCompleted, completedOnly } = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        const completedOnlyMatch = !completedOnly || todo.completed
        return searchTextMatch && hideCompletedMatch && completedOnlyMatch
    })
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.setAttribute('data-test', 'todoApp_noTodos')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const containerBtn = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span') 
    const removeButton = document.createElement('button')
    const editButton = document.createElement('button')
    const priorityButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', todo.id)
    checkbox.setAttribute('data-test', `todoApp_check_${todo.text}`)
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoText.setAttribute('style', 'display:block; word-wrap:break-word; width:98%')
    todoText.setAttribute('id', todo.id)
    todoText.setAttribute('data-test', `todoApp_span_${todo.text}`)
    containerEl.appendChild(todoText)

    // Setup containers
    todoEl.classList.add('list-item')
    todoEl.setAttribute('id', todo.id)
    containerEl.classList.add('list-item__container')
    containerBtn.setAttribute('style', 'display:flex;')
    containerEl.setAttribute('id', `div_${todo.id}`)
    containerBtn.setAttribute('id', `buttons_${todo.id}`)
    todoEl.setAttribute('data-test', `todoApp_label_${todo.text}`)
    if (todo.priority) {
        todoEl.setAttribute('style', 'background-color:#9d6381;')
    } else {
        todoEl.setAttribute('style', 'background-color:#353239;')
    }
    todoEl.appendChild(containerEl)

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    removeButton.setAttribute('data-test', `todoApp_remove_${todo.text}`)
    containerBtn.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    // Setup the edit button
    editButton.textContent = 'edit'
    editButton.classList.add('button', 'button--text')
    editButton.setAttribute('data-test', `todoApp_edit_${todo.text}`)
    editButton.setAttribute('id', todo.id)
    containerBtn.appendChild(editButton)
    editButton.addEventListener('click', () => {
        editTodo(todo.id)
    })

    // Setup the priority button
    priorityButton.textContent = 'priority'
    priorityButton.classList.add('button', 'button--text')
    priorityButton.setAttribute('id', `priority_${todo.id}`)
    priorityButton.setAttribute('data-test', `todoApp_priority`)
    containerBtn.appendChild(priorityButton)
    priorityButton.addEventListener('click', () => {
        setPriority(todo.id)
        renderTodos()
    })

    todoEl.appendChild(containerBtn)
    return todoEl
}
// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.setAttribute('data-test', 'todoApp_counter')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }