function addItem() {
    // select input field
    let input = document.getElementById('newItemText');

    //create element li
    let liEl = document.createElement('li')

    // assign value to li element
    liEl.textContent = input.value

    //create a element with text Delete that's clickable thanks to href
    let button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#'


    // assign the button to the element 
    liEl.appendChild(button)


    // event listener that removes the liEle
    button.addEventListener('click', () => (liEl.remove()));

    // assign the finished liElement to the items list 
    document.getElementById('items').appendChild(liEl)
    // clear input
    input.value = ''

}