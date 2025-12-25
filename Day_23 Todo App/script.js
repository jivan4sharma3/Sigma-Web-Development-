// Access the DOM Elements
const input = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Try to load saved todos from localstroage (if any )
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

// function to save the todo list to localstroage 
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Creating the dom node to add todo and append to it list
function createTodosNode(todo, index) {
    const li = document.createElement('li')

    // create a input to checked 
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = !!todo.completed
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked

        textSpan.style.textDecoration = todo.completed ? 'line-through' : '';
        saveTodos()
    })

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text
    textSpan.style.margin = '0 10px'
    if (todo.completed) {
        textSpan.style.textDecoration = 'line-through'
    }

    // Add double click event listener to edit todd
    textSpan.addEventListener("dblclick", () => {
        const newText = prompt("Edit todo", todo.text);
        if (newText !== null) {
            todo.text = newText.trim()
            textSpan.textContent = todo.text;
            saveTodos();
        }
    })

    // Deleted Todo
    const delBtn = document.createElement("button")
    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click', () => {
        todos.splice(index, 1)
        render()
        saveTodos()
    })

    li.appendChild(checkbox)
    li.appendChild(textSpan)
    li.appendChild(delBtn)

    return li


}

// Render the whole todo list from todos array
function render() {
    todoList.innerHTML = ""

    // Recreate each items
    todos.forEach((todo, index) => {
        const node = createTodosNode(todo, index)
        todoList.appendChild(node)
    });

}


// function to add todo
function addTodo() {
    const text = input.value.trim()

    if (!text) {
        return
    }

    // Push the new todo object
    todos.push({ text: text, completed: false, })
    input.value = ''
    render()
    saveTodos()
}

addBtn.addEventListener('click', addTodo)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTodo()
    }
})
render()