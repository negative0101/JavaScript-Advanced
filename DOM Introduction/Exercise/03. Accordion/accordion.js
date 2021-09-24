function toggle() {
    let changeTextConentButton = document.getElementsByClassName('button')[0];
    let displayStyle = document.getElementById('extra')

    if (displayStyle.style.display == 'none') {
        displayStyle.style.display = 'block'
        changeTextConentButton.innerHTML = 'Less'
    } else {
        displayStyle.style.display = 'none'
        changeTextConentButton.innerHTML = 'More'
    }
}