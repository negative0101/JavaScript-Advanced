function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li')

    let items = document.getElementById('items');
    liElement.textContent = input.value

    items.appendChild(liElement)
}