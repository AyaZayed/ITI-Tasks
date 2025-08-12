// ** QUESTION 1 - TODO LIST **

const form = document.querySelector('form')
const inputTodo = document.querySelector('#todo-input')
const todosTable = document.querySelector('.todos-table')
const addTodoBtn = document.querySelector('#add-todo')
const tbody = document.querySelector('tbody')

//? submit form
form.addEventListener('submit', function (e) {
        e.preventDefault();
        const todo = inputTodo.value;

        if (todo) {
                tbody.insertAdjacentHTML('beforeend', `
                        <tr>
                                <td><input type="checkbox" name="todo-check" class="todo-check" /></td>
                                <td class='todo-text'>${todo.trim()}</td>
                                <td aria-label="delete"><i class="fa-solid fa-trash-can"></i></td>
                         </tr>
                        `)
                inputTodo.value = ''
        }
})

//? disable add button
inputTodo.addEventListener('input', function (e) {
        if (e.target.value) {
                addTodoBtn.disabled = false
        } else {
                addTodoBtn.disabled = true
        }
});

//? check todo as done
todosTable.addEventListener('change', function (e) {
        if (e.target.matches('.todo-check')) {
                const row = e.target.closest('tr');
                const textCell = row.querySelector('.todo-text');
                textCell.classList.toggle('done');
        }
});

//? delete todo
todosTable.addEventListener('click', function (e) {
        if (e.target.matches('.fa-trash-can')) {
                const canDelete = confirm('Are you sure to delete this todo?')
                const row = e.target.closest('tr')
                if (canDelete && row) row.remove()
        }
});

// ** QUESTION 2 - SHOW MESSAGE CHARACTER BY CHARACTER IN A NEW WINDOW **

const showMsgBtn = document.querySelector('#show-msg')

//? open new window
showMsgBtn.addEventListener('click', function () {
        const newWindow = window.open('./writing.html', '', 'width=400,height=400');

        newWindow.addEventListener('load', () => {
                const paragraph = newWindow.document.querySelector('#char-by-char');
                charByChar(paragraph, newWindow)
        });
})

//? display content character by character 
function charByChar(elem, newWindow) {
        const msg = `Your message will display character by character,
         A few seconds and this window will terminate...`
        let counter = 0;

        const charInterval = setInterval(() => {
                elem.textContent += msg.charAt(counter);
                counter++;
                if (counter === msg.length) {
                        setTimeout(() => {
                                clearInterval(charInterval);
                                newWindow.close()
                        }, 1000)
                }
        }, 100);
}