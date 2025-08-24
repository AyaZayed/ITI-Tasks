const loadExternalBtn = document.querySelector('#loadExternalBtn')
const searchInput = document.querySelector('#searchInput')
const loadInternalBtn = document.querySelector('#loadInternalBtn')
const createProductBtn = document.querySelector('#createProductBtn')
const showMore = document.querySelector('#showMore')
const shownValue = document.querySelector('#shownCountValue')
const showLess = document.querySelector('#showLess')
const form = document.querySelector('form');
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const pagination = document.querySelector('.pagination')
const detailsSection = document.querySelector('.details-section')
const emptyForm = document.querySelector('#emptyForm')

const state = {
        shownCount: 10,
        counter: 10,
        data: [],
        search: '',
        source: null,
        loaded: false
}

const externalUrl = 'https://jsonplaceholder.typicode.com/albums'
const internalUrl = 'http://localhost:3000/products/'

const getExternalData = async function () {
        const res = await fetch(externalUrl)
        const json = await res.json()
        return json
}

const getInternalData = async function () {
        const res = await fetch(internalUrl)
        const json = await res.json()
        return json
}

window.addEventListener('load', async function () {
        state.loaded = true;
        state.source = 'external'
        state.data = await getExternalData()
})

loadExternalBtn.addEventListener('click', async function () {
        const externalData = await getExternalData()
        state.data = externalData
        state.source = 'external'
        renderTable(state.data.slice(0, state.shownCount))
})

loadInternalBtn.addEventListener('click', async function () {
        const internalData = await getInternalData()
        state.source = 'interanl'
        if (!internalData || !internalData.length) {
                renderEmptyForm()
        }
        else {
                state.data = internalData
                renderTable(state.data.slice(0, state.shownCount))
        }
})

const renderTable = function (data) {
        table.style.display = 'block'
        thead.innerHTML = ''
        tbody.innerHTML = ''

        const headers = Object.keys(data[0])

        for (let header of headers) {
                const th = document.createElement('th')
                th.textContent = header
                thead.append(th)
        }

        if (state.source === 'internal') {
                thead.insertAdjacentHTML('beforeend', actionsHeader)
        }

        for (let row of data) {
                const tr = document.createElement('tr')
                for (let val in row) {
                        const td = document.createElement('td')
                        td.textContent = row[val]
                        tr.append(td)
                }
                tbody.append(tr)
        }
}

const renderEmptyForm = function () {
        table.style.display = 'none'
        emptyForm.style.display = 'flex'
}
