function deleteByEmail() {
    const input = document.querySelector('input[name="email"]')
    let listElements = Array.from(document.querySelectorAll('tbody tr'));
    let resultMatch = document.getElementById('result')
    let deleted = false
    for (let el of listElements) {
        if (el.children[1].textContent == input.value) {
            el.remove()
            deleted = true;

        }
    }
    if (deleted) {
        resultMatch.textContent = 'Deleted.'
    } else {
        resultMatch.textContent = 'Not found.'

    }
}