window.addEventListener('load', solve);
function solve() {
    const genre = document.querySelector("#genre");
    const name = document.querySelector("#name");
    const author = document.querySelector("#author");
    const date = document.querySelector("#date");
    const addButton = document.querySelector("#add-btn");
    addButton.addEventListener("click", addInfo);
    let likesCounter = 0;
    const savedSongsDiv = document.querySelector("#saved-hits > div")
    let theDiv = document.createElement('div');
    let divToCreate = document.createElement('div');
    function addInfo(e) {
        e.preventDefault();
        if (genre.value == "" || name.value == '' || author.value == '' || date.value == '') {
            return;
        }
        const songsContainer = document.querySelector(".all-hits-container");
        let saveButton = document.createElement('button');
        saveButton.className = 'save-btn';
        saveButton.textContent = 'Save song';
        let likeButton = document.createElement('button');
        likeButton.className = 'like-btn';
        likeButton.textContent = 'Like song';
        let deleteButton = document.createElement('button');
        deleteButton.className = "delete-btn";
        deleteButton.textContent = 'Delete'
        divToCreate.className = 'hits-info';
        divToCreate.innerHTML = `<img src="./static/img/img.png"><h2>Genre: ${genre.value}</h2>
<h2>Name: ${name.value}</h2><h2>Author: ${author.value}</h2><h2>Date: ${date.value}</h2>`;
        divToCreate.appendChild(saveButton)
        divToCreate.appendChild(likeButton)
        divToCreate.appendChild(deleteButton)
        songsContainer.appendChild(divToCreate);
        genre.value = '';
        name.value = "";
        author.value = '';
        date.value = "";
        saveButton.addEventListener("click", saveSong);
        likeButton.addEventListener("click", likeSong);
        deleteButton.addEventListener("click", deleteSong);
        function saveSong() {
            const genrB = document.querySelector("#all-hits > div > div > h2:nth-child(2)")
            const nameB = document.querySelector("#all-hits > div > div > h2:nth-child(3)")
            const autorB = document.querySelector("#all-hits > div > div > h2:nth-child(4)")
            const dateB = document.querySelector("#all-hits > div > div > h2:nth-child(5)")
            theDiv.className = 'hits-info'
            savedSongsDiv.appendChild(theDiv);
            theDiv.innerHTML = `<img src="./static/img/img.png"><h2>${genrB.textContent}</h2><h2>${nameB.textContent}</h2><h2>${autorB.textContent}</h2><h2>${dateB.textContent}</h2>`;
            savedSongsDiv.appendChild(deleteButton)
            deleteButton.className = "delete-btn"
            divToCreate.remove();
        }
        function likeSong() {
            const likesPar = document.querySelector("#total-likes > div > p")
            likesCounter++;
            likesPar.textContent = `Total Likes: ${likesCounter}`
            likeButton.disabled = "true";
        }
        function deleteSong() {
            deleteButton.remove();
            theDiv.remove();
            divToCreate.remove();
        }
    }
}