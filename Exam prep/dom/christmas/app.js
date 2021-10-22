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













//different solution
//  function solution() { 

//     const gift = document.querySelector('input');
//     const [gifts, sended, discarded] = document.querySelectorAll('section ul');

//     document.querySelector('.container').addEventListener('click', (ev) => {
//         ev.preventDefault();

//         if (ev.target.textContent === 'Add gift') {
            
//             const newGift = document.createElement('li');
//             newGift.textContent = gift.value;
//             gift.value = '';

//             const sendBtn = document.createElement('button');
//             const discardBtn = document.createElement('button');
//             newGift.classList.add('gift');
//             sendBtn.setAttribute('id', 'sendButton');
//             discardBtn.setAttribute('id', 'discardButton');
//             sendBtn.textContent = 'Send';
//             discardBtn.textContent = 'Discard';

//             newGift.appendChild(sendBtn);
//             newGift.appendChild(discardBtn);
//             gifts.appendChild(newGift);

//             Array.from(gifts.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(e => gifts.appendChild(e));
//         }

//         else if (ev.target.textContent === 'Send') {

//             let nameGift = document.createElement('li');
//             nameGift.textContent = ev.target.parentNode.childNodes[0].textContent;
//             nameGift.classList.add('gift');
//             sended.appendChild(nameGift);
//             ev.target.parentNode.remove();
//         }
//         else if (ev.target.textContent === 'Discard') {

//             let nameGift = document.createElement('li');
//             nameGift.textContent = ev.target.parentNode.childNodes[0].textContent;
//             nameGift.classList.add('gift');
//             discarded.appendChild(nameGift);
//             ev.target.parentNode.remove();
//         }
//     })
// } 
