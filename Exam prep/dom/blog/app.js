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








//Delegation
// /*function solve(){
 
//    let createBTN = document.getElementsByClassName("btn create")[0];
 
//    let postsArea = document.querySelector(".site-content main section");
//    let archiveArea = document.querySelector(".archive-section ol");
 
//    let author = document.getElementById("creator");
//    let title = document.getElementById("title");
//    let category = document.getElementById("category");
//    let content = document.getElementById("content");
 
 
//    createBTN.addEventListener("click", (ev) => {
//       ev.preventDefault();
//       content.value = content.textContent;
//       if(author.value != "" && title.value != "" && category.value != "" && content.value != "") {
//          let newArticle = document.createElement("article");
//          let newH1 = document.createElement("h1");
//          let newP = document.createElement("p");
//          let newStrong = document.createElement("strong");
//          let newP2 = document.createElement("p");
//          let newStrong2 = document.createElement("strong");
//          let newP3 = document.createElement("p");
//          let newDiv = document.createElement("div");
//          let newButton = document.createElement("button");
//          let newButton1 = document.createElement("button");
 
//          newH1.textContent = title.value;
//          newP.textContent = "Category:";
//          newStrong.textContent = category.value;
//          newP2.textContent = "Creator:";
//          newStrong2.textContent = author.value;
//          newP3.textContent = content.value;
//          newDiv.setAttribute("class", "buttons");
//          newButton.textContent = "Delete";
//          newButton.setAttribute("class", "btn delete");
//          newButton1.textContent = "Archive";
//          newButton1.setAttribute("class", "btn archive");
 
//          newP.appendChild(newStrong);
//          newP2.appendChild(newStrong2);
//          newDiv.appendChild(newButton);
//          newDiv.appendChild(newButton1);
//          newArticle.appendChild(newH1);
//          newArticle.appendChild(newP);
//          newArticle.appendChild(newP2);
//          newArticle.appendChild(newP3);
//          newArticle.appendChild(newDiv);
 
//          postsArea.appendChild(newArticle);
 
//          author.value = "";
//          title.value = "";
//          category.value = "";
//          content.value = "";
//       };
//    });
//    postsArea.addEventListener("click", (ev) => {
//       if(ev.target.textContent == "Archive") {
//          let currArticle = ev.target.parentNode.parentNode;
//          let title = currArticle.querySelector("h1");
//          let newLiArchive = document.createElement("li");
//          newLiArchive.textContent = title.textContent;
//          currArticle.remove();
//          archiveArea.appendChild(newLiArchive);
//          let allArchives = Array.from(archiveArea.querySelectorAll("li"));
//          if(allArchives.length >= 2) {
//             let sorted = allArchives.sort((a, b) => a.textContent.localeCompare(b.textContent));
//             allArchives.forEach(x => x.remove());
//             sorted.forEach(x => archiveArea.appendChild(x));
//          }
         
//       }
//       if(ev.target.textContent == "Delete") {
//          let currArticle = ev.target.parentNode.parentNode;
//          currArticle.remove();
//       }
//    });
 
//   }
// /*
