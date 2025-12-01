const addBookmarkBtn = document.getElementById('addBookmarkBtn')
const bookmarkInput = document.getElementById('bookmarkInput')
const bookmarkList = document.getElementById('bookmarkList')

const saved = localStorage.getItem('links')
let links
if (saved){
    links = JSON.parse(saved)
} else {
    links = []
}
// localStorage.clear()
render()

function render() {
    bookmarkList.innerHTML = ''
    links.forEach((link, index) => {
        const li = document.createElement('li')

        const a = document.createElement('a')
        a.textContent = link
        a.classList.add('a')

        const deleteBtn = document.createElement('button')

        deleteBtn.textContent = 'delete'
        deleteBtn.classList.add('delete')


        deleteBtn.addEventListener('click', () => deleteLink(index))

        li.appendChild(a)
        li.appendChild(deleteBtn)
        bookmarkList.appendChild(li)
    });
    localStorage.setItem('links', JSON.stringify(links))
}

function deleteLink(index) {
    links.splice(index, 1)
    render()
}

addBookmarkBtn.addEventListener('click', () => {
    const value = bookmarkInput.value
    links.push(value)
    render()
    bookmarkInput.value = " "
})















const username = document.getElementById('username')
const password = document.getElementById('password')
const saveBtn = document.getElementById('saveBtn')

function render() {
    username.value = JSON.parse(localStorage.getItem('user'))
    password.value = JSON.parse(localStorage.getItem('pass'))
}

saveBtn.addEventListener('click', () => {
    const user = username.value
    const pass = password.value
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('pass', JSON.stringify(pass))

    username.value = ''
    password.value = ''
})

render()
