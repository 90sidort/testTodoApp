import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'
import { getLocation } from './details'

renderTodos()

const completeCheckbox = document.querySelector('input[id="completed-only"]')
const uncompleteCheckbox = document.querySelector('input[id="hide-completed"]')
const locationDiv = document.querySelector('div[id="location"]')
const locationH2 = document.createElement('h2')
let locationData
locationH2.setAttribute('class', 'header__subtitle')
locationH2.setAttribute('data-test', 'todoApp_locationHeader')
locationH2.setAttribute('style', 'margin-top: 2%; font-size:1.0rem')

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

document.querySelector('button[class="button_delete"]').addEventListener('click', () => {
    localStorage.removeItem('todos')
    location.reload()
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked,
        completedOnly: false,
    })
    completeCheckbox.checked=false
    renderTodos()
})

document.querySelector('#completed-only').addEventListener('change', (e) => {
    setFilters({
        completedOnly: e.target.checked,
        hideCompleted: false
    })
    uncompleteCheckbox.checked=false
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})

const render = () => {
    locationDiv
    locationH2.innerHTML = `Your location: ${locationData.city}, ${locationData.country}. Your IP: ${locationData.ip}`
    locationDiv.appendChild(locationH2)
}
const locationRequest = async () => {
    locationData = await getLocation()
    render()
}

locationRequest()
