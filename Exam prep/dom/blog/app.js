function solve() {
   //selecting elements 
   let postField = document.querySelectorAll('h2')[0].parentElement
   let archiveField = document.querySelector('ol')

   let authorField = document.getElementById('creator');
   let titleField = document.getElementById('title');
   let categoryField = document.getElementById('category');
   let contentField = document.getElementById('content');

   // create button
   let addButton = document.querySelector('.create')
   addButton.addEventListener('click', createBtn)

   let allTitles = []
   let alreadyAdded = []

   let deleteBtn;
   let archiveBtn;
   let currentTitle;

   function createBtn(e) {
      e.preventDefault();

      currentTitle = titleField.value
      let articleElement = document.createElement('ARTICLE');

      articleElement.innerHTML += `<h1>${titleField.value}</h1>
      <p>Category:
         <strong>${categoryField.value}</strong>
         </p>
      <p>Creator:
         <strong>${authorField.value}</strong>
      </p>
      <p>${contentField.value}</p>
      <div class= "buttons">
         <button class = "btn delete">Delete</button>
         <button class= "btn archive">Archive</button>
         </div>`
      postField.appendChild(articleElement)

      deleteBtn = document.querySelector('.delete')
      archiveBtn = document.querySelector('.archive')
      archiveBtn.addEventListener('click', archiveNow)
      deleteBtn.addEventListener('click', deleteNow)

      authorField.value = ''
      titleField.value = ''
      categoryField.value = ''
      contentField.value = ''
      // TODO : fix event listeners on more than 1  articles. 



   }
   function archiveNow(e) {
      let elementToArchive = e.target.parentElement.parentElement
      elementToArchive.style.display = 'none'
      allTitles.push(currentTitle)
      allTitles.sort((a, b) => a.localeCompare(b))
      for (let i = 0; i < allTitles.length; i++) {
         if (!alreadyAdded.includes(allTitles[i])) {
            alreadyAdded.push(currentTitle)
            archiveField.innerHTML += `<li>${allTitles[i]}</li>`
         }
      }


   }

   function deleteNow(e) {
      const elementToDelete = e.target.parentElement.parentElement
      console.log(elementToDelete)
      elementToDelete.remove()

   }




}
