let ul = document.querySelector('#list')
let addBtn = document.querySelector('#addBtn')
let input = document.querySelector('#taskInput')

addBtn.addEventListener('click', e=> {
    e.preventDefault()

    createItem()
})

input.addEventListener('keypress', e=> {
    if (e.key === 'Enter') createItem()
})

function createItem() {
    if (input.value == '') return

    let listElement = document.createElement('li')
    let itemsdiv = document.createElement('div')

    listElement.textContent = input.value

    ul.append(listElement)

    listElement.classList.add('item')
    itemsdiv.classList.add('item__btns')

    listElement.append(itemsdiv)
    createButtons(itemsdiv, listElement)

    input.value = ''
}

function createButtons(d, node) {
    let deleteBtn = document.createElement('i')
    let checkBtn = document.createElement('i')
    
    deleteBtn.setAttribute("class","fa-solid fa-trash")
    d.append(deleteBtn)

    checkBtn.setAttribute("class","fa-solid fa-check")
    d.append(checkBtn)

    deleteBtn.addEventListener('click', e=>{
        node.remove()
    })

    checkBtn.addEventListener('click', e=> {
        node.style.color = node.style.color == "gray" ? "black" : "gray"
        node.style.textDecoration = node.style.textDecoration == "line-through green" ? "none" : "line-through green"
    })
}