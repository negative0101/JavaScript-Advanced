function create(arr) {
   let content = document.getElementById('content')
   for (let i = 0; i < arr.length; i++) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = arr[i];
      para.style.display = 'none'

      div.appendChild(para)

      div.addEventListener('click', function () {
         para.style.display = ''

      })
      content.appendChild(div)
   }


}