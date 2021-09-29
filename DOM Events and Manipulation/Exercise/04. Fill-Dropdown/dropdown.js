function addItem() {

    let menu = document.getElementById('menu')
    let itemText = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let finalOption = document.createElement('option');
    finalOption.value = itemValue.value;
    finalOption.textContent = itemText.value;
    menu.appendChild(finalOption)
    itemText.value = ''
    itemValue.value = ''




}