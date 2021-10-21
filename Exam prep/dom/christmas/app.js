function solution() {
    const placeHolder = document.querySelector('body > div > section:nth-child(1) > div > input[type=text]');
    const listOfGifts = document.querySelector('body > div > section:nth-child(2) > ul')
    const sentGifts = document.querySelector("body > div > section:nth-child(3) > ul")
    const discardedGifts = document.querySelector("body > div > section:nth-child(4) > ul")
    const addGiftBtn = document.querySelector('body > div > section:nth-child(1) > div > button');

    addGiftBtn.addEventListener('click', addGift);

    function addGift(e) {
        e.preventDefault();
        if (placeHolder.value == "") {
            return;
        }
        const li = `<li class="gift">${placeHolder.value}<button id="sendButton">Send</button><button id="discardButton">Discard</button></li>`;
        listOfGifts.innerHTML += li


        placeHolder.value = "";
        const sendButton = document.getElementById('sendButton');
        const discardButton = document.getElementById('discardButton');
        sendButton.addEventListener("click", send);
        discardButton.addEventListener("click", discard);
        Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => listOfGifts.appendChild(li));



        function send(e) {
            sentGifts.innerHTML += `<li>${sendButton.previousSibling.textContent}</li>`;
            e.target.parentNode.remove()


        }

        function discard(e) {
            discardedGifts.innerHTML += `<li>${sendButton.previousSibling.textContent}</li>`;
            e.target.parentNode.remove()

        }

    }
}