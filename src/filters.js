const filters = {
    searchText: '',
    hideCompleted: false,
    completedOnly: false
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted, completedOnly }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
    if (typeof completedOnly === 'boolean') {
        filters.completedOnly = completedOnly
    }
}

export { getFilters, setFilters }