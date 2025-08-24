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

const state = {
        shownCount: 10,
        counter: 10,
        data: [],
        search: '',
        source: null,
        loaded: false
}

shownValue.value = state.shownCount

// ** GET DATA - READ **

async function getExternalData() {
        pagination.style.display = 'flex'
        const res = await fetch('https://jsonplaceholder.typicode.com/albums')
        const json = await res.json();
        state.loaded = true
        state.data = json;
        state.source = "external";
        state.shownCount = 10
        updateShownCount()
        return json;
}

async function getInternalData(id = '') {
        pagination.style.display = 'flex'
        const res = await fetch(`http://localhost:3000/products/${id}`)
        const json = await res.json();
        state.loaded = true
        state.data = Array.isArray(json) ? json : [json];
        state.source = "internal";
        state.search = ''
        state.shownCount = state.data.length;
        shownValue.value = state.shownCount;
        // if (state.shownCount <= state.counter) {
        //         showMore.disabled = true
        //         showLess.disabled = true
        // }
        return state.data;
}

loadExternalBtn.addEventListener('click', async function () {
        searchInput.value = '';
        const externalData = await getExternalData()
        createDataTable(externalData.slice(0, state.shownCount), true);
})

loadInternalBtn.addEventListener('click', async function () {
        searchInput.value = '';
        const internalData = await getInternalData()
        createDataTable(internalData.slice(0, state.shownCount))
})

searchInput.addEventListener('input', async function (e) {
        if (state.loaded === false) return;
        state.search = this.value.toLowerCase();

        const filtered = state.data.filter(item =>
                state.source === 'internal' ? item.name.toLowerCase().includes(state.search) :
                        item.title.toLowerCase().includes(state.search)
        );
        createDataTable(filtered.slice(0, state.shownCount), true);
})

// ** PAGINATION **

showMore.addEventListener('click', function () {
        showLess.disabled = false;

        if (state.shownCount >= (state.data.length - state.counter)) {
                this.disabled = true;
        }
        state.shownCount += state.counter;
        updateShownCount();
});

showLess.addEventListener('click', function () {
        showMore.disabled = false;
        if (state.shownCount <= (state.counter * 2)) {
                this.disabled = true;
        }
        state.shownCount -= state.counter;
        updateShownCount();
});

function updateShownCount() {
        shownValue.value = state.shownCount;
        let displayData = state.data;

        if (state.search) {
                displayData = displayData.filter(item =>
                        item.title.toLowerCase().includes(state.search)
                );
        }
        createDataTable(displayData.slice(0, state.shownCount), state.source === "external");
}

// ** RENDERING DATA **

function createDataTable(data) {
        table.style.display = 'block';
        table.style.setProperty('--table-elements', Object.keys(data[0]).length);
        thead.innerHTML = '';
        tbody.innerHTML = '';

        createRow(data[0], true)
        for (let row of data) {
                createRow(row, false)
        }
}

function createRow(row, isHeader = false) {
        const tr = document.createElement('tr');
        const keysArr = Object.keys(row)
        const valuesArr = Object.values(row)

        if (isHeader) {
                for (let key of keysArr) {
                        const th = document.createElement('th')
                        th.textContent = key
                        tr.insertAdjacentElement('afterbegin', th)
                }
                thead.insertAdjacentElement('afterbegin', tr);
                if (state.source === 'internal') {
                        tr.insertAdjacentHTML('beforeend', `<th class="actions">Actions</th> `)
                }
        } else {
                for (let value of valuesArr) {
                        const td = document.createElement('td')
                        td.textContent = value
                        tr.insertAdjacentElement('afterbegin', td)
                }

                if (state.source === 'internal') {
                        tr.insertAdjacentHTML('beforeend', `
                                <td class="actions" >
                                        <button class="details btn" data-id="${row.id}">details</button>
                                        <button class="update btn" data-id="${row.id}">update</button>
                                        <button class="delete btn" data-id="${row.id}">delete</button>
                                </td>
                `)
                }
                tbody.insertAdjacentElement('afterbegin', tr);
        }
}

// ** DETAILS DATA **

table.addEventListener('click', async function (e) {
        if (e.target.matches('.details')) {
                const data = await getInternalData(e.target.dataset.id)
                openDetails(data[0])
        }
})

function openDetails(data) {
        openModal()
        form.innerHTML = '';
        detailsSection.innerHTML = ''
        for (let key in data) {
                detailsSection.insertAdjacentHTML('beforeend', `<p> ${key}: ${data[key]}</p> `)
        }
        detailsSection.insertAdjacentHTML('beforeend', `
                <input type = "button" class="btn cancel" value = "Cancel" onclick = "closeModal()" />
                        `)

}

// ** CREATE DATA **
createProductBtn.addEventListener('click', async function () {
        if (state.source === 'external') return
        const data = await getInternalData()
        createForm(data[0], true)
})

// ** UPDATE DATA **
table.addEventListener('click', async function (e) {
        if (e.target.matches('.update')) {
                const id = e.target.dataset.id
                const data = await getInternalData(id)
                createForm(data[0])
        }
})

// ** CREATE & UPDATE FUNCTIONS **

function createForm(data, isNew) {
        openModal();
        form.innerHTML = '';
        detailsSection.innerHTML = ''
        form.dataset.id = isNew ? '' : data.id

        for (let key in data) {
                if (key === 'id') {
                        continue
                }
                form.insertAdjacentHTML('beforeend', `
                        <div class="form-group">
                                <label for="${key}">${key}</label>
                                <input type="${isNaN(data[key]) ? 'text' : 'number'}" required name="${key}" id="${key}" value="${isNew ? '' : data[key]}">
                        </div>
        `)
        }
        form.insertAdjacentHTML('beforeend', `
                <div class="form-buttons" >
                        <input type="button" class="btn cancel" value="Cancel" onclick="closeModal()" />
                        <input type="submit" class="btn submit" value="${isNew ? 'Create' : 'Update'}" />
                </div>
                `)
}

form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const thisForm = e.target;
        const formData = new FormData(thisForm);
        const submittedData = Object.fromEntries(formData.entries());
        console.log(formData);
        console.log(submittedData);

        const id = form.dataset.id;
        const url = id
                ? `http://localhost:3000/products/${id}`
                : `http://localhost:3000/products`;

        const method = id ? "PUT" : "POST";
        console.log(method);

        try {
                await fetch(url, {
                        method,
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(submittedData)
                });

                alert(id ? "Updated successfully!" : "Created successfully!");
        } catch (err) {
                console.error("Error:", err);
        }
        closeModal()
});


function openModal() {
        modal.dataset.open = true
        overlay.style.display = 'block'
        table.style.display = 'none';
}

function closeModal() {
        modal.dataset.open = false
        overlay.style.display = 'none'
        table.style.display = 'block';
}

// ** DELETE DATA **
table.addEventListener('click', async function (e) {
        if (e.target.matches('.delete')) {
                const id = e.target.dataset.id
                let canDelete = confirm('are you sure you want to delete?')
                if (canDelete) {
                        await fetch(`http://localhost:3000/products/${id}`, {
                                method: 'delete'
                        })
                }
        }
})